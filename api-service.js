// מילון תרגום מנתוני ה-API לאנגלית אל המבנה העברי שלך בדאשבורד
const teamDictionary = {
    "Mexico": { he: "מקסיקו", flag: "mx", color: "#006341" },
    "South Africa": { he: "דרום אפריקה", flag: "za", color: "#007749" },
    "Korea Republic": { he: "קוריאה הדרומית", flag: "kr", color: "#C60C30" },
    "Czechia": { he: "צ'כיה", flag: "cz", color: "#ED1B24" },
    "Canada": { he: "קנדה", flag: "ca", color: "#FF0000" },
    "Bosnia and Herzegovina": { he: "בוסניה", flag: "ba", color: "#002F6C" },
    "United States": { he: "ארצות הברית", flag: "us", color: "#002868" },
    "Paraguay": { he: "פרגוואי", flag: "py", color: "#D52B1E" },
    "Haiti": { he: "האיטי", flag: "ht", color: "#00209F" },
    "Scotland": { he: "סקוטלנד", flag: "gb-sct", color: "#005EB8" },
    "Australia": { he: "אוסטרליה", flag: "au", color: "#FFCD00" },
    "Turkiye": { he: "טורקיה", flag: "tr", color: "#E30A17" },
    "Brazil": { he: "ברזיל", flag: "br", color: "#FFD700" },
    "Morocco": { he: "מרוקו", flag: "ma", color: "#C1272D" },
    "Qatar": { he: "קטאר", flag: "qa", color: "#8A1538" },
    "Switzerland": { he: "שווייץ", flag: "ch", color: "#FF0000" },
    "Cote d'Ivoire": { he: "חוף השנהב", flag: "ci", color: "#FF8200" },
    "Ecuador": { he: "אקוודור", flag: "ec", color: "#FFD100" },
    "Germany": { he: "גרמניה", flag: "de", color: "#FFFFFF" },
    "Curacao": { he: "קוראסאו", flag: "cw", color: "#002B7F" },
    "Netherlands": { he: "הולנד", flag: "nl", color: "#F36C21" },
    "Japan": { he: "יפן", flag: "jp", color: "#000555" },
    "Sweden": { he: "שוודיה", flag: "se", color: "#FFF200" },
    "Tunisia": { he: "תוניסיה", flag: "tn", color: "#E70013" },
    "Saudi Arabia": { he: "ערב הסעודית", flag: "sa", color: "#006C35" },
    "Uruguay": { he: "אורוגוואי", flag: "uy", color: "#75AADB" },
    "Spain": { he: "ספרד", flag: "es", color: "#C60B1E" },
    "Cabo Verde": { he: "כף ורדה", flag: "cv", color: "#003893" },
    "IR Iran": { he: "איראן", flag: "ir", color: "#239F40" },
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

// פונקציות עזר להמרת נתונים מה-API לעברית
function getTeamInfo(englishName) {
    // זיהוי משחקי נוקאאוט שעוד לא נקבעו (כגון "מנצחת משחק 80")
    if (!englishName || englishName.startsWith("Winner") || englishName.startsWith("Group") || englishName.startsWith("Loser")) {
        return { he: englishName || "לא נקבע", flag: "un", color: "#888888" }; 
    }
    return teamDictionary[englishName] || { he: englishName, flag: "un", color: "#888888" };
}

// המרת תאריך מה-API לשעון ישראל
function formatMatchDate(utcString) {
    if (!utcString) return '';
    const d = new Date(utcString);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${d.getFullYear()} | ${hours}:${minutes} (שעון ישראל)`;
}

// קביעה אוטומטית אם המשחק בעבר או בעתיד
function determineTimeStatus(utcDate, existingMatch) {
    // קודם כל מתחשבים בהגדרת המשתמש מקבצי ה-Data אם היא קיימת ונקבעה כ-past
    if (existingMatch && existingMatch.timeStatus === 'past') return 'past';
    if (!utcDate) return 'future';
    
    const matchTime = new Date(utcDate).getTime();
    const now = new Date().getTime();
    // מגדיר משחק כ"בעבר" אם עברו שעתיים (7,200,000 אלפיות שנייה) מאז שריקת הפתיחה
    return (now > matchTime + 7200000) ? 'past' : 'future';
}

// תרגום שלבי הטורניר
function getMatchStageInfo(fixture) {
    if (fixture.stage === 'group-stage') return { matchday: 1, stage: fixture.group };
    if (fixture.stage === 'round-of-32') return { matchday: 'r32', stage: 'נוקאאוט' };
    if (fixture.stage === 'round-of-16') return { matchday: 'r16', stage: 'נוקאאוט' };
    if (fixture.stage === 'quarter-finals') return { matchday: 'qf', stage: 'נוקאאוט' };
    if (fixture.stage === 'semi-finals') return { matchday: 'sf', stage: 'נוקאאוט' };
    if (fixture.stage === 'final' || fixture.stage === 'third-place') return { matchday: 'final', stage: 'נוקאאוט' };
    return { matchday: 1, stage: 'לא ידוע' };
}

// הפונקציה הראשית שמושכת מהשרת וממזגת נתונים
async function loadApiAndMergeData() {
    console.log("מתחיל לשאוב נתוני אמת מקובץ ה-JSON בשרת...");
    
    try {
        // שאיבת הקובץ המקורי מתיקיית השרת (GitHub)
        const response = await fetch('world-cup-2026-fixtures.json');
        
        if (!response.ok) {
            throw new Error(`שגיאה בגישה לקובץ: ${response.status}`);
        }
        
        const apiData = await response.json();
        
        // יצירה או איפוס של בסיס הנתונים
        window.matchDatabase = window.matchDatabase || {};

        apiData.fixtures.forEach(fixture => {
            const matchId = 'match' + fixture.matchNumber;
            // שומר את הנתונים שלך (הכרטיסים, ה-xG, התחזיות, משפטי הפוסט-משחק וההארכות)
            let existingMatch = window.matchDatabase[matchId] || {}; 

            const tHomeInfo = getTeamInfo(fixture.homeTeam);
            const tAwayInfo = getTeamInfo(fixture.awayTeam);
            const stageInfo = getMatchStageInfo(fixture);

            // מיזוג: השלד מה-API מתעדכן, התוכן האישי שלך נשמר!
            window.matchDatabase[matchId] = {
                ...existingMatch, 

                timeStatus: determineTimeStatus(fixture.kickoffUtc, existingMatch),
                matchday: existingMatch.matchday || stageInfo.matchday,
                stage: existingMatch.stage || stageInfo.stage,
                dateText: formatMatchDate(fixture.kickoffUtc),
                
                teamHome: {
                    name: tHomeInfo.he,
                    flagCode: tHomeInfo.flag,
                    color: tHomeInfo.color,
                    cards: existingMatch.teamHome?.cards || { yellow: [], red: [] }
                },
                teamAway: {
                    name: tAwayInfo.he,
                    flagCode: tAwayInfo.flag,
                    color: tAwayInfo.color,
                    cards: existingMatch.teamAway?.cards || { yellow: [], red: [] }
                }
            };

            // ערכי ברירת מחדל רק למשחקים שעוד לא נגעת בהם כלל
            if (!existingMatch.score) window.matchDatabase[matchId].score = { prediction: '-', actual: '', accuracyClass: 'pending' };
            if (!existingMatch.probabilities) window.matchDatabase[matchId].probabilities = { home: 33, draw: 34, away: 33 };
            if (!existingMatch.insight) window.matchDatabase[matchId].insight = { prediction: 'טרם הוזנה תחזית.', actual: '' };
            if (!existingMatch.matchRisk) window.matchDatabase[matchId].matchRisk = 'Safe';
        });

        console.log("הנתונים מוזגו בהצלחה! מרנדר את הדאשבורד מחדש.");
        
        // ציור מחודש של הדאשבורד עם הנתונים הממוזגים
        if (typeof renderMatches === 'function') renderMatches();
        if (typeof renderStats === 'function') renderStats();

    } catch (error) {
        console.error("שגיאה במשיכת הנתונים. ודא שקובץ ה-JSON נמצא בתיקייה ומוגדר כראוי:", error);
    }
}

// הפעלת הפונקציה ברגע שקובץ הסקריפט הזה נטען בדפדפן
loadApiAndMergeData();

// ==========================================
// מנגנון חיבור נתוני לייב (API-Football)
// ==========================================
async function fetchLiveUpdates() {
    const apiKey = '52fe625c25992477365139c656148855'; 
    const url = 'https://v3.football.api-sports.io/fixtures?league=1&season=2026';

    console.log("מתחבר ל-API-Football לשאיבת נתוני אמת חיים...");

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'x-apisports-key': apiKey }
        });

        if (!response.ok) throw new Error("שגיאה בחיבור לשרת הלייב");

        const data = await response.json();
        
        // מילון גישור: מתרגם את השמות באנגלית של ה-API לעברית של הדאשבורד שלך
        const apiToHebrew = {
            "Mexico": "מקסיקו", "South Africa": "דרום אפריקה", "South Korea": "קוריאה הדרומית",
            "Czechia": "צ'כיה", "Canada": "קנדה", "Bosnia & Herzegovina": "בוסניה",
            "USA": "ארצות הברית", "Paraguay": "פרגוואי", "Qatar": "קטאר", "Switzerland": "שווייץ",
            "Brazil": "ברזיל", "Morocco": "מרוקו", "Haiti": "האיטי", "Scotland": "סקוטלנד",
            "Australia": "אוסטרליה", "Türkiye": "טורקיה", "Germany": "גרמניה", "Curaçao": "קוראסאו",
            "Netherlands": "הולנד", "Japan": "יפן", "Ivory Coast": "חוף השנהב", "Ecuador": "אקוודור",
            "Sweden": "שוודיה", "Tunisia": "תוניסיה", "Spain": "ספרד", "Cape Verde Islands": "כף ורדה",
            "Saudi Arabia": "ערב הסעודית", "Uruguay": "אורוגוואי", "Iran": "איראן", "New Zealand": "ניו זילנד",
            "Egypt": "מצרים", "Congo DR": "קונגו", "Croatia": "קרואטיה", "Uzbekistan": "אוזבקיסטן",
            "Colombia": "קולומביה", "England": "אנגליה", "Panama": "פנמה", "Algeria": "אלג'יריה",
            "Austria": "אוסטריה", "Jordan": "ירדן", "Portugal": "פורטוגל", "France": "צרפת",
            "Senegal": "סנגל", "Iraq": "עיראק", "Norway": "נורבגיה", "Argentina": "ארגנטינה"
        };

        if (window.matchDatabase && data.response) {
            data.response.forEach(item => {
                const apiHome = apiToHebrew[item.teams.home.name];
                const apiAway = apiToHebrew[item.teams.away.name];

                // סורק את המאגר שלנו ומחפש את המשחק שבו משחקות שתי הנבחרות האלו
                for (let matchId in window.matchDatabase) {
                    let dbMatch = window.matchDatabase[matchId];
                    
                    if (dbMatch.teamHome?.name === apiHome && dbMatch.teamAway?.name === apiAway) {
                        
                        // הזרקת הנתונים החיים פנימה!
                        dbMatch.status = item.fixture.status.short; // שומר אם זה הארכה (AET) או פנדלים (PEN)
                        dbMatch.score = item.score; // שומר את כל נתוני הפנדלים
                        dbMatch.goals = item.goals;
                        
                        // מעדכן אוטומטית אם המשחק הסתיים, כדי שהעיצוב ישתנה בהתאם
                        if (['FT', 'AET', 'PEN'].includes(dbMatch.status)) {
                            dbMatch.timeStatus = 'past';
                        } else if (dbMatch.status === 'NS') {
                            dbMatch.timeStatus = 'future';
                        }
                        
                        // קובע את תוצאת הסיום שתוצג בראש הכרטיסייה
                        if (dbMatch.timeStatus === 'past' && item.goals.home !== null) {
                             dbMatch.score.actual = `${item.goals.home} - ${item.goals.away}`;
                        }
                    }
                }
            });
            
            console.log("נתוני הלייב שולבו בהצלחה! הדאשבורד מעודכן.");
            
            // מצייר מחדש את המסך עם כל התוצאות, ההארכות וציר הזמן של הפנדלים
            if (typeof renderMatches === 'function') renderMatches();
            if (typeof renderStandings === 'function') renderStandings();
        }

    } catch (error) {
        console.error("שגיאה במשיכת נתוני לייב:", error);
    }
}

// הפעלה אוטומטית של המשיכה החיה שנייה וחצי אחרי שהאתר עולה 
// (כדי לתת לשלד הראשון לסיים להיטען לפני שמזריקים אליו לייב)
setTimeout(fetchLiveUpdates, 1500);