// ==========================================
// engine.js - המנוע הראשי של הדשבורד (UX מוקפד)
// ==========================================

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
    document.getElementById('standings-view').style.display = 'none';
    document.getElementById('scorers-view').style.display = 'none';
    if (document.getElementById('bracket-view')) document.getElementById('bracket-view').style.display = 'none';
    
    document.querySelectorAll('.sidebar .nav-link').forEach(link => link.classList.remove('active'));
    document.getElementById('nav-' + viewName).classList.add('active');

    const titleEl = document.getElementById('main-title');
    if (viewName === 'matches') {
        document.getElementById('matches-view').style.display = 'block';
        titleEl.innerText = "שלב הבתים – מודל הסתברותי";
    } else if (viewName === 'standings') {
        document.getElementById('standings-view').style.display = 'flex';
        titleEl.innerText = "טבלאות הבתים - עדכני";
        calculateAndRenderStandings();
    } else if (viewName === 'scorers') {
        document.getElementById('scorers-view').style.display = 'block';
        titleEl.innerText = "מלך השערים - נעל הזהב";
        calculateAndRenderTopScorers();
    } else if (viewName === 'bracket') {
        document.getElementById('bracket-view').style.display = 'block';
        titleEl.innerText = "עץ הטורניר - שלב הנוקאאוט";
        renderBracket(); 
    }
}

