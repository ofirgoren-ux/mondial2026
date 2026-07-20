// המילון המדויק עם תוספות של וריאציות API
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
// פונקציה מרכזית אחת שטוענת הכל מקומית מהקובץ שלנו!
async function loadLocalData() {
    try {
        // 1. קריאה מהירה לקובץ הסטטי שהורדנו
        const response = await fetch('./worldcup_data_final.json');
        const data = await response.json();

        // 2. עדכון מלך השערים (מושך מיד מהקובץ)
        if (data.topScorers && data.topScorers.length > 0) {
            window.apiTopScorers = data.topScorers.map((item, index) => {
                let player = item.player;
                let stats = item.statistics[0];
                let teamInfo = getTeamInfo(stats.team.name);
                
                return {
                    rank: index + 1,
                    name: player.name,
                    team: teamInfo.he,
                    flag: teamInfo.flag,
                    goals: stats.goals.total || 0,
                    xg: '-', 
                    shots: stats.shots.total || 0,
                    playerImg: player.photo
                };
            });
        }

        // 3. עדכון תוצאות, שערים וכרטיסים מתוך המשחקים
        if (data.fixtures) {
            data.fixtures.forEach(item => {
                let apiHome = getTeamInfo(item.teams.home.name);
                let apiAway = getTeamInfo(item.teams.away.name);
                let dbMatch = findMatchInDatabases(apiHome.he, apiAway.he);
                let matchStatus = item.fixture.status.short;

                if (dbMatch) {
                    let isExactMatch = (dbMatch.teamHome.name === apiHome.he);
                    dbMatch.status = matchStatus;
                    dbMatch.score = dbMatch.score || {};
                    dbMatch.score.fulltime = item.score.fulltime;
                    dbMatch.score.extratime = item.score.extratime;
                    dbMatch.score.penalty = item.score.penalty;

                    // אם המשחק הסתיים, מעדכנים תוצאה ומעבירים לסטטוס "past"
                    if (['FT', 'AET', 'PEN'].includes(matchStatus)) {
                        let homeGoals = item.goals.home !== null ? item.goals.home : 0;
                        let awayGoals = item.goals.away !== null ? item.goals.away : 0;
                        
                        if (isExactMatch) {
                            dbMatch.score.actual = `${homeGoals} - ${awayGoals}`;
                        } else {
                            dbMatch.score.actual = `${awayGoals} - ${homeGoals}`;
                        }
                        dbMatch.timeStatus = 'past';

                        // שליפת האירועים (שערים/כרטיסים) מתוך המידע השמור בקובץ
                        let fixDetails = data.matchDetails[item.fixture.id];
                        if (fixDetails && fixDetails.events) {
                            let detailedGoals = [];
                            let hCards = { yellow: [], red: [] };
                            let aCards = { yellow: [], red: [] };

                            fixDetails.events.forEach(ev => {
                                let minStr = ev.time.elapsed + (ev.time.extra ? '+' + ev.time.extra : '') + "'";
                                let evTeamHe = getTeamInfo(ev.team.name).he;

                                if (ev.type === 'Goal' && ev.detail !== 'Missed Penalty') {
                                    detailedGoals.push({
                                        team: evTeamHe,
                                        player: ev.player.name,
                                        minute: minStr,
                                        sortMin: ev.time.elapsed
                                    });
                                } else if (ev.type === 'Card') {
                                    let cardStr = `${ev.player.name} (${minStr})`;
                                    if (ev.detail.includes('Yellow')) {
                                        if (evTeamHe === dbMatch.teamHome.name) hCards.yellow.push(cardStr);
                                        else aCards.yellow.push(cardStr);
                                    } else if (ev.detail.includes('Red')) {
                                        if (evTeamHe === dbMatch.teamHome.name) hCards.red.push(cardStr);
                                        else aCards.red.push(cardStr);
                                    }
                                }
                            });

                            dbMatch.goals = detailedGoals;
                            dbMatch.teamHome.cards = hCards;
                            dbMatch.teamAway.cards = aCards;
                        }
                    }
                }
            });
        }

        // 4. ריענון כל המסכים באתר באופן מיידי
        if (typeof renderScorers === 'function') renderScorers();
        if (typeof renderMatches === 'function') renderMatches();
        if (typeof renderStats === 'function') renderStats();

    } catch (error) {
        console.error("שגיאה במשיכת נתונים מהקובץ המקומי:", error);
    } finally {
        // הסרת מסך הטעינה ברגע שהכל סיים
        const loader = document.getElementById('loader-overlay');
        if (loader) {
            loader.classList.add('hidden');
        }
    }
}

// התנעת המערכת - הפעלה לוקאלית
loadLocalData();התנעת המערכת והטעינה
fetchLiveUpdates();
