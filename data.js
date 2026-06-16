// מסד הנתונים הרשמי והמשודרג - מונדיאל 2026 (מודל הסתברותי Pro)
// מכיל 14 משחקי עבר מאומתים + 4 תחזיות למשחקים הקרובים לבקשתך

const matchDatabase = {
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

    // --- בית ב' ---
    'match2': {
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

    // --- בית ג' ---
    'match3': {
        timeStatus: 'past', stage: 'C', dateText: "בית ג' | 11 ביוני",
        teamHome: { name: 'האיטי', flagCode: 'ht', color: '#00209F', cards: { yellow: ["פרנצדי פיירו (12')"], red: [] } },
        teamAway: { name: 'סקוטלנד', flagCode: 'gb-sct', color: '#005EB8', cards: { yellow: ["מקטומיניי (45')", "ג'ון מקגין (82')"], red: [] } },
        score: { prediction: '1 - 2', actual: '0 - 1', accuracyClass: 'trend' },
        radarStats: { home: [40, 30, 55, 30, 85, 5], away: [80, 60, 90, 75, 70, 75] },
        advancedStats: { home: { xG: 0.30, restDays: 3, altitudeImpact: 'השפעת טיסה ארוכה' }, away: { xG: 1.15, restDays: 4, altitudeImpact: 'רגיל' } },
        insight: { prediction: "סערה מוקדמת מצד האיטי, שתדעך במחצית השנייה מול השליטה הסקוטית.", actual: "פגיעה במגמה: סקוטלנד ניצחה משער בודד מקרן." },
        goals: [{ team: 'סקוטלנד', player: "ג'ון מקגין", minute: "64'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },

    'match4': {
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
    'match5': {
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

    'match6': {
        timeStatus: 'past', stage: 'D', dateText: "בית ד' | 12 ביוני",
        teamHome: { name: 'אוסטרליה', flagCode: 'au', color: '#FFD100', cards: { yellow: ["אירביין (45')"], red: [] } },
        teamAway: { name: 'טורקיה', flagCode: 'tr', color: '#FF4444', cards: { yellow: ["צ'ליק (22')"], red: [] } },
        score: { prediction: '1 - 1', actual: '1 - 2', accuracyClass: 'wrong' },
        probabilities: { home: 35, draw: 35, away: 30 },
        matchRisk: 'Draw Booster',
        radarStats: { home: [65, 45, 85, 90, 95, 30], away: [88, 75, 65, 75, 70, 75] },
        advancedStats: { home: { xG: 1.10, restDays: 4, altitudeImpact: 'קשה' }, away: { xG: 2.30, restDays: 5, altitudeImpact: 'יתרון אקלים' } },
        insight: { prediction: "הכישרון הטורקי יפגוש את האגרסיביות והלחץ של אוסטרליה. מאבק עיקש.", actual: "פספוס של המודל: הטורקים הצליחו לשבור את הלחץ בעזרת כישרון אישי וניצחו בסיום." },
        goals: [{ team: 'אוסטרליה', player: "מיצ'ל דיוק", minute: "18'" }, { team: 'טורקיה', player: "הקאן צ'להאנולו", minute: "40'" }, { team: 'טורקיה', player: "ארדה גולר", minute: "76'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },

    // --- בית ה' ---
    'match7': {
        timeStatus: 'past', stage: 'E', dateText: "בית ה' | 13 ביוני",
        teamHome: { name: 'גרמניה', flagCode: 'de', color: '#FFFFFF', cards: { yellow: ["גוזנס (44')"], red: [] } },
        teamAway: { name: 'קוראסאו', flagCode: 'cw', color: '#002776', cards: { yellow: ["אניטה (21')", "גארי (78')"], red: [] } },
        score: { prediction: '4 - 0', actual: '7 - 1', accuracyClass: 'trend' },
        probabilities: { home: 85, draw: 10, away: 5 },
        matchRisk: 'Safe',
        radarStats: { home: [90, 85, 80, 90, 80, 95], away: [60, 45, 50, 65, 70, 15] },
        advancedStats: { home: { xG: 4.80, restDays: 5, altitudeImpact: 'רגיל' }, away: { xG: 0.15, restDays: 4, altitudeImpact: 'קשיי חמצן בגובה' } },
        insight: { prediction: "שליטה גרמנית מוחלטת מול נבחרת שמתגוננת. המשמעת תפרק את הבונקר.", actual: "התפוצצות היסטורית! הגרמנים פשוט רמסו ושיחזרו את ה-7:1 המיתולוגי." },
        goals: [{ team: 'גרמניה', player: "קאי האברץ", minute: "12'" }, { team: 'גרמניה', player: "סרג' גנאברי", minute: "24'" }, { team: 'גרמניה', player: "ג'מאל מוסיאלה", minute: "33'" }, { team: 'גרמניה', player: "לאון גורצקה", minute: "45'" }, { team: 'גרמניה', player: "לירוי סאנה", minute: "60'" }, { team: 'גרמניה', player: "קאי האברץ", minute: "72'" }, { team: 'קוראסאו', player: "ז'וניניו באקונה", minute: "81'" }, { team: 'גרמניה', player: "יוזואה קימיך", minute: "88'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },

    'match8': {
        timeStatus: 'past', stage: 'E', dateText: "בית ה' | 13 ביוני",
        teamHome: { name: 'חוף השנהב', flagCode: 'ci', color: '#F77F00', cards: { yellow: ["אורייה (18')", "באילי (89')"], red: [] } },
        teamAway: { name: 'אקוודור', flagCode: 'ec', color: '#FFD100', cards: { yellow: ["טורס (41')", "פלאטה (66')"], red: [] } },
        score: { prediction: '1 - 1', actual: '1 - 0', accuracyClass: 'wrong' },
        probabilities: { home: 38, draw: 34, away: 28 },
        matchRisk: 'Draw Booster',
        radarStats: { home: [80, 65, 70, 75, 90, 65], away: [75, 60, 75, 80, 85, 55] },
        advancedStats: { home: { xG: 1.25, restDays: 4, altitudeImpact: 'לחות מעיקה' }, away: { xG: 0.95, restDays: 4, altitudeImpact: 'קל (רגילים לגובה)' } },
        insight: { prediction: "קרב אדיר על האמצע מרובה פיזיות, הכל מצביע על חלוקת נקודות.", actual: "פספוס במודל: הפיזיות של חוף השנהב הכריעה את המשחק." },
        goals: [{ team: 'חוף השנהב', player: "סבסטיאן האלר", minute: "67'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },

    // --- בית ו' ---
    'match9': {
        timeStatus: 'past', stage: 'F', dateText: "בית ו' | 14 ביוני",
        teamHome: { name: 'הולנד', flagCode: 'nl', color: '#F36C21', cards: { yellow: ["ואן דייק (35')", "דומפריס (82')"], red: [] } },
        teamAway: { name: 'יפן', flagCode: 'jp', color: '#CE1126', cards: { yellow: ["טומייאסו (50')"], red: [] } },
        score: { prediction: '2 - 1', actual: '2 - 2', accuracyClass: 'wrong' },
        probabilities: { home: 50, draw: 28, away: 22 },
        matchRisk: 'Upset Alert',
        radarStats: { home: [88, 85, 75, 80, 80, 90], away: [80, 65, 65, 85, 85, 45] },
        advancedStats: { home: { xG: 1.85, restDays: 3, altitudeImpact: 'עייפות טיסה קלה' }, away: { xG: 1.70, restDays: 4, altitudeImpact: 'רגיל' } },
        insight: { prediction: "הולנד תניע כדור בסבלנות מול היפנים העיקשים. איכות ההתקפה תכריע בדוחק.", actual: "פספוס של המודל! יפן לא נשברת, נלחמה כמו אריות וחילצה תיקו הירואי מהולנד." },
        goals: [{ team: 'הולנד', player: "קודי גאקפו", minute: "22'" }, { team: 'יפן', player: "קאורו מיטומה", minute: "40'" }, { team: 'הולנד', player: "צ'אבי סימונס", minute: "55'" }, { team: 'יפן', player: "ריטסו דואן", minute: "89'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },

    'match10': {
        timeStatus: 'past', stage: 'F', dateText: "בית ו' | 14 ביוני",
        teamHome: { name: 'שוודיה', flagCode: 'se', color: '#006AA7', cards: { yellow: ["לינדלוף (55')"], red: [] } },
        teamAway: { name: 'תוניסיה', flagCode: 'tn', color: '#E70013', cards: { yellow: ["סחירי (23')", "מסאקני (70')"], red: ["דראגר (90')"] } },
        score: { prediction: '2 - 0', actual: '5 - 1', accuracyClass: 'trend' },
        probabilities: { home: 60, draw: 25, away: 15 },
        matchRisk: 'Safe',
        radarStats: { home: [82, 70, 85, 80, 85, 75], away: [75, 65, 60, 85, 75, 40] },
        advancedStats: { home: { xG: 3.10, restDays: 4, altitudeImpact: 'רגיל' }, away: { xG: 0.65, restDays: 3, altitudeImpact: 'עייפות אקלים' } },
        insight: { prediction: "ההגנה התוניסאית קשוחה, אך העוצמה בכדורי גובה תשבור אותה.", actual: "פגיעה במגמה! שוודיה רמסה את תוניסיה עם תצוגה התקפית אדירה." },
        goals: [{ team: 'שוודיה', player: "אלכסנדר איסק", minute: "14'" }, { team: 'שוודיה', player: "אמיל פורסברג", minute: "28'" }, { team: 'שוודיה', player: "ויקטור גיוקרס", minute: "41'" }, { team: 'תוניסיה', player: "והבי חאזרי", minute: "55'" }, { team: 'שוודיה', player: "דיאן קולוסבסקי", minute: "66'" }, { team: 'שוודיה', player: "אלכסנדר איסק", minute: "80'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },

    // --- בית ז' ---
    'match11': {
        timeStatus: 'past', stage: 'G', dateText: "בית ז' | 15 ביוני",
        teamHome: { name: 'בלגיה', flagCode: 'be', color: '#ED2939', cards: { yellow: ["אונאנה (45')"], red: [] } },
        teamAway: { name: 'מצרים', flagCode: 'eg', color: '#C09300', cards: { yellow: ["הגאזי (80')"], red: [] } },
        score: { prediction: '2 - 1', actual: '1 - 2', accuracyClass: 'wrong' },
        probabilities: { home: 55, draw: 25, away: 20 },
        matchRisk: 'Upset Alert',
        radarStats: { home: [85, 80, 75, 70, 70, 85], away: [75, 65, 70, 80, 75, 55] },
        advancedStats: { home: { xG: 1.45, restDays: 4, altitudeImpact: 'השפעה שלילית' }, away: { xG: 1.95, restDays: 4, altitudeImpact: 'רגיל' } },
        insight: { prediction: "סלאח ומרמוש יאתגרו את ההגנה, אך דה בראונה יעשה את ההבדל.", actual: "התקפות מעבר של מצרים פירקו את ההגנה הבלגית." },
        goals: [{ team: 'מצרים', player: "עומר מרמוש", minute: "32'" }, { team: 'בלגיה', player: "רומלו לוקאקו", minute: "50'" }, { team: 'מצרים', player: "מוחמד סלאח", minute: "78'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },

    'match12': {
        timeStatus: 'past', stage: 'G', dateText: "בית ז' | 15 ביוני",
        teamHome: { name: 'איראן', flagCode: 'ir', color: '#239F40', cards: { yellow: ["חאג'-סאפי (66')"], red: [] } },
        teamAway: { name: 'ניו זלנד', flagCode: 'nz', color: '#000000', cards: { yellow: ["בל (31')"], red: [] } },
        score: { prediction: '1 - 0', actual: '0 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 45, draw: 35, away: 20 },
        matchRisk: 'Draw Booster',
        radarStats: { home: [75, 65, 75, 80, 85, 45], away: [65, 55, 70, 75, 80, 30] },
        advancedStats: { home: { xG: 1.20, restDays: 4, altitudeImpact: 'רגיל' }, away: { xG: 0.45, restDays: 4, altitudeImpact: 'קשה' } },
        insight: { prediction: "איראן מחזיקה ביתרון איכות קל בחלק הקדמי שיספיק לניצחון קטן.", actual: "האיראנים החמיצו בלי סוף למרות xG חיובי, ניו-זילנד עקצה." },
        goals: [{ team: 'ניו זלנד', player: "כריס ווד", minute: "85'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },

    // --- בית ח' ---
    'match13': {
        timeStatus: 'past', stage: 'H', dateText: "בית ח' | 16 ביוני",
        teamHome: { name: 'ספרד', flagCode: 'es', color: '#AA151B', cards: { yellow: ["גאבי (52')"], red: [] } },
        teamAway: { name: 'קף ורדה', flagCode: 'cv', color: '#003893', cards: { yellow: ["לופס (22')", "בבה (88')"], red: [] } },
        score: { prediction: '3 - 0', actual: '0 - 0', accuracyClass: 'wrong' },
        probabilities: { home: 75, draw: 18, away: 7 },
        matchRisk: 'Upset Alert',
        radarStats: { home: [95, 95, 75, 85, 70, 95], away: [70, 55, 65, 75, 80, 35] },
        advancedStats: { home: { xG: 2.40, restDays: 5, altitudeImpact: 'רגיל' }, away: { xG: 0.10, restDays: 5, altitudeImpact: 'לחות מקשה' } },
        insight: { prediction: "שליטה מוחלטת של ספרד בהחזקת הכדור. הטיקי-טאקה יכריע.", actual: "בונקר הירואי של קף ורדה! הספרדים החזיקו בכדור 80% מהזמן אך נעצרו." },
        goals: [],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },

    'match14': {
        timeStatus: 'past', stage: 'H', dateText: "בית ח' | 16 ביוני",
        teamHome: { name: 'ערב הסעודית', flagCode: 'sa', color: '#006C35', cards: { yellow: ["טמבקטי (12')"], red: [] } },
        teamAway: { name: 'אורוגוואי', flagCode: 'uy', color: '#0038A8', cards: { yellow: ["אוגרטה (45')"], red: [] } },
        score: { prediction: '0 - 2', actual: '2 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 15, draw: 25, away: 60 },
        matchRisk: 'Upset Alert',
        radarStats: { home: [70, 60, 65, 75, 70, 25], away: [85, 75, 80, 95, 90, 80] },
        advancedStats: { home: { xG: 1.15, restDays: 5, altitudeImpact: 'קל (לח)' }, away: { xG: 1.90, restDays: 5, altitudeImpact: 'קשה' } },
        insight: { prediction: "ביאלסה ואורוגוואי יביאו לחץ גבוה שערב הסעודית לא תוכל לעמוד בו.", actual: "אורוגוואי התעייפה משמעותית מהאקלים הלח בסיום, מה שאפשר מהפך סעודי מהסרטים." },
        goals: [{ team: 'אורוגוואי', player: "דרווין נונייס", minute: "22'" }, { team: 'ערב הסעודית', player: "סאלם אל-דאווסרי", minute: "55'" }, { team: 'ערב הסעודית', player: "סאלח אל-שחרי", minute: "63'" }],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },

    // ==========================================
    // --- תחזיות חדשות לעתיד (לבקשתך) ---
    // ==========================================

    // 15. צרפת נגד סנגל (בית ט') - להמשך היום!
    'match15': {
        timeStatus: 'future', stage: 'I', dateText: "בית ט' | 16 ביוני (טרום-שריקה)",
        teamHome: { name: 'צרפת', flagCode: 'fr', color: '#002395', cards: { yellow: [], red: [] } },
        teamAway: { name: 'סנגל', flagCode: 'sn', color: '#00853F', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 0', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 65, draw: 22, away: 13 },
        matchRisk: 'Safe',
        radarStats: { home: [95, 85, 80, 85, 90, 98], away: [70, 40, 75, 80, 95, 55] },
        advancedStats: { home: { xG: '2.15 (צפי)', restDays: 5, altitudeImpact: 'רגיל' }, away: { xG: '0.80 (צפי)', restDays: 5, altitudeImpact: 'רגיל' } },
        insight: { prediction: "פערי איכות הסגל כאן עצומים (98 מול 55). הקישור הצרפתי ישלוט לחלוטין בקצב, ואמבפה ינצל שטחים מתים במעבר.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["מניאן", "גריזמן", "אמבפה"], actual: [] }, away: { predicted: ["מנדי", "קוליבאלי", "מאנה"], actual: [] } }
    },

    // 16. עיראק נגד נורווגיה (בית ט')
    'match16': {
        timeStatus: 'future', stage: 'I', dateText: "בית ט' | 17 ביוני (טרום-שריקה)",
        teamHome: { name: 'עיראק', flagCode: 'iq', color: '#007A3D', cards: { yellow: [], red: [] } },
        teamAway: { name: 'נורווגיה', flagCode: 'no', color: '#BA0C2F', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 3', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 18, draw: 22, away: 60 },
        matchRisk: 'Safe',
        radarStats: { home: [65, 50, 60, 80, 75, 15], away: [80, 70, 75, 75, 85, 75] },
        advancedStats: { home: { xG: '0.75 (צפי)', restDays: 5, altitudeImpact: 'קשיי אקלים קר' }, away: { xG: '2.45 (צפי)', restDays: 5, altitudeImpact: 'אקלים אופטימלי' } },
        insight: { prediction: "ההתאמה הטקטית הרסנית לעיראק. ארלינג הולאנד מגיע בכושר שיא פיזי מול קו הגנה איטי, המודל צופה חגיגה נורווגית באוויר.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["חassan", "עטיה", "חוסיין"], actual: [] }, away: { predicted: ["נילאנד", "אודגור", "הולאנד"], actual: [] } }
    },

    // 17. ארגנטינה נגד אלג'יריה (בית י')
    'match17': {
        timeStatus: 'future', stage: 'J', dateText: "בית י' | 17 ביוני (טרום-שריקה)",
        teamHome: { name: 'ארגנטינה', flagCode: 'ar', color: '#75AADB', cards: { yellow: [], red: [] } },
        teamAway: { name: 'אלג\'יריה', flagCode: 'dz', color: '#006233', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 44, draw: 36, away: 20 },
        matchRisk: 'Draw Booster',
        radarStats: { home: [95, 70, 80, 75, 60, 95], away: [75, 60, 70, 85, 90, 60] },
        advancedStats: { home: { xG: '1.40 (צפי)', restDays: 5, altitudeImpact: 'עייפות קלה' }, away: { xG: '1.20 (צפי)', restDays: 5, altitudeImpact: 'יתרון פיזי מובהק' } },
        insight: { prediction: "בוסטר תיקו מופעל! אלג'יריה היא קבוצת בונקר/מתפרצות קלאסית עם פיזיות מטורפת (90) שתתסכל את מסי וחבריו במרכז המגרש.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["מרטינז", "דה פול", "מסי"], actual: [] }, away: { predicted: ["מנדריאה", "בנאצר", "מחרז"], actual: [] } }
    },

    // 18. אוסטריה נגד ירדן (בית י')
    'match18': {
        timeStatus: 'future', stage: 'J', dateText: "בית י' | 18 ביוני (טרום-שריקה)",
        teamHome: { name: 'אוסטריה', flagCode: 'at', color: '#ED2939', cards: { yellow: [], red: [] } },
        teamAway: { name: 'ירדן', flagCode: 'jo', color: '#CE1126', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 0', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 62, draw: 26, away: 12 },
        matchRisk: 'Safe',
        radarStats: { home: [80, 75, 70, 80, 80, 70], away: [60, 45, 55, 75, 70, 10] },
        advancedStats: { home: { xG: '1.90 (צפי)', restDays: 5, altitudeImpact: 'רגיל' }, away: { xG: '0.50 (צפי)', restDays: 5, altitudeImpact: 'עייפות טיסה' } },
        insight: { prediction: "הלחץ הגבוה של האוסטרים (Gegenpressing) יחנק את בניית המשחק הירדנית. פערי איכות הסגל יבטיחו שליטה אוסטרית רציפה.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["שלאגר", "זביצר", "לאימר"], actual: [] }, away: { predicted: ["אבו לילא", "אל-תעמרי", "אולוואן"], actual: [] } }
    }
};
