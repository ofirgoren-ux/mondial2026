// data/md2.js - מחזור 2 (Matchday 2)
// משחקים שטרם החלו, מותאם לשעון אמריקה/ישראל

const matchday2Database = {
    'match25': {
        timeStatus: 'future', matchday: 2, stage: 'A', dateText: "בית א' | 18 ביוני",
        teamHome: { name: 'מקסיקו', flagCode: 'mx', color: '#006341', cards: { yellow: [], red: [] } },
        teamAway: { name: 'קוריאה הדרומית', flagCode: 'kr', color: '#C60C30', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 35, draw: 40, away: 25 }, matchRisk: 'Draw Booster',
        radarStats: { home: [75, 70, 65, 75, 70, 80], away: [70, 65, 60, 85, 80, 75] },
        advancedStats: { home: { xG: '1.12 (צפי)', restDays: 9, altitudeImpact: 'מארחת / רגיל' }, away: { xG: '0.95 (צפי)', restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "בוסטר תיקו קלאסי. שתי הנבחרות יפחדו להפסיד ויסגרו את המשחק במרכז השדה.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["אוצ'ואה", "אלברז", "לוזאנו"], actual: [] }, away: { predicted: ["קים", "סון", "הוואנג"], actual: [] } }
    },
    'match26': {
        timeStatus: 'future', matchday: 2, stage: 'A', dateText: "בית א' | 18 ביוני",
        teamHome: { name: 'דרום אפריקה', flagCode: 'za', color: '#FFC425', cards: { yellow: [], red: [] } },
        teamAway: { name: 'צ\'כיה', flagCode: 'cz', color: '#11457E', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 20, draw: 30, away: 50 }, matchRisk: 'Safe',
        radarStats: { home: [60, 50, 65, 70, 75, 30], away: [80, 65, 75, 75, 85, 75] },
        advancedStats: { home: { xG: '0.82 (צפי)', restDays: 9, altitudeImpact: 'רגיל' }, away: { xG: '1.65 (צפי)', restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "צ'כיה חייבת ניצחון ותנצל את הפיזיות שלה במרכז השדה מול הדרום אפריקאים.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["וויליאמס", "מוקואנה", "טאו"], actual: [] }, away: { predicted: ["סטאנק", "סוצ'ק", "שיק"], actual: [] } }
    },
    'match27': {
        timeStatus: 'future', matchday: 2, stage: 'B', dateText: "בית ב' | 18 ביוני",
        teamHome: { name: 'קטר', flagCode: 'qa', color: '#8A1538', cards: { yellow: [], red: [] } },
        teamAway: { name: 'קנדה', flagCode: 'ca', color: '#FF0000', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 15, draw: 25, away: 60 }, matchRisk: 'Safe',
        radarStats: { home: [55, 45, 50, 75, 65, 10], away: [80, 75, 65, 80, 85, 75] },
        advancedStats: { home: { xG: '0.42 (צפי)', restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: '1.95 (צפי)', restDays: 6, altitudeImpact: 'מארחת משותפת' } },
        insight: { prediction: "קנדה מהירה ועדיפה בהרבה. המארחת הקטארית תתקשה לעמוד בקצב המעברים.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["ברשאם", "ח'וח'י", "עלי"], actual: [] }, away: { predicted: ["בוריאן", "דייוויס", "דייוויד"], actual: [] } }
    },
    'match28': {
        timeStatus: 'future', matchday: 2, stage: 'B', dateText: "בית ב' | 19 ביוני",
        teamHome: { name: 'שוויץ', flagCode: 'ch', color: '#FF0000', cards: { yellow: [], red: [] } },
        teamAway: { name: 'בוסניה והרצגובינה', flagCode: 'ba', color: '#002F6C', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 55, draw: 28, away: 17 }, matchRisk: 'Safe',
        radarStats: { home: [82, 75, 70, 80, 75, 80], away: [70, 60, 75, 75, 80, 65] },
        advancedStats: { home: { xG: '1.85 (צפי)', restDays: 9, altitudeImpact: 'אופטימלי' }, away: { xG: '0.90 (צפי)', restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "המשמעת הטקטית של שוויץ תנצח במרכז השדה, אך דז'קו תמיד מסוכן בכדורי גובה.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["זומר", "ג'אקה", "שאקירי"], actual: [] }, away: { predicted: ["שחיץ'", "פיאניץ'", "דז'קו"], actual: [] } }
    },
    'match29': {
        timeStatus: 'future', matchday: 2, stage: 'C', dateText: "בית ג' | 19 ביוני",
        teamHome: { name: 'ברזיל', flagCode: 'br', color: '#FFD700', cards: { yellow: [], red: [] } },
        teamAway: { name: 'האיטי', flagCode: 'ht', color: '#00209F', cards: { yellow: [], red: [] } },
        score: { prediction: '4 - 0', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 90, draw: 8, away: 2 }, matchRisk: 'Safe',
        radarStats: { home: [95, 85, 75, 80, 75, 95], away: [35, 30, 50, 40, 80, 5] },
        advancedStats: { home: { xG: '3.60 (צפי)', restDays: 8, altitudeImpact: 'אופטימלי' }, away: { xG: '0.20 (צפי)', restDays: 8, altitudeImpact: 'קשה' } },
        insight: { prediction: "משחק חד צדדי לחלוטין. הסמבה הברזילאית צפויה להתפוצץ מול יריבה חלשה משמעותית.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["אליסון", "קאסמירו", "ויניסיוס"], actual: [] }, away: { predicted: ["פלאסיד", "ז'רום", "פיירו"], actual: [] } }
    },
    'match30': {
        timeStatus: 'future', matchday: 2, stage: 'C', dateText: "בית ג' | 19 ביוני",
        teamHome: { name: 'מרוקו', flagCode: 'ma', color: '#FF3333', cards: { yellow: [], red: [] } },
        teamAway: { name: 'סקוטלנד', flagCode: 'gb-sct', color: '#005EB8', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 38, draw: 38, away: 24 }, matchRisk: 'Draw Booster',
        radarStats: { home: [78, 55, 80, 90, 90, 75], away: [80, 65, 85, 75, 75, 70] },
        advancedStats: { home: { xG: '1.20 (צפי)', restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: '1.10 (צפי)', restDays: 8, altitudeImpact: 'רגיל' } },
        insight: { prediction: "בוסטר תיקו פעיל! שתי נבחרות סופר קשוחות והגנתיות. המשחק יתנהל בעיקר על כדורים ארוכים ומאבקי פיזיות.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["בונו", "חכימי", "זיאש"], actual: [] }, away: { predicted: ["גאן", "מקטומיניי", "מקגין"], actual: [] } }
    }
};

if (typeof matchDatabase !== 'undefined') {
    Object.assign(matchDatabase, matchday2Database);
}