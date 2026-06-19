// engine.js - המנוע המקורי מ-18 ביוני

document.addEventListener('DOMContentLoaded', () => {
    if (typeof matchDatabase !== 'undefined') {
        renderMatches();
        renderStats();
        switchView('matches');
        
        if (!document.getElementById('dynamic-modal')) {
            document.body.insertAdjacentHTML('beforeend', `
            <div id="dynamic-modal" class="modal-overlay" onclick="closeModal(event)">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <button class="modal-close" onclick="forceCloseModal()">×</button>
                    <div id="modal-title" class="modal-title"></div>
                    <div id="modal-body" class="modal-body"></div>
                </div>
            </div>`);
        }
    } else {
        alert("שגיאה: קובץ נתונים לא נטען. ודא שתיקיית data קיימת ומחוברת.");
    }
});

window.toggleMobileMenu = function() {
    document.getElementById('main-sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').style.display = 
        document.getElementById('main-sidebar').classList.contains('open') ? 'block' : 'none';
}

window.switchView = function(viewName) {
    document.querySelectorAll('#matches-view, #standings-view, #scorers-view').forEach(v => v.style.display = 'none');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.getElementById(viewName + '-view').style.display = 'block';
    document.getElementById('nav-' + viewName).classList.add('active');
}

function renderStats() {
    let past = 0, exact = 0, trend = 0;
    for (let key in matchDatabase) {
        if (matchDatabase[key].timeStatus === 'past') {
            past++;
            if (matchDatabase[key].score.accuracyClass === 'exact') exact++;
            if (matchDatabase[key].score.accuracyClass === 'trend') trend++;
        }
    }
    document.getElementById('stat-total').innerText = past;
    document.getElementById('stat-exact').innerText = past ? Math.round((exact/past)*100) + '%' : '0%';
    document.getElementById('stat-trend').innerText = past ? Math.round((trend/past)*100) + '%' : '0%';
    document.getElementById('stat-overall').innerText = past ? Math.round(((exact+trend)/past)*100) + '%' : '0%';
}

function renderMatches() {
    const container = document.getElementById('matches-container');
    let html = '';

    for (const [id, data] of Object.entries(matchDatabase)) {
        const isPast = data.timeStatus === 'past';
        const scoreActual = isPast ? data.score.actual : data.score.prediction;
        const scoreClass = isPast ? data.score.accuracyClass : '';
        
        const advH = data.advancedStats?.home || { xG: '-', restDays: '-', altitudeImpact: '-' };
        const advA = data.advancedStats?.away || { xG: '-', restDays: '-', altitudeImpact: '-' };

        html += `
        <div class="match-card match-item" data-stage="${data.stage}" data-time="${data.timeStatus}" data-md="md${data.matchday}">
            <div class="match-header">${data.dateText}</div>
            <div class="match-hero">
                <div class="team">
                    <img src="https://flagcdn.com/w80/${data.teamHome.flagCode}.png" class="team-flag" onclick="openSquadModal('${id}', 'home')">
                    <div class="team-name">${data.teamHome.name}</div>
                </div>
                <div class="score-center">
                    <div class="score-label" id="lbl-${id}">${isPast ? 'סיום' : 'תחזית'}</div>
                    <div class="score-number ${scoreClass}" onclick="openGoalsModal('${id}')">${scoreActual}</div>
                </div>
                <div class="team">
                    <img src="https://flagcdn.com/w80/${data.teamAway.flagCode}.png" class="team-flag" onclick="openSquadModal('${id}', 'away')">
                    <div class="team-name">${data.teamAway.name}</div>
                </div>
            </div>
            
            <div class="inner-tabs">
                <button class="inner-tab-btn active" onclick="switchCardTab(this, '${id}', 'pred')">תחזית</button>
                ${isPast ? `<button class="inner-tab-btn" onclick="switchCardTab(this, '${id}', 'sum')">סיכום</button>` : ''}
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${id}', 'adv')">עומק</button>
            </div>

            <div id="${id}-pred" class="tab-content active">
                <div class="insight-title">🔑 אקס-פקטור</div>
                <div class="insight-text">${data.insight.prediction}</div>
            </div>
            
            ${isPast ? `
            <div id="${id}-sum" class="tab-content">
                <div class="insight-title">🎯 פוסט-משחק</div>
                <div class="insight-text">${data.insight.actual}</div>
            </div>` : ''}

            <div id="${id}-adv" class="tab-content">
                <div class="insight-title">📊 נתונים מתקדמים</div>
                <div class="adv-stats-row">
                    <div style="text-align: right;">
                        <div>xG צפוי: <strong>${advH.xG}</strong></div>
                        <div>מנוחה: <strong>${advH.restDays}</strong> ימים</div>
                    </div>
                    <div style="text-align: left;">
                        <div>xG צפוי: <strong>${advA.xG}</strong></div>
                        <div>מנוחה: <strong>${advA.restDays}</strong> ימים</div>
                    </div>
                </div>
            </div>
        </div>`;
    }
    
    container.innerHTML = html;
}

