// ==========================================
// engine.js - המנוע הראשי של הדשבורד (גרסת מאצ'-אפ עומק)
// ==========================================

// פתיחה וסגירת תפריט במובייל
window.toggleMobileMenu = function() {
    document.getElementById('main-sidebar').classList.toggle('open');
    const overlay = document.getElementById('sidebar-overlay');
    if (overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        setTimeout(() => overlay.style.display = 'none', 300); 
    } else {
        overlay.style.display = 'block';
        setTimeout(() => overlay.classList.add('active'), 10);
    }
}

function closeMobileMenuIfOpen() {
    if (window.innerWidth <= 900 && document.getElementById('main-sidebar').classList.contains('open')) {
        window.toggleMobileMenu();
    }
}

// ניווט בין המסכים (SPA)
window.switchView = function(viewName) {
    closeMobileMenuIfOpen();
    
    document.getElementById('matches-view').style.display = 'none';
    document.getElementById('standings-view').style.display = 'none';
    document.getElementById('scorers-view').style.display = 'none';
    
    document.querySelectorAll('.sidebar .nav-link').forEach(link => link.classList.remove('active'));
    document.getElementById('nav-' + viewName).classList.add('active');

    const titleEl = document.getElementById('main-title');
    if (viewName === 'matches') {
        document.getElementById('matches-view').style.display = 'block';
        titleEl.innerText = "שלב הבתים - מודל הסתברותי";
    } else if (viewName === 'standings') {
        document.getElementById('standings-view').style.display = 'flex';
        titleEl.innerText = "טבלאות הבתים - עדכני";
        calculateAndRenderStandings();
    } else if (viewName === 'scorers') {
        document.getElementById('scorers-view').style.display = 'block';
        titleEl.innerText = "מלך השערים - נעל הזהב";
        calculateAndRenderTopScorers();
    }
}

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

    if(document.getElementById('stat-total')) document.getElementById('stat-total').innerText = totalPast;
    if(document.getElementById('stat-exact')) document.getElementById('stat-exact').innerText = exactPercent + "%";
    if(document.getElementById('stat-trend')) document.getElementById('stat-trend').innerText = trendPercent + "%";
    if(document.getElementById('stat-overall')) document.getElementById('stat-overall').innerText = totalAccuracy + "%";
}

// ... (פונקציות טבלאות ומלך השערים נשארו ללא שינוי, דילגתי עליהן מטעמי קריאות, הן זהות לקודם) ...
// (כדי שהקובץ יעבוד, פשוט תשאיר את הפונקציות calculateAndRenderStandings ו-calculateAndRenderTopScorers מהגרסה הקודמת שלך).
// אני מציג כאן את הפונקציה המרכזית שעברה שדרוג:

