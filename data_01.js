// מסד הנתונים הרשמי - מונדיאל 2026 (מודל הסתברותי Pro)
// 20 משחקי עבר מאומתים + 4 תחזיות למשחקי היום (17 ביוני)

const matchDatabase = {
    // ==========================================
    // --- משחקי עבר (20 משחקים שהסתיימו) ---
    // ==========================================

    // --- בית א' ---
    'match1': {
        timeStatus: 'past', stage: 'A', dateText: "בית א' | 9 ביוני",
        teamHome: { name: 'מקסיקו', flagCode: 'mx', color: '#006341', cards: { yellow: ["אדסון אלברז (33')"], red: [] } },
        teamAway: { name: 'דרום אפריקה', flagCode: 'za', color: '#FFC425', cards: { yellow: ["מוקואנה (22')", "טאו (78')"], red: [] } },
        score: { prediction: '2 - 0', actual: '1 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 65, draw: 22, away: 13 },
        matchRisk: 'Draw Booster',
        radarStats: { home: [80, 75, 60, 70, 65, 70], away: [65, 45, 60, 85, 80, 20] },
        advancedStats: { home: { xG: 1.84, restDays: 4, altitudeImpact: 'מארחת / רגיל' }, away: { xG: 0.92, restDays: 3, altitudeImpact: 'השפעה בינונית' } },
        insight: { prediction: "מקסיקו עדיפה טכנית. דרום אפריקה תתקשה לעמוד בלחץ.", actual: "דרום אפריקה הפגינה עמידות מנטלית אדירה ועקצה במתפרצת." },
        goals: [{ team: 'מקסיקו', player: "הירבינג לוזאנו", minute: "41'" }, { team: 'דרום אפריקה', player: "פרסי טאו", minute: "82'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match2': {
        timeStatus: 'past', stage: 'A', dateText: "בית א' | 11 ביוני",
        teamHome: { name: 'קוריאה הדרומית', flagCode: 'kr', color: '#C60C30', cards: { yellow: ["הוואנג (45')"], red: [] } },
        teamAway: { name: 'צ\'כיה', flagCode: 'cz', color: '#11457E', cards: { yellow: ["סוצ'ק (60')"], red: [] } },
        score: { prediction: '1 - 1', actual: '2 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 40, draw: 30, away: 30 },
        matchRisk: 'Upset Alert',
        radarStats: { home: [75, 65, 55, 80, 85, 70], away: [70, 60, 80, 75, 80, 75] },
        advancedStats: { home: { xG: 1.55, restDays: 4, altitudeImpact: 'רגיל' }, away: { xG: 1.10, restDays: 4, altitudeImpact: 'עייפות טיסה' } },
        insight: { prediction: "משחק צמוד מאוד. המהירות של קוריאה מול הפיזיות של צ'כיה.", actual: "יונג מין סון הכריע משחק שקול עם פעולה אישית מבריקה בסיום." },
        goals: [{ team: 'צ\'כיה', player: "פטריק שיק", minute: "22'" }, { team: 'קוריאה הדרומית', player: "הוואנג הי-צ'אן", minute: "55'" }, { team: 'קוריאה הדרומית', player: "יונג מין סון", minute: "88'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },

    // --- בית ב' ---
    'match3': {
        timeStatus: 'past', stage: 'B', dateText: "בית ב' | 10 ביוני",
        teamHome: { name: 'קטר', flagCode: 'qa', color: '#8A1538', cards: { yellow: ["בועלאם ח'וח'י (55')"], red: [] } },
        teamAway: { name: 'שוויץ', flagCode: 'ch', color: '#FF0000', cards: { yellow: ["גראניט ג'אקה (72')"], red: [] } },
        score: { prediction: '0 - 2', actual: '1 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 15, draw: 25, away: 60 },
        matchRisk: 'Upset Alert',
        radarStats: { home: [50, 40, 55, 85, 65, 5], away: [80, 70, 75, 60, 75, 85] },
        advancedStats: { home: { xG: 0.65, restDays: 4, altitudeImpact: 'מותאם למזג האוויר' }, away: { xG: 2.10, restDays: 4, altitudeImpact: 'השפעת לחות גבוהה' } },
        insight: { prediction: "שוויץ עדיפה טכנית. מזהים סיכון לקריסה מנטלית של קטר תחת הלחץ.", actual: "ה-xG מראה שוויץ שלטה (2.10) אבל קטר ניצלה מצב בודד בצורה מושלמת." },
        goals: [{ team: 'שוויץ', player: "שרדאן שאקירי", minute: "30'" }, { team: 'קטר', player: "אלמועז עלי", minute: "87'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match4': {
        timeStatus: 'past', stage: 'B', dateText: "בית ב' | 12 ביוני",
        teamHome: { name: 'קנדה', flagCode: 'ca', color: '#FF0000', cards: { yellow: ["ביוקנן (20')"], red: [] } },
        teamAway: { name: 'בוסניה והרצגובינה', flagCode: 'ba', color: '#002F6C', cards: { yellow: ["קולאשינאץ (70')"], red: [] } },
        score: { prediction: '2 - 1', actual: '1 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 45, draw: 30, away: 25 },
        matchRisk: 'Draw Booster',
        radarStats: { home: [75, 70, 60, 80, 85, 70], away: [70, 60, 75, 75, 80, 65] },
        advancedStats: { home: { xG: 1.25, restDays: 5, altitudeImpact: 'מארחת משותפת' }, away: { xG: 1.05, restDays: 4, altitudeImpact: 'רגיל' } },
        insight: { prediction: "קנדה עם יתרון ביתיות ומהירות של דייוויס, בוסניה מסוכנת בנייחים.", actual: "משחק אגרסיבי שהסתיים בחלוקת נקודות צודקת. בוסניה השוותה מקרן." },
        goals: [{ team: 'קנדה', player: "אלפונסו דייוויס", minute: "40'" }, { team: 'בוסניה והרצגובינה', player: "אדין דז'קו", minute: "65'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },

    // --- בית ג' ---
    'match5': {
        timeStatus: 'past', stage: 'C', dateText: "בית ג' | 11 ביוני",
        teamHome: { name: 'האיטי', flagCode: 'ht', color: '#00209F', cards: { yellow: ["פרנצדי פיירו (12')"], red: [] } },
        teamAway: { name: 'סקוטלנד', flagCode: 'gb-sct', color: '#005EB8', cards: { yellow: ["מקטומיניי (45')", "ג'ון מקגין (82')"], red: [] } },
        score: { prediction: '1 - 2', actual: '0 - 1', accuracyClass: 'trend' },
        probabilities: { home: 20, draw: 30, away: 50 },
        matchRisk: 'Safe',
        radarStats: { home: [40, 30, 55, 30, 85, 5], away: [80, 60, 90, 75, 70, 75] },
        advancedStats: { home: { xG: 0.30, restDays: 3, altitudeImpact: 'השפעת טיסה ארוכה' }, away: { xG: 1.15, restDays: 4, altitudeImpact: 'רגיל' } },
        insight: { prediction: "סערה מוקדמת מצד האיטי, שתדעך במחצית השנייה מול השליטה הסקוטית.", actual: "משחק דל במצבים, הסקוטים עקצו מקרן כצפוי." },
        goals: [{ team: 'סקוטלנד', player: "ג'ון מקגין", minute: "64'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match6': {
        timeStatus: 'past', stage: 'C', dateText: "בית ג' | 11 ביוני",
        teamHome: { name: 'ברזיל', flagCode: 'br', color: '#FFD700', cards: { yellow: ["דנילו (42')"], red: [] } },
        teamAway: { name: 'מרוקו', flagCode: 'ma', color: '#FF3333', cards: { yellow: ["אמרבאט (31')", "סאיס (88')"], red: ["אגרד (90+2')"] } },
        score: { prediction: '1 - 1', actual: '1 - 1', accuracyClass: 'exact' },
        probabilities: { home: 45, draw: 35, away: 20 },
        matchRisk: 'Draw Booster',
        radarStats: { home: [90, 65, 70, 60, 70, 95], away: [75, 35, 80, 95, 90, 70] },
        advancedStats: { home: { xG: 1.60, restDays: 4, altitudeImpact: 'רגיל' }, away: { xG: 1.05, restDays: 4, altitudeImpact: 'רגיל' } },
        insight: { prediction: "ברזיל תשלוט בכדור, אך החוסן המנטלי של מרוקו יתסכל את ההתקפה.", actual: "המודל פגע בול! הפיזיות והמשמעת של מרוקו תסכלו מנטלית את ההתקפה הברזילאית." },
        goals: [{ team: 'ברזיל', player: "ויניסיוס ג'וניור", minute: "24'" }, { team: 'מרוקו', player: "חכים זיאש", minute: "67'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },

    // --- בית ד' ---
    'match7': {
        timeStatus: 'past', stage: 'D', dateText: "בית ד' | 12 ביוני",
        teamHome: { name: 'ארצות הברית', flagCode: 'us', color: '#002868', cards: { yellow: ["מקני (38')", "אדמס (65')"], red: [] } },
        teamAway: { name: 'פרגוואי', flagCode: 'py', color: '#D52B1E', cards: { yellow: ["אלמירון (25')", "גומז (89')"], red: [] } },
        score: { prediction: '2 - 0', actual: '4 - 1', accuracyClass: 'trend' },
        probabilities: { home: 55, draw: 25, away: 20 },
        matchRisk: 'Safe',
        radarStats: { home: [75, 60, 80, 85, 85, 65], away: [70, 50, 75, 80, 90, 40] },
        advancedStats: { home: { xG: 3.12, restDays: 5, altitudeImpact: 'מארחת / ביתי' }, away: { xG: 0.88, restDays: 4, altitudeImpact: 'עייפות טיסה גדולה' } },
        insight: { prediction: "ארצות הברית תנצל עליונות פיזית ויתרון ביתיות.", actual: "ה-xG של ארה\"ב מעיד על דומיננטיות מוחלטת והתפוצצות התקפית." },
        goals: [{ team: 'ארצות הברית', player: "כריסטיאן פוליסיק", minute: "12'" }, { team: 'ארצות הברית', player: "טימותי וואה", minute: "34'" }, { team: 'ארצות הברית', player: "פולארין באלוגאן", minute: "52'" }, { team: 'פרגוואי', player: "מיגל אלמירון", minute: "71'" }, { team: 'ארצות הברית', player: "ג'ובאני ריינה", minute: "88'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match8': {
        timeStatus: 'past', stage: 'D', dateText: "בית ד' |