window.switchCardTab = function(btn, matchId, tabId) {
    const card = btn.closest('.match-card');
    card.querySelectorAll('.inner-tab-btn').forEach(b => b.classList.remove('active'));
    card.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    card.querySelector(`#${matchId}-${tabId}`).classList.add('active');
}

window.applyFilter = function(filter) {
    const btn = event.target;
    btn.closest('.filter-group, .sidebar-submenu').querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.match-item').forEach(card => {
        const stage = card.getAttribute('data-stage');
        const time = card.getAttribute('data-time');
        const md = card.getAttribute('data-md');
        
        let show = false;
        if (filter === 'all') show = true;
        else if (filter === time || filter === md || filter === stage) show = true;
        
        card.style.display = show ? 'flex' : 'none';
    });
}

window.openModal = function(title, html) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('dynamic-modal').style.display = 'flex';
}
window.closeModal = function(e) { if(e.target.id === 'dynamic-modal') forceCloseModal(); }
window.forceCloseModal = function() { document.getElementById('dynamic-modal').style.display = 'none'; }

window.openSquadModal = function(matchId, side) {
    const data = matchDatabase[matchId];
    const team = side === 'home' ? data.teamHome : data.teamAway;
    const squads = data.squads ? data.squads[side] : null;
    let html = '';
    if (squads && squads.predicted) {
        html += `<div class="squad-grid"><div class="squad-col"><h4>תחזית הרכב</h4><ul class="squad-list">`;
        squads.predicted.forEach(p => html += `<li>👕 ${p}</li>`);
        html += `</ul></div>`;
        if (data.timeStatus === 'past' && squads.actual && squads.actual.length > 0) {
            html += `<div class="squad-col"><h4>הרכב בפועל</h4><ul class="squad-list">`;
            squads.actual.forEach(p => html += `<li>👕 ${p}</li>`);
            html += `</ul></div>`;
        }
        html += `</div>`;
    } else {
        html += `<p style="text-align:center;">אין נתוני סגל.</p>`;
    }
    openModal(`סגל: ${team.name}`, html);
}

window.openGoalsModal = function(matchId) {
    const data = matchDatabase[matchId];
    if(!data.goals || data.goals.length === 0) return;
    let html = '<ul class="squad-list">';
    data.goals.forEach(g => html += `<li>⚽ ${g.player} <span style="color:var(--accent-cyan)">${g.minute}</span></li>`);
    html += '</ul>';
    openModal(`אירועי שערים`, html);
}// ==========================================
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
        
        const radarOptions = { 
            responsive: true, 
            maintainAspectRatio: false, 
            scales: { 
                r: { 
                    angleLines: { color: 'rgba(255,255,255,0.1)' }, 
                    grid: { color: 'rgba(255,255,255,0.1)' }, 
                    pointLabels: { font: { size: 10, weight: '600' }, color: '#cbd5e1' }, 
                    ticks: { display: false, min: 0, max: 100 } 
                } 
            }, 
            plugins: { legend: { display: false }, tooltip: { rtl: true } } 
        };
        
        const radarLabels = ['חדירה מהאמצע', 'החזקת כדור', 'נייחים', 'הגנת רוחב', 'פיזיות', 'משחק אגפים'];

        chartsToInit.forEach(chartData => {
            const canvasElement = document.getElementById(`chart-${chartData.id}`);
            if (canvasElement) {
                new Chart(canvasElement.getContext('2d'), { 
                    type: 'radar', 
                    data: { 
                        labels: radarLabels, 
                        datasets: [ 
                            { data: chartData.radarH, borderColor: chartData.home.color, backgroundColor: `${chartData.home.color}4D`, borderWidth: 2, pointBackgroundColor: chartData.home.color, pointRadius: 2 }, 
                            { data: chartData.radarA, borderColor: chartData.away.color, backgroundColor: `${chartData.away.color}4D`, borderWidth: 2, pointBackgroundColor: chartData.away.color, pointRadius: 2 } 
                        ]
                    }, 
                    options: radarOptions 
                });
            }
        });
    }
}