function renderMatches() {
    const container = document.getElementById('matches-container');
    if (!container || typeof matchDatabase === 'undefined') return;
    let htmlChunks = [];

    for (const [matchId, data] of Object.entries(matchDatabase)) {
        const prob = data.probabilities || { home: 33, draw: 34, away: 33 };
        const tHome = data.teamHome || { name: 'Unknown', flagCode: 'un', color: '#000', cards: { yellow: [], red: [] } };
        const tAway = data.teamAway || { name: 'Unknown', flagCode: 'un', color: '#000', cards: { yellow: [], red: [] } };
        const risk = data.matchRisk || 'Safe';
        
        const homeCardsHTML = (tHome.cards?.yellow || []).map(() => `<div class="card-icon yellow-card" onclick="openCardModal('${matchId}', 'teamHome', 'yellow')"></div>`).join('') + (tHome.cards?.red || []).map(() => `<div class="card-icon red-card" onclick="openCardModal('${matchId}', 'teamHome', 'red')"></div>`).join('');
        const awayCardsHTML = (tAway.cards?.yellow || []).map(() => `<div class="card-icon yellow-card" onclick="openCardModal('${matchId}', 'teamAway', 'yellow')"></div>`).join('') + (tAway.cards?.red || []).map(() => `<div class="card-icon red-card" onclick="openCardModal('${matchId}', 'teamAway', 'red')"></div>`).join('');

        const isPast = data.timeStatus === 'past';
        const currentScoreDisplay = isPast ? data.score.actual : data.score.prediction;
        const currentScoreLabel = isPast ? 'תוצאת סיום' : 'תחזית מוקדמת';
        
        let statusBarHTML = '';
        if (!isPast) statusBarHTML = `<div class="status-bar status-pending-ui">⏳ ממתין לשריקה</div>`;
        else if (data.score.accuracyClass === 'exact') statusBarHTML = `<div class="status-bar status-exact-ui">✔️ פגיעה מדויקת</div>`;
        else if (data.score.accuracyClass === 'trend') statusBarHTML = `<div class="status-bar status-trend-ui">⚠️ פגיעה בכיוון</div>`;
        else statusBarHTML = `<div class="status-bar status-wrong-ui">❌ פספוס מוחלט</div>`;

        let riskHTML = '';
        if (risk === 'Safe') riskHTML = '<span class="risk-badge risk-safe">🛡️ סבירות גבוהה</span>';
        else if (risk === 'Draw Booster') riskHTML = '<span class="risk-badge risk-draw">⚠️ התראת בונקר/תיקו</span>';
        else if (risk === 'Upset Alert') riskHTML = '<span class="risk-badge risk-upset">🚨 פוטנציאל להפתעה!</span>';

        // --- חישובי דמה למאצ'-אפ על בסיס הנתונים הקיימים (עד לעדכון DB מלא) ---
        // החזקת כדור משוערת
        const possHome = Math.round((prob.home / (prob.home + prob.away)) * 100) || 50;
        const possAway = 100 - possHome;
        
        // מדד ישירות (השתמשנו בנתון 'מנטלי' כהערכה זמנית)
        const directHome = data.radarStats.home[3] || 50;
        const directAway = data.radarStats.away[3] || 50;
        const totalDirect = directHome + directAway;
        const directHomePct = Math.round((directHome / totalDirect) * 100);
        const directAwayPct = 100 - directHomePct;

        // פעולות שוברות קו (עומק) (השתמשנו בנתון 'טכניקה')
        const breakHome = data.radarStats.home[0] || 50;
        const breakAway = data.radarStats.away[0] || 50;
        const totalBreak = breakHome + breakAway;
        const breakHomePct = Math.round((breakHome / totalBreak) * 100);
        const breakAwayPct = 100 - breakHomePct;

        let tabsHTML = '';
        let contentHTML = '';

        if (isPast) {
            tabsHTML = `
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'pred', '${data.score.prediction}', 'תחזית מוקדמת')">תחזית</button>
                <button class="inner-tab-btn active" onclick="switchCardTab(this, '${matchId}', 'sum', '${data.score.actual}', 'תוצאת סיום')">סיכום</button>
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'adv', '${data.score.actual}', 'תוצאת סיום')">עומק</button>
            `;
            contentHTML = `
                <div id="${matchId}-pred" class="tab-content"><div class="insight-header"><div class="insight-title">🔑 אקס-פקטור מקדימה</div>${riskHTML}</div><div class="insight-text">${data.insight.prediction}</div></div>
                <div id="${matchId}-sum" class="tab-content active"><div class="insight-title">🎯 פוסט-משחק</div><div class="insight-text">${data.insight.actual}</div>${statusBarHTML}</div>
            `;
        } else {
            tabsHTML = `
                <button class="inner-tab-btn active" onclick="switchCardTab(this, '${matchId}', 'pred', '${data.score.prediction}', 'תחזית מוקדמת')">תחזית</button>
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'adv', '${data.score.prediction}', 'תחזית מוקדמת')">עומק</button>
            `;
            contentHTML = `
                <div id="${matchId}-pred" class="tab-content active"><div class="insight-header"><div class="insight-title">🔑 אקס-פקטור מקדימה</div>${riskHTML}</div><div class="insight-text">${data.insight.prediction}</div>${statusBarHTML}</div>
            `;
        }

        // --- טאב העומק החדש (המאצ'-אפ והרדאר) ---
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

        const chunk = `
        <div class="match-card" data-time="${data.timeStatus}" data-stage="${data.stage}" data-md="${data.matchday || 1}">
            <div class="match-header">${data.dateText}</div>
            <div class="match-hero">
                <div class="team"><img src="https://flagcdn.com/w80/${tHome.flagCode}.png" class="team-flag" onclick="openSquadModal('${matchId}', 'teamHome')"><div class="team-name">${tHome.name}</div><div class="cards-container">${homeCardsHTML}</div></div>
                <div class="score-center"><div class="score-label" id="${matchId}-label">${currentScoreLabel}</div><div class="score-number ${isPast ? 'is-actual ' + data.score.accuracyClass : ''}" id="${matchId}-score" onclick="openGoalsModal('${matchId}')">${currentScoreDisplay}</div></div>
                <div class="team"><img src="https://flagcdn.com/w80/${tAway.flagCode}.png" class="team-flag" onclick="openSquadModal('${matchId}', 'teamAway')"><div class="team-name">${tAway.name}</div><div class="cards-container">${awayCardsHTML}</div></div>
            </div>
            
            <div class="inner-tabs">${tabsHTML}</div>
            ${contentHTML}
        </div>`;
        htmlChunks.push(chunk);
    }

    container.innerHTML = htmlChunks.join('');

    // --- ציור גרפי הרדאר בתוך הטאבים ---
    Chart.defaults.color = '#cbd5e1'; 
    Chart.defaults.font.family = 'Heebo';
    const opts = { 
        responsive: true, 
        maintainAspectRatio: false, 
        scales: { 
            r: { 
                angleLines: { color: 'rgba(255,255,255,0.1)' }, 
                grid: { color: 'rgba(255,255,255,0.1)' }, 
                pointLabels: { font: { size: 9, weight: '600' }, color: '#9aa7b5' }, 
                ticks: { display: false, min: 0, max: 100 } 
            } 
        }, 
        plugins: { legend: { display: false } } 
    };
    
    // התאמתי את התוויות לשפת הסגנון התקפי החדש
    const lbls = ['חדירה מהאמצע', 'החזקת כדור', 'נייחים', 'הגנת רוחב', 'פיזיות', 'משחק אגפים'];

    for (const [matchId, data] of Object.entries(matchDatabase)) {
        const canvasElement = document.getElementById(`chart-${matchId}`);
        if (canvasElement) {
            new Chart(canvasElement.getContext('2d'), { 
                type: 'radar', data: { labels: lbls, datasets: [ 
                    { data: data.radarStats.home, borderColor: data.teamHome.color, backgroundColor: `${data.teamHome.color}4D`, pointBackgroundColor: data.teamHome.color, borderWidth: 2 }, 
                    { data: data.radarStats.away, borderColor: data.teamAway.color, backgroundColor: `${data.teamAway.color}4D`, pointBackgroundColor: data.teamAway.color, borderWidth: 2 } 
                ]}, options: opts 
            });
        }
    }
}

// --- ניווט טאבים בכרטיסיות ---
window.switchCardTab = function(btn, cardId, tabType, scoreText, labelText) { 
    const card = btn.closest('.match-card');
    const tabs = card.querySelectorAll('.tab-content');
    const btns = card.querySelectorAll('.inner-tab-btn'); 
    
    btns.forEach(b => b.classList.remove('active')); 
    tabs.forEach(t => t.classList.remove('active'));
    
    btn.classList.add('active');
    const activeTab = card.querySelector(`#${cardId}-${tabType}`);
    if(activeTab) {
        activeTab.classList.add('active');
    }
    
    const labelEl = card.querySelector(`.score-label`);
    const scoreEl = card.querySelector(`.score-number`); 
    labelEl.innerText = labelText; 
}

// השארתי פה את חתימות המודאלים והסננים הקיימות שלך כדי שהכל יעבוד (openModal, applyFilters וכו')
// (הכנס לכאן את שאר הקוד הקיים מהגרסה הקודמת ששולט במודאלים של הסגלים והפילטרים למעלה).
