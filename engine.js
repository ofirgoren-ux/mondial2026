window.calculateAccuracy = function(prediction, actualStr, matchStatus, penHome, penAway) {
    if (!prediction || !actualStr || prediction === '-' || actualStr === '-' || !prediction.includes('-') || !actualStr.includes('-')) {
        return 'pending';
    }
    try {
        let pParts = prediction.split('-');
        let aParts = actualStr.split('-');
        let pHome = parseInt(pParts[0].trim());
        let pAway = parseInt(pParts[1].trim());
        let aHome = parseInt(aParts[0].trim());
        let aAway = parseInt(aParts[1].trim());

        if (pHome === aHome && pAway === aAway) return 'exact';
        
        let pTrend = pHome > pAway ? 1 : (pHome < pAway ? -1 : 0);
        let aTrend;
        
        if (matchStatus === 'PEN' && penHome !== undefined && penAway !== undefined && penHome !== null && penAway !== null) {
            aTrend = penHome > penAway ? 1 : -1;
        } else {
            aTrend = aHome > aAway ? 1 : (aHome < aAway ? -1 : 0);
        }
        
        if (pTrend === aTrend) return 'trend';
        return 'wrong';
    } catch(e) {
        return 'pending';
    }
};

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
    
    ['matches-view', 'standings-view', 'bracket-view', 'scorers-view'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    
    const mainFilters = document.getElementById('main-filters');
    if(mainFilters) mainFilters.style.display = (viewName === 'matches') ? 'flex' : 'none';

    document.querySelectorAll('.sidebar .nav-link').forEach(link => link.classList.remove('active'));
    
    const groupSubmenu = document.getElementById('submenu-groups');
    const knockoutSubmenu = document.getElementById('submenu-knockout');
    const stagesFilterGroup = document.getElementById('filter-stages-container');

    const isKnockoutMatch = ['r32', 'r16', 'qf', 'sf', 'final'].includes(currentMdFilter);

    if (viewName === 'matches' && isKnockoutMatch) {
        document.getElementById('nav-bracket').classList.add('active');
        if(groupSubmenu) groupSubmenu.style.display = 'none';
        if(knockoutSubmenu) knockoutSubmenu.style.display = 'flex';
        if(stagesFilterGroup) stagesFilterGroup.style.display = 'none';
    } else if (viewName === 'bracket') {
        document.getElementById('nav-bracket').classList.add('active');
        if(groupSubmenu) groupSubmenu.style.display = 'none';
        if(knockoutSubmenu) knockoutSubmenu.style.display = 'flex';
    } else {
        const activeNav = document.getElementById('nav-' + viewName);
        if(activeNav) activeNav.classList.add('active');
        if(groupSubmenu) groupSubmenu.style.display = 'flex';
        if(knockoutSubmenu) knockoutSubmenu.style.display = 'none';
        if (viewName === 'matches' && stagesFilterGroup) stagesFilterGroup.style.display = 'flex';
    }

    const titleEl = document.getElementById('main-title');
    if (viewName === 'matches') {
        document.getElementById('matches-view').style.display = 'block';
        
        let titleText = "שלב הבתים – מודל הסתברותי";
        if (currentMdFilter === 'r32') titleText = "32 הגדולות – שלב הנוקאאוט";
        if (currentMdFilter === 'r16') titleText = "שמינית גמר (16 הגדולות)";
        if (currentMdFilter === 'qf') titleText = "רבע הגמר";
        if (currentMdFilter === 'sf') titleText = "חצי הגמר";
        if (currentMdFilter === 'final') titleText = "הגמר הגדול";
        
        if(titleEl) titleEl.innerText = titleText;
        renderMatches();
    } else if (viewName === 'standings') {
        document.getElementById('standings-view').style.display = 'flex';
        if(titleEl) titleEl.innerText = "טבלת הבתים (חישוב חי)";
        renderStandings();
    } else if (viewName === 'bracket') {
        document.getElementById('bracket-view').style.display = 'block';
        if(titleEl) titleEl.innerText = "עץ הנוקאאוט - 32 הגדולות";
        renderKnockout();
    } else if (viewName === 'scorers') {
        document.getElementById('scorers-view').style.display = 'block';
        if(titleEl) titleEl.innerText = "מלך השערים - המרוץ לנעליים מזהב";
        renderScorers();
    }
}

