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

// פונקציה חכמה שמתרגמת גם נבחרות וגם שמות כלליים מה-API
function getTeamInfo(englishName) {
    if (!englishName) return { he: "לא נקבע", flag: "un", color: "#888888" };
    
    // מילון תרגום למשחקי נוקאאוט שעוד לא ידוע מי ישחק בהם
    if (englishName.startsWith("Winner") || englishName.startsWith("Group") || englishName.startsWith("Loser")) {
        let hebrewName = englishName;
        
        // החלפות טקסט חכמות לאנגלית של ה-API
        if (englishName.includes("winners")) hebrewName = englishName.replace("Group ", "מנצחת בית ").replace(" winners", "");
        else if (englishName.includes("runners-up")) hebrewName = englishName.replace("Group ", "סגנית בית ").replace(" runners-up", "");
        else if (englishName.includes("third place")) hebrewName = "מקום 3 (בתים " + englishName.replace("Group ", "").replace(" third place", "") + ")";
        else if (englishName.startsWith("Winner Match")) hebrewName = englishName.replace("Winner Match ", "מנצחת משחק ");
        else if (englishName.startsWith("Loser Match")) hebrewName = englishName.replace("Loser Match ", "מפסידת משחק ");
        
        return { he: hebrewName, flag: "un", color: "#334155" }; 
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
    if (existingMatch && existingMatch.timeStatus === 'past') return 'past';
    if (!utcDate) return 'future';
    
    const matchTime = new Date(utcDate).getTime();
    const now = new Date().getTime();
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
        const response = await fetch('world-cup-2026-fixtures.json');
        if (!response.ok) throw new Error(`שגיאה בגישה לקובץ: ${response.status}`);
        
        const apiData = await response.json();
        window.matchDatabase = window.matchDatabase || {};

        apiData.fixtures.forEach(fixture => {
            const matchId = 'match' + fixture.matchNumber;
            let existingMatch = window.matchDatabase[matchId] || {}; 

            const tHomeInfo = getTeamInfo(fixture.homeTeam);
            const tAwayInfo = getTeamInfo(fixture.awayTeam);
            const stageInfo = getMatchStageInfo(fixture);

            // ==========================================
            // התיקון הקריטי: לא לדרוס את הנתונים שלך!
            // אם במאגר הישן כבר יש לקבוצה שם בעברית (למשל 'ברזיל'), הוא ינצח את ה-API
            // ==========================================
            const finalHomeName = existingMatch.teamHome?.name || tHomeInfo.he;
            const finalHomeFlag = existingMatch.teamHome?.flagCode || tHomeInfo.flag;
            const finalHomeColor = existingMatch.teamHome?.color || tHomeInfo.color;

            const finalAwayName = existingMatch.teamAway?.name || tAwayInfo.he;
            const finalAwayFlag = existingMatch.teamAway?.flagCode || tAwayInfo.flag;
            const finalAwayColor = existingMatch.teamAway?.color || tAwayInfo.color;

            window.matchDatabase[matchId] = {
                ...existingMatch, 

                timeStatus: determineTimeStatus(fixture.kickoffUtc, existingMatch),
                matchday: existingMatch.matchday || stageInfo.matchday,
                stage: existingMatch.stage || stageInfo.stage,
                dateText: formatMatchDate(fixture.kickoffUtc),
                
                teamHome: {
                    name: finalHomeName,
                    flagCode: finalHomeFlag,
                    color: finalHomeColor,
                    cards: existingMatch.teamHome?.cards || { yellow: [], red: [] }
                },
                teamAway: {
                    name: finalAwayName,
                    flagCode: finalAwayFlag,
                    color: finalAwayColor,
                    cards: existingMatch.teamAway?.cards || { yellow: [], red: [] }
                }
            };

            // ערכי ברירת מחדל רק למשחקים שעוד לא נגעת בהם
            if (!existingMatch.score) window.matchDatabase[matchId].score = { prediction: '-', actual: '', accuracyClass: 'pending' };
            if (!existingMatch.probabilities) window.matchDatabase[matchId].probabilities = { home: 33, draw: 34, away: 33 };
            if (!existingMatch.insight) window.matchDatabase[matchId].insight = { prediction: 'טרם הוזנה תחזית.', actual: '' };
            if (!existingMatch.matchRisk) window.matchDatabase[matchId].matchRisk = 'Safe';
        });

        console.log("הנתונים מוזגו בהצלחה! מרנדר את הדאשבורד מחדש.");
        
        if (typeof renderMatches === 'function') renderMatches();
        if (typeof renderStats === 'function') renderStats();

    } catch (error) {
        console.error("שגיאה במשיכת הנתונים:", error);
    }
}

// הפעלת הפונקציה
loadApiAndMergeData();
