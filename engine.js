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

window.switchView = function(viewName) {
    closeMobileMenuIfOpen();
    
    document.getElementById('matches-view').style.display = 'none';
    
    const mainFilters = document.getElementById('main-filters');
    if(mainFilters) mainFilters.style.display = (viewName === 'matches') ? 'flex' : 'none';

    document.querySelectorAll('.sidebar .nav-link').forEach(link => link.classList.remove('active'));
    document.getElementById('nav-' + viewName).classList.add('active');

    const titleEl = document.getElementById('main-title');
    if (viewName === 'matches') {
        document.getElementById('matches-view').style.display = 'block';
        titleEl.innerText = "שלב הבתים – מודל הסתברותי";
    }
}

function getSafeDatabase() {
    let db = {};
    if (typeof matchDatabase !== 'undefined') Object.assign(db, matchDatabase);
    if (typeof window.matchDatabase !== 'undefined') Object.assign(db, window.matchDatabase);
    return db;
}

function renderStats() {
    const db = getSafeDatabase();
    let totalPast = 0, exactHits = 0, trendHits = 0;
    for (const key in db) {
        if (db[key].timeStatus === 'past') {
            totalPast++;
            if (db[key].score && db[key].score.accuracyClass === 'exact') exactHits++;
            if (db[key].score && db[key].score.accuracyClass === 'trend') trendHits++;
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

function renderMatches() {
    const container = document.getElementById('matches-container');
    if (!container) return;
    const db = getSafeDatabase();
    let htmlChunks = [];

    let filteredMatches = Object.entries(db).filter(([matchId, data]) => {
        const tMatch = (currentTimeFilter === 'all' || currentTimeFilter === data.timeStatus); 
        const sMatch = (currentStageFilter === 'all' || currentStageFilter === data.stage); 
        const mMatch = (currentMdFilter === 'all' || currentMdFilter === String(data.matchday)); 
        return tMatch && sMatch && mMatch;
    });

    for (const [matchId, data] of filteredMatches) {
        const adv = data.advancedStats || { home: { xG: '-', restDays: '-', altitudeImpact: '-' }, away: { xG: '-', restDays: '-', altitudeImpact: '-' } };
        const prob = data.probabilities || { home: 33, draw: 34, away: 33 };
        const tHome = data.teamHome || { name: 'Unknown', flagCode: 'un', color: '#000', cards: { yellow: [], red: [] } };
        const tAway = data.teamAway || { name: 'Unknown', flagCode: 'un', color: '#000', cards: { yellow: [], red: [] } };
        
        let homeCardsHTML = '';
        let awayCardsHTML = '';
        const isPast = data.timeStatus === 'past';

        // הוספת כרטיסים כייצוג ויזואלי (ללא לחיצה) למשחקי עבר בלבד
        if (isPast) {
            let hCards = '';
            if (tHome.cards) {
                if (tHome.cards.yellow) tHome.cards.yellow.forEach(() => { hCards += `<div class="card-icon yellow-card"></div>`; });
                if (tHome.cards.red) tHome.cards.red.forEach(() => { hCards += `<div class="card-icon red-card"></div>`; });
            }
            if (hCards) homeCardsHTML = `<div class="cards-container">${hCards}</div>`;
        
            let aCards = '';
            if (tAway.cards) {
                if (tAway.cards.yellow) tAway.cards.yellow.forEach(() => { aCards += `<div class="card-icon yellow-card"></div>`; });
                if (tAway.cards.red) tAway.cards.red.forEach(() => { aCards += `<div class="card-icon red-card"></div>`; });
            }
            if (aCards) awayCardsHTML = `<div class="cards-container">${aCards}</div>`;
        }

        const risk = data.matchRisk || 'Safe';
        
        const currentScoreDisplay = isPast && data.score && data.score.actual ? data.score.actual : (data.score && data.score.prediction ? data.score.prediction : '-');
        const currentScoreLabel = isPast ? 'תוצאת סיום' : 'תחזית מוקדמת';
        
        let riskHTML = '';
        if (risk === 'Safe') riskHTML = '<span class="risk-badge risk-safe">🛡️ סבירות גבוהה</span>';
        else if (risk === 'Draw Booster') riskHTML = '<span class="risk-badge risk-draw">⚠️ התראת בונקר/תיקו</span>';
        else if (risk === 'Upset Alert') riskHTML = '<span class="risk-badge risk-upset">🚨 פוטנציאל להפתעה!</span>';

        const homeXG = parseFloat(adv.home.xG) || 0;
        const awayXG = parseFloat(adv.away.xG) || 0;
        const homeXGD = (homeXG - awayXG).toFixed(2);
        const awayXGD = (awayXG - homeXG).toFixed(2);
        
        let homeEff = '-', awayEff = '-';
        if (isPast && data.score && data.score.actual.includes('-')) {
            const scores = data.score.actual.split('-');
            homeEff = homeXG > 0 ? (parseInt(scores[0]) / homeXG).toFixed(2) : '0';
            awayEff = awayXG > 0 ? (parseInt(scores[1]) / awayXG).toFixed(2) : '0';
        }

        const homeTilt = prob.home + Math.floor(prob.draw / 2);
        const awayTilt = 100 - homeTilt;
        const accuracyClassForActual = isPast && data.score && data.score.accuracyClass ? 'is-actual ' + data.score.accuracyClass : '';

        let tabsHTML = ''; let visHTML = ''; let txtHTML = ''; let statusBarHTML = '';
        
        if (isPast) {
            tabsHTML = `
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'pred', '${data.score ? data.score.prediction : '-'}', 'תחזית ו-xG מוקדם', '')">תחזית</button>
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'adv', '${data.score ? data.score.actual : '-'}', 'תוצאת סיום', '${data.score ? data.score.accuracyClass : ''}')">עומק</button>
                <button class="inner-tab-btn active" onclick="switchCardTab(this, '${matchId}', 'sum', '${data.score ? data.score.actual : '-'}', 'תוצאת סיום', '${data.score ? data.score.accuracyClass : ''}')">סיכום</button>
            `;
            visHTML = `
                <div id="vis-${matchId}-pred" class="vis-content">
                    <div class="chart-container"><canvas id="chart-${matchId}-pred"></canvas></div>
                </div>
                <div id="vis-${matchId}-adv" class="vis-content">
                    <div class="adv-metrics-grid">
                        <div class="adv-metric-row"><span class="adv-val home">${homeXG}</span><span class="adv-lbl">xG (צפי שערים)</span><span class="adv-val away">${awayXG}</span></div>
                        <div class="adv-metric-row"><span class="adv-val home ${homeXGD > 0 ? 'positive':'negative'}">${homeXGD > 0 ? '+'+homeXGD : homeXGD}</span><span class="adv-lbl">xGD (פער איכות)</span><span class="adv-val away ${awayXGD > 0 ? 'positive':'negative'}">${awayXGD > 0 ? '+'+awayXGD : awayXGD}</span></div>
                        <div class="adv-metric-row"><span class="adv-val home">${homeEff}</span><span class="adv-lbl">יעילות התקפית</span><span class="adv-val away">${awayEff}</span></div>
                    </div>
                    <div class="field-tilt-wrapper">
                        <div class="field-tilt-title">Field Tilt (הטיית מגרש)</div>
                        <div class="field-tilt-numbers"><span style="color:var(--text-main);">${homeTilt}%</span><span style="color:var(--text-main);">${awayTilt}%</span></div>
                        <div class="field-tilt-bar"><div class="tilt-home" style="width:${homeTilt}%; background:${tHome.color}"></div><div class="tilt-away" style="width:${awayTilt}%; background:${tAway.color}"></div></div>
                    </div>
                </div>
                <div id="vis-${matchId}-sum" class="vis-content active">
                    <div class="chart-container"><canvas id="chart-${matchId}-sum"></canvas></div>
                </div>
            `;
            txtHTML = `
                <div id="txt-${matchId}-pred" class="txt-content">
                    <div class="insight-text-wrapper"><div class="insight-header"><div class="insight-title">💡 תחזית המודל</div></div><div class="insight-text">${data.insight ? data.insight.prediction : ''}</div></div>
                </div>
                <div id="txt-${matchId}-adv" class="txt-content">
                    <div class="insight-text-wrapper"><div class="insight-header"><div class="insight-title">🔬 משמעות הנתונים</div></div><div class="insight-text">מדדי העומק מציגים את הפער האמיתי בין הנבחרות לאחר ניטרול רעשים ואקראיות.</div></div>
                </div>
                <div id="txt-${matchId}-sum" class="txt-content active">
                    <div class="insight-text-wrapper"><div class="insight-header"><div class="insight-title">🎯 פוסט-משחק</div></div><div class="insight-text">${data.insight ? data.insight.actual : ''}</div></div>
                </div>
            `;
            if (data.score && data.score.accuracyClass === 'exact') statusBarHTML = `<div class="status-bar status-exact-ui">✔️ פגיעה מדויקת</div>`;
            else if (data.score && data.score.accuracyClass === 'trend') statusBarHTML = `<div class="status-bar status-trend-ui">⚠️ פגיעה בכיוון</div>`;
            else statusBarHTML = `<div class="status-bar status-wrong-ui">❌ פספוס מוחלט</div>`;

            htmlChunks.push(createCardHTML(matchId, data, tHome, tAway, prob, riskHTML, currentScoreLabel, currentScoreDisplay, accuracyClassForActual, '0', visHTML, tabsHTML, txtHTML, statusBarHTML, homeCardsHTML, awayCardsHTML));
        } else {
            tabsHTML = `
                <button class="inner-tab-btn active" onclick="switchCardTab(this, '${matchId}', 'pred', '${data.score ? data.score.prediction : '-'}', 'תחזית ו-xG מוקדם', '')">תחזית</button>
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'adv', '${data.score ? data.score.prediction : '-'}', 'תחזית ו-xG מוקדם', '')">עומק</button>
            `;
            visHTML = `
                <div id="vis-${matchId}-pred" class="vis-content active">
                    <div class="chart-container"><canvas id="chart-${matchId}-pred"></canvas></div>
                </div>
                <div id="vis-${matchId}-adv" class="vis-content">
                    <div class="adv-metrics-grid">
                        <div class="adv-metric-row"><span class="adv-val home">${homeXG}</span><span class="adv-lbl">xG (צפי שערים)</span><span class="adv-val away">${awayXG}</span></div>
                        <div class="adv-metric-row"><span class="adv-val home ${homeXGD > 0 ? 'positive':'negative'}">${homeXGD > 0 ? '+'+homeXGD : homeXGD}</span><span class="adv-lbl">xGD (פער איכות)</span><span class="adv-val away ${awayXGD > 0 ? 'positive':'negative'}">${awayXGD > 0 ? '+'+awayXGD : awayXGD}</span></div>
                    </div>
                    <div class="field-tilt-wrapper">
                        <div class="field-tilt-title">Field Tilt (הטיית מגרש צפויה)</div>
                        <div class="field-tilt-numbers"><span style="color:var(--text-main);">${homeTilt}%</span><span style="color:var(--text-main);">${awayTilt}%</span></div>
                        <div class="field-tilt-bar"><div class="tilt-home" style="width:${homeTilt}%; background:${tHome.color}"></div><div class="tilt-away" style="width:${awayTilt}%; background:${tAway.color}"></div></div>
                    </div>
                </div>
            `;
            txtHTML = `
                <div id="txt-${matchId}-pred" class="txt-content active">
                    <div class="insight-text-wrapper"><div class="insight-header"><div class="insight-title">💡 תחזית המודל</div></div><div class="insight-text">${data.insight ? data.insight.prediction : ''}</div></div>
                </div>
                <div id="txt-${matchId}-adv" class="txt-content">
                    <div class="insight-text-wrapper"><div class="insight-header"><div class="insight-title">🔬 משמעות הנתונים</div></div><div class="insight-text">המודל מבסס את התחזית על פערי ה-xGD והשליטה הצפויה במרכז המגרש (Field Tilt).</div></div>
                </div>
            `;
            statusBarHTML = `<div class="status-bar status-pending-ui">⏳ ממתין לשריקה</div>`;

            htmlChunks.push(createCardHTML(matchId, data, tHome, tAway, prob, riskHTML, currentScoreLabel, currentScoreDisplay, accuracyClassForActual, '1', visHTML, tabsHTML, txtHTML, statusBarHTML, homeCardsHTML, awayCardsHTML));
        }
    }

    container.innerHTML = htmlChunks.join('');

    if (typeof Chart !== 'undefined') {
        Chart.defaults.color = '#cbd5e1'; Chart.defaults.font.family = 'Heebo';
        const opts = { responsive: true, maintainAspectRatio: false, scales: { r: { angleLines: { color: 'rgba(255,255,255,0.15)', lineWidth: 1.5 }, grid: { color: 'rgba(255,255,255,0.15)', lineWidth: 1.5 }, pointLabels: { font: { size: 11, weight: '800' }, color: '#e2e8f0' }, ticks: { display: false, min: 0, max: 100 } } }, plugins: { legend: { display: false } } };
        const lbls = ['טכניקה', 'החזקה', 'נייחים', 'מנטלי', 'פיזיות', 'איכות סגל'];

        setTimeout(() => {
            for (const [matchId, data] of filteredMatches) { 
                ['pred', 'sum'].forEach(suffix => {
                    const canvasElement = document.getElementById(`chart-${matchId}-${suffix}`);
                    if (canvasElement && data.radarStats) {
                        new Chart(canvasElement.getContext('2d'), { 
                            type: 'radar', data: { labels: lbls, datasets: [ 
                                { data: data.radarStats.home || [0,0,0,0,0,0], borderColor: data.teamHome.color, backgroundColor: `${data.teamHome.color}4D`, pointBackgroundColor: data.teamHome.color, borderWidth: 2 }, 
                                { data: data.radarStats.away || [0,0,0,0,0,0], borderColor: data.teamAway.color, backgroundColor: `${data.teamAway.color}4D`, pointBackgroundColor: data.teamAway.color, borderWidth: 2 } 
                            ]}, options: opts 
                        });
                    }
                });
            }
        }, 100);
    }
}

function createCardHTML(matchId, data, tHome, tAway, prob, riskHTML, currentScoreLabel, currentScoreDisplay, accuracyClassForActual, initialRiskOpacity, visHTML, tabsHTML, txtHTML, statusBarHTML, homeCardsHTML='', awayCardsHTML='') {
    return `
    <div class="match-card animate-in ${data.timeStatus === 'past' ? 'show-cards-tab' : ''}" data-time="${data.timeStatus}" data-stage="${data.stage}" data-md="${data.matchday || 1}">
        <div class="match-header">${data.dateText || '-'}</div>
        <div class="match-hero">
            <div class="team"><img src="https://flagcdn.com/w80/${tHome.flagCode}.png" class="team-flag"><div class="team-name">${tHome.name}</div>${homeCardsHTML}</div>
            <div class="score-center"><div class="score-label" id="${matchId}-label">${currentScoreLabel}</div><div class="score-number ${accuracyClassForActual}" id="${matchId}-score">${currentScoreDisplay}</div></div>
            <div class="team"><img src="https://flagcdn.com/w80/${tAway.flagCode}.png" class="team-flag"><div class="team-name">${tAway.name}</div>${awayCardsHTML}</div>
        </div>
        <div class="match-probabilities">
            <div class="prob-labels"><span style="color: var(--accent-cyan)">1: ${prob.home}%</span><span style="color: var(--text-muted)">X: ${prob.draw}%</span><span style="color: #ff4d4d">2: ${prob.away}%</span></div>
            <div class="prob-bar-container"><div class="prob-home" style="width: ${prob.home}%"></div><div class="prob-draw" style="width: ${prob.draw}%"></div><div class="prob-away" style="width: ${prob.away}%"></div></div>
        </div>
        <div class="risk-container" id="risk-${matchId}" style="opacity: ${initialRiskOpacity};">${riskHTML}</div>
        <div class="vis-area">${visHTML}</div>
        <div class="inner-tabs">${tabsHTML}</div>
        <div class="text-area-wrapper">${txtHTML}</div>
        <div class="status-bar-wrapper">${statusBarHTML}</div>
    </div>`;
}

window.switchCardTab = function(btn, cardId, tabType, scoreText, labelText, accuracyLevel) { 
    const card = btn.closest('.match-card');
    card.querySelectorAll('.inner-tab-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active');
    card.querySelectorAll('.vis-content').forEach(v => v.classList.remove('active'));
    const activeVis = card.querySelector(`#vis-${cardId}-${tabType}`); if(activeVis) activeVis.classList.add('active');
    card.querySelectorAll('.txt-content').forEach(t => t.classList.remove('active'));
    const activeTxt = card.querySelector(`#txt-${cardId}-${tabType}`); if(activeTxt) activeTxt.classList.add('active');
    
    // מציג את הכרטיסים אך ורק אם הלשונית היא "סיכום"
    if (tabType === 'sum') {
        card.classList.add('show-cards-tab');
    } else {
        card.classList.remove('show-cards-tab');
    }

    const riskContainer = card.querySelector(`#risk-${cardId}`);
    if (riskContainer) riskContainer.style.opacity = (tabType === 'sum') ? '0' : '1';

    const labelEl = card.querySelector(`.score-label`);
    const scoreEl = card.querySelector(`.score-number`); 
    labelEl.innerText = labelText; scoreEl.innerText = scoreText; 
    scoreEl.classList.remove('is-actual', 'exact', 'trend', 'wrong'); 
    
    if(tabType === 'sum' || (tabType === 'adv' && accuracyLevel)) { 
        scoreEl.classList.add('is-actual'); 
        if (accuracyLevel) { 
            scoreEl.classList.add(accuracyLevel); 
            if(accuracyLevel === 'exact') labelEl.style.color = 'var(--color-exact)'; 
            else if(accuracyLevel === 'trend') labelEl.style.color = 'var(--color-trend)'; 
            else if(accuracyLevel === 'wrong') labelEl.style.color = 'var(--color-wrong)'; 
        } 
    } else { labelEl.style.color = 'var(--accent-cyan)'; } 
}

let currentTimeFilter = 'all'; let currentStageFilter = 'all'; let currentMdFilter = 'all'; 

window.applyFilters = function() { renderMatches(); }

window.addEventListener('DOMContentLoaded', () => { 
    renderStats(); renderMatches(); 
    
    const urlParams = new URLSearchParams(window.location.search);
    const mdParam = urlParams.get('md');
    if (mdParam) {
        currentMdFilter = mdParam;
        document.querySelectorAll('.submenu-btn').forEach(b => b.classList.remove('active'));
        const btn = document.querySelector(`.submenu-btn[data-md="${mdParam}"]`); if (btn) btn.classList.add('active');
    }
    
    document.querySelectorAll('.time-btn').forEach(btn => btn.addEventListener('click', (e) => { 
        document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active')); e.target.classList.add('active'); 
        currentTimeFilter = e.target.getAttribute('data-time'); applyFilters(); 
    }));
    document.querySelectorAll('.stage-btn').forEach(btn => btn.addEventListener('click', (e) => { 
        document.querySelectorAll('.stage-btn').forEach(b => b.classList.remove('active')); e.target.classList.add('active'); 
        currentStageFilter = e.target.getAttribute('data-stage'); applyFilters(); 
    }));
    document.querySelectorAll('.submenu-btn').forEach(btn => btn.addEventListener('click', (e) => { 
        document.querySelectorAll('.submenu-btn').forEach(b => b.classList.remove('active')); e.target.classList.add('active'); 
        currentMdFilter = e.target.getAttribute('data-md'); switchView('matches'); applyFilters(); closeMobileMenuIfOpen();
    }));
});

// הזרקת סגנונות CSS דינמיים להצגה/הסתרה של הכרטיסים לפי הלשונית
const style = document.createElement('style');
style.innerHTML = `
.match-card .cards-container { display: none; }
.match-card.show-cards-tab .cards-container { display: flex; gap: 6px; justify-content: center; animation: tabFadeIn 0.3s ease; margin-top: -2px; }
.card-icon { width: 10px; height: 14px; border-radius: 2px; border: 1px solid rgba(0,0,0,0.3); }
.yellow-card { background-color: #f1c40f; } 
.red-card { background-color: #e74c3c; }
`;
document.head.appendChild(style);