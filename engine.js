// engine.js

document.addEventListener('DOMContentLoaded', () => {
    if (typeof matchDatabase !== 'undefined') {
        renderMatches();
        renderStats();
    }
});

// פתיחה וסגירת תפריט במובייל
window.toggleMobileMenu = function() {
    const sidebar = document.getElementById('main-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.toggle('open');
    overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
}

function closeMobileMenuIfOpen() {
    const sidebar = document.getElementById('main-sidebar');
    if (window.innerWidth <= 900 && sidebar.classList.contains('open')) {
        toggleMobileMenu();
    }
}

// ניווט
window.switchView = function(viewName) {
    closeMobileMenuIfOpen();
    document.getElementById('matches-view').style.display = 'none';
    document.getElementById('standings-view').style.display = 'none';
    document.getElementById('scorers-view').style.display = 'none';
    
    document.querySelectorAll('.sidebar .nav-link').forEach(link => link.classList.remove('active'));
    document.getElementById('nav-' + viewName).classList.add('active');
    document.getElementById(viewName + '-view').style.display = 'block';
}

// עדכון נתונים למעלה
function renderStats() {
    let past = 0, exact = 0, trend = 0;
    for (const key in matchDatabase) {
        if (matchDatabase[key].timeStatus === 'past') {
            past++;
            if (matchDatabase[key].score.accuracyClass === 'exact') exact++;
            if (matchDatabase[key].score.accuracyClass === 'trend') trend++;
        }
    }
    document.getElementById('stat-total').innerText = past;
    document.getElementById('stat-exact').innerText = past ? Math.round((exact / past) * 100) + '%' : '0%';
    document.getElementById('stat-trend').innerText = past ? Math.round((trend / past) * 100) + '%' : '0%';
    document.getElementById('stat-overall').innerText = past ? Math.round(((exact + trend) / past) * 100) + '%' : '0%';
}

// ציור הכרטיסיות
function renderMatches() {
    const container = document.getElementById('matches-container');
    let html = '';
    let chartsToInit = [];

    // מיון המשחקים לפי מזהה המספר שלהם כדי שיופיעו בסדר כרונולוגי נכון
    const sortedMatches = Object.entries(matchDatabase).sort((a, b) => {
        const numA = parseInt(a[0].replace(/\D/g, '')) || 0;
        const numB = parseInt(b[0].replace(/\D/g, '')) || 0;
        return numA - numB;
    });

    for (const [id, data] of sortedMatches) {
        const isPast = data.timeStatus === 'past';
        const scoreActual = isPast ? data.score.actual : data.score.prediction;
        const scoreClass = isPast ? data.score.accuracyClass : '';
        const advH = data.advancedStats?.home || { xG: '-', restDays: '-' };
        const advA = data.advancedStats?.away || { xG: '-', restDays: '-' };

        html += `
        <div class="match-card match-item" data-stage="${data.stage}" data-time="${data.timeStatus}">
            <div class="match-header">${data.dateText}</div>
            <div class="match-hero">
                <div class="team">
                    <img src="https://flagcdn.com/w80/${data.teamHome.flagCode}.png" class="team-flag">
                    <div class="team-name">${data.teamHome.name}</div>
                </div>
                <div class="score-center">
                    <div class="score-label" id="lbl-${id}">${isPast ? 'סיום' : 'תחזית'}</div>
                    <div class="score-number ${scoreClass}">${scoreActual}</div>
                </div>
                <div class="team">
                    <img src="https://flagcdn.com/w80/${data.teamAway.flagCode}.png" class="team-flag">
                    <div class="team-name">${data.teamAway.name}</div>
                </div>
            </div>
            
            <div class="inner-tabs">
                <button class="inner-tab-btn active" onclick="switchCardTab(this, '${id}', 'pred', '${data.score.prediction}', 'תחזית')">תחזית</button>
                ${isPast ? `<button class="inner-tab-btn" onclick="switchCardTab(this, '${id}', 'sum', '${data.score.actual}', 'סיום')">סיכום</button>` : ''}
                <button class="inner-tab-btn" onclick="switchCardTab(this, '${id}', 'adv', '${scoreActual}', '${isPast ? 'סיום' : 'תחזית'}')">עומק</button>
            </div>

            <div id="${id}-pred" class="tab-content active">
                <div class="insight-title">🔑 אקס-פקטור</div>
                <div class="insight-text">${data.insight.prediction}</div>
                <div class="chart-container">
                    <canvas id="chart-${id}"></canvas>
                </div>
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
        chartsToInit.push(id);
    }
    
    container.innerHTML = html;

    // ציור הרדארים (Chart.js)
    Chart.defaults.color = '#9aa7b5';
    Chart.defaults.font.family = "'Heebo', sans-serif";
    
    chartsToInit.forEach(id => {
        const d = matchDatabase[id];
        new Chart(document.getElementById(`chart-${id}`), {
            type: 'radar',
            data: {
                labels: ['חדירה', 'החזקה', 'נייחים', 'הגנה', 'פיזיות', 'אגפים'],
                datasets: [
                    { data: d.radarStats?.home || [50,50,50,50,50,50], borderColor: d.teamHome.color, backgroundColor: `${d.teamHome.color}33`, borderWidth: 2 },
                    { data: d.radarStats?.away || [50,50,50,50,50,50], borderColor: d.teamAway.color, backgroundColor: `${d.teamAway.color}33`, borderWidth: 2 }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false, scales: { r: { ticks: { display: false }, pointLabels: { color: '#cbd5e1' } } }, plugins: { legend: { display: false } } }
        });
    });
}

// החלפת טאבים
window.switchCardTab = function(btn, matchId, tabId, scoreText, labelText) {
    const card = btn.closest('.match-card');
    card.querySelectorAll('.inner-tab-btn').forEach(b => b.classList.remove('active'));
    card.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    card.querySelector(`#${matchId}-${tabId}`).classList.add('active');
    
    const labelEl = card.querySelector('.score-label');
    const scoreEl = card.querySelector('.score-number');
    if(labelEl) labelEl.innerText = labelText;
    if(scoreEl) scoreEl.innerText = scoreText;
}

// סינון
window.applyFilter = function(filter) {
    const btn = event.target;
    btn.closest('.filter-group').querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.match-item').forEach(card => {
        const stage = card.getAttribute('data-stage');
        const time = card.getAttribute('data-time');
        
        let show = false;
        if (filter === 'all') show = true;
        else if (filter === time || filter === stage) show = true;
        
        card.style.display = show ? 'flex' : 'none';
    });
}
