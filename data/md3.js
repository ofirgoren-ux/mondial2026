window.matchDatabase = window.matchDatabase || {};
const matchday3Database = {
    'match49': {
        timeStatus: 'future', matchday: 3, stage: 'B', dateText: `בית ב' | 24 ביוני, 22:00`,
        teamHome: { name: `שווייץ`, flagCode: 'ch', color: '#FF0000', cards: { yellow: [], red: [] } },
        teamAway: { name: `קנדה`, flagCode: 'ca', color: '#FF0000', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 45, draw: 30, away: 25 }, matchRisk: 'Safe',
        radarStats: { home: [82, 75, 70, 80, 75, 80], away: [80, 75, 65, 80, 85, 75] },
        advancedStats: { home: { xG: 1.80, restDays: 6, altitudeImpact: `רגיל` }, away: { xG: 1.20, restDays: 5, altitudeImpact: `רגיל` } },
        insight: { prediction: `קרב צמרת על ראשות הבית. שווייץ עדיפה טקטית, אבל המהירות של קנדה עלולה להפתיע.`, actual: `` },
        goals: [], squads: { home: { predicted: [`זומר`, `ג'אקה`, `שאקירי`, `אמבולו`], actual: [] }, away: { predicted: [`בוריאן`, `דייוויס`, `דייוויד`, `לארין`], actual: [] } }
    },
    'match50': {
        timeStatus: 'future', matchday: 3, stage: 'B', dateText: `בית ב' | 24 ביוני, 22:00`,
        teamHome: { name: `בוסניה והרצגובינה`, flagCode: 'ba', color: '#002F6C', cards: { yellow: [], red: [] } },
        teamAway: { name: `קטאר`, flagCode: 'qa', color: '#8A1538', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 0', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 55, draw: 30, away: 15 }, matchRisk: 'Draw Booster',
        radarStats: { home: [70, 60, 75, 75, 80, 65], away: [55, 45, 50, 75, 65, 10] },
        advancedStats: { home: { xG: 1.30, restDays: 6, altitudeImpact: `רגיל` }, away: { xG: 0.60, restDays: 5, altitudeImpact: `מארחת` } },
        insight: { prediction: `שתי הנבחרות איכזבו. בוסניה פייבוריטית קלה בזכות היתרון הפיזי על פני המארחת.`, actual: `` },
        goals: [], squads: { home: { predicted: [`פיאניץ'`, `דז'קו`], actual: [] }, away: { predicted: [`עלי`, `אפיף`], actual: [] } }
    },
    'match51': {
        timeStatus: 'future', matchday: 3, stage: 'C', dateText: `בית ג' | 25 ביוני, 01:00`,
        teamHome: { name: `מרוקו`, flagCode: 'ma', color: '#FF3333', cards: { yellow: [], red: [] } },
        teamAway: { name: `האיטי`, flagCode: 'ht', color: '#00209F', cards: { yellow: [], red: [] } },
        score: { prediction: '3 - 0', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 85, draw: 10, away: 5 }, matchRisk: 'Safe',
        radarStats: { home: [78, 55, 80, 90, 90, 75], away: [35, 30, 50, 40, 80, 5] },
        advancedStats: { home: { xG: 2.50, restDays: 5, altitudeImpact: `רגיל` }, away: { xG: 0.30, restDays: 5, altitudeImpact: `רגיל` } },
        insight: { prediction: `מרוקו הבטיחה את מקומה ותנסה לשפר הפרש שערים מול הנבחרת החלשה בבית.`, actual: `` },
        goals: [], squads: { home: { predicted: [`בונו`, `חכימי`, `זיאש`, `אן-נסירי`], actual: [] }, away: { predicted: [`פיירו`], actual: [] } }
    },
    'match52': {
        timeStatus: 'future', matchday: 3, stage: 'C', dateText: `בית ג' | 25 ביוני, 01:00`,
        teamHome: { name: `סקוטלנד`, flagCode: 'gb-sct', color: '#005EB8', cards: { yellow: [], red: [] } },
        teamAway: { name: `ברזיל`, flagCode: 'br', color: '#FFD700', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 12, draw: 18, away: 70 }, matchRisk: 'Safe',
        radarStats: { home: [80, 65, 85, 75, 75, 70], away: [95, 85, 75, 80, 75, 95] },
        advancedStats: { home: { xG: 0.80, restDays: 5, altitudeImpact: `רגיל` }, away: { xG: 2.10, restDays: 5, altitudeImpact: `רגיל` } },
        insight: { prediction: `סקוטלנד תילחם ותסתגר, אך האיכות הברזילאית בהתקפה תמצא את הדרך לרשת.`, actual: `` },
        goals: [], squads: { home: { predicted: [`גאן`, `מקטומיניי`, `מקגין`], actual: [] }, away: { predicted: [`אליסון`, `קאסמירו`, `ויניסיוס`, `רודריגו`], actual: [] } }
    },
    'match53': {
        timeStatus: 'future', matchday: 3, stage: 'A', dateText: `בית א' | 25 ביוני, 04:00`,
        teamHome: { name: `דרום אפריקה`, flagCode: 'za', color: '#FFC425', cards: { yellow: [], red: [] } },
        teamAway: { name: `קוריאה הדרומית`, flagCode: 'kr', color: '#C60C30', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 25, draw: 30, away: 45 }, matchRisk: 'Upset Alert',
        radarStats: { home: [60, 50, 65, 70, 75, 30], away: [70, 65, 60, 85, 80, 75] },
        advancedStats: { home: { xG: 0.90, restDays: 7, altitudeImpact: `רגיל` }, away: { xG: 1.40, restDays: 6, altitudeImpact: `רגיל` } },
        insight: { prediction: `קוריאה פייבוריטית, אך דרום אפריקה חייבת נקודות כדי לשרוד וצפויה לשחק בצורה אגרסיבית.`, actual: `` },
        goals: [], squads: { home: { predicted: [`וויליאמס`, `טאו`], actual: [] }, away: { predicted: [`קים`, `סון`, `הוואנג`], actual: [] } }
    },
    'match54': {
        timeStatus: 'future', matchday: 3, stage: 'A', dateText: `בית א' | 25 ביוני, 04:00`,
        teamHome: { name: `צ'כיה`, flagCode: 'cz', color: '#11457E', cards: { yellow: [], red: [] } },
        teamAway: { name: `מקסיקו`, flagCode: 'mx', color: '#006341', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 35, draw: 35, away: 30 }, matchRisk: 'Draw Booster',
        radarStats: { home: [80, 65, 75, 75, 85, 75], away: [75, 70, 65, 75, 70, 80] },
        advancedStats: { home: { xG: 1.15, restDays: 7, altitudeImpact: `רגיל` }, away: { xG: 1.10, restDays: 6, altitudeImpact: `רגיל` } },
        insight: { prediction: `קרב צמוד וקשוח. תיקו עשוי לשרת את שתי הנבחרות בדרך לנוקאאוט.`, actual: `` },
        goals: [], squads: { home: { predicted: [`סוצ'ק`, `שיק`], actual: [] }, away: { predicted: [`אוצ'ואה`, `אלברז`, `לוזאנו`], actual: [] } }
    }
};

Object.assign(window.matchDatabase, matchday3Database);
