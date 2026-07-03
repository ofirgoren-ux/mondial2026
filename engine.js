// מחשבון פגיעות חכם ואוטומטי - מחשב לבד מיד אחרי השריקה!
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

        // פגיעה מדויקת
        if (pHome === aHome && pAway === aAway) return 'exact';
        
        // פגיעה במגמה
        let pTrend = pHome > pAway ? 1 : (pHome < pAway ? -1 : 0);
        let aTrend;
        
        // מתחשב בניצחון בפנדלים כמגמה סופית אם המשחק הלך לשם
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
    const recentUpdates = {
        'match49': { actual: '2 - 0', acc: 'trend' }, 'match50': { actual: '3 - 0', acc: 'wrong' }, 'match51': { actual: '0 - 3', acc: 'trend' }, 'match52': { actual: '2 - 4', acc: 'wrong' }, 'match53': { actual: '0 - 3', acc: 'trend' }, 'match54': { actual: '1 - 0', acc: 'wrong' }, 'match55': { actual: '3 - 2', acc: 'wrong' }, 'match56': { actual: '0 - 0', acc: 'trend' }, 'match57': { actual: '0 - 2', acc: 'exact' }, 'match58': { actual: '2 - 1', acc: 'wrong' }, 'match59': { actual: '1 - 3', acc: 'trend' }, 'match60': { actual: '1 - 1', acc: 'wrong' }, 'match61': { actual: '1 - 4', acc: 'trend' }, 'match62': { actual: '5 - 0', acc: 'trend' }, 'match63': { actual: '0 - 1', acc: 'wrong' }, 'match64': { actual: '0 - 0', acc: 'trend' }, 'match65': { actual: '1 - 5', acc: 'trend' }, 'match66': { actual: '1 - 1', acc: 'wrong' }, 'match67': { actual: '0 - 2', acc: 'exact' }, 'match68': { actual: '2 - 1', acc: 'trend' }, 'match69': { actual: '0 - 0', acc: 'wrong' }, 'match70': { actual: '3 - 1', acc: 'wrong' }, 'match71': { actual: '3 - 3', acc: 'wrong' }, 'match72': { actual: '1 - 3', acc: 'trend' }
    };

    for (let key in db) {
        if (db[key].stage && hebrewToEnglish[db[key].stage]) {
            db[key].stage = hebrewToEnglish[db[key].stage];
        }
        if (recentUpdates[key]) {
            db[key].timeStatus = 'past';
            if (!db[key].score) db[key].score = {};
            db[key].score.actual = recentUpdates[key].actual;
        }
        
        // הרצת המחשבון לכל המשחקים כדי לוודא שאין טעויות בדיווח
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

    // העיצוב המקורי של 51px, אך עם גובה נעול ל-vis-area וגלגלת לטקסט
    const penStyles = `
    <style>
    .vis-area { height: 175px; min-height: 175px; max-height: 175px; display: flex; align-items: center; justify-content: center; width: 100%; overflow: hidden; }
    .res-card-wrapper { width: calc(100% - 36px); box-sizing: border-box; margin: 4px auto 0 auto; }
    .res-card-ui { background: #1e293b; border-radius: 8px; padding: 6px; display: flex; flex-direction: column; gap: 4px; border: 1px solid rgba(255,255,255,0.05); height: 100%; box-sizing: border-box; justify-content: space-evenly; }
    .res-row-ui { display: flex; justify-content: space-between; align-items: center; padding: 0 10px; height: 51px; background: rgba(15, 23, 42, 0.6); border-radius: 6px; border: 1px solid rgba(255,255,255,0.02); box-sizing: border-box; margin: 0; }
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
    
    /* הוספת הגלגלת במקרה של טקסטים ארוכים במיוחד */
    .insight-text { max-height: 60px; overflow-y: auto; padding-right: 4px; scrollbar-width: thin; scrollbar-color: rgba(0, 242, 254, 0.3) transparent; }
    .insight-text::-webkit-scrollbar { width: 4px; }
    .insight-text::-webkit-scrollbar-thumb { background: rgba(0, 242, 254, 0.3); border-radius: 4px; }
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
        let accClass = data.score ? data.score.accuracyClass : 'pending';

        let tabsHTML = ''; let visHTML = ''; let txtHTML = ''; let statusBarHTML = '';
        
        if (isPast) {
            tabsHTML = `
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'pred', '${data.score && data.score.prediction ? data.score.prediction : '-'}', 'תחזית ו-xG מוקדם', '')">תחזית</button>
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'adv', '${data.score && data.score.actual ? data.score.actual : '-'}', 'תוצאת סיום', '${accClass}')">עומק</button>
                <button class="inner-tab-btn active" onclick="switchCardTab(this, '${matchId}', 'sum', '${data.score && data.score.actual ? data.score.actual : '-'}', 'תוצאת סיום', '${accClass}')">סיכום</button>
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
                    <div class="insight-text-wrapper"><div class="insight-header"><div class="insight-title">💡 תחזית המודל</div></div><div class="insight-text">${data.insight?.prediction || ''}</div></div>
                </div>
                <div id="txt-${matchId}-adv" class="txt-content">
                    <div class="insight-text-wrapper"><div class="insight-header"><div class="insight-title">🔬 משמעות הנתונים</div></div><div class="insight-text">מדדי העומק מציגים את הפער האמיתי בין הנבחרות לאחר ניטרול רעשים ואקראיות.</div></div>
                </div>
                <div id="txt-${matchId}-sum" class="txt-content active">
                    <div class="insight-text-wrapper"><div class="insight-header"><div class="insight-title">🎯 פוסט-משחק</div></div><div class="insight-text">${data.insight?.actual || ''}</div></div>
                </div>
            `;
            
            if (accClass === 'exact') statusBarHTML = `<div class="status-bar status-exact-ui">✔️ פגיעה מדויקת</div>`;
            else if (accClass === 'trend') statusBarHTML = `<div class="status-bar status-trend-ui">⚠️ פגיעה בכיוון</div>`;
            else if (accClass === 'wrong') statusBarHTML = `<div class="status-bar status-wrong-ui">❌ פספוס מוחלט</div>`;
            else statusBarHTML = `<div class="status-bar status-pending-ui" style="background: rgba(148, 163, 184, 0.1); color: #94a3b8;">⏳ ממתין לנתונים</div>`;

            htmlChunks.push(createCardHTML(matchId, data, tHome, tAway, prob, riskHTML, currentScoreLabel, currentScoreDisplay, accClass === 'pending' ? '' : `is-actual ${accClass}`, '0', visHTML, tabsHTML, txtHTML, statusBarHTML, homeCardsHTML, awayCardsHTML));
        } else {
            tabsHTML = `
                <button class="inner-tab-btn active" onclick="switchCardTab(this, '${matchId}', 'pred', '${data.score && data.score.prediction ? data.score.prediction : '-'}', 'תחזית ו-xG מוקדם', '')">תחזית</button>
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'adv', '${data.score && data.score.prediction ? data.score.prediction : '-'}', 'תחזית ו-xG מוקדם', '')">עומק</button>
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
                    <div class="insight-text-wrapper"><div class="insight-header"><div class="insight-title">💡 תחזית המודל</div></div><div class="insight-text">${data.insight?.prediction || ''}</div></div>
                </div>
                <div id="txt-${matchId}-adv" class="txt-content">
                    <div class="insight-text-wrapper"><div class="insight-header"><div class="insight-title">🔬 משמעות הנתונים</div></div><div class="insight-text">המודל מבסס את התחזית על פערי ה-xGD והשליטה הצפויה במרכז המגרש (Field Tilt).</div></div>
                </div>
            `;
            statusBarHTML = `<div class="status-bar status-pending-ui">⏳ ממתין לשריקה</div>`;

            htmlChunks.push(createCardHTML(matchId, data, tHome, tAway, prob, riskHTML, currentScoreLabel, currentScoreDisplay, '', '1', visHTML, tabsHTML, txtHTML, statusBarHTML, homeCardsHTML, awayCardsHTML));
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
    
    if(tabType === 'sum' || (tabType === 'adv' && accuracyLevel && accuracyLevel !== 'pending')) { 
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

window.renderStandings = function() { /* נשאר זהה */ }
window.renderKnockout = function() { /* נשאר זהה */ }
window.openJourneyModal = function(teamName, flagCode) { /* נשאר זהה */ }
window.closeJourneyModal = function(e) { /* נשאר זהה */ }
window.renderScorers = function() { /* נשאר זהה */ }