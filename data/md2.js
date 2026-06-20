// data/md2.js - מחזור 2 המלא והמעודכן (משחקי עבר + תחזיות קדימה)

Object.assign(matchDatabase, {
    // --- משחקי עבר (כבר שוחקו במחזור 2) ---
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
        goals: [{ team: 'מרוקו', player: "אן-נסירי", minute: "68'" }], // הוסף את הכובש המדויק אם יש לך
        squads: { home: { predicted: ["גאן", "מקטומיניי", "מקגין"], actual: ["גאן", "מקטומיניי", "מקגין"] }, away: { predicted: ["בונו", "חכימי", "זיאש"], actual: ["בונו", "חכימי", "זיאש"] } }
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
        goals: [{ team: 'ברזיל', player: "ויניסיוס", minute: "24'" }, { team: 'ברזיל', player: "רודריגו", minute: "55'" }, { team: 'ברזיל', player: "מרטינלי", minute: "81'" }], // עדכן כובשים במידת הצורך
        squads: { home: { predicted: ["אליסון", "קאסמירו", "ויניסיוס"], actual: ["אליסון", "קאסמירו", "ויניסיוס", "רודריגו"] }, away: { predicted: ["פלאסיד", "ז'רום", "פיירו"], actual: ["פלאסיד", "ז'רום", "פיירו"] } }
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
    }
