window.renderKnockout = function() {
    const container = document.getElementById('dynamic-bracket');
    if (!container || !window.knockoutBracket) return;
    
    container.innerHTML = '';
    container.className = "tournament-bracket";
    
    Object.keys(window.knockoutBracket).forEach(key => {
        const roundData = window.knockoutBracket[key];
        const col = document.createElement('div');
        col.className = 'bracket-column round-' + key;
        
        let title = '';
        if (key === 'roundOf32') title = '32 הגדולות';
        else if (key === 'roundOf16') title = 'שמינית גמר';
        else if (key === 'quarterFinals') title = 'רבע גמר';
        else if (key === 'semiFinals') title = 'חצי גמר';
        else if (key === 'final') title = 'הגמר הגדול';

        col.innerHTML = `<div class="round-title">${title}</div>`;
        
        roundData.forEach((match, index) => {
            const matchDiv = document.createElement('div');
            matchDiv.className = 'bracket-match';
            
            let html = '';
            ['team1', 'team2'].forEach(t => {
                let team = match[t] || { name: 'TBD', score: '-', outcome: 'pending', flag: 'unknown' };
                let bgStyle = team.flag !== 'unknown' && team.flag !== 'un' ? `background-image: url('https://flagcdn.com/w160/${team.flag}.png')` : 'background: rgba(255,255,255,0.05);';
                
                html += `
                    <div class="bracket-team" onclick="openJourneyModal('${team.name}', '${team.flag}')">
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