// --- 6. ניווט טאבים פנימי בתוך הכרטיסייה ---
window.switchCardTab = function(btn, matchId, tabType, scoreText, labelText) { 
    const card = btn.closest('.match-card');
    const tabs = card.querySelectorAll('.tab-content');
    const btns = card.querySelectorAll('.inner-tab-btn'); 
    
    btns.forEach(b => b.classList.remove('active')); 
    tabs.forEach(t => t.classList.remove('active'));
    
    btn.classList.add('active');
    const activeTab = card.querySelector(`#${matchId}-${tabType}`);
    if(activeTab) activeTab.classList.add('active');
    
    const labelEl = card.querySelector(`#${matchId}-label`);
    const scoreEl = card.querySelector(`#${matchId}-score`); 
    if(labelEl) labelEl.innerText = labelText; 
}

// --- 7. מערכת פילטרים ---
window.applyFilter = function(stageCode) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const allMatches = document.querySelectorAll('.match-item');
    allMatches.forEach(card => {
        card.classList.remove('animate-in'); // איפוס אנימציה
        card.style.display = 'none';
        
        const matchStage = card.getAttribute('data-stage');
        const matchStatus = card.getAttribute('data-time');
        
        let shouldShow = false;
        if (stageCode === 'all') shouldShow = true;
        else if (stageCode === 'past' && matchStatus === 'past') shouldShow = true;
        else if (stageCode === 'future' && matchStatus === 'future') shouldShow = true;
        else if (matchStage === stageCode) shouldShow = true;

        if (shouldShow) {
            card.style.display = 'flex';
            setTimeout(() => card.classList.add('animate-in'), 10);
        }
    });
}

