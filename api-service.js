// המילון המדויק שהתאמנו לכל 32 הנבחרות שלך
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
    "Colombia": { he: "קולומביה", flag: "co", color: "#FCD116" },
    "Ghana": { he: "גאנה", flag: "gh", color: "#006B3F" },
    // גיבוי נוסף למקרה של קוריאה הדרומית משלב הבתים
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
        
        // אם מאגר הנתונים שלך (מהקובץ knockoutData.js ואחרים) לא נטען, אין טעם להמשיך
        if (!window.matchDatabase || !data.response) return;

        let apiMatches = data.response.map(item => ({
            apiHome: getTeamInfo(item.teams.home.name),
            apiAway: getTeamInfo(item.teams.away.name),
            item: item
        }));

        // סריקה קפדנית של תוצאות ה-API מול המאגר שלך (100% התאמה בלבד)
        apiMatches.forEach(apiM => {
            for (let id in window.matchDatabase) {
                let dbMatch = window.matchDatabase[id];
                
                let hName = dbMatch.teamHome?.name;
                let aName = dbMatch.teamAway?.name;

                // בדיקה אם השמות תואמים בדיוק כמו אצלך בקובץ
                let isExactMatch = (hName === apiM.apiHome.he && aName === apiM.apiAway.he);
                
                // בדיקה אם השמות תואמים, אבל ה-API הפך את סדר המארחת/אורחת
                let isReversedMatch = (hName === apiM.apiAway.he && aName === apiM.apiHome.he);

                if (isExactMatch || isReversedMatch) {
                    let item = apiM.item;

                    // DELTA UPDATE: עדכון כירורגי של תוצאות ומצב בלבד!
                    // אנחנו *לא* נוגעים בשדות של teamHome, teamAway או insight
                    
                    dbMatch.status = item.fixture.status.short;
                    
                    dbMatch.score = dbMatch.score || {};
                    dbMatch.score.fulltime = item.score.fulltime;
                    dbMatch.score.extratime = item.score.extratime;
                    dbMatch.score.penalty = item.score.penalty;

                    if (['FT', 'AET', 'PEN', '1H', '2H', 'HT', 'ET'].includes(dbMatch.status)) {
                        let homeGoals = item.goals.home !== null ? item.goals.home : 0;
                        let awayGoals = item.goals.away !== null ? item.goals.away : 0;
                        
                        // אם יש התאמה מלאה - מכניסים כרגיל
                        if (isExactMatch) {
                            dbMatch.score.actual = `${homeGoals} - ${awayGoals}`;
                            dbMatch.goals = { home: homeGoals, away: awayGoals };
                        } 
                        // אם ה-API הפך את הקבוצות - אנחנו הופכים את התוצאה כדי שתתאים למסך שלך
                        else if (isReversedMatch) {
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
                    
                    // ברגע שמצאנו התאמה מדויקת ועדכנו, אפשר לעצור את הלולאה הפנימית ולעבור לתוצאה הבאה
                    break; 
                }
            }
        });
        
        // ציור מחדש של המסך עם התוצאות המעודכנות (והטקסטים המקוריים שלך!)
        if (typeof renderMatches === 'function') renderMatches();
        if (typeof renderStats === 'function') renderStats();

    } catch (error) {
        console.error("שגיאה במשיכת נתוני לייב:", error);
    }
}

// קריאה לפונקציה כדי להתחיל את העדכון
fetchLiveUpdates();