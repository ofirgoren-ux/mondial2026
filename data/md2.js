// data/md2.js - עדכון מחזור 2 (Matchday 2)
// משחקי ה-19 וה-20 ביוני

Object.assign(matchDatabase, {
    'match_us_au': {
        timeStatus: 'future', matchday: 2, stage: 'D', dateText: "בית ד' | 19 ביוני, 22:00",
        teamHome: { name: 'ארצות הברית', flagCode: 'us', color: '#002868', cards: { yellow: [], red: [] } },
        teamAway: { name: 'אוסטרליה', flagCode: 'au', color: '#FFD100', cards: { yellow: [], red: [] } },
        score: { prediction: '3 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 60, draw: 25, away: 15 }, matchRisk: 'Safe',
        radarStats: { home: [80, 65, 80, 85, 85, 75], away: [65, 45, 85, 90, 95, 30] },
        advancedStats: { home: { xG: '2.10 (צפי)', restDays: 7, altitudeImpact: 'מארחת / ביתי' }, away: { xG: '0.85 (צפי)', restDays: 7, altitudeImpact: 'עייפות קלה' } },
        insight: { prediction: "ארה\"ב מגיעה אחרי התפוצצות ותנצל את המהירות באגפים מול האוסטרלים הקשוחים.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["טרנר", "אדמס", "פוליסיק", "וואה", "ריינה", "באלוגאן"], actual: [] }, away: { predicted: ["ריאן", "סוטאר", "אירווין", "דיוק"], actual: [] } }
    },
    'match_sct_ma': {
        timeStatus: 'future', matchday: 2, stage: 'C', dateText: "בית ג' | 20 ביוני, 01:00",
        teamHome: { name: 'סקוטלנד', flagCode: 'gb-sct', color: '#005EB8', cards: { yellow: [], red: [] } },
        teamAway: { name: 'מרוקו', flagCode: 'ma', color: '#FF3333', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 35, draw: 40, away: 25 }, matchRisk: 'Draw Booster',
        radarStats: { home: [80, 65, 85, 75, 75, 70], away: [78, 55, 80, 90, 90, 75] },
        advancedStats: { home: { xG: '1.05 (צפי)', restDays: 9, altitudeImpact: 'רגיל' }, away: { xG: '1.15 (צפי)', restDays: 9, altitudeImpact: 'רגיל' } },
        insight: { prediction: "בוסטר תיקו פעיל. משחק פיזי צמוד שיתנהל בעיקר סביב מאבקי אמצע וכדורי גובה.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["גאן", "מקטומיניי", "מקגין"], actual: [] }, away: { predicted: ["בונו", "חכימי", "זיאש"], actual: [] } }
    },
    'match_br_ht': {
        timeStatus: 'future', matchday: 2, stage: 'C', dateText: "בית ג' | 20 ביוני, 03:30",
        teamHome: { name: 'ברזיל', flagCode: 'br', color: '#FFD700', cards: { yellow: [], red: [] } },
        teamAway: { name: 'האיטי', flagCode: 'ht', color: '#00209F', cards: { yellow: [], red: [] } },
        score: { prediction: '4 - 0', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 88, draw: 9, away: 3 }, matchRisk: 'Safe',
        radarStats: { home: [95, 85, 75, 80, 75, 95], away: [35, 30, 50, 40, 80, 5] },
        advancedStats: { home: { xG: '3.40 (צפי)', restDays: 9, altitudeImpact: 'אופטימלי' }, away: { xG: '0.25 (צפי)', restDays: 9, altitudeImpact: 'קשה' } },
        insight: { prediction: "ברזיל תגיע זועמת אחרי התיקו במחזור הראשון. צפויה שליטה מוחלטת של הסלסאו מול יריבה חלשה.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["אליסון", "קאסמירו", "ויניסיוס"], actual: [] }, away: { predicted: ["פלאסיד", "ז'רום", "פיירו"], actual: [] } }
    },
    'match_tr_py': {
        timeStatus: 'future', matchday: 2, stage: 'D', dateText: "בית ד' | 20 ביוני, 06:00",
        teamHome: { name: 'טורקיה', flagCode: 'tr', color: '#FF4444', cards: { yellow: [], red: [] } },
        teamAway: { name: 'פרגוואי', flagCode: 'py', color: '#D52B1E', cards: { yellow: [], red: [] } },
        score: { prediction: '3 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 55, draw: 25, away: 20 }, matchRisk: 'Safe',
        radarStats: { home: [88, 75, 65, 75, 70, 75], away: [70, 50, 75, 80, 90, 40] },
        advancedStats: { home: { xG: '1.95 (צפי)', restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: '0.90 (צפי)', restDays: 8, altitudeImpact: 'לחץ מנטלי' } },
        insight: { prediction: "ההתקפה הטורקית היצירתית תמצא פרצות בהגנה של פרגוואי שנראתה שבירה מאוד במשחק הפתיחה.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["גיונוק", "צ'להאנולו", "גולר"], actual: [] }, away: { predicted: ["קורונל", "אלמירון", "גומז"], actual: [] } }
    }
});