// --- 8. טבלאות בתים ---
function calculateAndRenderStandings() {
    const container = document.getElementById('standings-view');
    if (!container || typeof matchDatabase === 'undefined') return;

    let groups = {};
    for (const key in matchDatabase) {
        const match = matchDatabase[key];
        const stage = match.stage;
        if (!['A','B','C','D','E','F','G','H','I','J','K','L'].includes(stage)) continue; // רק שלב בתים
        
        if (!groups[stage]) groups[stage] = {};
        
        const initTeam = (teamObj) => {
            if (!groups[stage][teamObj.name]) {
                groups[stage][teamObj.name] = { name: teamObj.name, flag: teamObj.flagCode, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 };
            }
        };

        if (match.teamHome) initTeam(match.teamHome);
        if (match.teamAway) initTeam(match.teamAway);

        if (match.timeStatus === 'past' && match.score && match.score.actual) {
            const actualObj = match.score.actual.split(' - ');
            if (actualObj.length === 2) {
                const goalsHome = parseInt(actualObj[0].trim());
                const goalsAway = parseInt(actualObj[1].trim());
                
                const hTeam = groups[stage][match.teamHome.name];
                const aTeam = groups[stage][match.teamAway.name];

                hTeam.p++; aTeam.p++;
                hTeam.gf += goalsHome; hTeam.ga += goalsAway;
                aTeam.gf += goalsAway; aTeam.ga += goalsHome;

                if (goalsHome > goalsAway) { hTeam.w++; hTeam.pts += 3; aTeam.l++; }
                else if (goalsHome < goalsAway) { aTeam.w++; aTeam.pts += 3; hTeam.l++; }
                else { hTeam.d++; aTeam.d++; hTeam.pts += 1; aTeam.pts += 1; }
            }
        }
    }

    let html = '';
    const sortedGroups = Object.keys(groups).sort();
    
    for (const group of sortedGroups) {
        const teams = Object.values(groups[group]);
        teams.sort((a, b) => {
            if (b.pts !== a.pts) return b.pts - a.pts; // נקודות
            const gdA = a.gf - a.ga;
            const gdB = b.gf - b.ga;
            if (gdB !== gdA) return gdB - gdA; // הפרש שערים
            return b.gf - a.gf; // שערי זכות
        });

        html += `<div class="group-table-card"><div class="group-table-title">בית ${group}'</div><table class="standings-table">`;
        html += `<thead><tr><th>נבחרת</th><th>מש'</th><th>נצ'</th><th>תיקו</th><th>הפ'</th><th>שערים</th><th>הפרש</th><th>נק'</th></tr></thead><tbody>`;
        
        teams.forEach((t, index) => {
            const gd = t.gf - t.ga;
            const gdStr = gd > 0 ? `+${gd}` : gd;
            const highlight = index < 2 ? 'style="background-color: rgba(102, 252, 241, 0.05);"' : '';
            html += `<tr ${highlight}>
                <td class="team-cell"><img src="https://flagcdn.com/w20/${t.flag}.png"> ${t.name}</td>
                <td>${t.p}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td>
                <td>${t.gf}-${t.ga}</td><td style="direction:ltr;">${gdStr}</td><td style="font-weight:bold; color:var(--accent-cyan);">${t.pts}</td>
            </tr>`;
        });
        html += `</tbody></table></div>`;
    }
    container.innerHTML = html || '<div style="text-align:center; width:100%; padding: 50px;">אין נתונים לשלב הבתים כרגע.</div>';
}

// --- 9. מלך השערים ---
function calculateAndRenderTopScorers() {
    const container = document.getElementById('scorers-view');
    if (!container || typeof matchDatabase === 'undefined') return;

    let players = {};
    for (const key in matchDatabase) {
        const match = matchDatabase[key];
        if (match.timeStatus === 'past' && match.goals && match.goals.length > 0) {
            match.goals.forEach(goal => {
                if (!players[goal.player]) {
                    // מציאת דגל השחקן
                    let flag = 'un';
                    if (match.teamHome.name === goal.team) flag = match.teamHome.flagCode;
                    if (match.teamAway.name === goal.team) flag = match.teamAway.flagCode;
                    
                    players[goal.player] = { name: goal.player, team: goal.team, flag: flag, goals: 0 };
                }
                players[goal.player].goals++;
            });
        }
    }

    const sortedPlayers = Object.values(players).sort((a, b) => b.goals - a.goals).slice(0, 10); // טופ 10

    let html = `<div class="scorers-card"><div class="scorers-title">👟 נעל הזהב - מלך השערים</div>`;
    
    if (sortedPlayers.length === 0) {
        html += `<div style="text-align:center; padding: 20px;">טרם נכבשו שערים בטורניר.</div>`;
    } else {
        sortedPlayers.forEach((p, index) => {
            const rankClass = index === 0 ? 'top-1' : index === 1 ? 'top-2' : index === 2 ? 'top-3' : '';
            html += `
            <div class="scorer-row">
                <div class="scorer-info">
                    <div class="scorer-rank ${rankClass}">${index + 1}</div>
                    <div>
                        <div class="scorer-name">${p.name}</div>
                        <div class="scorer-team"><img src="https://flagcdn.com/w20/${p.flag}.png" style="width:16px; border-radius:2px;"> ${p.team}</div>
                    </div>
                </div>
                <div class="scorer-goals">${p.goals}</div>
            </div>`;
        });
    }
    html += `</div>`;
    container.innerHTML = html;
}

