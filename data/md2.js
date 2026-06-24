// data/md2.js - מחזור 2 המלא (כולל עדכון תוצאות ה-23 וה-24 ביוני)

const matchday2Database = {
    // --- משחקי עבר (18 עד 21 ביוני) ---
    'match25': {
        timeStatus: 'past', matchday: 2, stage: 'A', dateText: "בית א' | 18 ביוני",
        teamHome: { name: 'מקסיקו', flagCode: 'mx', color: '#006341', cards: { yellow: ["אלברז (44')"], red: [] } },
        teamAway: { name: 'קוריאה הדרומית', flagCode: 'kr', color: '#C60C30', cards: { yellow: ["קים (12')"], red: [] } },
        score: { prediction: '1 - 1', actual: '1 - 1', accuracyClass: 'exact' },
        probabilities: { home: 35, draw: 40, away: 25 }, matchRisk: 'Draw Booster',
        radarStats: { home: [75, 70, 65, 75, 70, 80], away: [70, 65, 60, 85, 80, 75] },
        advancedStats: { home: { xG: 1.12, restDays: 9, altitudeImpact: 'מארחת / רגיל' }, away: { xG: 0.95, restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "בוסטר תיקו קלאסי. שתי הנבחרות יפחדו להפסיד ויסגרו את המשחק במרכז השדה.", actual: "פגיעה בול של המודל! משחק טקטי וזהיר שהסתיים בחלוקת נקודות מוצדקת." },
        goals: [{ team: 'מקסיקו', player: "חימנז", minute: "33'" }, { team: 'קוריאה הדרומית', player: "סון", minute: "67'" }],
        squads: { home: { predicted: ["אוצ'ואה", "אלברז", "לוזאנו"], actual: ["אוצ'ואה", "אלברז", "לוזאנו"] }, away: { predicted: ["קים", "סון", "הוואנג"], actual: ["קים", "סון", "הוואנג"] } }
    },
    'match26': {
        timeStatus: 'past', matchday: 2, stage: 'A', dateText: "בית א' | 18 ביוני",
        teamHome: { name: 'דרום אפריקה', flagCode: 'za', color: '#FFC425', cards: { yellow: [], red: [] } },
        teamAway: { name: 'צ\'כיה', flagCode: 'cz', color: '#11457E', cards: { yellow: ["סוצ'ק (88')"], red: [] } },
        score: { prediction: '1 - 2', actual: '0 - 2', accuracyClass: 'trend' },
        probabilities: { home: 20, draw: 30, away: 50 }, matchRisk: 'Safe',
        radarStats: { home: [60, 50, 65, 70, 75, 30], away: [80, 65, 75, 75, 85, 75] },
        advancedStats: { home: { xG: 0.40, restDays: 9, altitudeImpact: 'רגיל' }, away: { xG: 1.85, restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "צ'כיה חייבת ניצחון ותנצל את הפיזיות שלה במרכז השדה מול הדרום אפריקאים.", actual: "צ'כיה שלטה ללא עוררין והשיגה את הניצחון הדרוש לה בקלות." },
        goals: [{ team: 'צ\'כיה', player: "שיק", minute: "14'" }, { team: 'צ\'כיה', player: "הלוז'ק", minute: "55'" }],
        squads: { home: { predicted: ["וויליאמס", "מוקואנה", "טאו"], actual: ["וויליאמס", "מוקואנה", "טאו"] }, away: { predicted: ["סטאנק", "סוצ'ק", "שיק"], actual: ["סטאנק", "סוצ'ק", "שיק"] } }
    },
    'match27': {
        timeStatus: 'past', matchday: 2, stage: 'B', dateText: "בית ב' | 18 ביוני",
        teamHome: { name: 'קטר', flagCode: 'qa', color: '#8A1538', cards: { yellow: [], red: [] } },
        teamAway: { name: 'קנדה', flagCode: 'ca', color: '#FF0000', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 2', actual: '0 - 3', accuracyClass: 'trend' },
        probabilities: { home: 15, draw: 25, away: 60 }, matchRisk: 'Safe',
        radarStats: { home: [55, 45, 50, 75, 65, 10], away: [80, 75, 65, 80, 85, 75] },
        advancedStats: { home: { xG: 0.30, restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: 2.45, restDays: 6, altitudeImpact: 'מארחת משותפת' } },
        insight: { prediction: "קנדה מהירה ועדיפה בהרבה. המארחת הקטארית תתקשה לעמוד בקצב המעברים.", actual: "משחק במעמד צד אחד. דייוויס ודייוויד פירקו את ההגנה הקטארית." },
        goals: [{ team: 'קנדה', player: "דייוויד", minute: "22'" }, { team: 'קנדה', player: "דייוויס", minute: "40'" }, { team: 'קנדה', player: "ביוקנן", minute: "71'" }],
        squads: { home: { predicted: ["ברשאם", "ח'וח'י", "עלי"], actual: ["ברשאם", "ח'וח'י", "עלי"] }, away: { predicted: ["בוריאן", "דייוויס", "דייוויד"], actual: ["בוריאן", "דייוויס", "דייוויד"] } }
    },
    'match28': {
        timeStatus: 'past', matchday: 2, stage: 'B', dateText: "בית ב' | 19 ביוני",
        teamHome: { name: 'שוויץ', flagCode: 'ch', color: '#FF0000', cards: { yellow: [], red: [] } },
        teamAway: { name: 'בוסניה והרצגובינה', flagCode: 'ba', color: '#002F6C', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 1', actual: '4 - 1', accuracyClass: 'trend' },
        probabilities: { home: 55, draw: 28, away: 17 }, matchRisk: 'Safe',
        radarStats: { home: [82, 75, 70, 80, 75, 80], away: [70, 60, 75, 75, 80, 65] },
        advancedStats: { home: { xG: 2.85, restDays: 9, altitudeImpact: 'אופטימלי' }, away: { xG: 0.90, restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "המשמעת הטקטית של שוויץ תנצח במרכז השדה, אך דז'קו תמיד מסוכן בכדורי גובה.", actual: "התפוצצות שוויצרית! שטפו את המגרש ודרסו את בוסניה ללא רחמים." },
        goals: [{ team: 'שוויץ', player: "שאקירי", minute: "14'" }, { team: 'בוסניה והרצגובינה', player: "דז'קו", minute: "44'" }, { team: 'שוויץ', player: "ורגאס", minute: "60'" }, { team: 'שוויץ', player: "ורגאס", minute: "85'" }, { team: 'שוויץ', player: "ג'אקה", minute: "90+2'" }],
        squads: { home: { predicted: ["זומר", "ג'אקה", "שאקירי"], actual: ["זומר", "ג'אקה", "שאקירי"] }, away: { predicted: ["שחיץ'", "פיאניץ'", "דז'קו"], actual: ["שחיץ'", "פיאניץ'", "דז'קו"] } }
    },
    'match29': {
        timeStatus: 'past', matchday: 2, stage: 'D', dateText: "בית ד' | 19 ביוני",
        teamHome: { name: 'ארצות הברית', flagCode: 'us', color: '#002868', cards: { yellow: [], red: [] } },
        teamAway: { name: 'אוסטרליה', flagCode: 'au', color: '#FFD100', cards: { yellow: [], red: [] } },
        score: { prediction: '3 - 1', actual: '2 - 0', accuracyClass: 'trend' },
        probabilities: { home: 60, draw: 25, away: 15 }, matchRisk: 'Safe',
        radarStats: { home: [80, 65, 80, 85, 85, 75], away: [65, 45, 85, 90, 95, 30] },
        advancedStats: { home: { xG: 2.10, restDays: 7, altitudeImpact: 'מארחת / ביתי' }, away: { xG: 0.85, restDays: 7, altitudeImpact: 'עייפות קלה' } },
        insight: { prediction: "ארה\"ב מגיעה אחרי התפוצצות ותנצל את המהירות באגפים מול האוסטרלים הקשוחים.", actual: "ניצחון אמריקאי סולידי. שער עצמי מוקדם שבר את אוסטרליה ופרימן סגר עניין." },
        goals: [{ team: 'ארצות הברית', player: "בורגס (עצמי)", minute: "11'" }, { team: 'ארצות הברית', player: "פרימן", minute: "43'" }],
        squads: { home: { predicted: ["טרנר", "אדמס", "פוליסיק", "וואה", "ריינה", "פרימן"], actual: ["טרנר", "אדמס", "פוליסיק", "וואה", "ריינה", "פרימן"] }, away: { predicted: ["ריאן", "סוטאר", "בורגס", "דיוק"], actual: ["ריאן", "סוטאר", "בורגס", "דיוק"] } }
    },
    'match30': {
        timeStatus: 'past', matchday: 2, stage: 'C', dateText: "בית ג' | 20 ביוני",
        teamHome: { name: 'סקוטלנד', flagCode: 'gb-sct', color: '#005EB8', cards: { yellow: [], red: [] } },
        teamAway: { name: 'מרוקו', flagCode: 'ma', color: '#FF3333', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '0 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 35, draw: 40, away: 25 }, matchRisk: 'Draw Booster',
        radarStats: { home: [80, 65, 85, 75, 75, 70], away: [78, 55, 80, 90, 90, 75] },
        advancedStats: { home: { xG: 1.05, restDays: 9, altitudeImpact: 'רגיל' }, away: { xG: 1.15, restDays: 9, altitudeImpact: 'רגיל' } },
        insight: { prediction: "בוסטר תיקו פעיל. משחק חפירות מרובה מאבקים פיזיים.", actual: "מרוקו שוב מוכיחה אופי ברזל ומשיגה ניצחון קטן וקריטי במשחק קשוח." },
        goals: [{ team: 'מרוקו', player: "אן-נסירי", minute: "68'" }],
        squads: { home: { predicted: ["גאן", "מקטומיניי", "מקגין"], actual: ["גאן", "מקטומיניי", "מקגין"] }, away: { predicted: ["בונו", "חכימי", "זיאש"], actual: ["בונו", "חכימי", "זיאש", "אן-נסירי"] } }
    },
    'match31': {
        timeStatus: 'past', matchday: 2, stage: 'C', dateText: "בית ג' | 20 ביוני",
        teamHome: { name: 'ברזיל', flagCode: 'br', color: '#FFD700', cards: { yellow: [], red: [] } },
        teamAway: { name: 'האיטי', flagCode: 'ht', color: '#00209F', cards: { yellow: [], red: [] } },
        score: { prediction: '4 - 0', actual: '3 - 0', accuracyClass: 'trend' },
        probabilities: { home: 88, draw: 9, away: 3 }, matchRisk: 'Safe',
        radarStats: { home: [95, 85, 75, 80, 75, 95], away: [35, 30, 50, 40, 80, 5] },
        advancedStats: { home: { xG: 3.40, restDays: 9, altitudeImpact: 'אופטימלי' }, away: { xG: 0.25, restDays: 9, altitudeImpact: 'קשה' } },
        insight: { prediction: "משחק חד צדדי. הסלסאו מיועדים להתפוצץ על ההגנה של האיטי.", actual: "ניצחון חלק לברזיל. שייטו על הדשא ללא שום התנגדות ממשית מצד האיטי." },
        goals: [{ team: 'ברזיל', player: "ויניסיוס", minute: "24'" }, { team: 'ברזיל', player: "רודריגו", minute: "55'" }, { team: 'ברזיל', player: "מרטינלי", minute: "81'" }],
        squads: { home: { predicted: ["אליסון", "קאסמירו", "ויניסיוס"], actual: ["אליסון", "קאסמירו", "ויניסיוס", "רודריגו", "מרטינלי"] }, away: { predicted: ["פלאסיד", "ז'רום", "פיירו"], actual: ["פלאסיד", "ז'רום", "פיירו"] } }
    },
    'match32': {
        timeStatus: 'past', matchday: 2, stage: 'D', dateText: "בית ד' | 20 ביוני",
        teamHome: { name: 'טורקיה', flagCode: 'tr', color: '#FF4444', cards: { yellow: [], red: [] } },
        teamAway: { name: 'פרגוואי', flagCode: 'py', color: '#D52B1E', cards: { yellow: [], red: [] } },
        score: { prediction: '3 - 1', actual: '0 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 55, draw: 25, away: 20 }, matchRisk: 'Safe',
        radarStats: { home: [88, 75, 65, 75, 70, 75], away: [70, 50, 75, 80, 90, 40] },
        advancedStats: { home: { xG: 1.95, restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: 1.50, restDays: 8, altitudeImpact: 'לחץ מנטלי' } },
        insight: { prediction: "ההתקפה הטורקית היצירתית תמצא את הפרצות בהגנה של פרגוואי.", actual: "הלם! פרגוואי עקצה עם גלארזה בדקה ה-2, הסתגרה בהגנת ברזל והשאירה את טורקיה מתוסכלת." },
        goals: [{ team: 'פרגוואי', player: "גלארזה", minute: "2'" }],
        squads: { home: { predicted: ["גיונוק", "צ'להאנולו", "גולר"], actual: ["גיונוק", "צ'להאנולו", "גולר"] }, away: { predicted: ["קורונל", "אלמירון", "גומז", "גלארזה"], actual: ["קורונל", "אלמירון", "גומז", "גלארזה"] } }
    },
    'match33': {
        timeStatus: 'past', matchday: 2, stage: 'F', dateText: "בית ו' | 20 ביוני",
        teamHome: { name: 'הולנד', flagCode: 'nl', color: '#F36C21', cards: { yellow: [], red: [] } },
        teamAway: { name: 'שוודיה', flagCode: 'se', color: '#FFD700', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 1', actual: '5 - 1', accuracyClass: 'trend' },
        probabilities: { home: 55, draw: 30, away: 15 }, matchRisk: 'Safe',
        radarStats: { home: [85, 80, 85, 75, 80, 85], away: [70, 75, 65, 85, 85, 70] },
        advancedStats: { home: { xG: 2.15, restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: 0.90, restDays: 8, altitudeImpact: 'רגיל' } },
        insight: { prediction: "הולנד תכתיב את הקצב, שוודיה תנסה לעקוץ במצבים נייחים. פערי האיכות יכריעו.", actual: "התפוצצות כתומה! הולנד דרסה את שוודיה ללא רחמים עם חמישייה מהדהדת." },
        goals: [],
        squads: { home: { predicted: ["ורברוחן", "ואן דייק", "דה יונג", "חאקפו"], actual: ["ורברוחן", "ואן דייק", "דה יונג", "חאקפו"] }, away: { predicted: ["אולסן", "לינדלף", "קולוסבסקי", "איסאק"], actual: ["אולסן", "לינדלף", "קולוסבסקי", "איסאק"] } }
    },
    'match34': {
        timeStatus: 'past', matchday: 2, stage: 'E', dateText: "בית ה' | 20 ביוני",
        teamHome: { name: 'גרמניה', flagCode: 'de', color: '#000000', cards: { yellow: [], red: [] } },
        teamAway: { name: 'חוף השנהב', flagCode: 'ci', color: '#FF8200', cards: { yellow: [], red: [] } },
        score: { prediction: '3 - 1', actual: '2 - 1', accuracyClass: 'trend' },
        probabilities: { home: 70, draw: 20, away: 10 }, matchRisk: 'Safe',
        radarStats: { home: [90, 85, 90, 80, 85, 90], away: [75, 70, 80, 75, 85, 65] },
        advancedStats: { home: { xG: 2.80, restDays: 7, altitudeImpact: 'אופטימלי' }, away: { xG: 1.05, restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "הגרמנים במומנטום. חוף השנהב מסוכנת אבל תתקשה לעמוד בלחץ.", actual: "ניצחון קשוח לגרמנים מול פייט אדיר של חוף השנהב." },
        goals: [],
        squads: { home: { predicted: ["טר שטגן", "רודיגר", "קימיך", "מוסיאלה"], actual: ["טר שטגן", "רודיגר", "קימיך", "מוסיאלה"] }, away: { predicted: ["פופאנה", "נדיקה", "קסי", "האלר"], actual: ["פופאנה", "נדיקה", "קסי", "האלר"] } }
    },
    'match35': {
        timeStatus: 'past', matchday: 2, stage: 'E', dateText: "בית ה' | 21 ביוני",
        teamHome: { name: 'אקוודור', flagCode: 'ec', color: '#FFD100', cards: { yellow: [], red: [] } },
        teamAway: { name: 'קוראסאו', flagCode: 'cw', color: '#002B7F', cards: { yellow: [], red: [] } },
        score: { prediction: '3 - 0', actual: '0 - 0', accuracyClass: 'wrong' },
        probabilities: { home: 85, draw: 10, away: 5 }, matchRisk: 'Safe',
        radarStats: { home: [80, 75, 80, 85, 85, 75], away: [50, 40, 60, 55, 60, 45] },
        advancedStats: { home: { xG: 2.40, restDays: 8, altitudeImpact: 'אופטימלי' }, away: { xG: 0.40, restDays: 8, altitudeImpact: 'לחץ מנטלי' } },
        insight: { prediction: "משחק חד צדדי. אקוודור תנצל את השבירות של קוראסאו.", actual: "סנסציה! קוראסאו הציגה הגנת ברזל וסחטה נקודה היסטורית." },
        goals: [],
        squads: { home: { predicted: ["דומינגס", "הינקאפיה", "קאיסדו", "ולנסיה"], actual: ["דומינגס", "הינקאפיה", "קאיסדו", "ולנסיה"] }, away: { predicted: ["רום", "מרטינה", "באקונה", "יאנגה"], actual: ["רום", "מרטינה", "באקונה", "יאנגה"] } }
    },
    'match36': {
        timeStatus: 'past', matchday: 2, stage: 'F', dateText: "בית ו' | 21 ביוני",
        teamHome: { name: 'תוניסיה', flagCode: 'tn', color: '#E70013', cards: { yellow: [], red: [] } },
        teamAway: { name: 'יפן', flagCode: 'jp', color: '#000555', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '0 - 4', accuracyClass: 'wrong' },
        probabilities: { home: 30, draw: 45, away: 25 }, matchRisk: 'Draw Booster',
        radarStats: { home: [70, 65, 70, 85, 80, 65], away: [75, 75, 80, 70, 75, 75] },
        advancedStats: { home: { xG: 0.90, restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: 1.10, restDays: 8, altitudeImpact: 'רגיל' } },
        insight: { prediction: "בוסטר תיקו. שתי נבחרות טקטיות וממושמעות שיעדיפו לא לעשות טעויות.", actual: "קונצרט יפני! הסמוראים פירקו לחלוטין את משחק ההגנה התוניסאי." },
        goals: [{ team: 'יפן', player: "אואדה", minute: "מחצית 1" }, { team: 'יפן', player: "אואדה", minute: "מחצית 2" }, { team: 'יפן', player: "קמאדה", minute: "מחצית 2" }, { team: 'יפן', player: "איטו", minute: "מחצית 2" }],
        squads: { home: { predicted: ["דחמאן", "טאלבי", "סח'ירי", "מסאכני"], actual: ["דחמאן", "טאלבי", "סח'ירי", "מסאכני"] }, away: { predicted: ["סוזוקי", "טומיאסו", "אנדו", "מיטומה"], actual: ["סוזוקי", "טומיאסו", "אנדו", "מיטומה"] } }
    },
    'match37': {
        timeStatus: 'past', matchday: 2, stage: 'H', dateText: "בית ח' | 21 ביוני",
        teamHome: { name: 'ספרד', flagCode: 'es', color: '#C60B1E', cards: { yellow: [], red: [] } },
        teamAway: { name: 'ערב הסעודית', flagCode: 'sa', color: '#006C35', cards: { yellow: [], red: [] } },
        score: { prediction: '3 - 0', actual: '4 - 0', accuracyClass: 'trend' },
        probabilities: { home: 85, draw: 10, away: 5 }, matchRisk: 'Safe',
        radarStats: { home: [95, 90, 80, 85, 75, 90], away: [65, 55, 60, 70, 65, 60] },
        advancedStats: { home: { xG: 2.80, restDays: 7, altitudeImpact: 'רגיל' }, away: { xG: 0.35, restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "ספרד תשטוף את המגרש עם טיקי-טאקה מודרני והחזקת כדור אבסולוטית.", actual: "התפוצצות של לה רוחה! ימאל ואויארסבאל סגרו סיפור ב-24 דקות." },
        goals: [{ team: 'ספרד', player: "ימאל", minute: "מוקדם" }, { team: 'ספרד', player: "אויארסבאל", minute: "מחצית 1" }, { team: 'ספרד', player: "אויארסבאל", minute: "מחצית 1" }, { team: 'ספרד', player: "שער עצמי", minute: "מחצית 2" }],
        squads: { home: { predicted: ["סימון", "רודרי", "פדרי", "מוראטה"], actual: ["סימון", "רודרי", "פדרי", "מוראטה", "ימאל", "אויארסבאל"] }, away: { predicted: ["אל-אוואיס", "אל-בולייהי", "קאנו", "אל-דאווסרי"], actual: ["אל-אוואיס", "אל-בולייהי", "קאנו", "אל-דאווסרי"] } }
    },
    'match38': {
        timeStatus: 'past', matchday: 2, stage: 'G', dateText: "בית ז' | 21 ביוני",
        teamHome: { name: 'בלגיה', flagCode: 'be', color: '#E30613', cards: { yellow: [], red: ["אנגוי (67')"] } },
        teamAway: { name: 'איראן', flagCode: 'ir', color: '#1BA15F', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 0', actual: '0 - 0', accuracyClass: 'wrong' },
        probabilities: { home: 78, draw: 15, away: 7 }, matchRisk: 'Safe',
        radarStats: { home: [85, 80, 75, 75, 80, 85], away: [65, 50, 70, 80, 80, 60] },
        advancedStats: { home: { xG: 1.20, restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: 0.40, restDays: 8, altitudeImpact: 'לחץ מנטלי' } },
        insight: { prediction: "איראן תעמיד אוטובוס ברחבה, אבל העומק הבלגי יפרוץ את הסכר.", actual: "האוטובוס האיראני עבד בצורה מושלמת! בלגיה תוסכלה ואף איבדה את אנגוי באדום." },
        goals: [],
        squads: { home: { predicted: ["קסטילס", "ורטונגן", "דה בריינה", "לוקאקו"], actual: ["קסטילס", "ורטונגן", "דה בריינה", "לוקאקו", "אנגוי"] }, away: { predicted: ["ביירנבאנד", "חאג'ספי", "אזמון", "טארמי"], actual: ["ביירנבאנד", "חאג'ספי", "אזמון", "טארמי"] } }
    },
    'match39': {
        timeStatus: 'past', matchday: 2, stage: 'H', dateText: "בית ח' | 22 ביוני",
        teamHome: { name: 'אורוגוואי', flagCode: 'uy', color: '#0038A8', cards: { yellow: [], red: [] } },
        teamAway: { name: 'קף ורדה', flagCode: 'cv', color: '#003893', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 0', actual: '2 - 2', accuracyClass: 'wrong' },
        probabilities: { home: 72, draw: 20, away: 8 }, matchRisk: 'Safe',
        radarStats: { home: [80, 70, 80, 95, 90, 80], away: [65, 60, 65, 75, 80, 55] },
        advancedStats: { home: { xG: 1.55, restDays: 8, altitudeImpact: 'אופטימלי' }, away: { xG: 1.10, restDays: 8, altitudeImpact: 'רגיל' } },
        insight: { prediction: "הפיזיות של אורוגוואי והניסיון במרכז השדה יכריעו מול ההתלהבות של הקריביים.", actual: "סנסציה היסטורית! כף ורדה חזרה מפיגור כפול עם נחישות מדהימה." },
        goals: [{ team: 'אורוגוואי', player: "שחקן אורוגוואי", minute: "מחצית 1" }, { team: 'אורוגוואי', player: "שחקן אורוגוואי", minute: "מחצית 1" }, { team: 'קף ורדה', player: "פינה", minute: "מחצית 2" }, { team: 'קף ורדה', player: "בארלה", minute: "מחצית 2" }],
        squads: { home: { predicted: ["רוצ'ט", "חימנז", "ואלוורדה", "נונייז"], actual: ["רוצ'ט", "חימנז", "ואלוורדה", "נונייז"] }, away: { predicted: ["ווזיניה", "פיקו", "מנדש", "בבה"], actual: ["ווזיניה", "פיקו", "מנדש", "בבה", "פינה", "בארלה"] } }
    },
    'match40': {
        timeStatus: 'past', matchday: 2, stage: 'G', dateText: "בית ז' | 22 ביוני",
        teamHome: { name: 'ניו זלנד', flagCode: 'nz', color: '#000000', cards: { yellow: [], red: [] } },
        teamAway: { name: 'מצרים', flagCode: 'eg', color: '#CE1126', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 2', actual: '1 - 3', accuracyClass: 'trend' },
        probabilities: { home: 15, draw: 25, away: 60 }, matchRisk: 'Safe',
        radarStats: { home: [60, 50, 70, 75, 80, 50], away: [75, 65, 70, 80, 75, 75] },
        advancedStats: { home: { xG: 0.85, restDays: 7, altitudeImpact: 'רגיל' }, away: { xG: 2.15, restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "מצרים טובה ומהירה יותר, ותנצל את השטחים שיתפנו. ניו זלנד הכבדה תתקשה.", actual: "קאמבק מצרי פנטסטי! סלאח התעורר והוביל את מצרים לניצחון." },
        goals: [{ team: 'ניו זלנד', player: "שחקן ניו זלנד", minute: "מוקדם" }, { team: 'מצרים', player: "סלאח (מעורב)", minute: "מחצית 2" }, { team: 'מצרים', player: "שחקן מצרים", minute: "מחצית 2" }, { team: 'מצרים', player: "שחקן מצרים", minute: "מחצית 2" }],
        squads: { home: { predicted: ["סייל", "ריד", "בל", "ווד"], actual: ["סייל", "ריד", "בל", "ווד"] }, away: { predicted: ["אל-שנאווי", "חגאזי", "אלנני", "סלאח"], actual: ["אל-שנאווי", "חגאזי", "אלנני", "סלאח"] } }
    },
    'match41': {
        timeStatus: 'past', matchday: 2, stage: 'J', dateText: "בית י' | 22 ביוני",
        teamHome: { name: 'ארגנטינה', flagCode: 'ar', color: '#75AADB', cards: { yellow: ["מדינה (76')", "פארדס (90')"], red: [] } },
        teamAway: { name: 'אוסטריה', flagCode: 'at', color: '#EF3340', cards: { yellow: ["פוש (40')", "ליימר (76')"], red: [] } },
        score: { prediction: '2 - 0', actual: '2 - 0', accuracyClass: 'exact' },
        probabilities: { home: 65, draw: 20, away: 15 }, matchRisk: 'Safe',
        radarStats: { home: [95, 85, 80, 95, 80, 95], away: [70, 65, 75, 80, 85, 70] },
        advancedStats: { home: { xG: 2.15, restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: 0.80, restDays: 8, altitudeImpact: 'רגיל' } },
        insight: { prediction: "האוסטרים יבואו לשחק חזק וטקטי, אבל האיכות של אלופת העולם במרכז השדה בלתי ניתנת לעצירה.", actual: "פגיעה בול (2-0)! מסי כיפר על פנדל מוחמץ, כבש צמד ושבר את שיא הכיבושים ההיסטורי במונדיאל." },
        goals: [{ team: 'ארגנטינה', player: "מסי", minute: "38'" }, { team: 'ארגנטינה', player: "מסי", minute: "90+4'" }],
        squads: { home: { predicted: ["מרטינז", "רומרו", "דה פול", "מסי"], actual: ["מרטינז", "מסי"] }, away: { predicted: ["שלנברג", "אלאבה", "זביצר", "ארנאוטוביץ'"], actual: ["שלאגר", "אלאבה"] } }
    },

    // --- עדכון משחקי הלילה (22-24 ביוני) שעברו לסטטוס PAST לפי הנתונים שלך ---
    'match42': {
        timeStatus: 'past', matchday: 2, stage: 'I', dateText: "בית ט' | 23 ביוני",
        teamHome: { name: 'צרפת', flagCode: 'fr', color: '#002654', cards: { yellow: [], red: [] } },
        teamAway: { name: 'עיראק', flagCode: 'iq', color: '#007A3D', cards: { yellow: [], red: [] } },
        score: { prediction: '4 - 0', actual: '3 - 0', accuracyClass: 'trend' },
        probabilities: { home: 88, draw: 9, away: 3 }, matchRisk: 'Safe',
        radarStats: { home: [95, 90, 85, 90, 95, 95], away: [50, 45, 55, 60, 65, 40] },
        advancedStats: { home: { xG: 3.60, restDays: 7, altitudeImpact: 'רגיל' }, away: { xG: 0.25, restDays: 7, altitudeImpact: 'לחץ מנטלי' } },
        insight: { prediction: "פער איכויות עצום. עיראק תצופף את הרחבה, צרפת תפרק את הבונקר.", actual: "ניצחון צרפתי חלק 3-0, שליטה מוחלטת בדרך לשלב הבא." },
        goals: [], squads: { home: { predicted: ["מניאן", "אמבפה"], actual: [] }, away: { predicted: ["חסן", "חוסיין"], actual: [] } }
    },
    'match43': {
        timeStatus: 'past', matchday: 2, stage: 'I', dateText: "בית ט' | 23 ביוני",
        teamHome: { name: 'נורווגיה', flagCode: 'no', color: '#BA0C2F', cards: { yellow: [], red: [] } },
        teamAway: { name: 'סנגל', flagCode: 'sn', color: '#00853F', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 2', actual: '3 - 2', accuracyClass: 'wrong' },
        probabilities: { home: 35, draw: 35, away: 30 }, matchRisk: 'Draw Booster',
        radarStats: { home: [75, 70, 85, 75, 85, 80], away: [70, 65, 80, 80, 90, 75] },
        advancedStats: { home: { xG: 1.45, restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: 1.40, restDays: 8, altitudeImpact: 'רגיל' } },
        insight: { prediction: "קרב פיזי אדיר עם שערים לשני הצדדים.", actual: "משחק הפכפך ודרמטי שהסתיים בניצחון נורווגי מרשים של 3-2." },
        goals: [], squads: { home: { predicted: ["ניילנד", "הולאנד"], actual: [] }, away: { predicted: ["מנדי", "מאנה"], actual: [] } }
    },
    'match44': {
        timeStatus: 'past', matchday: 2, stage: 'J', dateText: "בית י' | 23 ביוני",
        teamHome: { name: 'ירדן', flagCode: 'jo', color: '#CE1126', cards: { yellow: [], red: [] } },
        teamAway: { name: 'אלג\'יריה', flagCode: 'dz', color: '#006233', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 2', actual: '1 - 2', accuracyClass: 'trend' },
        probabilities: { home: 15, draw: 25, away: 60 }, matchRisk: 'Safe',
        radarStats: { home: [55, 45, 60, 70, 65, 50], away: [80, 75, 70, 80, 80, 75] },
        advancedStats: { home: { xG: 0.60, restDays: 7, altitudeImpact: 'רגיל' }, away: { xG: 1.95, restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "שועלי המדבר עדיפים טכנית ויתרגמו את השליטה בכדור לניצחון.", actual: "ירדן כבשה, אך אלג'יריה הפכה את התוצאה ל-2:1 חשוב." },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match45': {
        timeStatus: 'past', matchday: 2, stage: 'K', dateText: "בית כ' | 23 ביוני",
        teamHome: { name: 'פורטוגל', flagCode: 'pt', color: '#FF0000', cards: { yellow: [], red: [] } },
        teamAway: { name: 'אוזבקיסטן', flagCode: 'uz', color: '#0099B5', cards: { yellow: [], red: [] } },
        score: { prediction: '3 - 0', actual: '5 - 0', accuracyClass: 'trend' },
        probabilities: { home: 82, draw: 12, away: 6 }, matchRisk: 'Safe',
        radarStats: { home: [90, 85, 80, 85, 80, 90], away: [60, 50, 65, 70, 70, 55] },
        advancedStats: { home: { xG: 2.50, restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: 0.40, restDays: 8, altitudeImpact: 'רגיל' } },
        insight: { prediction: "הפורטוגלים עדיפים משמעותית וישלטו במשחק.", actual: "התפוצצות פורטוגלית! 5-0 מוחץ שהרס לחלוטין את ההגנה האסייתית." },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match46': {
        timeStatus: 'past', matchday: 2, stage: 'L', dateText: "בית ל' | 23 ביוני",
        teamHome: { name: 'אנגליה', flagCode: 'gb-eng', color: '#FFFFFF', cards: { yellow: [], red: [] } },
        teamAway: { name: 'גאנה', flagCode: 'gh', color: '#006B3F', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 1', actual: '0 - 0', accuracyClass: 'wrong' },
        probabilities: { home: 65, draw: 20, away: 15 }, matchRisk: 'Safe',
        radarStats: { home: [85, 80, 85, 80, 85, 90], away: [70, 60, 70, 75, 85, 70] },
        advancedStats: { home: { xG: 1.95, restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: 0.90, restDays: 8, altitudeImpact: 'רגיל' } },
        insight: { prediction: "אנגליה תכתיב את הקצב, אך המהירות של גאנה במתפרצות מסוכנת.", actual: "אכזבה לאנגלית. הגנה גנאית חזקה עצרה את קיין וחבריו על 0-0." },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match47': {
        timeStatus: 'past', matchday: 2, stage: 'L', dateText: "בית ל' | 24 ביוני",
        teamHome: { name: 'פנמה', flagCode: 'pa', color: '#DA291C', cards: { yellow: [], red: [] } },
        teamAway: { name: 'קרואטיה', flagCode: 'hr', color: '#FF0000', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 3', actual: '0 - 1', accuracyClass: 'trend' },
        probabilities: { home: 7, draw: 15, away: 78 }, matchRisk: 'Safe',
        radarStats: { home: [60, 50, 65, 70, 70, 55], away: [85, 80, 75, 90, 75, 80] },
        advancedStats: { home: { xG: 0.50, restDays: 7, altitudeImpact: 'רגיל' }, away: { xG: 2.20, restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "קרואטיה תשלוט לחלוטין במרכז המגרש.", actual: "ניצחון קטן אבל חשוב לקרואטיה (1-0), שלקחה 3 נקודות במשחק לא פשוט." },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match48': {
        timeStatus: 'past', matchday: 2, stage: 'K', dateText: "בית כ' | 24 ביוני",
        teamHome: { name: 'קולומביה', flagCode: 'co', color: '#FCD116', cards: { yellow: [], red: [] } },
        teamAway: { name: 'קונגו', flagCode: 'cg', color: '#009543', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 0', actual: '1 - 0', accuracyClass: 'trend' },
        probabilities: { home: 70, draw: 20, away: 10 }, matchRisk: 'Safe',
        radarStats: { home: [80, 75, 70, 80, 85, 75], away: [60, 55, 65, 70, 80, 50] },
        advancedStats: { home: { xG: 1.80, restDays: 7, altitudeImpact: 'רגיל' }, away: { xG: 0.70, restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "קולומביה מסוכנת בחלק הקדמי ותנצל פערים טכניים.", actual: "ניצחון 1-0 קשה לקולומביה, שעמדה בלחץ הפיזי של קונגו." },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    }
};

// יצירה בטוחה של המאגר במידה והוא לא קיים
window.matchDatabase = window.matchDatabase || {};
Object.assign(window.matchDatabase, matchday2Database);