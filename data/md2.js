// data/md2.js - מחזור 2 (Matchday 2)
// מעודכן: כולל את תוצאות משחקי הלילה (18 ביוני) ותחזיות ל-4 המשחקים הבאים.

const matchday2Database = {
    // --- משחקים שהסתיימו (18 ביוני) ---
    'match25': {
        timeStatus: 'past', matchday: 2, stage: 'A', dateText: "בית א' | 18 ביוני",
        teamHome: { name: 'מקסיקו', flagCode: 'mx', color: '#006341', cards: { yellow: ["אלברז (15')"], red: [] } },
        teamAway: { name: 'קוריאה הדרומית', flagCode: 'kr', color: '#C60C30', cards: { yellow: ["קים (60')"], red: [] } },
        score: { prediction: '1 - 1', actual: '2 - 0', accuracyClass: 'wrong' },
        probabilities: { home: 35, draw: 40, away: 25 }, matchRisk: 'Draw Booster',
        radarStats: { home: [75, 70, 65, 75, 70, 80], away: [70, 65, 60, 85, 80, 75] },
        advancedStats: { home: { xG: 2.15, restDays: 9, altitudeImpact: 'מארחת / רגיל' }, away: { xG: 0.45, restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "בוסטר תיקו קלאסי. שתי הנבחרות יפחדו להפסיד ויסגרו את המשחק במרכז השדה.", actual: "איזו חגיגה! מקסיקו התפוצצה על המגרש, רמסה את התחזית שלנו והבטיחה את הכרטיס לשלב הבא בסטייל." },
        goals: [{ team: 'מקסיקו', player: "סנטיאגו חימנז", minute: "42'" }, { team: 'מקסיקו', player: "הירבינג לוזאנו", minute: "78'" }],
        squads: { home: { predicted: ["אוצ'ואה", "אלברז", "לוזאנו"], actual: ["אוצ'ואה", "אלברז", "לוזאנו"] }, away: { predicted: ["קים", "סון", "הוואנג"], actual: ["קים", "סון", "הוואנג"] } }
    },
    'match26': {
        timeStatus: 'past', matchday: 2, stage: 'A', dateText: "בית א' | 18 ביוני",
        teamHome: { name: 'דרום אפריקה', flagCode: 'za', color: '#FFC425', cards: { yellow: [], red: [] } },
        teamAway: { name: 'צ\'כיה', flagCode: 'cz', color: '#11457E', cards: { yellow: ["הולש (44')"], red: [] } },
        score: { prediction: '1 - 2', actual: '1 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 20, draw: 30, away: 50 }, matchRisk: 'Safe',
        radarStats: { home: [60, 50, 65, 70, 75, 30], away: [80, 65, 75, 75, 85, 75] },
        advancedStats: { home: { xG: 0.95, restDays: 9, altitudeImpact: 'רגיל' }, away: { xG: 1.10, restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "צ'כיה חייבת ניצחון ותנצל את הפיזיות שלה במרכז השדה מול הדרום אפריקאים.", actual: "צ'כיה מאבדת גובה ונקודות יקרות. דרום אפריקה נלחמה על חייה והשיגה תיקו מוצדק לחלוטין." },
        goals: [{ team: 'צ\'כיה', player: "תומאש סוצ'ק", minute: "34'" }, { team: 'דרום אפריקה', player: "לייל פוסטר", minute: "81'" }],
        squads: { home: { predicted: ["וויליאמס", "מוקואנה", "טאו"], actual: ["וויליאמס", "מוקואנה", "פוסטר"] }, away: { predicted: ["סטאנק", "סוצ'ק", "שיק"], actual: ["סטאנק", "סוצ'ק", "שיק"] } }
    },
    'match27': {
        timeStatus: 'past', matchday: 2, stage: 'B', dateText: "בית ב' | 18 ביוני",
        teamHome: { name: 'קטר', flagCode: 'qa', color: '#8A1538', cards: { yellow: ["עלי (88')"], red: [] } },
        teamAway: { name: 'קנדה', flagCode: 'ca', color: '#FF0000', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 2', actual: '1 - 3', accuracyClass: 'trend' },
        probabilities: { home: 15, draw: 25, away: 60 }, matchRisk: 'Safe',
        radarStats: { home: [55, 45, 50, 75, 65, 10], away: [80, 75, 65, 80, 85, 75] },
        advancedStats: { home: { xG: 0.65, restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: 2.85, restDays: 6, altitudeImpact: 'מארחת משותפת' } },
        insight: { prediction: "קנדה מהירה ועדיפה בהרבה. המארחת הקטארית תתקשה לעמוד בקצב המעברים.", actual: "פגיעה מעולה במגמה! קנדה פשוט פירקה את קטר במעברים מהירים, אלפונסו דייוויס רשם משחק אדיר." },
        goals: [{ team: 'קנדה', player: "ג'ונתן דייוויד", minute: "12'" }, { team: 'קנדה', player: "טייג'ון ביוקנן", minute: "38'" }, { team: 'קטר', player: "אכרם עפיף", minute: "55'" }, { team: 'קנדה', player: "ג'ונתן דייוויד", minute: "72'" }],
        squads: { home: { predicted: ["ברשאם", "ח'וח'י", "עלי"], actual: ["ברשאם", "ח'וח'י", "עפיף"] }, away: { predicted: ["בוריאן", "דייוויס", "דייוויד"], actual: ["בוריאן", "דייוויס", "דייוויד"] } }
    },

    // --- 4 המשחקים הבאים (19-20 ביוני) ---
    'match28': {
        timeStatus: 'future', matchday: 2, stage: 'B', dateText: "בית ב' | 19 ביוני",
        teamHome: { name: 'שוויץ', flagCode: 'ch', color: '#FF0000', cards: { yellow: [], red: [] } },
        teamAway: { name: 'בוסניה והרצגובינה', flagCode: 'ba', color: '#002F6C', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 55, draw: 28, away: 17 }, matchRisk: 'Safe',
        radarStats: { home: [82, 75, 70, 80, 75, 80], away: [70, 60, 75, 75, 80, 65] },
        advancedStats: { home: { xG: '1.85 (צפי)', restDays: 9, altitudeImpact: 'אופטימלי' }, away: { xG: '0.90 (צפי)', restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "המשמעת הטקטית של שוויץ תנצח במרכז השדה, אך אדין דז'קו הוותיק תמיד מסוכן בכדורי גובה.", actual: "" },
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
        insight: { prediction: "משחק חד צדדי לחלוטין. הסמבה הברזילאית צפויה להתפוצץ מול יריבה חלשה משמעותית כדי לכפר על התיקו הקודם.", actual: "" },
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
        insight: { prediction: "בוסטר תיקו פעיל! שתי נבחרות סופר קשוחות והגנתיות. המשחק יתנהל בעיקר על כדורים ארוכים, נייחים ומאבקי פיזיות.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["בונו", "חכימי", "זיאש"], actual: [] }, away: { predicted: ["גאן", "מקטומיניי", "מקגין"], actual: [] } }
    },
    'match31': {
        timeStatus: 'future', matchday: 2, stage: 'D', dateText: "בית ד' | 20 ביוני",
        teamHome: { name: 'ארצות הברית', flagCode: 'us', color: '#002868', cards: { yellow: [], red: [] } },
        teamAway: { name: 'טורקיה', flagCode: 'tr', color: '#FF4444', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 42, draw: 30, away: 28 }, matchRisk: 'Upset Alert',
        radarStats: { home: [75, 60, 80, 85, 85, 65], away: [88, 75, 65, 75, 70, 75] },
        advancedStats: { home: { xG: '1.95 (צפי)', restDays: 8, altitudeImpact: 'מארחת / ביתי' }, away: { xG: '1.80 (צפי)', restDays: 8, altitudeImpact: 'יתרון אקלים' } },
        insight: { prediction: "קרב אדיר על ראשות הבית. שתי קבוצות סופר התקפיות שניצחו במחזור הראשון. צפו למבול של מצבים ולמשחק פתוח לחלוטין.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["טרנר", "מקני", "פוליסיק"], actual: [] }, away: { predicted: ["גונק", "צ'להאנולו", "גולר"], actual: [] } }
    }
};

// הזרקה אוטומטית למאגר הראשי של המערכת
if (typeof matchDatabase !== 'undefined') {
    Object.assign(matchDatabase, matchday2Database);
}