function renderStats() {
    if (typeof matchDatabase === 'undefined') return;
    let totalPast = 0, exactHits = 0, trendHits = 0;
    for (const key in matchDatabase) {
        if (matchDatabase[key].timeStatus === 'past') {
            totalPast++;
            if (matchDatabase[key].score && matchDatabase[key].score.accuracyClass === 'exact') exactHits++;
            if (matchDatabase[key].score && matchDatabase[key].score.accuracyClass === 'trend') trendHits++;
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

function calculateAndRenderStandings() {
    if (typeof matchDatabase === 'undefined') return;
    const officialGroups = {
        'A': ['מקסיקו', 'קוריאה הדרומית', 'צ\'כיה', 'דרום אפריקה'], 'B': ['שוויץ', 'בוסניה והרצגובינה', 'קנדה', 'קטר'],
        'C': ['סקוטלנד', 'מרוקו', 'ברזיל', 'האיטי'], 'D': ['ארצות הברית', 'אוסטרליה', 'טורקיה', 'פרגוואי'],
        'E': ['גרמניה', 'חוף השנהב', 'אקוודור', 'קוראסאו'], 'F': ['שוודיה', 'יפן', 'הולנד', 'תוניסיה'],
        'G': ['בלגיה', 'מצרים', 'איראן', 'ניו זלנד'], 'H': ['ספרד', 'קף ורדה', 'ערב הסעודית', 'אורוגוואי'],
        'I': ['צרפת', 'סנגל', 'עיראק', 'נורווגיה'], 'J': ['ארגנטינה', 'אלג\'יריה', 'אוסטריה', 'ירדן'],
        'K': ['פורטוגל', 'קונגו', 'אוזבקיסטן', 'קולומביה'], 'L': ['אנגליה', 'קרואטיה', 'גאנה', 'פנמה']
    };
    const teamFlags = {
        'מקסיקו': 'mx', 'קוריאה הדרומית': 'kr', 'צ\'כיה': 'cz', 'דרום אפריקה': 'za', 'שוויץ': 'ch', 'בוסניה והרצגובינה': 'ba', 'קנדה': 'ca', 'קטר': 'qa',
        'סקוטלנד': 'gb-sct', 'מרוקו': 'ma', 'ברזיל': 'br', 'האיטי': 'ht', 'ארצות הברית': 'us', 'אוסטרליה': 'au', 'טורקיה': 'tr', 'פרגוואי': 'py',
        'גרמניה': 'de', 'חוף השנהב': 'ci', 'אקוודור': 'ec', 'קוראסאו': 'cw', 'שוודיה': 'se', 'יפן': 'jp', 'הולנד': 'nl', 'תוניסיה': 'tn',
        'בלגיה': 'be', 'מצרים': 'eg', 'איראן': 'ir', 'ניו זלנד': 'nz', 'ספרד': 'es', 'קף ורדה': 'cv', 'ערב הסעודית': 'sa', 'אורוגוואי': 'uy',
        'צרפת': 'fr', 'סנגל': 'sn', 'עיראק': 'iq', 'נורווגיה': 'no', 'ארגנטינה': 'ar', 'אלג\'יריה': 'dz', 'אוסטריה': 'at', 'ירדן': 'jo',
        'פורטוגל': 'pt', 'קונגו': 'cg', 'אוזבקיסטן': 'uz', 'קולומביה': 'co', 'אנגליה': 'gb-eng', 'קרואטיה': 'hr', 'גאנה': 'gh', 'פנמה': 'pa'
    };

    const standings = {};
    for (const grp in officialGroups) {
        standings[grp] = {};
        officialGroups[grp].forEach(team => { standings[grp][team] = { p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0, flag: teamFlags[team] }; });
    }

    for (const key in matchDatabase) {
        const match = matchDatabase[key];
        if (match.timeStatus === 'past' && match.score && match.score.actual && match.score.actual.includes('-')) {
            const group = match.stage;
            const tH = match.teamHome.name, tA = match.teamAway.name;
            if(standings[group] && standings[group][tH] && standings[group][tA]) {
                const scores = match.score.actual.split('-');
                const gH = parseInt(scores[0].trim());
                const gA = parseInt(scores[1].trim());

                if (!isNaN(gH) && !isNaN(gA)) { 
                    standings[group][tH].p++; standings[group][tH].gf += gH; standings[group][tH].ga += gA;
                    standings[group][tA].p++; standings[group][tA].gf += gA; standings[group][tA].ga += gH;

                    if (gH > gA) { standings[group][tH].w++; standings[group][tH].pts += 3; standings[group][tA].l++; } 
                    else if (gA > gH) { standings[group][tA].w++; standings[group][tA].pts += 3; standings[group][tH].l++; } 
                    else { standings[group][tH].d++; standings[group][tA].d++; standings[group][tH].pts += 1; standings[group][tA].pts += 1; }
                }
            }
        }
    }

    const container = document.getElementById('standings-view');
    if (!container) return;
    container.innerHTML = '';
    const groupOrder = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    const groupNamesHeb = {'A': "א'", 'B': "ב'", 'C': "ג'", 'D': "ד'", 'E': "ה'", 'F': "ו'", 'G': "ז'", 'H': "ח'", 'I': "ט'", 'J': "י'", 'K': "כ'", 'L': "ל'"};

    groupOrder.forEach(grp => {
        const sortedTeams = Object.keys(standings[grp]).map(name => {
            const t = standings[grp][name]; t.name = name; t.gd = t.gf - t.ga; return t;
        }).sort((a, b) => { if (b.pts !== a.pts) return b.pts - a.pts; if (b.gd !== a.gd) return b.gd - a.gd; return b.gf - a.gf; });

        let trs = '';
        sortedTeams.forEach((t, i) => {
            const isTopTwo = i < 2;
            const rowStyle = isTopTwo ? 'background-color: rgba(0, 230, 118, 0.08);' : '';
            const rankStyle = isTopTwo ? 'color: var(--color-exact); font-weight: 900;' : 'color:var(--text-muted)';
            trs += `<tr style="${rowStyle}">
                <td style="${rankStyle}">${i+1}</td>
                <td><div class="team-cell"><img src="https://flagcdn.com/w20/${t.flag}.png" alt="flag"> ${t.name}</div></td>
                <td>${t.p}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td>
                <td style="direction:ltr">${t.gf}-${t.ga}</td><td style="direction:ltr">${t.gd > 0 ? '+'+t.gd : t.gd}</td>
                <td style="font-weight:900; color:var(--accent-cyan)">${t.pts}</td>
            </tr>`;
        });

        container.innerHTML += `
        <div class="group-table-card">
            <div class="group-table-title">בית ${groupNamesHeb[grp]}</div>
            <table class="standings-table">
                <tr><th>#</th><th style="text-align:right">נבחרת</th><th>מ</th><th>נ</th><th>ת</th><th>ה</th><th>יחס</th><th>הפ'</th><th>נק'</th></tr>
                ${trs}
            </table>
        </div>`;
    });
}

function calculateAndRenderTopScorers() {
    if (typeof matchDatabase === 'undefined') return;
    const scorers = {};
    const teamInfo = {};
    for (const key in matchDatabase) {
        const match = matchDatabase[key];
        teamInfo[match.teamHome.name] = match.teamHome.flagCode;
        teamInfo[match.teamAway.name] = match.teamAway.flagCode;
        if (match.timeStatus === 'past' && match.goals && Array.isArray(match.goals)) {
            match.goals.forEach(goal => {
                if (goal.player.includes("עצמי")) return; 
                if (!scorers[goal.player]) scorers[goal.player] = { goals: 0, team: goal.team };
                scorers[goal.player].goals++;
            });
        }
    }
    const sortedScorers = Object.keys(scorers).map(name => {
        return { name: name, goals: scorers[name].goals, team: scorers[name].team, flag: teamInfo[scorers[name].team] };
    }).sort((a, b) => b.goals - a.goals);
    
    const container = document.getElementById('scorers-view');
    if (!container) return;
    let html = `<div class="scorers-card"><div class="scorers-title">⚽ טבלת מלך השערים</div>`;
    sortedScorers.slice(0, 10).forEach((s, index) => {
        let rankClass = index === 0 ? 'top-1' : index === 1 ? 'top-2' : index === 2 ? 'top-3' : '';
        html += `<div class="scorer-row">
            <div class="scorer-info"><div class="scorer-rank ${rankClass}">${index + 1}</div><div><div class="scorer-name">${s.name}</div><div class="scorer-team"><img src="https://flagcdn.com/w20/${s.flag}.png" alt="flag" style="border-radius:2px; width:16px;"> ${s.team}</div></div></div>
            <div class="scorer-goals">${s.goals}</div></div>`;
    });
    container.innerHTML = html + `</div>`;
}

function renderMatches() {
    const container = document.getElementById('matches-container');
    if (!container || typeof matchDatabase === 'undefined') return;
    let htmlChunks = [];

    for (const [matchId, data] of Object.entries(matchDatabase)) {
        const adv = data.advancedStats || { home: { xG: '-', restDays: '-', altitudeImpact: '-' }, away: { xG: '-', restDays: '-', altitudeImpact: '-' } };
        const prob = data.probabilities || { home: 33, draw: 34, away: 33 };
        const tHome = data.teamHome || { name: 'Unknown', flagCode: 'un', color: '#000', cards: { yellow: [], red: [] } };
        const tAway = data.teamAway || { name: 'Unknown', flagCode: 'un', color: '#000', cards: { yellow: [], red: [] } };
        const risk = data.matchRisk || 'Safe';
        
        const homeCardsHTML = (tHome.cards?.yellow || []).map(() => `<div class="card-icon yellow-card" onclick="openCardModal('${matchId}', 'teamHome', 'yellow')"></div>`).join('') + (tHome.cards?.red || []).map(() => `<div class="card-icon red-card" onclick="openCardModal('${matchId}', 'teamHome', 'red')"></div>`).join('');
        const awayCardsHTML = (tAway.cards?.yellow || []).map(() => `<div class="card-icon yellow-card" onclick="openCardModal('${matchId}', 'teamAway', 'yellow')"></div>`).join('') + (tAway.cards?.red || []).map(() => `<div class="card-icon red-card" onclick="openCardModal('${matchId}', 'teamAway', 'red')"></div>`).join('');

        const isPast = data.timeStatus === 'past';
        const currentScoreDisplay = isPast && data.score && data.score.actual ? data.score.actual : (data.score && data.score.prediction ? data.score.prediction : '-');
        const currentScoreLabel = isPast ? 'תוצאת סיום' : 'תחזית מוקדמת';
        
        let statusBarHTML = '';
        if (!isPast) {
            statusBarHTML = `<div class="status-bar status-pending-ui">⏳ ממתין לשריקה</div>`;
        } else {
            if (data.score && data.score.accuracyClass === 'exact') statusBarHTML = `<div class="status-bar status-exact-ui">✔️ פגיעה מדויקת</div>`;
            else if (data.score && data.score.accuracyClass === 'trend') statusBarHTML = `<div class="status-bar status-trend-ui">⚠️ פגיעה בכיוון</div>`;
            else statusBarHTML = `<div class="status-bar status-wrong-ui">❌ פספוס מוחלט</div>`;
        }

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

        let tabsHTML = '';
        let visHTML = '';
        let txtHTML = '';
        
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
                        <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:800;"><span>${homeTilt}%</span><span>${awayTilt}%</span></div>
                        <div class="field-tilt-bar"><div class="tilt-home" style="width:${homeTilt}%; background:${tHome.color}"></div><div class="tilt-away" style="width:${awayTilt}%; background:${tAway.color}"></div></div>
                    </div>
                </div>
                <div id="vis-${matchId}-sum" class="vis-content active">
                    <div class="chart-container"><canvas id="chart-${matchId}-sum"></canvas></div>
                </div>
            `;
            
            txtHTML = `
                <div id="txt-${matchId}-pred" class="txt-content">
                    <div class="insight-text-wrapper">
                        <div class="insight-header"><div class="insight-title">💡 תחזית המודל</div></div>
                        <div class="insight-text">${data.insight ? data.insight.prediction : ''}</div>
                    </div>
                </div>
                <div id="txt-${matchId}-adv" class="txt-content">
                    <div class="insight-text-wrapper">
                        <div class="insight-header"><div class="insight-title">🔬 משמעות הנתונים</div></div>
                        <div class="insight-text">מדדי העומק למעלה מציגים את הפער האמיתי בין הנבחרות לאחר ניטרול רעשים ואקראיות.</div>
                    </div>
                </div>
                <div id="txt-${matchId}-sum" class="txt-content active">
                    <div class="insight-text-wrapper">
                        <div class="insight-header"><div class="insight-title">🎯 פוסט-משחק</div></div>
                        <div class="insight-text">${data.insight ? data.insight.actual : ''}</div>
                    </div>
                    <div class="status-bar-wrapper">${statusBarHTML}</div>
                </div>
            `;
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
                        <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:800;"><span>${homeTilt}%</span><span>${awayTilt}%</span></div>
                        <div class="field-tilt-bar"><div class="tilt-home" style="width:${homeTilt}%; background:${tHome.color}"></div><div class="tilt-away" style="width:${awayTilt}%; background:${tAway.color}"></div></div>
                    </div>
                </div>
            `;
            
            txtHTML = `
                <div id="txt-${matchId}-pred" class="txt-content active">
                    <div class="insight-text-wrapper">
                        <div class="insight-header"><div class="insight-title">💡 תחזית המודל</div></div>
                        <div class="insight-text">${data.insight ? data.insight.prediction : ''}</div>
                    </div>
                    <div class="status-bar-wrapper">${statusBarHTML}</div>
                </div>
                <div id="txt-${matchId}-adv" class="txt-content">
                    <div class="insight-text-wrapper">
                        <div class="insight-header"><div class="insight-title">🔬 משמעות הנתונים</div></div>
                        <div class="insight-text">המודל מבסס את התחזית על פערי ה-xGD והשליטה הצפויה במרכז המגרש (Field Tilt).</div>
                    </div>
                    <div class="status-bar-wrapper">${statusBarHTML}</div>
                </div>
            `;
        }

        const accuracyClassForActual = isPast && data.score ? 'is-actual ' + data.score.accuracyClass : '';

        const chunk = `
        <div class="match-card" data-time="${data.timeStatus}" data-stage="${data.stage}" data-md="${data.matchday || 1}">
            <div class="match-header">${data.dateText || '-'}</div>
            
            <div class="match-hero">
                <div class="team"><img src="https://flagcdn.com/w80/${tHome.flagCode}.png" class="team-flag" onclick="openSquadModal('${matchId}', 'teamHome')"><div class="team-name">${tHome.name}</div><div class="cards-container">${homeCardsHTML}</div></div>
                <div class="score-center"><div class="score-label" id="${matchId}-label">${currentScoreLabel}</div><div class="score-number ${accuracyClassForActual}" id="${matchId}-score" onclick="openGoalsModal('${matchId}')">${currentScoreDisplay}</div></div>
                <div class="team"><img src="https://flagcdn.com/w80/${tAway.flagCode}.png" class="team-flag" onclick="openSquadModal('${matchId}', 'teamAway')"><div class="team-name">${tAway.name}</div><div class="cards-container">${awayCardsHTML}</div></div>
            </div>
            
            <div class="match-probabilities">
                <div class="prob-labels">
                    <span style="color: var(--accent-cyan)">1: ${prob.home}%</span>
                    <span style="color: var(--text-muted)">X: ${prob.draw}%</span>
                    <span style="color: #ff4d4d">2: ${prob.away}%</span>
                </div>
                <div class="prob-bar-container">
                    <div class="prob-home" style="width: ${prob.home}%"></div>
                    <div class="prob-draw" style="width: ${prob.draw}%"></div>
                    <div class="prob-away" style="width: ${prob.away}%"></div>
                </div>
            </div>
            
            <div class="risk-container">${riskHTML}</div>
            
            <div class="vis-area">${visHTML}</div>
            <div class="inner-tabs">${tabsHTML}</div>
            <div class="text-area-wrapper">${txtHTML}</div>

        </div>`;
        htmlChunks.push(chunk);
    }

    container.innerHTML = htmlChunks.join('');

    Chart.defaults.color = '#cbd5e1'; Chart.defaults.font.family = 'Heebo';
    const opts = { responsive: true, maintainAspectRatio: false, scales: { r: { angleLines: { color: 'rgba(255,255,255,0.15)', lineWidth: 1.5 }, grid: { color: 'rgba(255,255,255,0.15)', lineWidth: 1.5 }, pointLabels: { font: { size: 10, weight: '800' }, color: '#e2e8f0' }, ticks: { display: false, min: 0, max: 100 } } }, plugins: { legend: { display: false } } };
    const lbls = ['טכניקה', 'החזקה', 'נייחים', 'מנטלי', 'פיזיות', 'איכות סגל'];

    setTimeout(() => {
        for (const [matchId, data] of Object.entries(matchDatabase)) {
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

window.switchCardTab = function(btn, cardId, tabType, scoreText, labelText, accuracyLevel) { 
    const card = btn.closest('.match-card');
    
    card.querySelectorAll('.inner-tab-btn').forEach(b => b.classList.remove('active')); 
    btn.classList.add('active');
    
    card.querySelectorAll('.vis-content').forEach(v => v.classList.remove('active'));
    const activeVis = card.querySelector(`#vis-${cardId}-${tabType}`);
    if(activeVis) activeVis.classList.add('active');

    card.querySelectorAll('.txt-content').forEach(t => t.classList.remove('active'));
    const activeTxt = card.querySelector(`#txt-${cardId}-${tabType}`);
    if(activeTxt) activeTxt.classList.add('active');
    
    const labelEl = card.querySelector(`.score-label`);
    const scoreEl = card.querySelector(`.score-number`); 
    labelEl.innerText = labelText; 
    scoreEl.innerText = scoreText; 
    scoreEl.classList.remove('is-actual', 'exact', 'trend', 'wrong'); 
    
    if(tabType === 'sum' || (tabType === 'adv' && accuracyLevel)) { 
        scoreEl.classList.add('is-actual'); 
        if (accuracyLevel) { 
            scoreEl.classList.add(accuracyLevel); 
            if(accuracyLevel === 'exact') labelEl.style.color = 'var(--color-exact)'; 
            else if(accuracyLevel === 'trend') labelEl.style.color = 'var(--color-trend)'; 
            else if(accuracyLevel === 'wrong') labelEl.style.color = 'var(--color-wrong)'; 
        } 
    } else { 
        labelEl.style.color = 'var(--accent-cyan)'; 
    } 
}

window.renderBracket = function() {
    const container = document.getElementById('dynamic-bracket');
    if (!container || typeof knockoutBracket === 'undefined') return;

    let html = '<div class="bracket-column round-of-32"><h3 class="round-title">32 האחרונות</h3>';
    
    knockoutBracket.roundOf32.forEach(match => {
        const t1 = match.team1;
        const t2 = match.team2;
        
        const team1HTML = t1.flag === 'un' 
            ? `<div class="bracket-team"><div class="team-info"><div class="team-name" style="font-size:1.1rem; color: var(--text-muted); text-shadow:none;">${t1.name}</div><div class="team-subtitle" style="text-shadow:none; color: #555;">${t1.status}</div></div></div>`
            : `<div class="bracket-team" onclick="openTeamJourney('${t1.name}', '${t1.flag}')"><div class="flag-bg" style="background-image: url('https://flagcdn.com/w320/${t1.flag}.png');"></div><div class="team-info"><div class="team-name">${t1.name}</div><div class="team-subtitle">${t1.status}</div></div><span class="score"></span></div>`;
            
        const team2HTML = t2.flag === 'un' 
            ? `<div class="bracket-team"><div class="team-info"><div class="team-name" style="font-size:1.1rem; color: var(--text-muted); text-shadow:none;">${t2.name}</div><div class="team-subtitle" style="text-shadow:none; color: #555;">${t2.status}</div></div></div>`
            : `<div class="bracket-team" onclick="openTeamJourney('${t2.name}', '${t2.flag}')"><div class="flag-bg" style="background-image: url('https://flagcdn.com/w320/${t2.flag}.png');"></div><div class="team-info"><div class="team-name">${t2.name}</div><div class="team-subtitle">${t2.status}</div></div><span class="score"></span></div>`;

        html += `<div class="bracket-match ${t1.flag === 'un' && t2.flag === 'un' ? 'empty-match' : ''}">
            ${team1HTML}
            ${team2HTML}
        </div>`;
    });
    
    html += '</div>';
    
    html += '<div class="bracket-column round-of-16"><h3 class="round-title">שמינית גמר</h3>';
    for(let i=1; i<=6; i++) {
        html += `<div class="bracket-match empty-match">
                    <div class="bracket-team"><div class="team-info"><div class="team-name" style="font-size:1.1rem; text-shadow:none; color: var(--text-muted);">מנצחת משחק ${i*2-1}</div></div></div>
                    <div class="bracket-team"><div class="team-info"><div class="team-name" style="font-size:1.1rem; text-shadow:none; color: var(--text-muted);">מנצחת משחק ${i*2}</div></div></div>
                </div>`;
    }
    html += '</div>';

    container.innerHTML = html;
}

window.openModal = function(title, contentHTML) { 
    const modal = document.getElementById('infoModal');
    if(modal) { document.getElementById('modalTitle').innerHTML = title; document.getElementById('modalBody').innerHTML = contentHTML; modal.style.display = 'flex'; }
}
window.closeModal = function(e) { if(e) e.preventDefault(); const modal = document.getElementById('infoModal'); if(modal) modal.style.display = 'none'; }

window.openTeamJourney = function(teamName, flagCode) {
    const modal = document.getElementById('teamJourneyModal');
    if (!modal) return;
    document.getElementById('journey-title').innerText = teamName;
    const headerElement = document.getElementById('journey-header');
    headerElement.style.backgroundImage = `url('https://flagcdn.com/w640/${flagCode}.png')`;
    
    let timelineHTML = '';
    let matchesPlayed = 0, goalsFor = 0, goalsAgainst = 0, xgFor = 0, xgAgainst = 0;

    for (const key in matchDatabase) {
        const m = matchDatabase[key];
        if ((m.teamHome.name === teamName || m.teamAway.name === teamName) && m.timeStatus === 'past') {
            matchesPlayed++;
            const isHome = m.teamHome.name === teamName;
            const opponentName = isHome ? m.teamAway.name : m.teamHome.name;
            const opponentFlag = isHome ? m.teamAway.flagCode : m.teamHome.flagCode;
            
            let gUs = 0, gThem = 0;
            if (m.score && m.score.actual.includes('-')) {
                const scores = m.score.actual.split('-');
                gUs = isHome ? parseInt(scores[0]) : parseInt(scores[1]);
                gThem = isHome ? parseInt(scores[1]) : parseInt(scores[0]);
                if (!isNaN(gUs)) goalsFor += gUs;
                if (!isNaN(gThem)) goalsAgainst += gThem;
            }
            if (m.advancedStats) {
                const xgUs = parseFloat(isHome ? m.advancedStats.home.xG : m.advancedStats.away.xG);
                const xgThem = parseFloat(isHome ? m.advancedStats.away.xG : m.advancedStats.home.xG);
                if (!isNaN(xgUs)) xgFor += xgUs;
                if (!isNaN(xgThem)) xgAgainst += xgThem;
            }

            let resClass = 'res-draw';
            let resText = 'תיקו';
            if (gUs > gThem) { resClass = 'res-win'; resText = 'ניצחון'; }
            else if (gUs < gThem) { resClass = 'res-loss'; resText = 'הפסד'; }

            timelineHTML += `
            <div class="timeline-item">
                <div class="timeline-date">${m.dateText} | מחזור ${m.matchday}</div>
                <div class="timeline-matchup">
                    <img src="https://flagcdn.com/w40/${opponentFlag}.png" alt="vs"> 
                    <span>נגד ${opponentName}</span>
                </div>
                <div class="timeline-res ${resClass}">${resText} (${gUs} - ${gThem})</div>
            </div>`;
        }
    }

    if (matchesPlayed === 0) timelineHTML = '<div class="timeline-item">אין נתונים ממשחקי עבר.</div>';

    const xgDiff = (xgFor - xgAgainst).toFixed(2);
    const attEff = xgFor > 0 ? (goalsFor / xgFor).toFixed(2) : '0.00';
    const defEff = goalsAgainst > 0 ? (xgAgainst / goalsAgainst).toFixed(2) : (xgAgainst > 0 ? 'מושלם' : '0.00');
    
    let effIcon = '';
    if (parseFloat(attEff) > 1.2) effIcon = '🔥';
    else if (parseFloat(attEff) < 0.8 && parseFloat(attEff) > 0) effIcon = '❄️';

    document.getElementById('journey-stats').innerHTML = `
        <div class="geek-stat-box"><div class="geek-stat-val">${goalsFor}</div><div class="geek-stat-lbl">שערי זכות</div></div>
        <div class="geek-stat-box"><div class="geek-stat-val">${xgFor.toFixed(2)}</div><div class="geek-stat-lbl">xG מיוצר</div></div>
        <div class="geek-stat-box"><div class="geek-stat-val" style="color: ${xgDiff > 0 ? 'var(--color-exact)' : 'var(--color-wrong)'}">${xgDiff > 0 ? '+'+xgDiff : xgDiff}</div><div class="geek-stat-lbl">xGD (פער xG)</div></div>
        <div class="geek-stat-box"><div class="geek-stat-val">${xgAgainst.toFixed(2)}</div><div class="geek-stat-lbl">xGA (צפי ספיגה)</div></div>
        <div class="geek-stat-box"><div class="geek-stat-val">${attEff} ${effIcon}</div><div class="geek-stat-lbl">יעילות התקפית</div></div>
        <div class="geek-stat-box"><div class="geek-stat-val">${defEff}</div><div class="geek-stat-lbl">יעילות הגנתית</div></div>
    `;
    document.getElementById('journey-timeline').innerHTML = timelineHTML;
    modal.style.display = 'flex';
}

window.closeJourneyModal = function(e) { 
    if(e) e.preventDefault(); 
    const modal = document.getElementById('teamJourneyModal'); 
    if(modal) modal.style.display = 'none'; 
}

window.openGoalsModal = function(matchId) { 
    const scoreEl = document.getElementById(`${matchId}-score`); 
    if(!scoreEl || !scoreEl.classList.contains('is-actual')) return; 
    const data = matchDatabase[matchId]; 
    let html = ''; 
    (data.goals || []).forEach(g => { html += `<div class="goal-item"><span>⚽ ${g.player} (${g.minute})</span><span style="color: var(--text-muted); font-size:0.85rem">${g.team}</span></div>`; }); 
    if(!data.goals || data.goals.length === 0) html = "<div style='text-align:center'>0-0 (אין שערים)</div>"; 
    openModal(`פירוט שערים - ${data.teamHome.name} מול ${data.teamAway.name}`, html); 
}
window.openSquadModal = function(matchId, side) { 
    const data = matchDatabase[matchId]; const squadKey = side === 'teamHome' ? 'home' : 'away'; 
    if(!data.squads || !data.squads[squadKey] || !data.squads[squadKey].predicted || data.squads[squadKey].predicted.length === 0) { openModal("סגל", "נתוני סגל מפורטים יועלו בהמשך הטורניר."); return; } 
    const predHTML = data.squads[squadKey].predicted.map(p => `<li>${p}</li>`).join(''); 
    const actualHTML = data.squads[squadKey].actual && data.squads[squadKey].actual.length > 0 ? data.squads[squadKey].actual.map(p => `<li class="${p.includes('(חריגה)') ? 'diff-player' : ''}">${p}</li>`).join('') : "<li>טרם נקבע</li>"; 
    const html = `<div class="squad-grid"><div class="squad-col"><h4>תחזית המודל</h4><ul class="squad-list">${predHTML}</ul></div><div class="squad-col"><h4>שיחקו בפועל</h4><ul class="squad-list">${actualHTML}</ul></div></div>`; 
    openModal(`סגל נבחרת ${data[side].name}`, html); 
}
window.openCardModal = function(matchId, side, type) { 
    const data = matchDatabase[matchId]; const iconColor = type === 'yellow' ? '#f1c40f' : '#e74c3c'; 
    let html = ''; 
    (data[side].cards && data[side].cards[type] ? data[side].cards[type] : []).forEach(c => { html += `<div class="card-detail" style="margin-bottom: 10px;"><div style="width: 15px; height: 20px; background-color: ${iconColor}; border-radius: 3px;"></div><span>${c}</span></div>`; }); 
    openModal(`פירוט כרטיסים - ${data[side].name}`, html); 
}

let currentTimeFilter = 'all'; 
let currentStageFilter = 'all';
let currentMdFilter = 'all'; 

window.applyFilters = function() { 
    document.querySelectorAll('.match-card').forEach(card => { 
        const tMatch = (currentTimeFilter === 'all' || currentTimeFilter === card.getAttribute('data-time')); 
        const sMatch = (currentStageFilter === 'all' || currentStageFilter === card.getAttribute('data-stage')); 
        const mMatch = (currentMdFilter === 'all' || currentMdFilter === card.getAttribute('data-md')); 
        const isKnockout = currentMdFilter === 'ko';

        if (tMatch && sMatch && mMatch && !isKnockout) { 
            if (card.style.display === 'none' || card.style.display === '') card.style.display = 'flex'; 
            card.classList.remove('animate-in'); 
            void card.offsetWidth; 
            card.classList.add('animate-in'); 
        } else { 
            card.classList.remove('animate-in'); 
            card.style.display = 'none'; 
        } 
    }); 
}

window.addEventListener('DOMContentLoaded', () => { 
    renderStats(); renderMatches(); 
    
    const urlParams = new URLSearchParams(window.location.search);
    
    const mdParam = urlParams.get('md');
    if (mdParam) {
        currentMdFilter = mdParam;
        document.querySelectorAll('.submenu-btn').forEach(b => b.classList.remove('active'));
        const btn = document.querySelector(`.submenu-btn[data-md="${mdParam}"]`);
        if (btn) btn.classList.add('active');
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
    
    applyFilters(); 
    if(document.getElementById('bracket-view').style.display === 'block') renderBracket();
    
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
        currentMdFilter = e.target.getAttribute('data-md'); 
        
        if (currentMdFilter === 'ko') {
            switchView('bracket');
        } else {
            if (document.getElementById('matches-view').style.display === 'none') switchView('matches');
            applyFilters(); 
        }
        closeMobileMenuIfOpen();
    }));
});