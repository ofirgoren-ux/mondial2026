// ==========================================
// engine.js - המנוע הראשי של הדשבורד
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
        if (match.timeStatus === 'past' && match.score.actual.includes('-')) {
            const group = match.stage;
            const tH = match.teamHome.name, tA = match.teamAway.name;
            if(standings[group] && standings[group][tH] && standings[group][tA]) {
                const scores = match.score.actual.split('-');
                const gH = parseInt(scores[0].trim());
                const gA = parseInt(scores[1].trim());

                standings[group][tH].p++; standings[group][tH].gf += gH; standings[group][tH].ga += gA;
                standings[group][tA].p++; standings[group][tA].gf += gA; standings[group][tA].ga += gH;

                if (gH > gA) { standings[group][tH].w++; standings[group][tH].pts += 3; standings[group][tA].l++; } 
                else if (gA > gH) { standings[group][tA].w++; standings[group][tA].pts += 3; standings[group][tH].l++; } 
                else { standings[group][tH].d++; standings[group][tA].d++; standings[group][tH].pts += 1; standings[group][tA].pts += 1; }
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
        if (match.timeStatus === 'past' && match.goals) {
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

        // בנייה דינמית של הטאבים תלוית מצב המשחק (עבר או עתיד)
        let tabsHTML = '';
        let contentHTML = '';

        if (isPast) {
            tabsHTML = `
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'pred', '${data.score.prediction}', 'תחזית ו-xG מוקדם', '')">תחזית</button>
                <button class="inner-tab-btn active" onclick="switchCardTab(this, '${matchId}', 'sum', '${data.score.actual}', 'תוצאת סיום', '${data.score.accuracyClass}')">סיכום</button>
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'adv', '${data.score.actual}', 'תוצאת סיום', '${data.score.accuracyClass}')">עומק</button>
            `;
            contentHTML = `
                <div id="${matchId}-pred" class="tab-content"><div class="insight-header"><div class="insight-title">🔑 אקס-פקטור מקדימה</div>${riskHTML}</div><div class="insight-text">${data.insight.prediction}</div></div>
                <div id="${matchId}-sum" class="tab-content active"><div class="insight-title">🎯 פוסט-משחק</div><div class="insight-text">${data.insight.actual}</div>${statusBarHTML}</div>
                <div id="${matchId}-adv" class="tab-content">
                    <div class="insight-title">🔬 מדדי עומק (Advanced)</div>
                    <table class="adv-stats-table">
                        <tr><td class="adv-home">${adv.home.xG}</td><td class="adv-metric">xG (צפי שערים)</td><td class="adv-away">${adv.away.xG}</td></tr>
                        <tr><td class="adv-home">${adv.home.restDays}</td><td class="adv-metric">ימי מנוחה</td><td class="adv-away">${adv.away.restDays}</td></tr>
                        <tr><td class="adv-home">${adv.home.altitudeImpact}</td><td class="adv-metric">אקלים וסביבה</td><td class="adv-away">${adv.away.altitudeImpact}</td></tr>
                    </table>
                </div>
            `;
        } else {
            tabsHTML = `
                <button class="inner-tab-btn active" onclick="switchCardTab(this, '${matchId}', 'pred', '${data.score.prediction}', 'תחזית ו-xG מוקדם', '')">תחזית</button>
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${matchId}', 'adv', '${data.score.prediction}', 'תחזית ו-xG מוקדם', '')">עומק</button>
            `;
            contentHTML = `
                <div id="${matchId}-pred" class="tab-content active"><div class="insight-header"><div class="insight-title">🔑 אקס-פקטור מקדימה</div>${riskHTML}</div><div class="insight-text">${data.insight.prediction}</div>${statusBarHTML}</div>
                <div id="${matchId}-adv" class="tab-content">
                    <div class="insight-title">🔬 מדדי עומק (Advanced)</div>
                    <table class="adv-stats-table">
                        <tr><td class="adv-home">${adv.home.xG}</td><td class="adv-metric">xG (צפי שערים)</td><td class="adv-away">${adv.away.xG}</td></tr>
                        <tr><td class="adv-home">${adv.home.restDays}</td><td class="adv-metric">ימי מנוחה</td><td class="adv-away">${adv.away.restDays}</td></tr>
                        <tr><td class="adv-home">${adv.home.altitudeImpact}</td><td class="adv-metric">אקלים וסביבה</td><td class="adv-away">${adv.away.altitudeImpact}</td></tr>
                    </table>
                </div>
            `;
        }

        const chunk = `
        <div class="match-card" data-time="${data.timeStatus}" data-stage="${data.stage}" data-md="${data.matchday || 1}">
            <div class="match-header">${data.dateText}</div>
            <div class="match-hero">
                <div class="team"><img src="https://flagcdn.com/w80/${tHome.flagCode}.png" class="team-flag" onclick="openSquadModal('${matchId}', 'teamHome')"><div class="team-name">${tHome.name}</div><div class="cards-container">${homeCardsHTML}</div></div>
                <div class="score-center"><div class="score-label" id="${matchId}-label">${currentScoreLabel}</div><div class="score-number ${isPast ? 'is-actual ' + data.score.accuracyClass : ''}" id="${matchId}-score" onclick="openGoalsModal('${matchId}')">${currentScoreDisplay}</div></div>
                <div class="team"><img src="https://flagcdn.com/w80/${tAway.flagCode}.png" class="team-flag" onclick="openSquadModal('${matchId}', 'teamAway')"><div class="team-name">${tAway.name}</div><div class="cards-container">${awayCardsHTML}</div></div>
            </div>
            
            <div class="match-probabilities">
                <div class="prob-labels" style="direction: ltr; unicode-bidi: embed;">
                    <span style="color: var(--accent-cyan)">1: ${prob.home}%</span>
                    <span style="color: var(--text-muted)">X: ${prob.draw}%</span>
                    <span style="color: #ff4d4d">2: ${prob.away}%</span>
                </div>
                <div class="prob-bar-container" style="direction: ltr;">
                    <div class="prob-home" style="width: ${prob.home}%"></div>
                    <div class="prob-draw" style="width: ${prob.draw}%"></div>
                    <div class="prob-away" style="width: ${prob.away}%"></div>
                </div>
            </div>

            <div class="chart-container"><canvas id="chart-${matchId}"></canvas></div>
            
            <div class="inner-tabs">${tabsHTML}</div>
            ${contentHTML}
        </div>`;
        htmlChunks.push(chunk);
    }

    container.innerHTML = htmlChunks.join('');

    Chart.defaults.color = '#cbd5e1'; Chart.defaults.font.family = 'Heebo';
    const opts = { responsive: true, maintainAspectRatio: false, scales: { r: { angleLines: { color: 'rgba(255,255,255,0.15)', lineWidth: 1.5 }, grid: { color: 'rgba(255,255,255,0.15)', lineWidth: 1.5 }, pointLabels: { font: { size: 10, weight: '800' }, color: '#e2e8f0' }, ticks: { display: false, min: 0, max: 100 } } }, plugins: { legend: { display: false } } };
    const lbls = ['טכניקה', 'החזקה', 'נייחים', 'מנטלי', 'פיזיות', 'איכות סגל'];

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

// --- מודאלים ---
window.openModal = function(title, contentHTML) { 
    const modal = document.getElementById('infoModal');
    if(modal) { document.getElementById('modalTitle').innerHTML = title; document.getElementById('modalBody').innerHTML = contentHTML; modal.style.display = 'flex'; }
}
window.closeModal = function(e) { if(e) e.preventDefault(); const modal = document.getElementById('infoModal'); if(modal) modal.style.display = 'none'; }

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
    const actualHTML = data.squads[squadKey].actual.length > 0 ? data.squads[squadKey].actual.map(p => `<li class="${p.includes('(חריגה)') ? 'diff-player' : ''}">${p}</li>`).join('') : "<li>טרם נקבע</li>"; 
    const html = `<div class="squad-grid"><div class="squad-col"><h4>תחזית המודל</h4><ul class="squad-list">${predHTML}</ul></div><div class="squad-col"><h4>שיחקו בפועל</h4><ul class="squad-list">${actualHTML}</ul></div></div>`; 
    openModal(`סגל נבחרת ${data[side].name}`, html); 
}
window.openCardModal = function(matchId, side, type) { 
    const data = matchDatabase[matchId]; const iconColor = type === 'yellow' ? '#f1c40f' : '#e74c3c'; 
    let html = ''; 
    (data[side].cards[type] || []).forEach(c => { html += `<div class="card-detail" style="margin-bottom: 10px;"><div style="width: 15px; height: 20px; background-color: ${iconColor}; border-radius: 3px;"></div><span>${c}</span></div>`; }); 
    openModal(`פירוט כרטיסים - ${data[side].name}`, html); 
}

// --- ניווט טאבים בכרטיסיות ---
window.switchCardTab = function(btn, cardId, tabType, scoreText, labelText, accuracyLevel) { 
    const card = btn.closest('.match-card');
    const tabs = card.querySelectorAll('.tab-content');
    const btns = card.querySelectorAll('.inner-tab-btn'); 
    
    btns.forEach(b => b.classList.remove('active')); 
    tabs.forEach(t => t.classList.remove('active'));
    
    btn.classList.add('active');
    const activeTab = card.querySelector(`#${cardId}-${tabType}`);
    if(activeTab) activeTab.classList.add('active');
    
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

// --- מערכת הפילטרים ---
let currentTimeFilter = 'all'; 
let currentStageFilter = 'all';
let currentMdFilter = 'all'; 

window.applyFilters = function() { 
    document.querySelectorAll('.match-card').forEach(card => { 
        const tMatch = (currentTimeFilter === 'all' || currentTimeFilter === card.getAttribute('data-time')); 
        const sMatch = (currentStageFilter === 'all' || currentStageFilter === card.getAttribute('data-stage')); 
        const mMatch = (currentMdFilter === 'all' || currentMdFilter === card.getAttribute('data-md')); 

        if (tMatch && sMatch && mMatch) { 
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
    renderStats(); renderMatches(); applyFilters(); 
    
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
        if (document.getElementById('matches-view').style.display === 'none') switchView('matches');
        applyFilters(); 
        closeMobileMenuIfOpen();
    }));
});