// --- 10. מערכת מודאלים (חלונות קופצים) ---
function createModalElement() {
    const modalHTML = `
    <div id="dynamic-modal" class="modal-overlay" onclick="closeModal(event)">
        <div class="modal-content" onclick="event.stopPropagation()">
            <button class="modal-close" onclick="forceCloseModal()">×</button>
            <div id="modal-title" class="modal-title">כותרת</div>
            <div id="modal-body" class="modal-body">תוכן</div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

window.openModal = function(title, bodyHTML) {
    const modal = document.getElementById('dynamic-modal');
    if(!modal) return;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerHTML = bodyHTML;
    modal.style.display = 'flex';
}

window.closeModal = function(event) {
    if (event.target.id === 'dynamic-modal') {
        document.getElementById('dynamic-modal').style.display = 'none';
    }
}

window.forceCloseModal = function() {
    const modal = document.getElementById('dynamic-modal');
    if(modal) modal.style.display = 'none';
}

window.openGoalsModal = function(matchId) {
    if(typeof matchDatabase === 'undefined' || !matchDatabase[matchId]) return;
    const data = matchDatabase[matchId];
    if(data.timeStatus !== 'past' || !data.goals || data.goals.length === 0) return;
    
    let html = '<ul class="squad-list" style="margin-top:10px;">';
    data.goals.forEach(g => {
        html += `<li class="goal-item"><span>⚽ ${g.player}</span> <span style="color:var(--accent-cyan); font-weight:bold;">${g.minute}</span></li>`;
    });
    html += '</ul>';
    openModal(`אירועי שערים: ${data.teamHome.name} - ${data.teamAway.name}`, html);
}

window.openSquadModal = function(matchId, teamSide) {
    if(typeof matchDatabase === 'undefined' || !matchDatabase[matchId]) return;
    const data = matchDatabase[matchId];
    const teamObj = teamSide === 'home' ? data.teamHome : data.teamAway;
    const squads = data.squads ? (teamSide === 'home' ? data.squads.home : data.squads.away) : null;
    
    let html = `<div style="text-align:center; margin-bottom:15px;"><img src="https://flagcdn.com/w80/${teamObj.flagCode}.png" style="border-radius:4px; box-shadow:0 2px 5px rgba(0,0,0,0.5);"></div>`;
    
    if (squads && squads.predicted && squads.predicted.length > 0) {
        html += `<div class="squad-grid"><div class="squad-col"><h4>תחזית הרכב</h4><ul class="squad-list">`;
        squads.predicted.forEach(p => html += `<li>👕 ${p}</li>`);
        html += `</ul></div>`;
        
        if (data.timeStatus === 'past' && squads.actual && squads.actual.length > 0) {
            html += `<div class="squad-col"><h4>הרכב בפועל</h4><ul class="squad-list">`;
            squads.actual.forEach(p => {
                const isDiff = !squads.predicted.includes(p);
                html += `<li class="${isDiff ? 'diff-player' : ''}">👕 ${p} ${isDiff ? '(חדש)' : ''}</li>`;
            });
            html += `</ul></div>`;
        }
        html += `</div>`;
    } else {
        html += `<p style="text-align:center;">אין נתוני הרכב זמינים למשחק זה.</p>`;
    }
    
    openModal(`סגל שחקנים: ${teamObj.name}`, html);
}

window.openCardModal = function(matchId, teamSide, cardColor) {
    if(typeof matchDatabase === 'undefined' || !matchDatabase[matchId]) return;
    const data = matchDatabase[matchId];
    const teamObj = teamSide === 'home' ? data.teamHome : data.teamAway;
    const cardsList = cardColor === 'yellow' ? teamObj.cards.yellow : teamObj.cards.red;
    
    const iconColor = cardColor === 'yellow' ? '#f1c40f' : '#e74c3c';
    const cardName = cardColor === 'yellow' ? 'כרטיסים צהובים' : 'כרטיסים אדומים';
    
    let html = '<ul class="squad-list" style="margin-top:10px;">';
    if(cardsList && cardsList.length > 0) {
        cardsList.forEach(c => {
            html += `<li class="goal-item"><div class="card-detail"><div style="width:12px; height:16px; background:${iconColor}; border-radius:2px;"></div> ${c}</div></li>`;
        });
    } else {
         html += `<li>אין כרטיסים.</li>`;
    }
    html += '</ul>';
    
    openModal(`${cardName}: ${teamObj.name}`, html);
}
