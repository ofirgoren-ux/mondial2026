const teamDictionary = {
    "Mexico": { he: "מקסיקו", flag: "mx", color: "#006341" },
    "South Africa": { he: "דרום אפריקה", flag: "za", color: "#007749" },
    "South Korea": { he: "קוריאה הדרומית", flag: "kr", color: "#C60C30" },
    "Korea Republic": { he: "קוריאה הדרומית", flag: "kr", color: "#C60C30" },
    "Czechia": { he: "צ'כיה", flag: "cz", color: "#ED1B24" },
    "Canada": { he: "קנדה", flag: "ca", color: "#FF0000" },
    "Bosnia and Herzegovina": { he: "בוסניה", flag: "ba", color: "#002F6C" },
    "Bosnia & Herzegovina": { he: "בוסניה", flag: "ba", color: "#002F6C" },
    "United States": { he: "ארצות הברית", flag: "us", color: "#002868" },
    "USA": { he: "ארצות הברית", flag: "us", color: "#002868" },
    "Paraguay": { he: "פרגוואי", flag: "py", color: "#D52B1E" },
    "Haiti": { he: "האיטי", flag: "ht", color: "#00209F" },
    "Scotland": { he: "סקוטלנד", flag: "gb-sct", color: "#005EB8" },
    "Australia": { he: "אוסטרליה", flag: "au", color: "#FFCD00" },
    "Turkiye": { he: "טורקיה", flag: "tr", color: "#E30A17" },
    "Türkiye": { he: "טורקיה", flag: "tr", color: "#E30A17" },
    "Brazil": { he: "ברזיל", flag: "br", color: "#FFD700" },
    "Morocco": { he: "מרוקו", flag: "ma", color: "#C1272D" },
    "Qatar": { he: "קטאר", flag: "qa", color: "#8A1538" },
    "Switzerland": { he: "שווייץ", flag: "ch", color: "#FF0000" },
    "Cote d'Ivoire": { he: "חוף השנהב", flag: "ci", color: "#FF8200" },
    "Ivory Coast": { he: "חוף השנהב", flag: "ci", color: "#FF8200" },
    "Ecuador": { he: "אקוודור", flag: "ec", color: "#FFD100" },
    "Germany": { he: "גרמניה", flag: "de", color: "#FFFFFF" },
    "Curacao": { he: "קוראסאו", flag: "cw", color: "#002B7F" },
    "Curaçao": { he: "קוראסאו", flag: "cw", color: "#002B7F" },
    "Netherlands": { he: "הולנד", flag: "nl", color: "#F36C21" },
    "Japan": { he: "יפן", flag: "jp", color: "#000555" },
    "Sweden": { he: "שוודיה", flag: "se", color: "#FFF200" },
    "Tunisia": { he: "תוניסיה", flag: "tn", color: "#E70013" },
    "Saudi Arabia": { he: "ערב הסעודית", flag: "sa", color: "#006C35" },
    "Uruguay": { he: "אורוגוואי", flag: "uy", color: "#75AADB" },
    "Spain": { he: "ספרד", flag: "es", color: "#C60B1E" },
    "Cabo Verde": { he: "כף ורדה", flag: "cv", color: "#003893" },
    "Cape Verde Islands": { he: "כף ורדה", flag: "cv", color: "#003893" },
    "IR Iran": { he: "איראן", flag: "ir", color: "#239F40" },
    "Iran": { he: "איראן", flag: "ir", color: "#239F40" },
    "New Zealand": { he: "ניו זילנד", flag: "nz", color: "#000000" },
    "Belgium": { he: "בלגיה", flag: "be", color: "#E30613" },
    "Egypt": { he: "מצרים", flag: "eg", color: "#CE1126" },
    "France": { he: "צרפת", flag: "fr", color: "#002654" },
    "Senegal": { he: "סנגל", flag: "sn", color: "#00853F" },
    "Iraq": { he: "עיראק", flag: "iq", color: "#007A3D" },
    "Norway": { he: "נורבגיה", flag: "no", color: "#C8102E" },
    "Argentina": { he: "ארגנטינה", flag: "ar", color: "#43A1D5" },
    "Algeria": { he: "אלג'יריה", flag: "dz", color: "#006233" },
    "Austria": { he: "אוסטריה", flag: "at", color: "#EF3340" },
    "Jordan": { he: "ירדן", flag: "jo", color: "#000000" },
    "Ghana": { he: "גאנה", flag: "gh", color: "#006B3F" },
    "Panama": { he: "פנמה", flag: "pa", color: "#DA291C" },
    "England": { he: "אנגליה", flag: "gb-eng", color: "#FFFFFF" },
    "Croatia": { he: "קרואטיה", flag: "hr", color: "#FF0000" },
    "Portugal": { he: "פורטוגל", flag: "pt", color: "#E42518" },
    "Congo DR": { he: "קונגו", flag: "cd", color: "#007A5E" },
    "Uzbekistan": { he: "אוזבקיסטן", flag: "uz", color: "#0099B5" },
    "Colombia": { he: "קולומביה", flag: "co", color: "#FCD116" }
};

