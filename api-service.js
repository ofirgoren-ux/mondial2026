// המילון המדויק עם תוספות של וריאציות API (כמו כף ורדה)
const teamDictionary = {
    "South Africa": { he: "דרום אפריקה", flag: "za", color: "#007749" },
    "Canada": { he: "קנדה", flag: "ca", color: "#FF0000" },
    "Brazil": { he: "ברזיל", flag: "br", color: "#FFD700" },
    "Japan": { he: "יפן", flag: "jp", color: "#000555" },
    "Germany": { he: "גרמניה", flag: "de", color: "#FFFFFF" },
    "Paraguay": { he: "פרגוואי", flag: "py", color: "#D52B1E" },
    "Netherlands": { he: "הולנד", flag: "nl", color: "#F36C21" },
    "Morocco": { he: "מרוקו", flag: "ma", color: "#C1272D" },
    "Cote d'Ivoire": { he: "חוף השנהב", flag: "ci", color: "#FF8200" },
    "Ivory Coast": { he: "חוף השנהב", flag: "ci", color: "#FF8200" },
    "Norway": { he: "נורבגיה", flag: "no", color: "#C8102E" },
    "France": { he: "צרפת", flag: "fr", color: "#002654" },
    "Sweden": { he: "שוודיה", flag: "se", color: "#FFF200" },
    "Mexico": { he: "מקסיקו", flag: "mx", color: "#006341" },
    "Ecuador": { he: "אקוודור", flag: "ec", color: "#FFD100" },
    "England": { he: "אנגליה", flag: "gb-eng", color: "#FFFFFF" },
    "Congo DR": { he: "קונגו", flag: "cd", color: "#007A5E" },
    "DR Congo": { he: "קונגו", flag: "cd", color: "#007A5E" },
    "USA": { he: "ארצות הברית", flag: "us", color: "#002868" },
    "United States": { he: "ארצות הברית", flag: "us", color: "#002868" },
    "Bosnia and Herzegovina": { he: "בוסניה", flag: "ba", color: "#002F6C" },
    "Bosnia & Herzegovina": { he: "בוסניה", flag: "ba", color: "#002F6C" },
    "Belgium": { he: "בלגיה", flag: "be", color: "#E30613" },
    "Senegal": { he: "סנגל", flag: "sn", color: "#00853F" },
    "Portugal": { he: "פורטוגל", flag: "pt", color: "#E42518" },
    "Croatia": { he: "קרואטיה", flag: "hr", color: "#FF0000" },
    "Spain": { he: "ספרד", flag: "es", color: "#C60B1E" },
    "Austria": { he: "אוסטריה", flag: "at", color: "#EF3340" },
    "Switzerland": { he: "שווייץ", flag: "ch", color: "#FF0000" },
    "Algeria": { he: "אלג'יריה", flag: "dz", color: "#006233" },
    "Australia": { he: "אוסטרליה", flag: "au", color: "#FFCD00" },
    "Egypt": { he: "מצרים", flag: "eg", color: "#CE1126" },
    "Argentina": { he: "ארגנטינה", flag: "ar", color: "#43A1D5" },
    "Cabo Verde": { he: "כף ורדה", flag: "cv", color: "#003893" },
    "Cape Verde": { he: "כף ורדה", flag: "cv", color: "#003893" },
    "Cape Verde Islands": { he: "כף ורדה", flag: "cv", color: "#003893" },
    "Colombia": { he: "קולומביה", flag: "co", color: "#FCD116" },
    "Ghana": { he: "גאנה", flag: "gh", color: "#006B3F" },
    "Korea Republic": { he: "קוריאה הדרומית", flag: "kr", color: "#C60C30" },
    "South Korea": { he: "קוריאה הדרומית", flag: "kr", color: "#C60C30" }
};

function getTeamInfo(englishName) {
    if (!englishName) return { he: "לא נקבע", flag: "un", color: "#888888" };
    return teamDictionary[englishName] || { he: englishName, flag: "un", color: "#888888" };
}