function getSafeDatabase() {
    let db = {};
    if (typeof matchDatabase !== 'undefined') Object.assign(db, matchDatabase);
    if (typeof window.matchDatabase !== 'undefined') Object.assign(db, window.matchDatabase);

    const hebrewToEnglish = {'א': 'A', "א'": 'A', 'ב': 'B', "ב'": 'B', 'ג': 'C', "ג'": 'C', 'ד': 'D', "ד'": 'D', 'ה': 'E', "ה'": 'E', 'ו': 'F', "ו'": 'F', 'ז': 'G', "ז'": 'G', 'ח': 'H', "ח'": 'H', 'ט': 'I', "ט'": 'I', 'י': 'J', "י'": 'J', 'יא': 'K', 'י"א': 'K', 'יב': 'L', 'י"ב': 'L'};

    for (let key in db) {
        if (db[key].stage && hebrewToEnglish[db[key].stage]) {
            db[key].stage = hebrewToEnglish[db[key].stage];
        }
        if (db[key].timeStatus === 'past' && db[key].score && db[key].score.prediction && db[key].score.actual) {
            let penH = db[key].score.penalty?.home;
            let penA = db[key].score.penalty?.away;
            db[key].score.accuracyClass = window.calculateAccuracy(db[key].score.prediction, db[key].score.actual, db[key].status, penH, penA);
        }
    }
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

    const penStyles = `
    <style>
    .res-card-wrapper { width: calc(100% - 36px); box-sizing: border-box; margin: 4px auto 0 auto; }
    .res-card-ui { background: #1e293b; border-radius: 8px; padding: 6px; display: flex; flex-direction: column; gap: 4px; border: 1px solid rgba(255,255,255,0.05); height: 100%; box-sizing: border-box; justify-content: space-evenly; }
    .res-row-ui { display: flex; justify-content: space-between; align-items: center; padding: 0 10px; height: 51px; background: rgba(15, 23, 42, 0.6); border-radius: 6px; border: 1px solid rgba(255,255,255,0.02); box-sizing: border-box; }
    .res-pen-row { border: 1px solid rgba(0, 242, 254, 0.2); background: rgba(0, 242, 254, 0.05); }
    .res-team-ui { flex: 1; display: flex; align-items: center; gap: 6px; font-size: 14px; font-weight: bold; position: relative; z-index: 10; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .res-team-ui.left { justify-content: flex-end; text-align: left; }
    .res-team-ui.right { justify-content: flex-start; text-align: right; }
    .res-center-ui { flex: 1; text-align: center; display: flex; flex-direction: column; justify-content: center; gap: 2px; position: relative; z-index: 10; }
    .res-title-ui { font-size: 12px; color: #94a3b8; line-height: 1.2; }
    .res-score-ui { font-size: 20px; font-weight: 900; letter-spacing: 2px; line-height: 1.2; }
    .res-cards { display: flex; gap: 3px; }
    .res-card-y { width: 6px; height: 10px; background: #eab308; border-radius: 1px; }
    .res-card-r { width: 6px; height: 10px; background: #ef4444; border-radius: 1px; }
    .pen-dot { width: 8px; height: 8px; border-radius: 50%; }
    .pen-dot.hit { background: #22c55e; box-shadow: 0 0 4px rgba(34, 197, 94, 0.5); }
    .pen-dot.miss { background: #ef4444; box-shadow: 0 0 4px rgba(239, 68, 68, 0.5); }
    </style>
    `;
    htmlChunks.push(penStyles);

    let filteredMatches = Object.entries(db).filter(([matchId, data]) => {
        const tMatch = (currentTimeFilter === 'all' || currentTimeFilter === data.timeStatus); 
        const isKnockoutMode = ['r32', 'r16', 'qf', 'sf', 'final'].includes(currentMdFilter);
        const sMatch = isKnockoutMode ? true : (currentStageFilter === 'all' || currentStageFilter === data.stage); 
        const mMatch = (currentMdFilter === 'all' || currentMdFilter === String(data.matchday)); 
        return tMatch && sMatch && mMatch;
    });

    filteredMatches.sort((a, b) => {
        function getSortValue(match) {
            if (!match.dateText) return 0;
            try {
                let parts = match.dateText.split('|');
                if(parts.length < 2) return 0;
                let dateParts = parts[0].trim().split('/'); 
                let timeString = parts[1].trim().substring(0, 5);
                if (dateParts.length === 3) {
                    return new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T${timeString}:00`).getTime();
                }
            } catch(e) {}
            return 0;
        }
        return getSortValue(a[1]) - getSortValue(b[1]);
    });

    for (const [matchId, data] of filteredMatches) {
        const adv = data.advancedStats || { home: { xG: '-', restDays: '-', altitudeImpact: '-' }, away: { xG: '-', restDays: '-', altitudeImpact: '-' } };
        const prob = data.probabilities || { home: 33, draw: 34, away: 33 };
        const tHome = data.teamHome || { name: 'Unknown', flagCode: 'unknown', color: '#000', cards: { yellow: [], red: [] } };
        const tAway = data.teamAway || { name: 'Unknown', flagCode: 'unknown', color: '#000', cards: { yellow: [], red: [] } };
        
        let homeCardsHTML = '';
        let awayCardsHTML = '';
        const isPast = data.timeStatus === 'past';

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
        if (isPast && data.score && data.score.actual && data.score.actual.includes('-')) {
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
            
            let sumVisualHTML = `<div class="chart-container"><canvas id="chart-${matchId}-sum"></canvas></div>`;
            
            if (data.status === 'AET' || data.status === 'PEN') {
                const score90Home = data.score.fulltime?.home !== null && data.score.fulltime?.home !== undefined ? data.score.fulltime.home : '-';
                const score90Away = data.score.fulltime?.away !== null && data.score.fulltime?.away !== undefined ? data.score.fulltime.away : '-';
                const score90Str = `${score90Home} - ${score90Away}`;

                let hCardMocks = '<div class="res-card-y"></div><div class="res-card-y"></div>';
                let aCardMocks = '<div class="res-card-y"></div>';

                let extraTimeRow = '';
                if (data.status === 'AET' || data.status === 'PEN') {
                     let etHome = score90Home !== '-' ? parseInt(score90Home) : 0;
                     let etAway = score90Away !== '-' ? parseInt(score90Away) : 0;
                     
                     if (data.score.extratime && data.score.extratime.home !== null) {
                         etHome += parseInt(data.score.extratime.home);
                         etAway += parseInt(data.score.extratime.away);
                     } else if (data.status === 'AET' && data.goals && data.goals.home !== null) {
                         etHome = data.goals.home;
                         etAway = data.goals.away;
                     }
                     
                     let displayHome = isNaN(etHome) ? '-' : etHome;
                     let displayAway = isNaN(etAway) ? '-' : etAway;

                     extraTimeRow = `
                        <div class="res-row-ui">
                             <div class="res-team-ui right"><div class="res-cards">${hCardMocks}</div></div>
                             <div class="res-center-ui"><div class="res-title-ui">⏳ סיום 120 דקות</div><div class="res-score-ui" dir="ltr">${displayHome} - ${displayAway}</div></div>
                             <div class="res-team-ui left"><div class="res-cards"><div class="res-card-r"></div></div></div>
                        </div>`;
                }

                let penaltyRow = '';
                if (data.status === 'PEN' && data.score.penalty) {
                    const penHome = data.score.penalty.home ?? 0;
                    const penAway = data.score.penalty.away ?? 0;
                    
                    let homeDots = '<div class="pen-dot hit"></div>'.repeat(penHome) + '<div class="pen-dot miss"></div>'.repeat(Math.max(0, 5 - penHome));
                    let awayDots = '<div class="pen-dot hit"></div>'.repeat(penAway) + '<div class="pen-dot miss"></div>'.repeat(Math.max(0, 5 - penAway));

                    penaltyRow = `
                        <div class="res-row-ui res-pen-row">
                             <div class="res-team-ui right" style="gap:4px;">${homeDots}</div>
                             <div class="res-center-ui"><div class="res-title-ui" style="color:#00f2fe;">🎯 פנדלים</div><div class="res-score-ui" style="color:#00f2fe;" dir="ltr">${penHome} - ${penAway}</div></div>
                             <div class="res-team-ui left" style="gap:4px;">${awayDots}</div>
                        </div>`;
                }

                sumVisualHTML = `
                    <div class="res-card-wrapper">
                        <div class="res-card-ui animate-in">
                            <div class="res-row-ui">
                                 <div class="res-team-ui right" style="color:${tHome.color}">${tHome.name}</div>
                                 <div class="res-center-ui"><div class="res-title-ui">⏱️ סיום 90 דקות</div><div class="res-score-ui" dir="ltr">${score90Str}</div></div>
                                 <div class="res-team-ui left" style="color:${tAway.color}">${tAway.name}</div>
                            </div>
                            ${extraTimeRow}
                            ${penaltyRow}
                        </div>
                    </div>
                `;
            }
            
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
                    ${sumVisualHTML}
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
                        let existingChart = Chart.getChart(canvasElement);
                        if (existingChart) existingChart.destroy();
                        
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
    let formattedScore = currentScoreDisplay;
    if (formattedScore && formattedScore.includes('-')) {
        let p = formattedScore.split('-');
        formattedScore = `<span style="display:inline-flex; direction:ltr; align-items:center; gap:6px;"><span>${p[1].trim()}</span><span>-</span><span>${p[0].trim()}</span></span>`;
    }
    
    const hFlag = tHome.flagCode !== 'unknown' && tHome.flagCode !== 'un' ? `<img src="https://flagcdn.com/w80/${tHome.flagCode}.png" class="team-flag">` : `<div class="team-flag" style="background:rgba(255,255,255,0.1); border-radius:3px;"></div>`;
    const aFlag = tAway.flagCode !== 'unknown' && tAway.flagCode !== 'un' ? `<img src="https://flagcdn.com/w80/${tAway.flagCode}.png" class="team-flag">` : `<div class="team-flag" style="background:rgba(255,255,255,0.1); border-radius:3px;"></div>`;

    return `
    <div class="match-card animate-in ${data.timeStatus === 'past' ? 'show-cards-tab' : ''}" data-time="${data.timeStatus}" data-stage="${data.stage}" data-md="${data.matchday || 1}">
        <div class="match-header">${data.dateText || '-'}</div>
        <div class="match-hero">
            <div class="team">${hFlag}<div class="team-name">${tHome.name}</div>${homeCardsHTML}</div>
            <div class="score-center"><div class="score-label" id="${matchId}-label">${currentScoreLabel}</div><div class="score-number ${accuracyClassForActual}" id="${matchId}-score" dir="ltr" style="direction: ltr; unicode-bidi: bidi-override; display: inline-block;">${formattedScore}</div></div>
            <div class="team">${aFlag}<div class="team-name">${tAway.name}</div>${awayCardsHTML}</div>
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
    
    if (tabType === 'sum') {
        card.classList.add('show-cards-tab');
    } else {
        card.classList.remove('show-cards-tab');
    }

    const riskContainer = card.querySelector(`#risk-${cardId}`);
    if (riskContainer) riskContainer.style.opacity = (tabType === 'sum') ? '0' : '1';

    const labelEl = card.querySelector(`.score-label`);
    const scoreEl = card.querySelector(`.score-number`); 
    labelEl.innerText = labelText; 
    
    let formattedScore = scoreText;
    if (formattedScore && formattedScore.includes('-')) {
        let p = formattedScore.split('-');
        formattedScore = `<span style="display:inline-flex; direction:ltr; align-items:center; gap:6px;"><span>${p[1].trim()}</span><span>-</span><span>${p[0].trim()}</span></span>`;
    }
    scoreEl.innerHTML = formattedScore; 
    
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

let currentTimeFilter = 'all'; let currentStageFilter = 'all'; let currentMdFilter = 'r32'; 

window.applyFilters = function() { renderMatches(); }

window.addEventListener('DOMContentLoaded', () => { 
    const urlParams = new URLSearchParams(window.location.search);
    const mdParam = urlParams.get('md');
    if (mdParam) {
        currentMdFilter = mdParam;
        document.querySelectorAll('.submenu-btn').forEach(b => b.classList.remove('active'));
        const btn = document.querySelector(`.submenu-btn[data-md="${mdParam}"]`); 
        if (btn) btn.classList.add('active');
        switchView('matches');
    } else {
        document.querySelectorAll('.submenu-btn').forEach(b => b.classList.remove('active'));
        const defaultBtn = document.querySelector(`.submenu-btn[data-md="r32"]`); 
        if (defaultBtn) defaultBtn.classList.add('active');
        switchView('matches');
    }

    const timeParam = urlParams.get('time');
    if (timeParam) {
        currentTimeFilter = timeParam;
        document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
        const btn = document.querySelector(`.time-btn[data-time="${timeParam}"]`); 
        if (btn) btn.classList.add('active');
    }

    const stageParam = urlParams.get('stage');
    if (stageParam) {
        currentStageFilter = stageParam;
        document.querySelectorAll('.stage-btn').forEach(b => b.classList.remove('active'));
        const btn = document.querySelector(`.stage-btn[data-stage="${stageParam}"]`); 
        if (btn) btn.classList.add('active');
    }
    
    renderStats(); 
    renderMatches(); 
    
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

window.renderStandings = function() {
    const db = getSafeDatabase();
    const groups = {};
    
    Object.values(db).forEach(match => {
        if(!match.stage || !match.teamHome || !match.teamAway) return;
        const st = match.stage;
        if (st === 'נוקאאוט' || st === 'knockout') return;

        if (!groups[st]) groups[st] = {};
        
        const tH = match.teamHome; const tA = match.teamAway;
        if (!groups[st][tH.name]) groups[st][tH.name] = { name: tH.name, flag: tH.flagCode, p:0, w:0, d:0, l:0, gf:0, ga:0, pts:0 };
        if (!groups[st][tA.name]) groups[st][tA.name] = { name: tA.name, flag: tA.flagCode, p:0, w:0, d:0, l:0, gf:0, ga:0, pts:0 };
        
        if (match.timeStatus === 'past' && match.score && match.score.actual && match.score.actual.includes('-')) {
            const parts = match.score.actual.split('-');
            const sH = parseInt(parts[0].trim());
            const sA = parseInt(parts[1].trim());
            if(isNaN(sH) || isNaN(sA)) return;

            groups[st][tH.name].p++; groups[st][tA.name].p++;
            groups[st][tH.name].gf += sH; groups[st][tH.name].ga += sA;
            groups[st][tA.name].gf += sA; groups[st][tA.name].ga += sH;

            if (sH > sA) { groups[st][tH.name].w++; groups[st][tH.name].pts += 3; groups[st][tA.name].l++; }
            else if (sH < sA) { groups[st][tA.name].w++; groups[st][tA.name].pts += 3; groups[st][tH.name].l++; }
            else { groups[st][tH.name].d++; groups[st][tA.name].d++; groups[st][tH.name].pts++; groups[st][tA.name].pts++; }
        }
    });

    const container = document.getElementById('standings-view');
    if(!container) return;
    
    let html = '';
    Object.keys(groups).sort().forEach(st => {
        let teams = Object.values(groups[st]);
        teams.sort((a,b) => {
            if(b.pts !== a.pts) return b.pts - a.pts;
            const gdA = a.gf - a.ga; const gdB = b.gf - b.ga;
            if(gdB !== gdA) return gdB - gdA;
            return b.gf - a.gf;
        });
        
        const hebrewGroups = {'A': "א'", 'B': "ב'", 'C': "ג'", 'D': "ד'", 'E': "ה'", 'F': "ו'", 'G': "ז'", 'H': "ח'", 'I': "ט'", 'J': "י'", 'K': 'י"א', 'L': 'י"ב'};
        const groupName = hebrewGroups[st] || st;

        let rows = teams.map((t, idx) => {
            let goalsHtml = `<span style="display:inline-flex; direction:ltr; align-items:center; gap:4px;"><span>${t.ga}</span><span>-</span><span>${t.gf}</span></span>`;
            let diffHtml = t.gf - t.ga > 0 ? '+'+(t.gf-t.ga) : (t.gf-t.ga);

            return `
            <tr style="${idx < 2 ? 'background: linear-gradient(90deg, rgba(0,255,136,0.05) 0%, transparent 100%); border-right: 3px solid var(--color-exact);' : ''}">
                <td>${idx+1}</td>
                <td class="team-cell">
                    <img src="https://flagcdn.com/w20/${t.flag}.png"> 
                    ${t.name}
                </td>
                <td>${t.p}</td>
                <td>${t.w}</td>
                <td>${t.d}</td>
                <td>${t.l}</td>
                <td style="text-align:center;">${goalsHtml}</td>
                <td dir="ltr" style="text-align:center;">${diffHtml}</td>
                <td style="font-weight:bold; color:var(--accent-cyan);">${t.pts}</td>
            </tr>`;
        }).join('');

        html += `
        <div class="group-table-card animate-in">
            <h3 class="group-table-title">בית ${groupName}</h3>
            <table class="standings-table">
                <thead><tr><th>#</th><th style="text-align:right;">נבחרת</th><th>מש'</th><th>נ'</th><th>ת'</th><th>ה'</th><th style="text-align:center;">שערים</th><th style="text-align:center;">הפרש</th><th>נק'</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
        </div>`;
    });
    
    container.innerHTML = html || '<div style="padding:20px; color:var(--text-muted);">אין נתונים להצגה</div>';
}

window.renderKnockout = function() {
    const container = document.getElementById('dynamic-bracket');
    if (!container || !window.knockoutBracket) return;
    
    container.innerHTML = '';
    container.className = "tournament-bracket";
    
    Object.keys(window.knockoutBracket).forEach(key => {
        const roundData = window.knockoutBracket[key];
        const col = document.createElement('div');
        col.className = 'bracket-column';
        
        let title = key === 'roundOf32' ? '32 הגדולות' : 'שמינית גמר';
        col.innerHTML = `<div class="round-title">${title}</div>`;
        
        roundData.forEach((match, index) => {
            let positionClass = (index % 2 === 0) ? ' pair-top' : ' pair-bottom';
            let winClass = '';
            if (match.team1?.outcome === 'winner') winClass = ' win-team1';
            else if (match.team2?.outcome === 'winner') winClass = ' win-team2';
            
            const matchDiv = document.createElement('div');
            matchDiv.className = `bracket-match${positionClass}${winClass}`;
            
            let html = '';
            ['team1', 'team2'].forEach(t => {
                let team = match[t] || { name: 'TBD', score: '-', outcome: 'pending', flag: 'unknown' };
                let bgStyle = team.flag !== 'unknown' && team.flag !== 'un' ? `background-image: url('https://flagcdn.com/w160/${team.flag}.png')` : 'background: rgba(255,255,255,0.05);';
                let statusClass = team.outcome === 'winner' ? 'winner' : (team.outcome === 'loser' ? 'loser' : '');
                let clickAttr = team.flag !== 'unknown' && team.flag !== 'un' ? `onclick="openJourneyModal('${team.name}', '${team.flag}')"` : '';
                
                html += `
                    <div class="bracket-team ${statusClass}" ${clickAttr}>
                        <div class="flag-bg" style="${bgStyle}"></div>
                        <div class="team-info">
                            <div class="team-name">${team.name}</div>
                            <div class="team-subtitle">${team.score}</div>
                        </div>
                    </div>
                `;
            });
            matchDiv.innerHTML = html;
            col.appendChild(matchDiv);
        });
        container.appendChild(col);
    });
}

window.openJourneyModal = function(teamName, flagCode) {
    const db = getSafeDatabase();
    let matchesPlayed = [];
    let gf = 0, ga = 0, pts = 0;

    Object.values(db).forEach(match => {
        if (match.teamHome?.name === teamName || match.teamAway?.name === teamName) {
            if (match.timeStatus === 'past' && match.score && match.score.actual && match.score.actual.includes('-')) {
                const isHome = match.teamHome.name === teamName;
                const parts = match.score.actual.split('-');
                const sH = parseInt(parts[0].trim());
                const sA = parseInt(parts[1].trim());
                
                if (!isNaN(sH) && !isNaN(sA)) {
                    let teamScore = isHome ? sH : sA;
                    let oppScore = isHome ? sA : sH;
                    gf += teamScore;
                    ga += oppScore;
                    
                    let resClass = '';
                    let resTxt = '';
                    if (teamScore > oppScore) { pts += 3; resClass = 'res-win'; resTxt = 'ניצחון'; }
                    else if (teamScore < oppScore) { resClass = 'res-loss'; resTxt = 'הפסד'; }
                    else { pts += 1; resClass = 'res-draw'; resTxt = 'תיקו'; }

                    const oppName = isHome ? match.teamAway.name : match.teamHome.name;
                    const oppFlag = isHome ? match.teamAway.flagCode : match.teamHome.flagCode;
                    
                    let displayDate = match.dateText ? match.dateText.split('|')[0].trim() : '';

                    let scoreLeft = isHome ? sA : sH; 
                    let scoreRight = isHome ? sH : sA; 
                    let scoreHTML = `<span style="display:inline-flex; direction:ltr; align-items:center; gap:5px; font-weight:900; margin:0 8px;"><span>${scoreLeft}</span><span>-</span><span>${scoreRight}</span></span>`;

                    matchesPlayed.push(`
                        <div class="timeline-item">
                            <div class="timeline-date">${displayDate} • שלב: ${match.stage}</div>
                            <div class="timeline-matchup">
                                <img src="https://flagcdn.com/w40/${flagCode}.png" style="width:24px; border-radius:3px;">
                                ${scoreHTML}
                                <img src="https://flagcdn.com/w40/${oppFlag}.png" style="width:24px; border-radius:3px;">
                                <span>${oppName}</span>
                            </div>
                            <div class="timeline-res ${resClass}">${resTxt}</div>
                        </div>
                    `);
                }
            }
        }
    });

    const header = document.getElementById('journey-header');
    if (header) header.style.backgroundImage = `url('https://flagcdn.com/w320/${flagCode}.png')`;
    const titleEl = document.getElementById('journey-title');
    if (titleEl) titleEl.innerText = teamName;

    const gd = gf - ga;
    const statsHtml = `
        <div class="geek-stat-box"><div class="geek-stat-val">${pts}</div><div class="geek-stat-lbl">נקודות מדורגות</div></div>
        <div class="geek-stat-box"><div class="geek-stat-val">${gf}</div><div class="geek-stat-lbl">שערי זכות</div></div>
        <div class="geek-stat-box"><div class="geek-stat-val" dir="ltr" style="unicode-bidi: isolate; direction: ltr; display: inline-block;">${gd > 0 ? '+'+gd : gd}</div><div class="geek-stat-lbl">הפרש שערים</div></div>
    `;
    const statsEl = document.getElementById('journey-stats');
    if (statsEl) statsEl.innerHTML = statsHtml;

    const timelineContainer = document.getElementById('journey-timeline');
    if (timelineContainer) {
        if (matchesPlayed.length > 0) {
            timelineContainer.innerHTML = matchesPlayed.join('');
        } else {
            timelineContainer.innerHTML = '<div style="color:var(--text-muted);text-align:center;">אין נתונים ממשחקי עבר עבור נבחרת זו.</div>';
        }
    }

    const modal = document.getElementById('teamJourneyModal');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.style.opacity = '1', 10);
    }
}

window.closeJourneyModal = function(e) {
    if (e) e.stopPropagation();
    const modal = document.getElementById('teamJourneyModal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => modal.style.display = 'none', 300);
    }
}

window.renderScorers = function() {
    const container = document.getElementById('scorers-view');
    if (!container) return;

    const scorersData = [
        { rank: 1, name: "קיליאן אמבפה", team: "צרפת", flag: "fr", goals: 6, xg: 2.89, shots: 13, playerImg: "images/Kylian-Mbappe.jpeg" },
        { rank: 2, name: "ליונל מסי", team: "ארגנטינה", flag: "ar", goals: 6, xg: 2.41, shots: 7, playerImg: "images/lionel-messi.jpeg" },
        { rank: 3, name: "ארלינג האלנד", team: "נורבגיה", flag: "no", goals: 5, xg: 3.38, shots: 9, playerImg: "images/erlin-haaland.jpeg" },
        { rank: 4, name: "ויניסיוס ג'וניור", team: "ברזיל", flag: "br", goals: 4, xg: 2.50, shots: 10 },
        { rank: 5, name: "עוסמאן דמבלה", team: "צרפת", flag: "fr", goals: 4, xg: 0.95, shots: 5, playerImg: "images/ousmane-dembele.jpeg" },
        { rank: 6, name: "מתיאוס קוניה", team: "ברזיל", flag: "br", goals: 3, xg: 1.18, shots: 5 },
        { rank: 7, name: "איסמעילה סאר", team: "סנגל", flag: "sn", goals: 3, xg: 1.94, shots: 6 },
        { rank: 8, name: "קאי האברץ", team: "גרמניה", flag: "de", goals: 3, xg: 2.18, shots: 7 },
        { rank: 9, name: "קודי גאקפו", team: "הולנד", flag: "nl", goals: 3, xg: 1.18, shots: 6 },
        { rank: 10, name: "יואן ויסה", team: "קונגו", flag: "cd", goals: 3, xg: 1.47, shots: 3 }
    ];

    const topGoalCount = scorersData[0].goals;
    const podiumOrder = [scorersData[1], scorersData[0], scorersData[2]];
    
    let podiumHTML = '<div class="podium-container">';
    podiumOrder.forEach(player => {
        let medalColor = player.rank === 1 ? '#FFD700' : (player.rank === 2 ? '#C0C0C0' : '#CD7F32');
        let flagBg = `background-image: url('https://flagcdn.com/w320/${player.flag}.png');`;
        
        podiumHTML += `
            <div class="podium-card podium-rank-${player.rank} animate-in">
                <div class="podium-flag-bg" style="${flagBg}"></div>
                <div class="podium-content">
                    <div class="podium-badge" style="background-color: ${medalColor}">${player.rank}</div>
                    <img src="${player.playerImg}" class="podium-player-img" style="border-color: ${medalColor}" onerror="this.src='https://ui-avatars.com/api/?name=${player.name}&background=111&color=fff&size=150'">
                    <div class="podium-name">${player.name}</div>
                    <div class="podium-team"><img src="https://flagcdn.com/w20/${player.flag}.png" style="width:16px; margin-left:4px;">${player.team}</div>
                    <div class="podium-goals" style="color: ${medalColor}">${player.goals} <span>שערים</span></div>
                    <div class="podium-stats">xG: ${player.xg} | בעיטות: ${player.shots}</div>
                </div>
            </div>
        `;
    });
    podiumHTML += '</div>';

    let listHTML = '<div class="lb-container">';
    for (let i = 3; i < scorersData.length; i++) {
        let player = scorersData[i];
        let progressWidth = (player.goals / topGoalCount) * 100;
        listHTML += `
            <div class="lb-row animate-in" style="animation-delay: ${i * 0.05}s">
                <div class="lb-rank">${player.rank}</div>
                <img src="https://flagcdn.com/w40/${player.flag}.png" class="lb-flag">
                <div class="lb-info">
                    <div class="lb-name">${player.name} <span class="lb-team">• ${player.team}</span></div>
                    <div class="lb-bar-bg"><div class="lb-bar-fill" style="width: ${progressWidth}%;"></div></div>
                </div>
                <div class="lb-goals">${player.goals}</div>
            </div>
        `;
    }
    listHTML += '</div>';

    container.innerHTML = `<div class="scorers-dashboard">${podiumHTML}${listHTML}</div>`;
}