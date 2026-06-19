// ==========================================
// engine.js - המנוע הראשי המלא של הדשבורד (גרסת Dark Mode & Matchup)
// ==========================================

// --- 1. הפעלת המנוע בעת טעינת העמוד ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof matchDatabase !== 'undefined') {
        renderMatches(); // ציור כל כרטיסיות המשחקים
        renderStats();   // עדכון הסטטיסטיקות בשורה העליונה
        switchView('matches'); // הצגת מסך הבית
        
        // יצירת אלמנט המודאל ב-DOM אם הוא לא קיים
        if (!document.getElementById('dynamic-modal')) {
            createModalElement();
        }
    } else {
        console.error("🚨 שגיאה: מסד הנתונים (matchDatabase) לא נמצא! ודא שקובץ הנתונים נטען ב-HTML לפני המנוע.");
    }
});

// --- 2. תפריט מובייל ---
window.toggleMobileMenu = function() {
    const sidebar = document.getElementById('main-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if(!sidebar || !overlay) return;
    
    sidebar.classList.toggle('open');
    if (overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        setTimeout(() => overlay.style.display = 'none', 300); 
    } else {
        overlay.style.display = 'block';
        setTimeout(() => overlay.classList.add('active'), 10);
    }
}

function closeMobileMenuIfOpen() {
    const sidebar = document.getElementById('main-sidebar');
    if (sidebar && window.innerWidth <= 900 && sidebar.classList.contains('open')) {
        window.toggleMobileMenu();
    }
}

// --- 3. ניווט בין מסכים (SPA) ---
window.switchView = function(viewName) {
    closeMobileMenuIfOpen();
    
    const views = ['matches-view', 'standings-view', 'scorers-view'];
    views.forEach(v => {
        const el = document.getElementById(v);
        if(el) el.style.display = 'none';
    });
    
    document.querySelectorAll('.sidebar .nav-link').forEach(link => link.classList.remove('active'));
    const activeLink = document.getElementById('nav-' + viewName);
    if(activeLink) activeLink.classList.add('active');

    const titleEl = document.getElementById('main-title');
    
    if (viewName === 'matches') {
        const v = document.getElementById('matches-view');
        if(v) v.style.display = 'block';
        if(titleEl) titleEl.innerText = "שלב הבתים - מודל הסתברותי";
    } else if (viewName === 'standings') {
        const v = document.getElementById('standings-view');
        if(v) v.style.display = 'flex';
        if(titleEl) titleEl.innerText = "טבלאות הבתים - עדכני";
        calculateAndRenderStandings();
    } else if (viewName === 'scorers') {
        const v = document.getElementById('scorers-view');
        if(v) v.style.display = 'flex';
        if(titleEl) titleEl.innerText = "מלך השערים - נעל הזהב";
        calculateAndRenderTopScorers();
    }
}

// --- 4. סטטיסטיקות עליונות ---
function renderStats() {
    if (typeof matchDatabase === 'undefined') return;
    let totalPast = 0, exactHits = 0, trendHits = 0;
    
    for (const key in matchDatabase) {
        if (matchDatabase[key].timeStatus === 'past') {
            totalPast++;
            if (matchDatabase[key].score.accuracyClass === 'exact') exactHits++;
            if (matchDatabase[key].score.accuracyClass === 'trend') trendHits++;
        }
    }
    
    const exactPercent = totalPast === 0 ? 0 : Math.round((exactHits / totalPast) * 100);
    const trendPercent = totalPast === 0 ? 0 : Math.round((trendHits / totalPast) * 100);
    const totalAccuracy = totalPast === 0 ? 0 : Math.round(((exactHits + trendHits) / totalPast) * 100);

    const statTotalEl = document.getElementById('stat-total');
    const statExactEl = document.getElementById('stat-exact');
    const statTrendEl = document.getElementById('stat-trend');
    const statOverallEl = document.getElementById('stat-overall');

    if(statTotalEl) statTotalEl.innerText = totalPast;
    if(statExactEl) statExactEl.innerText = exactPercent + "%";
    if(statTrendEl) statTrendEl.innerText = trendPercent + "%";
    if(statOverallEl) statOverallEl.innerText = totalAccuracy + "%";
}

// --- 5. מנוע כרטיסיות המשחקים ---
function renderMatches() {
    const container = document.getElementById('matches-container');
    if (!container || typeof matchDatabase === 'undefined') return;
    
    let htmlChunks = [];
    let chartsToInit = []; // שמירת נתונים לציור הגרפים אחרי יצירת ה-HTML

    for (const [matchId, data] of Object.entries(matchDatabase)) {
        // הגנות במקרה של נתונים חסרים
        const prob = data.probabilities || { home: 33, draw: 34, away: 33 };
        const tHome = data.teamHome || { name: 'לא ידוע', flagCode: 'un', color: '#888', cards: {} };
        const tAway = data.teamAway || { name: 'לא ידוע', flagCode: 'un', color: '#888', cards: {} };
        const risk = data.matchRisk || 'Safe';
        const radarH = data.radarStats?.home || [50, 50, 50, 50, 50, 50];
        const radarA = data.radarStats?.away || [50, 50, 50, 50, 50, 50];
        const insight = data.insight || { prediction: "אין מידע", actual: "" };
        const scoreData = data.score || { prediction: "? - ?", actual: "", accuracyClass: "pending" };
        
        // כרטיסים
        const homeCardsHTML = (tHome.cards?.yellow || []).map(() => `<div class="card-icon yellow-card" onclick="openCardModal('${matchId}', 'home', 'yellow')"></div>`).join('') + 
                              (tHome.cards?.red || []).map(() => `<div class="card-icon red-card" onclick="openCardModal('${matchId}', 'home', 'red')"></div>`).join('');
        const awayCardsHTML = (tAway.cards?.yellow || []).map(() => `<div class="card-icon yellow-card" onclick="openCardModal('${matchId}', 'away', 'yellow')"></div>`).join('') + 
                              (tAway.cards?.red || []).map(() => `<div class="card-icon red-card" onclick="openCardModal('${matchId}', 'away', 'red')"></div>`).join('');

        const isPast = data.timeStatus === 'past';
        const currentScoreDisplay = isPast ? scoreData.actual : scoreData.prediction;
        const currentScoreLabel = isPast ? 'תוצאת סיום' : 'תחזית מוקדמת';
        
        // סטאטוס משחק מויזואלי
        let statusBarHTML = '';
        if (!isPast) statusBarHTML = `<div class="status-bar status-pending-ui">⏳ ממתין לשריקה</div>`;
        else if (scoreData.accuracyClass === 'exact') statusBarHTML = `<div class="status-bar status-exact-ui">✔️ פגיעה מדויקת</div>`;
        else if (scoreData.accuracyClass === 'trend') statusBarHTML = `<div class="status-bar status-trend-ui">⚠️ פגיעה בכיוון</div>`;
        else statusBarHTML = `<div class="status-bar status-wrong-ui">❌ פספוס מוחלט</div>`;

        // תגי סיכון
        let riskHTML = '';
        if (risk === 'Safe') riskHTML = '<span class="risk-badge risk-safe">🛡️ סבירות גבוהה</span>';
        else if (risk === 'Draw Booster') riskHTML = '<span class="risk-badge risk-draw">⚠️ התראת בונקר/תיקו</span>';
        else if (risk === 'Upset Alert') riskHTML = '<span class="risk-badge risk-upset">🚨 פוטנציאל להפתעה!</span>';

        // חישובי מאצ'-אפ על בסיס נתונים (אחוזים)
        const possHome = Math.round((prob.home / ((prob.home + prob.away) || 1)) * 100) || 50;
        const possAway = 100 - possHome;
        
        const totalDirect = (radarH[3] + radarA[3]) || 1;
        const directHomePct = Math.round((radarH[3] / totalDirect) * 100) || 50;
        const directAwayPct = 100 - directHomePct;

        // בניית הטאבים
        let tabsHTML = '';
        let contentHTML = '';

        if (isPast) {
            tabsHTML = `
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'pred', '${scoreData.prediction}', 'תחזית מוקדמת')">תחזית</button>
                <button class="inner-tab-btn active" onclick="switchCardTab(this, '${matchId}', 'sum', '${scoreData.actual}', 'תוצאת סיום')">סיכום</button>
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'adv', '${scoreData.actual}', 'תוצאת סיום')">עומק</button>
            `;
            contentHTML = `
                <div id="${matchId}-pred" class="tab-content"><div class="insight-header"><div class="insight-title">🔑 אקס-פקטור מקדימה</div>${riskHTML}</div><div class="insight-text">${insight.prediction}</div></div>
                <div id="${matchId}-sum" class="tab-content active"><div class="insight-title">🎯 פוסט-משחק</div><div class="insight-text">${insight.actual}</div>${statusBarHTML}</div>
            `;
        } else {
            tabsHTML = `
                <button class="inner-tab-btn active" onclick="switchCardTab(this, '${matchId}', 'pred', '${scoreData.prediction}', 'תחזית מוקדמת')">תחזית</button>
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'adv', '${scoreData.prediction}', 'תחזית מוקדמת')">עומק</button>
            `;
            contentHTML = `
                <div id="${matchId}-pred" class="tab-content active"><div class="insight-header"><div class="insight-title">🔑 אקס-פקטור מקדימה</div>${riskHTML}</div><div class="insight-text">${insight.prediction}</div>${statusBarHTML}</div>
            `;
        }

        // טאב העומק (Matchup + Radar)
        contentHTML += `
            <div id="${matchId}-adv" class="tab-content">
                <div class="insight-title" style="text-align:center;">📊 מד הלחץ (Head-to-Head)</div>
                
                <div class="matchup-stat">
                    <div class="matchup-labels">
                        <span style="color:var(--accent-cyan)">${tHome.name} (${possHome}%)</span>
                        <span style="color:#ff4d4d">(${possAway}%) ${tAway.name}</span>
                    </div>
                    <div class="matchup-bar">
                        <div class="matchup-fill-home" style="width: ${possHome}%;"></div>
                        <div class="matchup-fill-away" style="width: ${possAway}%;"></div>
                    </div>
                    <div style="text-align:center; font-size:0.7rem; color:var(--text-muted); margin-top:2px;">החזקת כדור משוערת</div>
                </div>

                <div class="matchup-stat">
                    <div class="matchup-labels">
                        <span style="color:var(--accent-cyan)">${directHomePct}%</span>
                        <span style="color:#ff4d4d">${directAwayPct}%</span>
                    </div>
                    <div class="matchup-bar">
                        <div class="matchup-fill-home" style="width: ${directHomePct}%;"></div>
                        <div class="matchup-fill-away" style="width: ${directAwayPct}%;"></div>
                    </div>
                    <div style="text-align:center; font-size:0.7rem; color:var(--text-muted); margin-top:2px;">מדד ישירות (מתפרצות לעומת הנעה)</div>
                </div>

                <div class="insight-title" style="text-align:center; margin-top: 15px;">🧬 רדאר DNA סגנוני</div>
                <div class="chart-container">
                    <canvas id="chart-${matchId}"></canvas>
                </div>
            </div>
        `;

        // הרכבת הכרטיס כולו
        const chunk = `
        <div class="match-card match-item" data-time="${data.timeStatus}" data-stage="${data.stage}" data-md="${data.matchday || 1}" style="animation-delay: 0.1s">
            <div class="match-header">${data.dateText || ''}</div>
            <div class="match-hero">
                <div class="team"><img src="https://flagcdn.com/w80/${tHome.flagCode}.png" class="team-flag" onclick="openSquadModal('${matchId}', 'home')"><div class="team-name">${tHome.name}</div><div class="cards-container">${homeCardsHTML}</div></div>
                <div class="score-center"><div class="score-label" id="${matchId}-label">${currentScoreLabel}</div><div class="score-number ${isPast ? 'is-actual ' + scoreData.accuracyClass : ''}" id="${matchId}-score" onclick="openGoalsModal('${matchId}')">${currentScoreDisplay}</div></div>
                <div class="team"><img src="https://flagcdn.com/w80/${tAway.flagCode}.png" class="team-flag" onclick="openSquadModal('${matchId}', 'away')"><div class="team-name">${tAway.name}</div><div class="cards-container">${awayCardsHTML}</div></div>
            </div>
            
            <div class="inner-tabs">${tabsHTML}</div>
            ${contentHTML}
        </div>`;
        
        htmlChunks.push(chunk);
        
        // שמירת נתונים לציור הגרף מאוחר יותר
        chartsToInit.push({ id: matchId, home: tHome, away: tAway, radarH, radarA });
    }

    container.innerHTML = htmlChunks.join('');
    
    // אנימציית כניסה לכרטיסים
    setTimeout(() => {
        document.querySelectorAll('.match-card').forEach((card, index) => {
            setTimeout(() => card.classList.add('animate-in'), index * 50);
        });
    }, 10);

    // --- ציור גרפי הרדאר לאחר הזרקת ה-HTML ---
    if(typeof Chart !== 'undefined') {
        Chart.defaults.color = '#9aa7b5'; 
        Chart.defaults.font.family = "'Heebo', sans-serif";