async function fetchLiveUpdates() {
    const apiKey = '52fe625c25992477365139c656148855'; 
    const url = 'https://v3.football.api-sports.io/fixtures?league=1&season=2026';

    try {
        const response = await fetch(url, { method: 'GET', headers: { 'x-apisports-key': apiKey } });
        if (!response.ok) throw new Error("שגיאה בחיבור לשרת הלייב");
        
        const data = await response.json();
        if (!window.matchDatabase || !data.response) return;

        let apiMatches = data.response.map(item => ({
            apiHome: getTeamInfo(item.teams.home.name),
            apiAway: getTeamInfo(item.teams.away.name),
            item: item
        }));

        apiMatches.forEach(apiM => {
            let matchedId = null;

            for (let id in window.matchDatabase) {
                let dbMatch = window.matchDatabase[id];
                let hName = dbMatch.teamHome ? dbMatch.teamHome.name : undefined;
                let aName = dbMatch.teamAway ? dbMatch.teamAway.name : undefined;

                let isExactMatch = (hName === apiM.apiHome.he && aName === apiM.apiAway.he);
                let isReversedMatch = (hName === apiM.apiAway.he && aName === apiM.apiHome.he);

                if (isExactMatch || isReversedMatch) {
                    matchedId = id;
                    let item = apiM.item;

                    dbMatch.status = item.fixture.status.short;
                    dbMatch.score = dbMatch.score || {};
                    dbMatch.score.fulltime = item.score.fulltime;
                    dbMatch.score.extratime = item.score.extratime;
                    dbMatch.score.penalty = item.score.penalty;

                    if (['FT', 'AET', 'PEN', '1H', '2H', 'HT', 'ET'].includes(dbMatch.status)) {
                        let homeGoals = item.goals.home !== null ? item.goals.home : 0;
                        let awayGoals = item.goals.away !== null ? item.goals.away : 0;
                        
                        if (isExactMatch) {
                            dbMatch.score.actual = `${homeGoals} - ${awayGoals}`;
                            dbMatch.goals = { home: homeGoals, away: awayGoals };
                        } else if (isReversedMatch) {
                            dbMatch.score.actual = `${awayGoals} - ${homeGoals}`;
                            dbMatch.goals = { home: awayGoals, away: homeGoals };
                        }

                        if (['FT', 'AET', 'PEN'].includes(dbMatch.status)) {
                            dbMatch.timeStatus = 'past';
                        } else {
                            dbMatch.timeStatus = 'live'; 
                        }
                    } else if (dbMatch.status === 'NS') {
                        dbMatch.timeStatus = 'future';
                    }
                    break; 
                }
            }

            if (!matchedId) {
                let apiRound = apiM.item.league.round || '';
                let targetMd = null;
                
                if (apiRound.includes('16') || apiRound.includes('8th')) targetMd = 'r16';
                else if (apiRound.includes('Quarter')) targetMd = 'qf';
                else if (apiRound.includes('Semi')) targetMd = 'sf';
                else if (apiRound.includes('Final')) targetMd = 'final';

                if (targetMd) {
                    let newId = 'api_gen_' + apiM.item.fixture.id;
                    if (!window.matchDatabase[newId]) {
                        window.matchDatabase[newId] = {
                            matchday: targetMd,
                            stage: targetMd,
                            status: apiM.item.fixture.status.short,
                            timeStatus: (['FT', 'AET', 'PEN'].includes(apiM.item.fixture.status.short)) ? 'past' : (apiM.item.fixture.status.short === 'NS' ? 'future' : 'live'),
                            dateText: new Date(apiM.item.fixture.date).toLocaleDateString('he-IL') + ' | ' + new Date(apiM.item.fixture.date).toLocaleTimeString('he-IL', {hour: '2-digit', minute:'2-digit'}),
                            teamHome: apiM.apiHome,
                            teamAway: apiM.apiAway,
                            score: { prediction: '-', actual: '' },
                            probabilities: { home: 33, draw: 34, away: 33 },
                            advancedStats: { home: { xG: '-' }, away: { xG: '-' } },
                            insight: { prediction: 'ממתין לנתוני מודל (AI)...', actual: '' }
                        };
                    } else {
                        let genMatch = window.matchDatabase[newId];
                        genMatch.status = apiM.item.fixture.status.short;
                        if (['FT', 'AET', 'PEN', '1H', '2H', 'HT', 'ET'].includes(genMatch.status)) {
                            let homeGoals = apiM.item.goals.home !== null ? apiM.item.goals.home : 0;
                            let awayGoals = apiM.item.goals.away !== null ? apiM.item.goals.away : 0;
                            genMatch.score.actual = `${homeGoals} - ${awayGoals}`;
                            genMatch.timeStatus = ['FT', 'AET', 'PEN'].includes(genMatch.status) ? 'past' : 'live';
                        } else if (genMatch.status === 'NS') {
                            genMatch.timeStatus = 'future';
                        }
                    }
                }
            }
        });
        
        if (typeof renderMatches === 'function') renderMatches();
        if (typeof renderStats === 'function') renderStats();

    } catch (error) {
        console.error("שגיאה במשיכת נתוני לייב:", error);
    }
}

fetchLiveUpdates();