function getTeamInfo(englishName) {
    if (!englishName) return { he: "לא נקבע", flag: "un", color: "#888888" };
    if (englishName.startsWith("Winner") || englishName.startsWith("Group") || englishName.startsWith("Loser")) {
        let hebrewName = englishName;
        if (englishName.includes("winners")) hebrewName = englishName.replace("Group ", "מנצחת בית ").replace(" winners", "");
        else if (englishName.includes("runners-up") || englishName.includes("runner-up")) hebrewName = englishName.replace("Group ", "סגנית בית ").replace(" runners-up", "").replace(" runner-up", "");
        else if (englishName.includes("third place")) hebrewName = "מקום 3 (בית " + englishName.replace("Group ", "").replace(" third place", "") + ")";
        return { he: hebrewName, flag: "un", color: "#334155" }; 
    }
    return teamDictionary[englishName] || { he: englishName, flag: "un", color: "#888888" };
}

function formatMatchDate(utcString) {
    if (!utcString) return '';
    const d = new Date(utcString);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${d.getFullYear()} | ${hours}:${minutes} (שעון ישראל)`;
}

function getMatchStageInfo(fixture) {
    if (fixture.stage === 'group-stage') return { matchday: 1, stage: fixture.group };
    if (fixture.stage === 'round-of-32') return { matchday: 'r32', stage: 'נוקאאוט' };
    if (fixture.stage === 'round-of-16') return { matchday: 'r16', stage: 'נוקאאוט' };
    if (fixture.stage === 'quarter-finals') return { matchday: 'qf', stage: 'נוקאאוט' };
    if (fixture.stage === 'semi-finals') return { matchday: 'sf', stage: 'נוקאאוט' };
    if (fixture.stage === 'final' || fixture.stage === 'third-place') return { matchday: 'final', stage: 'נוקאאוט' };
    return { matchday: 1, stage: 'לא ידוע' };
}

async function loadApiAndMergeData() {
    try {
        const response = await fetch('world-cup-2026-fixtures.json');
        if (!response.ok) return;
        const apiData = await response.json();
        
        window.matchDatabase = window.matchDatabase || {};

        apiData.fixtures.forEach(fixture => {
            const matchId = 'match' + fixture.matchNumber;
            let existingMatch = window.matchDatabase[matchId] || {}; 

            const tHomeInfo = getTeamInfo(fixture.homeTeam);
            const tAwayInfo = getTeamInfo(fixture.awayTeam);
            const stageInfo = getMatchStageInfo(fixture);

            window.matchDatabase[matchId] = {
                ...existingMatch, 
                matchday: existingMatch.matchday || stageInfo.matchday,
                stage: existingMatch.stage || stageInfo.stage,
                dateText: formatMatchDate(fixture.kickoffUtc),
                utcDate: fixture.kickoffUtc, 
                
                teamHome: existingMatch.teamHome?.flagCode && existingMatch.teamHome.flagCode !== 'un' ? existingMatch.teamHome : {
                    name: tHomeInfo.he, flagCode: tHomeInfo.flag, color: tHomeInfo.color, cards: { yellow: [], red: [] }
                },
                teamAway: existingMatch.teamAway?.flagCode && existingMatch.teamAway.flagCode !== 'un' ? existingMatch.teamAway : {
                    name: tAwayInfo.he, flagCode: tAwayInfo.flag, color: tAwayInfo.color, cards: { yellow: [], red: [] }
                }
            };

            if (!existingMatch.score) window.matchDatabase[matchId].score = { prediction: '-', actual: '', accuracyClass: 'pending' };
            if (!existingMatch.probabilities) window.matchDatabase[matchId].probabilities = { home: 33, draw: 34, away: 33 };
            if (!existingMatch.matchRisk) window.matchDatabase[matchId].matchRisk = 'Safe';
        });
        
        if (typeof renderMatches === 'function') renderMatches();

    } catch (error) {
        console.error("שגיאה במשיכת שלד הנתונים:", error);
    }
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
            apiTime: new Date(item.fixture.date).getTime(),
            item: item
        }));

        let usedDbIds = new Set(); 

        apiMatches.forEach(apiM => {
            for (let id in window.matchDatabase) {
                if (usedDbIds.has(id)) continue;
                let dbMatch = window.matchDatabase[id];
                
                if (dbMatch.stage !== 'נוקאאוט' && dbMatch.stage !== 'knockout') continue;

                let hName = dbMatch.teamHome?.name;
                let aName = dbMatch.teamAway?.name;

                if ((hName === apiM.apiHome.he && aName === apiM.apiAway.he) || 
                    (hName === apiM.apiAway.he && aName === apiM.apiHome.he)) {
                    apiM.matchedId = id;
                    usedDbIds.add(id);
                    break;
                }
            }
        });

        apiMatches.filter(m => !m.matchedId).forEach(apiM => {
            let bestId = null;
            let minDiff = Infinity;

            for (let id in window.matchDatabase) {
                if (usedDbIds.has(id)) continue;
                let dbMatch = window.matchDatabase[id];

                if (dbMatch.stage !== 'נוקאאוט' && dbMatch.stage !== 'knockout') continue;

                let dbTime = new Date(dbMatch.utcDate).getTime();
                let diff = Math.abs(dbTime - apiM.apiTime);

                if (diff < minDiff && diff < 48 * 60 * 60 * 1000) {
                    minDiff = diff;
                    bestId = id;
                }
            }

            if (bestId) {
                apiM.matchedId = bestId;
                usedDbIds.add(bestId);
            }
        });

        apiMatches.forEach(apiM => {
            if (apiM.matchedId) {
                let dbMatch = window.matchDatabase[apiM.matchedId];
                let item = apiM.item;

                if (dbMatch.stage === 'נוקאאוט' || dbMatch.stage === 'knockout') {
                    dbMatch.teamHome.name = apiM.apiHome.he; dbMatch.teamHome.flagCode = apiM.apiHome.flag; dbMatch.teamHome.color = apiM.apiHome.color;
                    dbMatch.teamAway.name = apiM.apiAway.he; dbMatch.teamAway.flagCode = apiM.apiAway.flag; dbMatch.teamAway.color = apiM.apiAway.color;
                }

                dbMatch.status = item.fixture.status.short;

                // עדכון תוצאות בלבד
                if (!dbMatch.score) dbMatch.score = {};
                
                dbMatch.score.fulltime = item.score.fulltime;
                dbMatch.score.extratime = item.score.extratime;
                dbMatch.score.penalty = item.score.penalty;
                
                dbMatch.goals = item.goals;
                
                if (['FT', 'AET', 'PEN'].includes(dbMatch.status)) {
                    dbMatch.timeStatus = 'past';
                    if (item.goals.home !== null) {
                        dbMatch.score.actual = `${item.goals.home} - ${item.goals.away}`;
                    }
                } else if (dbMatch.status === 'NS') {
                    dbMatch.timeStatus = 'future';
                }
            }
        });
        
        if (typeof renderMatches === 'function') renderMatches();
        if (typeof renderStats === 'function') renderStats();

    } catch (error) {
        console.error("שגיאה במשיכת נתוני לייב:", error);
    }
}

loadApiAndMergeData().then(() => fetchLiveUpdates());