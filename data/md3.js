window.matchDatabase = window.matchDatabase || {};
const matchday3Database = {
    'match49': {
        timeStatus: 'future', matchday: 3, stage: 'B', dateText: "בית ב' | 24 ביוני, 22:00",
        teamHome: { name: 'שווייץ', flagCode: 'ch', color: '#FF0000', cards: { yellow: [], red: [] } },
        teamAway: { name: 'קנדה', flagCode: 'ca', color: '#FF0000', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 45, draw: 30, away: 25 }, matchRisk: 'Safe',
        radarStats: { home: [82, 75, 70, 80, 75, 80], away: [80, 75, 65, 80, 85, 75] },
        advancedStats: { home: { xG: '1.80', restDays: 6, altitudeImpact: 'רגיל' }, away: { xG: '1.20', restDays: 5, altitudeImpact: 'רגיל' } },
        insight: { prediction: "קרב צמרת על ראשות הבית. שווייץ עדיפה טקטית, אבל המהירות של קנדה עלולה להפתיע.", actual: "" },
        goals: [], squads: { home: { predicted: ["זומר", "ג'אקה", "שאקירי", "אמבולו"], actual: [] }, away: { predicted: ["בוריאן", "דייוויס", "דייוויד", "לארין"], actual: [] } }
    },
    'match50': {
        timeStatus: 'future', matchday: 3, stage: 'B', dateText: "בית ב' | 24 ביוני, 22:00",
        teamHome: { name: 'בוסניה והרצגובינה', flagCode: 'ba', color: '#002F6C', cards: { yellow: [], red: [] } },
        teamAway: { name: 'קטאר', flagCode: 'qa', color: '#8A1538', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 0', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 55, draw: 30, away: 15 }, matchRisk: 'Draw Booster',
        radarStats: { home: [70, 60, 75, 75, 80, 65], away: [55, 45, 50, 75, 65, 10] },
        advancedStats: { home: { xG: '1.30', restDays: 6, altitudeImpact: 'רגיל' }, away: { xG: '0.60', restDays: 5, altitudeImpact: 'מארחת' } },
        insight: { prediction: "שתי הנבחרות איכזבו. בוסניה פייבוריטית קלה בזכות היתרון הפיזי על פני המארחת.", actual: "" },
        goals: [], squads: { home: { predicted: ["פיאניץ'", "דז'קו"], actual: [] }, away: { predicted: ["עלי", "אפיף"], actual: [] } }
    },
    'match51': {
        timeStatus: 'future', matchday: 3, stage: 'C', dateText: "בית ג' | 25 ביוני, 01:00",
        teamHome: { name: 'מרוקו', flagCode: 'ma', color: '#FF3333', cards: { yellow: [], red: [] } },
        teamAway: { name: 'האיטי', flagCode: 'ht', color: '#00209F', cards: { yellow: [], red: [] } },
        score: { prediction: '3 - 0', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 85, draw: 10, away: 5 }, matchRisk: 'Safe',
        radarStats: { home: [78, 55, 80, 90, 90, 75], away: [35, 30, 50, 40, 80, 5] },
        advancedStats: { home: { xG: '2.50', restDays: 5, altitudeImpact: 'רגיל' }, away: { xG: '0.30', restDays: 5, altitudeImpact: 'רגיל' } },
        insight: { prediction: "מרוקו הבטיחה את מקומה ותנסה לשפר הפרש שערים מול הנבחרת החלשה בבית.", actual: "" },
        goals: [], squads: { home: { predicted: ["בונו", "חכימי", "זיאש", "אן-נסירי"], actual: [] }, away: { predicted: ["פיירו"], actual: [] } }
    },
    'match52': {
        timeStatus: 'future', matchday: 3, stage: 'C', dateText: "בית ג' | 25 ביוני, 01:00",
        teamHome: { name: 'סקוטלנד', flagCode: 'gb-sct', color: '#005EB8', cards: { yellow: [], red: [] } },
        teamAway: { name: 'ברזיל', flagCode: 'br', color: '#FFD700', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 12, draw: 18, away: 70 }, matchRisk: 'Safe',
        radarStats: { home: [80, 65, 85, 75, 75, 70], away: [95, 85, 75, 80, 75, 95] },
        advancedStats: { home: { xG: '0.80', restDays: 5, altitudeImpact: 'רגיל' }, away: { xG: '2.10', restDays: 5, altitudeImpact: 'רגיל' } },
        insight: { prediction: "סקוטלנד תילחם ותסתגר, אך האיכות הברזילאית בהתקפה תמצא את הדרך לרשת.", actual: "" },
        goals: [], squads: { home: { predicted: ["גאן", "מקטומיניי", "מקגין"], actual: [] }, away: { predicted: ["אליסון", "קאסמירו", "ויניסיוס", "רודריגו"], actual: [] } }
    },
    'match53': {
        timeStatus: 'future', matchday: 3, stage: 'A', dateText: "בית א' | 25 ביוני, 04:00",
        teamHome: { name: 'דרום אפריקה', flagCode: 'za', color: '#FFC425', cards: { yellow: [], red: [] } },
        teamAway: { name: 'קוריאה הדרומית', flagCode: 'kr', color: '#C60C30', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 25, draw: 30, away: 45 }, matchRisk: 'Upset Alert',
        radarStats: { home: [60, 50, 65, 70, 75, 30], away: [70, 65, 60, 85, 80, 75] },
        advancedStats: { home: { xG: '0.90', restDays: 7, altitudeImpact: 'רגיל' }, away: { xG: '1.40', restDays: 6, altitudeImpact: 'רגיל' } },
        insight: { prediction: "קוריאה פייבוריטית, אך דרום אפריקה חייבת נקודות כדי לשרוד וצפויה לשחק בצורה אגרסיבית.", actual: "" },
        goals: [], squads: { home: { predicted: ["וויליאמס", "טאו"], actual: [] }, away: { predicted: ["קים", "סון", "הוואנג"], actual: [] } }
    },
    'match54': {
        timeStatus: 'future', matchday: 3, stage: 'A', dateText: "בית א' | 25 ביוני, 04:00",
        teamHome: { name: 'צ\'כיה', flagCode: 'cz', color: '#11457E', cards: { yellow: [], red: [] } },
        teamAway: { name: 'מקסיקו', flagCode: 'mx', color: '#006341', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 35, draw: 35, away: 30 }, matchRisk: 'Draw Booster',
        radarStats: { home: [80, 65, 75, 75, 85, 75], away: [75, 70, 65, 75, 70, 80] },
        advancedStats: { home: { xG: '1.15', restDays: 7, altitudeImpact: 'רגיל' }, away: { xG: '1.10', restDays: 6, altitudeImpact: 'רגיל' } },
        insight: { prediction: "קרב צמוד וקשוח. תיקו עשוי לשרת את שתי הנבחרות בדרך לנוקאאוט.", actual: "" },
        goals: [], squads: { home: { predicted: ["סוצ'ק", "שיק"], actual: [] }, away: { predicted: ["אוצ'ואה", "אלברז", "לוזאנו"], actual: [] } }
    },
    'match55': {
        timeStatus: 'future', matchday: 3, stage: 'E', dateText: "בית ה' | 25 ביוני, 23:00",
        teamHome: { name: 'קוראסאו', flagCode: 'cw', color: '#002B7F', cards: { yellow: [], red: [] } },
        teamAway: { name: 'חוף השנהב', flagCode: 'ci', color: '#FF8200', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 10, draw: 20, away: 70 }, matchRisk: 'Safe',
        radarStats: { home: [50, 40, 60, 55, 60, 45], away: [75, 70, 80, 75, 85, 65] },
        advancedStats: { home: { xG: '0.40', restDays: 4, altitudeImpact: 'רגיל' }, away: { xG: '1.90', restDays: 5, altitudeImpact: 'רגיל' } },
        insight: { prediction: "חוף השנהב חייבת לנצח ותפעיל לחץ כבד מהפתיחה.", actual: "" },
        goals: [], squads: { home: { predicted: ["רום", "באקונה"], actual: [] }, away: { predicted: ["זאהה", "פופאנה", "האלר"], actual: [] } }
    },
    'match56': {
        timeStatus: 'future', matchday: 3, stage: 'E', dateText: "בית ה' | 25 ביוני, 23:00",
        teamHome: { name: 'אקוודור', flagCode: 'ec', color: '#FFD100', cards: { yellow: [], red: [] } },
        teamAway: { name: 'גרמניה', flagCode: 'de', color: '#000000', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 25, draw: 30, away: 45 }, matchRisk: 'Safe',
        radarStats: { home: [80, 75, 80, 85, 85, 75], away: [90, 85, 90, 80, 85, 90] },
        advancedStats: { home: { xG: '1.00', restDays: 4, altitudeImpact: 'רגיל' }, away: { xG: '1.60', restDays: 5, altitudeImpact: 'אופטימלי' } },
        insight: { prediction: "משחק מסקרן. אקוודור תנסה להפתיע, אך האיכות הגרמנית צפויה להכריע.", actual: "" },
        goals: [], squads: { home: { predicted: ["ולנסיה", "קאיסדו"], actual: [] }, away: { predicted: ["נוייר", "קימיך", "מוסיאלה", "האברץ"], actual: [] } }
    },
    'match57': {
        timeStatus: 'future', matchday: 3, stage: 'F', dateText: "בית ו' | 26 ביוני, 02:00",
        teamHome: { name: 'תוניסיה', flagCode: 'tn', color: '#E70013', cards: { yellow: [], red: [] } },
        teamAway: { name: 'הולנד', flagCode: 'nl', color: '#F36C21', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 3', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 10, draw: 20, away: 70 }, matchRisk: 'Safe',
        radarStats: { home: [70, 65, 70, 85, 80, 65], away: [85, 80, 85, 75, 80, 85] },
        advancedStats: { home: { xG: '0.50', restDays: 5, altitudeImpact: 'רגיל' }, away: { xG: '2.40', restDays: 6, altitudeImpact: 'רגיל' } },
        insight: { prediction: "הולנד תשאף לסיים את שלב הבתים בסטייל מול תוניסיה המאכזבת.", actual: "" },
        goals: [], squads: { home: { predicted: ["חזרי", "מסאכני"], actual: [] }, away: { predicted: ["ואן דייק", "דה יונג", "גאקפו", "ממפיס"], actual: [] } }
    },
    'match58': {
        timeStatus: 'future', matchday: 3, stage: 'F', dateText: "בית ו' | 26 ביוני, 02:00",
        teamHome: { name: 'יפן', flagCode: 'jp', color: '#000555', cards: { yellow: [], red: [] } },
        teamAway: { name: 'שוודיה', flagCode: 'se', color: '#FFD700', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 45, draw: 30, away: 25 }, matchRisk: 'Safe',
        radarStats: { home: [75, 75, 80, 70, 75, 75], away: [70, 75, 65, 85, 85, 70] },
        advancedStats: { home: { xG: '1.70', restDays: 5, altitudeImpact: 'רגיל' }, away: { xG: '1.10', restDays: 6, altitudeImpact: 'רגיל' } },
        insight: { prediction: "קרב ישיר על העלייה. המהירות של יפן עשויה להכריע את ההגנה השוודית האיטית.", actual: "" },
        goals: [], squads: { home: { predicted: ["אנדו", "מיטומה", "קובו"], actual: [] }, away: { predicted: ["לינדלף", "קולוסבסקי", "איסק"], actual: [] } }
    },
    'match59': {
        timeStatus: 'future', matchday: 3, stage: 'D', dateText: "בית ד' | 26 ביוני, 05:00",
        teamHome: { name: 'טורקיה', flagCode: 'tr', color: '#FF4444', cards: { yellow: [], red: [] } },
        teamAway: { name: 'ארצות הברית', flagCode: 'us', color: '#002868', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 25, draw: 30, away: 45 }, matchRisk: 'Upset Alert',
        radarStats: { home: [88, 75, 65, 75, 70, 75], away: [80, 65, 80, 85, 85, 75] },
        advancedStats: { home: { xG: '1.20', restDays: 6, altitudeImpact: 'רגיל' }, away: { xG: '1.60', restDays: 7, altitudeImpact: 'מארחת משותפת' } },
        insight: { prediction: "ארה"ב במומנטום מצוין ותשאף לסיים במאזן מושלם. טורקיה תילחם על חייה.", actual: "" },
        goals: [], squads: { home: { predicted: ["גיונוק", "צ'להאנולו", "גולר"], actual: [] }, away: { predicted: ["טרנר", "אדמס", "פוליסיק", "וואה", "מקיני"], actual: [] } }
    },
    'match60': {
        timeStatus: 'future', matchday: 3, stage: 'D', dateText: "בית ד' | 26 ביוני, 05:00",
        teamHome: { name: 'פרגוואי', flagCode: 'py', color: '#D52B1E', cards: { yellow: [], red: [] } },
        teamAway: { name: 'אוסטרליה', flagCode: 'au', color: '#FFD100', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 35, draw: 35, away: 30 }, matchRisk: 'Draw Booster',
        radarStats: { home: [70, 50, 75, 80, 90, 40], away: [65, 45, 85, 90, 95, 30] },
        advancedStats: { home: { xG: '1.10', restDays: 6, altitudeImpact: 'רגיל' }, away: { xG: '1.00', restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "קרב פיזי וקשוח. תיקו עשוי שלא להספיק לאף אחת מהן.", actual: "" },
        goals: [], squads: { home: { predicted: ["קורונל", "אלמירון", "גומז"], actual: [] }, away: { predicted: ["ראיין", "סוטאר", "אירווין"], actual: [] } }
    },
    'match61': {
        timeStatus: 'future', matchday: 3, stage: 'I', dateText: "בית ט' | 26 ביוני, 22:00",
        teamHome: { name: 'נורבגיה', flagCode: 'no', color: '#BA0C2F', cards: { yellow: [], red: [] } },
        teamAway: { name: 'צרפת', flagCode: 'fr', color: '#002654', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 20, draw: 25, away: 55 }, matchRisk: 'Upset Alert',
        radarStats: { home: [75, 70, 85, 75, 85, 80], away: [95, 90, 85, 90, 95, 95] },
        advancedStats: { home: { xG: '1.10', restDays: 4, altitudeImpact: 'רגיל' }, away: { xG: '1.90', restDays: 4, altitudeImpact: 'רגיל' } },
        insight: { prediction: "הולאנד מול ההגנה הצרפתית זה המאצ'-אפ המעניין ביותר, אך הצרפתים עדיפים כקבוצה.", actual: "" },
        goals: [], squads: { home: { predicted: ["ניילנד", "הולאנד", "אודגור"], actual: [] }, away: { predicted: ["מניאן", "קונדה", "אמבפה", "גריזמן"], actual: [] } }
    },
    'match62': {
        timeStatus: 'future', matchday: 3, stage: 'I', dateText: "בית ט' | 26 ביוני, 22:00",
        teamHome: { name: 'סנגל', flagCode: 'sn', color: '#00853F', cards: { yellow: [], red: [] } },
        teamAway: { name: 'עיראק', flagCode: 'iq', color: '#007A3D', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 0', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 75, draw: 15, away: 10 }, matchRisk: 'Safe',
        radarStats: { home: [70, 65, 80, 80, 90, 75], away: [50, 45, 55, 60, 65, 40] },
        advancedStats: { home: { xG: '2.20', restDays: 4, altitudeImpact: 'רגיל' }, away: { xG: '0.60', restDays: 4, altitudeImpact: 'לחץ מנטלי' } },
        insight: { prediction: "סנגל צריכה ניצחון ותשיג אותו מול עיראק החלשה.", actual: "" },
        goals: [], squads: { home: { predicted: ["מנדי", "קוליבאלי", "מאנה", "סאר"], actual: [] }, away: { predicted: ["חסן", "חוסיין"], actual: [] } }
    },
    'match63': {
        timeStatus: 'future', matchday: 3, stage: 'H', dateText: "בית ח' | 27 ביוני, 03:00",
        teamHome: { name: 'כף ורדה', flagCode: 'cv', color: '#003893', cards: { yellow: [], red: [] } },
        teamAway: { name: 'ערב הסעודית', flagCode: 'sa', color: '#006C35', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 35, draw: 35, away: 30 }, matchRisk: 'Draw Booster',
        radarStats: { home: [65, 60, 65, 75, 80, 55], away: [65, 55, 60, 70, 65, 60] },
        advancedStats: { home: { xG: '1.00', restDays: 5, altitudeImpact: 'רגיל' }, away: { xG: '1.10', restDays: 6, altitudeImpact: 'רגיל' } },
        insight: { prediction: "קרב בין שתי נבחרות צנועות שיכול להסתיים ללא הכרעה.", actual: "" },
        goals: [], squads: { home: { predicted: ["ווזיניה", "מנדס", "בבה"], actual: [] }, away: { predicted: ["אל-אוואיס", "אל-דאווסרי"], actual: [] } }
    },
    'match64': {
        timeStatus: 'future', matchday: 3, stage: 'H', dateText: "בית ח' | 27 ביוני, 03:00",
        teamHome: { name: 'אורוגוואי', flagCode: 'uy', color: '#0038A8', cards: { yellow: [], red: [] } },
        teamAway: { name: 'ספרד', flagCode: 'es', color: '#C60B1E', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 25, draw: 30, away: 45 }, matchRisk: 'Safe',
        radarStats: { home: [80, 70, 80, 95, 90, 80], away: [95, 90, 80, 85, 75, 90] },
        advancedStats: { home: { xG: '1.20', restDays: 5, altitudeImpact: 'רגיל' }, away: { xG: '1.80', restDays: 6, altitudeImpact: 'רגיל' } },
        insight: { prediction: "המשחק המרכזי של הבית. ספרד תשלוט בכדור ואורוגוואי תחפש מתפרצות. היתרון האיכותי הוא של הספרדים.", actual: "" },
        goals: [], squads: { home: { predicted: ["רוצ'ט", "ואלוורדה", "נונייז"], actual: [] }, away: { predicted: ["סימון", "רודרי", "פדרי", "ימאל", "מוראטה"], actual: [] } }
    },
    'match65': {
        timeStatus: 'future', matchday: 3, stage: 'G', dateText: "בית ז' | 27 ביוני, 06:00",
        teamHome: { name: 'ניו זילנד', flagCode: 'nz', color: '#000000', cards: { yellow: [], red: [] } },
        teamAway: { name: 'בלגיה', flagCode: 'be', color: '#E30613', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 3', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 5, draw: 15, away: 80 }, matchRisk: 'Safe',
        radarStats: { home: [60, 50, 70, 75, 80, 50], away: [85, 80, 75, 75, 80, 85] },
        advancedStats: { home: { xG: '0.40', restDays: 5, altitudeImpact: 'רגיל' }, away: { xG: '2.60', restDays: 6, altitudeImpact: 'רגיל' } },
        insight: { prediction: "פערי רמות עצומים. בלגיה צפויה לנצח בקלות.", actual: "" },
        goals: [], squads: { home: { predicted: ["ווד", "בל"], actual: [] }, away: { predicted: ["קסטילס", "דה בריינה", "לוקאקו"], actual: [] } }
    },
    'match66': {
        timeStatus: 'future', matchday: 3, stage: 'G', dateText: "בית ז' | 27 ביוני, 06:00",
        teamHome: { name: 'מצרים', flagCode: 'eg', color: '#CE1126', cards: { yellow: [], red: [] } },
        teamAway: { name: 'איראן', flagCode: 'ir', color: '#1BA15F', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 0', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 65, draw: 25, away: 10 }, matchRisk: 'Safe',
        radarStats: { home: [75, 65, 70, 80, 75, 75], away: [65, 50, 70, 80, 80, 60] },
        advancedStats: { home: { xG: '1.80', restDays: 5, altitudeImpact: 'רגיל' }, away: { xG: '0.70', restDays: 6, altitudeImpact: 'רגיל' } },
        insight: { prediction: "מצרים עם סלאח עדיפה ותחפש להכריע מוקדם את האיראנים שיתגוננו עמוק.", actual: "" },
        goals: [], squads: { home: { predicted: ["אל-שנאווי", "אלנני", "סלאח", "טרזגה"], actual: [] }, away: { predicted: ["ביירנבאנד", "אזמון", "טארמי"], actual: [] } }
    },
    'match67': {
        timeStatus: 'future', matchday: 3, stage: 'L', dateText: "בית י"ב | 28 ביוני, 00:00",
        teamHome: { name: 'פנמה', flagCode: 'pa', color: '#DA291C', cards: { yellow: [], red: [] } },
        teamAway: { name: 'אנגליה', flagCode: 'gb-eng', color: '#FFFFFF', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 4', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 5, draw: 10, away: 85 }, matchRisk: 'Safe',
        radarStats: { home: [60, 50, 65, 70, 70, 55], away: [85, 80, 85, 80, 85, 90] },
        advancedStats: { home: { xG: '0.30', restDays: 4, altitudeImpact: 'רגיל' }, away: { xG: '3.10', restDays: 5, altitudeImpact: 'רגיל' } },
        insight: { prediction: "אנגליה תנצל את המשחק מול פנמה החלשה לחגיגת שערים ושיפור מצב הרוח.", actual: "" },
        goals: [], squads: { home: { predicted: ["גודוי"], actual: [] }, away: { predicted: ["פיקפורד", "רייס", "בלינגהאם", "קיין", "סאקה", "פודן"], actual: [] } }
    },
    'match68': {
        timeStatus: 'future', matchday: 3, stage: 'L', dateText: "בית י"ב | 28 ביוני, 00:00",
        teamHome: { name: 'קרואטיה', flagCode: 'hr', color: '#FF0000', cards: { yellow: [], red: [] } },
        teamAway: { name: 'גאנה', flagCode: 'gh', color: '#006B3F', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 40, draw: 35, away: 25 }, matchRisk: 'Draw Booster',
        radarStats: { home: [85, 80, 75, 90, 75, 80], away: [70, 60, 70, 75, 85, 70] },
        advancedStats: { home: { xG: '1.20', restDays: 4, altitudeImpact: 'רגיל' }, away: { xG: '1.10', restDays: 5, altitudeImpact: 'רגיל' } },
        insight: { prediction: "הניסיון הקרואטי מול האתלטיות הגנאית. משחק שקול מאוד שעשוי להסתיים בחלוקת נקודות.", actual: "" },
        goals: [], squads: { home: { predicted: ["ליבאקוביץ'", "מודריץ'", "קובאצ'יץ'", "קרמאריץ'"], actual: [] }, away: { predicted: ["אטי-זיגי", "פארטיי", "קודוס", "וויליאמס"], actual: [] } }
    },
    'match69': {
        timeStatus: 'future', matchday: 3, stage: 'K', dateText: "בית כ' | 28 ביוני, 02:30",
        teamHome: { name: 'קולומביה', flagCode: 'co', color: '#FCD116', cards: { yellow: [], red: [] } },
        teamAway: { name: 'פורטוגל', flagCode: 'pt', color: '#FF0000', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 25, draw: 30, away: 45 }, matchRisk: 'Safe',
        radarStats: { home: [80, 75, 70, 80, 85, 75], away: [90, 85, 80, 85, 80, 90] },
        advancedStats: { home: { xG: '1.10', restDays: 4, altitudeImpact: 'רגיל' }, away: { xG: '1.60', restDays: 5, altitudeImpact: 'רגיל' } },
        insight: { prediction: "קרב נהדר על ראשות הבית. לפורטוגל יש מעט יותר איכות בהתקפה שצפויה לעשות את ההבדל.", actual: "" },
        goals: [], squads: { home: { predicted: ["לואיס דיאס", "חאמס", "דואן זפאטה"], actual: [] }, away: { predicted: ["קוסטה", "דיאס", "ברונו פרננדס", "לאאו", "רונאלדו"], actual: [] } }
    },
    'match70': {
        timeStatus: 'future', matchday: 3, stage: 'K', dateText: "בית כ' | 28 ביוני, 02:30",
        teamHome: { name: 'קונגו', flagCode: 'cg', color: '#009543', cards: { yellow: [], red: [] } },
        teamAway: { name: 'אוזבקיסטן', flagCode: 'uz', color: '#0099B5', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 45, draw: 30, away: 25 }, matchRisk: 'Safe',
        radarStats: { home: [60, 55, 65, 70, 80, 50], away: [60, 50, 65, 70, 70, 55] },
        advancedStats: { home: { xG: '1.50', restDays: 4, altitudeImpact: 'רגיל' }, away: { xG: '0.90', restDays: 5, altitudeImpact: 'רגיל' } },
        insight: { prediction: "משחק בין שתי נבחרות שינסו להימנע מהמקום האחרון בבית. קונגו מעט עדיפה פיזית.", actual: "" },
        goals: [], squads: { home: { predicted: ["אליא", "מבמבה"], actual: [] }, away: { predicted: ["שומורודוב", "מאשאריפוב"], actual: [] } }
    },
    'match71': {
        timeStatus: 'future', matchday: 3, stage: 'J', dateText: "בית י' | 28 ביוני, 05:00",
        teamHome: { name: 'אלג\'יריה', flagCode: 'dz', color: '#006233', cards: { yellow: [], red: [] } },
        teamAway: { name: 'אוסטריה', flagCode: 'at', color: '#EF3340', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 35, draw: 35, away: 30 }, matchRisk: 'Draw Booster',
        radarStats: { home: [80, 75, 70, 80, 80, 75], away: [70, 65, 75, 80, 85, 70] },
        advancedStats: { home: { xG: '1.20', restDays: 6, altitudeImpact: 'רגיל' }, away: { xG: '1.10', restDays: 6, altitudeImpact: 'רגיל' } },
        insight: { prediction: "קרב ישיר וקריטי. אוסטריה ממושמעת יותר, אך אלג'יריה תוקפת מהר יותר. תיקו ישרת את השתיים.", actual: "" },
        goals: [], squads: { home: { predicted: ["מנדריאה", "בנאצר", "מחרז"], actual: [] }, away: { predicted: ["שלאגר", "אלאבה", "זביצר", "ארנאוטוביץ'"], actual: [] } }
    },
    'match72': {
        timeStatus: 'future', matchday: 3, stage: 'J', dateText: "בית י' | 28 ביוני, 05:00",
        teamHome: { name: 'ירדן', flagCode: 'jo', color: '#CE1126', cards: { yellow: [], red: [] } },
        teamAway: { name: 'ארגנטינה', flagCode: 'ar', color: '#75AADB', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 3', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 5, draw: 15, away: 80 }, matchRisk: 'Safe',
        radarStats: { home: [55, 45, 60, 70, 65, 50], away: [95, 85, 80, 95, 80, 95] },
        advancedStats: { home: { xG: '0.40', restDays: 6, altitudeImpact: 'רגיל' }, away: { xG: '2.90', restDays: 6, altitudeImpact: 'רגיל' } },
        insight: { prediction: "ארגנטינה צפויה לטייל לניצחון קל שיבטיח לה מאזן מושלם בבתים.", actual: "" },
        goals: [], squads: { home: { predicted: ["אל-תעמרי", "אל-נעימאת"], actual: [] }, away: { predicted: ["מרטינז", "רומרו", "פרננדז", "מק אליסטר", "מסי", "אלברז"], actual: [] } }
    }
};

Object.assign(window.matchDatabase, matchday3Database);
