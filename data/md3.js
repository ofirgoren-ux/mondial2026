window.matchDatabase = window.matchDatabase || {};
const matchday3Database = {
    // ---- 6 המשחקים שכבר שוחקו (24-25 ביוני) ----
'match49': {
        timeStatus: 'past', matchday: 3, stage: 'B', dateText: `24/06/2026 | 22:00 (שעון ישראל)`,
        teamHome: { name: `שווייץ`, flagCode: 'ch', color: '#FF0000', cards: { yellow: ['card'], red: [] } },
        teamAway: { name: `קנדה`, flagCode: 'ca', color: '#000000', cards: { yellow: ['card', 'card'], red: [] } },
        score: { prediction: '1 - 0', actual: '2 - 0', accuracyClass: 'trend' },
        probabilities: { home: 45, draw: 27, away: 28 }, matchRisk: 'Safe',
        radarStats: { home: [71, 40, 57, 71, 75, 35], away: [62, 73, 54, 62, 88, 35] },
        advancedStats: { home: { xG: '1.36', corners: 5, altitudeImpact: '' }, away: { xG: '1.00', corners: 4, altitudeImpact: '' } },
        insight: { prediction: `שווייץ מגיעה עם יתרון איכותי במרכז השדה והיא צפויה להחזיק בכדור ולנסות להכתיב קצב סבלני.`, actual: `ניצחון סולידי, בוגר ומרשים של שווייץ. היא הכתיבה את הקצב, שיחקה בחכמה, וניצלה היטב את היתרון האיכותי שלה במרכז השדה בדרך ל-2-0 חלק.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match50': {
        timeStatus: 'past', matchday: 3, stage: 'B', dateText: `24/06/2026 | 22:00 (שעון ישראל)`,
        teamHome: { name: `בוסניה והרצגובינה`, flagCode: 'ba', color: '#002F6C', cards: { yellow: [], red: [] } },
        teamAway: { name: `קטאר`, flagCode: 'qa', color: '#8A1538', cards: { yellow: ['card'], red: [] } },
        score: { prediction: '1 - 1', actual: '3 - 0', accuracyClass: 'wrong' },
        probabilities: { home: 38, draw: 27, away: 35 }, matchRisk: 'Draw Booster',
        radarStats: { home: [49, 20, 48, 49, 76, 30], away: [17, 13, 48, 17, 76, 20] },
        advancedStats: { home: { xG: '1.30', corners: 6, altitudeImpact: '' }, away: { xG: '1.22', corners: 2, altitudeImpact: '' } },
        insight: { prediction: `זה מריח כמו קרב חפירות קשוח. בוסניה תנסה להשתמש ביתרון הפיזי המשמעותי שלה ולחפש כדורי גובה.`, actual: `הפיזיות של בוסניה עשתה כאן את ההבדל העצום! הבוסנים שלטו באוויר, ניצלו כל טעות בהגנת קטאר, ורמסו את האורחת בדרך ל-3-0 מוחץ.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match51': {
        timeStatus: 'past', matchday: 3, stage: 'C', dateText: `25/06/2026 | 01:00 (שעון ישראל)`,
        teamHome: { name: `סקוטלנד`, flagCode: 'gb-sct', color: '#005EB8', cards: { yellow: ['card'], red: [] } },
        teamAway: { name: `ברזיל`, flagCode: 'br', color: '#FFD700', cards: { yellow: ['card', 'card'], red: [] } },
        score: { prediction: '0 - 2', actual: '0 - 3', accuracyClass: 'trend' },
        probabilities: { home: 8, draw: 16, away: 76 }, matchRisk: 'Upset Alert',
        radarStats: { home: [55, 33, 49, 55, 79, 32], away: [60, 40, 61, 60, 64, 37] },
        advancedStats: { home: { xG: '0.62', corners: 2, altitudeImpact: '' }, away: { xG: '2.40', corners: 8, altitudeImpact: '' } },
        insight: { prediction: `אין כאן באמת כוחות. ברזיל עולה למגרש כפייבוריטית מפלצתית והולכת לשטוף את הדשא.`, actual: `קונצרט של הסלסאו! בדיוק כמו שציפינו, ברזיל שטפה את הדשא מהשנייה הראשונה, לא השאירה לסקוטים אוויר לנשימה, ורקדה כל הדרך ל-3-0 קליל ומרשים.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match52': {
        timeStatus: 'past', matchday: 3, stage: 'C', dateText: `25/06/2026 | 01:00 (שעון ישראל)`,
        teamHome: { name: `מרוקו`, flagCode: 'ma', color: '#C1272D', cards: { yellow: [], red: [] } },
        teamAway: { name: `האיטי`, flagCode: 'ht', color: '#00209F', cards: { yellow: ['card', 'card', 'card'], red: [] } },
        score: { prediction: '1 - 0', actual: '2 - 4', accuracyClass: 'wrong' },
        probabilities: { home: 64, draw: 22, away: 14 }, matchRisk: 'Safe',
        radarStats: { home: [71, 53, 56, 71, 68, 25], away: [35, 33, 44, 35, 77, 5] },
        advancedStats: { home: { xG: '1.83', corners: 6, altitudeImpact: '' }, away: { xG: '0.71', corners: 3, altitudeImpact: '' } },
        insight: { prediction: `מרוקו פייבוריטית מובהקת כאן ותכתיב את הקצב מול האיטי שתרד להגנה נמוכה.`, actual: `אחת ההפתעות הגדולות של שלב הבתים! האיטי הציגה התקפת נגד חסרת פשרות, ניצלה חורים בהגנה המרוקאית הנדהמת, וכבשה רביעייה היסטורית מהדהדת.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match53': {
        timeStatus: 'past', matchday: 3, stage: 'A', dateText: `25/06/2026 | 04:00 (שעון ישראל)`,
        teamHome: { name: `צ'כיה`, flagCode: 'cz', color: '#ED1B24', cards: { yellow: [], red: [] } },
        teamAway: { name: `מקסיקו`, flagCode: 'mx', color: '#006341', cards: { yellow: ['card'], red: [] } },
        score: { prediction: '0 - 1', actual: '0 - 3', accuracyClass: 'trend' },
        probabilities: { home: 22, draw: 32, away: 46 }, matchRisk: 'Safe',
        radarStats: { home: [57, 40, 48, 57, 78, 27], away: [64, 60, 57, 64, 56, 30] },
        advancedStats: { home: { xG: '0.84', corners: 3, altitudeImpact: '' }, away: { xG: '1.77', corners: 7, altitudeImpact: '' } },
        insight: { prediction: `מקסיקו מגיעה עם הלהט הלטיני ויתרון משמעותי באיכות ההתקפית.`, actual: `תצוגת תכלית של הלהט הלטיני! מקסיקו עלתה בטירוף, פירקה את המערך הטקטי של צ'כיה לחתיכות ושלטה לחלוטין בקצב המשחק עם 3-0 מוחץ.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match54': {
        timeStatus: 'past', matchday: 3, stage: 'A', dateText: `25/06/2026 | 04:00 (שעון ישראל)`,
        teamHome: { name: `דרום אפריקה`, flagCode: 'za', color: '#007749', cards: { yellow: ['card'], red: [] } },
        teamAway: { name: `קוריאה הדרומית`, flagCode: 'kr', color: '#C60C30', cards: { yellow: ['card'], red: [] } },
        score: { prediction: '0 - 1', actual: '1 - 0', accuracyClass: 'wrong' },
        probabilities: { home: 27, draw: 32, away: 41 }, matchRisk: 'Draw Booster',
        radarStats: { home: [46, 27, 49, 46, 66, 27], away: [62, 53, 56, 62, 66, 47] },
        advancedStats: { home: { xG: '0.96', corners: 4, altitudeImpact: '' }, away: { xG: '1.48', corners: 6, altitudeImpact: '' } },
        insight: { prediction: `הקוריאנים פייבוריטים בזכות שילוב קטלני של משמעת טקטית וכושר גופני אדיר.`, actual: `סנסציה ועקיצה מושלמת של דרום אפריקה! הקוריאנים החזיקו בכדור, אבל האגרסיביות והלחימה האפריקאית השתלמו עם שער ניצחון יקר שמטריף את כל הבית.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match55': {
        timeStatus: 'past', matchday: 3, stage: 'D', dateText: `26/06/2026 | 05:00 (שעון ישראל)`,
        teamHome: { name: `טורקיה`, flagCode: 'tr', color: '#E30A17', cards: { yellow: [], red: [] } },
        teamAway: { name: `ארצות הברית`, flagCode: 'us', color: '#002868', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 1', actual: '3 - 2', accuracyClass: 'wrong' },
        probabilities: { home: 34, draw: 30, away: 36 }, matchRisk: 'Upset Alert',
        radarStats: { home: [77, 43, 87, 65, 44, 54], away: [45, 77, 72, 41, 72, 86] },
        advancedStats: { home: { xG: '2.17', corners: 8, altitudeImpact: '' }, away: { xG: '2.05', corners: 6, altitudeImpact: '' } },
        insight: { prediction: `על הנייר, ארצות הברית מגיעה עם יתרון איכותי ומשמעת טקטית שיקשו על הטורקים, אבל במגרש טעון הכל יכול לקרות.`, actual: `טירוף מערכות מוחלט! משחק אמוציונלי וקצבי שבו טורקיה הצליחה לגבור על האמריקאים במשחק של 5 שערים. הלהט הטורקי ניצח הפעם את המשמעת של ארה״ב.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match56': {
        timeStatus: 'past', matchday: 3, stage: 'D', dateText: `26/06/2026 | 05:00 (שעון ישראל)`,
        teamHome: { name: `פרגוואי`, flagCode: 'py', color: '#D52B1E', cards: { yellow: [], red: [] } },
        teamAway: { name: `אוסטרליה`, flagCode: 'au', color: '#FFCD00', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '0 - 0', accuracyClass: 'trend' },
        probabilities: { home: 35, draw: 35, away: 30 }, matchRisk: 'Draw Booster',
        radarStats: { home: [65, 62, 56, 82, 83, 48], away: [57, 72, 50, 47, 88, 58] },
        advancedStats: { home: { xG: '1.00', corners: 7, altitudeImpact: '' }, away: { xG: '1.10', corners: 3, altitudeImpact: '' } },
        insight: { prediction: `אוסטרליה צפויה לנסות לשלוט באוויר, בזמן שפרגוואי תציג את הקשיחות הדרום אמריקאית. יהיה מאבק עיקש במרכז.`, actual: `קרב החפירות המצופה הסתיים ללא שערים. שתי הקבוצות הגיעו במטרה קודם כל לא לספוג, המשחק היה קשוח ואגרסיבי במרכז השדה, והתוצאה משקפת את מה שקרה על הדשא.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match57': {
        timeStatus: 'past', matchday: 3, stage: 'E', dateText: `25/06/2026 | 23:00 (שעון ישראל)`,
        teamHome: { name: `קוראסאו`, flagCode: 'cw', color: '#002B7F', cards: { yellow: [], red: [] } },
        teamAway: { name: `חוף השנהב`, flagCode: 'ci', color: '#FF8200', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 2', actual: '0 - 2', accuracyClass: 'exact' },
        probabilities: { home: 15, draw: 20, away: 65 }, matchRisk: 'Safe',
        radarStats: { home: [59, 86, 75, 86, 81, 65], away: [68, 63, 45, 42, 89, 89] },
        advancedStats: { home: { xG: '0.50', corners: 3, altitudeImpact: '' }, away: { xG: '2.10', corners: 6, altitudeImpact: '' } },
        insight: { prediction: `חוף השנהב אמורה להשתלט על העניינים מהר בזכות העוצמה במרכז המגרש ולשתק את שאיפותיה של קוראסאו.`, actual: `ניצחון סולידי ומרשים של הפילים. חוף השנהב השתמשה בעליונות הפיזית והטקטית שלה כדי לסגור את קוראסאו ולא נתנה לחלום הקריבי להתרומם.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match58': {
        timeStatus: 'past', matchday: 3, stage: 'E', dateText: `25/06/2026 | 23:00 (שעון ישראל)`,
        teamHome: { name: `אקוודור`, flagCode: 'ec', color: '#FFD100', cards: { yellow: [], red: [] } },
        teamAway: { name: `גרמניה`, flagCode: 'de', color: '#FFFFFF', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 2', actual: '2 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 20, draw: 25, away: 55 }, matchRisk: 'Upset Alert',
        radarStats: { home: [86, 62, 83, 75, 77, 80], away: [53, 85, 87, 89, 55, 42] },
        advancedStats: { home: { xG: '1.10', corners: 5, altitudeImpact: '' }, away: { xG: '1.90', corners: 4, altitudeImpact: '' } },
        insight: { prediction: `גרמניה פייבוריטית מובהקת, אך אקוודור מביאה קשיחות ויכולת מתפרצות שיכולה להפתיע.`, actual: `איזו סנסציה! אקוודור הגיעה ללא רגשי נחיתות, השתמשה באתלטיות האדירה שלה כדי לשתק את הקישור הגרמני, וגנבה ניצחון מדהים 2-1 שטורף את הקלפים בבית.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match59': {
        timeStatus: 'past', matchday: 3, stage: 'F', dateText: `26/06/2026 | 02:00 (שעון ישראל)`,
        teamHome: { name: `תוניסיה`, flagCode: 'tn', color: '#E70013', cards: { yellow: [], red: [] } },
        teamAway: { name: `הולנד`, flagCode: 'nl', color: '#F36C21', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 2', actual: '1 - 3', accuracyClass: 'trend' },
        probabilities: { home: 10, draw: 20, away: 70 }, matchRisk: 'Safe',
        radarStats: { home: [49, 86, 58, 48, 68, 43], away: [70, 85, 77, 71, 42, 44] },
        advancedStats: { home: { xG: '0.60', corners: 2, altitudeImpact: '' }, away: { xG: '2.40', corners: 2, altitudeImpact: '' } },
        insight: { prediction: `הולנד אמורה להכתיב את הקצב, בעוד תוניסיה תחפש להגן היטב ולעקוץ במצבים נייחים.`, actual: `האורנג' עשו את העבודה. תוניסיה ניסתה לבנות חומה ולהקשות, אבל הכישרון ההולנדי בחלק הקדמי הצליח לפרוץ את המנעול פעם אחר פעם בדרך ל-3-1 משכנע.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match60': {
        timeStatus: 'past', matchday: 3, stage: 'F', dateText: `26/06/2026 | 02:00 (שעון ישראל)`,
        teamHome: { name: `יפן`, flagCode: 'jp', color: '#000555', cards: { yellow: [], red: [] } },
        teamAway: { name: `שוודיה`, flagCode: 'se', color: '#FFF200', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 1', actual: '1 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 45, draw: 30, away: 25 }, matchRisk: 'Draw Booster',
        radarStats: { home: [40, 56, 49, 53, 56, 54], away: [85, 84, 81, 46, 60, 59] },
        advancedStats: { home: { xG: '1.50', corners: 8, altitudeImpact: '' }, away: { xG: '1.20', corners: 2, altitudeImpact: '' } },
        insight: { prediction: `הזריזות והטכניקה היפנית מול העוצמה והגובה השוודי יספקו משחק מרתק ומלא אקשן.`, actual: `התנגשות הסגנונות הקלאסית הסתיימה בחלוקת נקודות. הזריזות היפנית מול העוצמה השוודית סיפקו משחק מרתק, כשאף אחת מהנבחרות לא הצליחה להכריע.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match61': {
        timeStatus: 'past', matchday: 3, stage: 'I', dateText: `26/06/2026 | 16:00 (שעון ישראל)`,
        teamHome: { name: `נורווגיה`, flagCode: 'no', color: '#C8102E', cards: { yellow: [], red: [] } },
        teamAway: { name: `צרפת`, flagCode: 'fr', color: '#002654', cards: { yellow: ['card'], red: [] } },
        score: { prediction: '1 - 2', actual: '1 - 4', accuracyClass: 'trend' },
        probabilities: { home: 25, draw: 30, away: 45 }, matchRisk: 'Safe',
        radarStats: { home: [68, 55, 75, 60, 85, 70], away: [90, 88, 80, 85, 78, 92] },
        advancedStats: { home: { xG: '1.15', corners: 3, altitudeImpact: '' }, away: { xG: '2.85', corners: 7, altitudeImpact: '' } },
        insight: { prediction: `התנגשות ענקים בין האלנד לאמבפה. צרפת פייבוריטית בזכות הקישור, אך נורווגיה מסוכנת במעברים.`, actual: `קונצרט כחול! צרפת פירקה את המערך הנורווגי לחתיכות עם תצוגת תכלית של קיליאן אמבפה וחבריו, בדרך ל-4-1 מוחץ ולא השאירה להאלנד סיכוי.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match62': {
        timeStatus: 'past', matchday: 3, stage: 'I', dateText: `26/06/2026 | 16:00 (שעון ישראל)`,
        teamHome: { name: `סנגל`, flagCode: 'sn', color: '#00853F', cards: { yellow: [], red: [] } },
        teamAway: { name: `עיראק`, flagCode: 'iq', color: '#007A3D', cards: { yellow: ['card'], red: ['card'] } },
        score: { prediction: '2 - 0', actual: '5 - 0', accuracyClass: 'trend' },
        probabilities: { home: 65, draw: 23, away: 12 }, matchRisk: 'Safe',
        radarStats: { home: [82, 70, 68, 85, 90, 75], away: [50, 45, 60, 55, 65, 48] },
        advancedStats: { home: { xG: '3.10', corners: 9, altitudeImpact: '' }, away: { xG: '0.45', corners: 1, altitudeImpact: '' } },
        insight: { prediction: `העוצמה הפיזית של סנגל צפויה להכריע את המשחק מול המשמעת העיראקית הקשוחה.`, actual: `דריסה אפריקאית מוחלטת. עיראק איבדה את הראש עם כרטיס אדום מוקדם, וסנגל ניצלה זאת כדי לחגוג חמישייה מטורפת שמקפיצה אותה בדירוג המקום השלישי.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match63': {
        timeStatus: 'past', matchday: 3, stage: 'H', dateText: `26/06/2026 | 21:00 (שעון ישראל)`,
        teamHome: { name: `אורוגוואי`, flagCode: 'uy', color: '#75AADB', cards: { yellow: ['card', 'card'], red: ['card'] } },
        teamAway: { name: `ספרד`, flagCode: 'es', color: '#C60B1E', cards: { yellow: ['card'], red: [] } },
        score: { prediction: '1 - 1', actual: '0 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 30, draw: 35, away: 35 }, matchRisk: 'Draw Booster',
        radarStats: { home: [74, 68, 70, 92, 85, 76], away: [88, 92, 75, 78, 70, 85] },
        advancedStats: { home: { xG: '0.92', corners: 4, altitudeImpact: '' }, away: { xG: '1.65', corners: 5, altitudeImpact: '' } },
        insight: { prediction: `משחק טקטי עצבני. הטיקי-טאקה הספרדי ינסה להתיש את ה'גארה צ'רואה' האגרסיבית של אורוגוואי.`, actual: `קרב סוער שהוכרע על חודו של שער! אורוגוואי נלחמה בשיניה אך כרטיס אדום קריטי גמר לה את המשחק, וספרד הענישה בדרך ל-1-0 יקר ועלייה מהמקום הראשון.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match64': {
        timeStatus: 'past', matchday: 3, stage: 'H', dateText: `26/06/2026 | 21:00 (שעון ישראל)`,
        teamHome: { name: `כף ורדה`, flagCode: 'cv', color: '#003893', cards: { yellow: ['card'], red: [] } },
        teamAway: { name: `ערב הסעודית`, flagCode: 'sa', color: '#006C35', cards: { yellow: ['card', 'card'], red: [] } },
        score: { prediction: '1 - 1', actual: '0 - 0', accuracyClass: 'trend' },
        probabilities: { home: 30, draw: 40, away: 30 }, matchRisk: 'Draw Booster',
        radarStats: { home: [62, 58, 65, 70, 72, 60], away: [65, 60, 68, 65, 70, 64] },
        advancedStats: { home: { xG: '0.80', corners: 3, altitudeImpact: '' }, away: { xG: '0.75', corners: 4, altitudeImpact: '' } },
        insight: { prediction: `שתי נבחרות מאוזנות שנלחמות על נקודות קריטיות בבית. צפוי משחק זהיר וסגור מאוד.`, actual: `היסטוריה מטורפת! כף ורדה עמדה בלחץ אטומי, סחטה 0-0 הרואי מערב הסעודית, ובזכות התיקו הזה העפילה רשמית לשמינית הגמר מהמקום השני בבית החלומות שלהם!` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match65': {
        timeStatus: 'past', matchday: 3, stage: 'G', dateText: `27/06/2026 | 00:00 (שעון ישראל)`,
        teamHome: { name: `ניו זילנד`, flagCode: 'nz', color: '#000000', cards: { yellow: ['card'], red: [] } },
        teamAway: { name: `בלגיה`, flagCode: 'be', color: '#E30613', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 3', actual: '1 - 5', accuracyClass: 'trend' },
        probabilities: { home: 5, draw: 15, away: 80 }, matchRisk: 'Safe',
        radarStats: { home: [45, 40, 65, 70, 75, 42], away: [88, 85, 82, 80, 84, 89] },
        advancedStats: { home: { xG: '0.65', corners: 1, altitudeImpact: '' }, away: { xG: '3.40', corners: 11, altitudeImpact: '' } },
        insight: { prediction: `פערי רמות קיצוניים על הנייר. הבלגים צפויים לשלוט ללא עוררין ולחפש הכרעה מהירה.`, actual: `בלי רחמים. השדים האדומים של בלגיה סיפקו קונצרט התקפי אדיר, פירקו את ההגנה של ניו זילנד עם חמישייה מהסרטים (5-1) והבטיחו את הפסגה בצורה הכי משכנעת שיש.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match66': {
        timeStatus: 'past', matchday: 3, stage: 'G', dateText: `27/06/2026 | 00:00 (שעון ישראל)`,
        teamHome: { name: `מצרים`, flagCode: 'eg', color: '#CE1126', cards: { yellow: ['card', 'card'], red: [] } },
        teamAway: { name: `איראן`, flagCode: 'ir', color: '#239F40', cards: { yellow: ['card'], red: [] } },
        score: { prediction: '1 - 0', actual: '1 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 45, draw: 35, away: 20 }, matchRisk: 'Draw Booster',
        radarStats: { home: [78, 65, 72, 70, 68, 75], away: [65, 60, 70, 82, 85, 62] },
        advancedStats: { home: { xG: '1.45', corners: 5, altitudeImpact: '' }, away: { xG: '1.20', corners: 3, altitudeImpact: '' } },
        insight: { prediction: `קרב ישיר ועצבני על הכרטיס לשלב הבא. ההגנה האיראנית הממושמעת תנסה לתסכל את הפרעונים.`, actual: `דרמה מורטת עצבים עד השנייה האחרונה. איראן נתנה פייט אדיר וסחטה 1-1 קשוח, אבל התוצאה הזו שירתה את המצרים שחגגו עלייה לשלב הבא מהמקום השני בזכות הפרש שערים עדיף!` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    
      // ---- שאר משחקי מחזור 3 (טרם שוחקו) ----
'match67': {
        timeStatus: 'future', matchday: 3, stage: 'L', dateText: `28/06/2026 | 00:00 (שעון ישראל)`,
        teamHome: { name: `פנמה`, flagCode: 'pa', color: '#DA291C', cards: { yellow: [], red: [] } },
        teamAway: { name: `אנגליה`, flagCode: 'gb-eng', color: '#FFFFFF', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 6, draw: 13, away: 81 }, matchRisk: 'Upset Alert',
        radarStats: { home: [46, 20, 47, 46, 68, 17], away: [77, 73, 63, 77, 83, 37] },
        advancedStats: { home: { xG: '0.59', corners: 0, altitudeImpact: '' }, away: { xG: '2.61', corners: 0, altitudeImpact: '' } },
        insight: { prediction: `משחק חד צדדי. נבחרת שלושת האריות מגיעה עם סוללת כוכבים והיא הולכת להחזיק בכדור למעלה מ-65% מהזמן וללחוץ את פנמה לאחור. פנמה מצידה תנסה פשוט להעביר את הזמן, להתגונן עם 10 שחקנים מאחורי הכדור, ולקוות שהאנגלים יתפסו יום נוראי מול השער.`, actual: `` },
        goals: [],
        squads: { home: { predicted: ['Luis Mejía', 'César Blackman', 'José Córdoba', 'Fidel Escobar', 'Edgardo Fariña', 'Cristian Martínez', 'José Luis Rodríguez', 'Adalberto Carrasquilla', 'Tomás Rodríguez', 'Ismael Díaz', 'Yoel Bárcenas'], actual: [] }, away: { predicted: ['Jordan Pickford', 'Ezri Konsa', "Nico O'Reilly", 'Declan Rice', 'John Stones', 'Marc Guéhi', 'Bukayo Saka', 'Elliot Anderson', 'Harry Kane', 'Jude Bellingham', 'Marcus Rashford'], actual: [] } }
    },
    'match68': {
        timeStatus: 'future', matchday: 3, stage: 'L', dateText: `28/06/2026 | 00:00 (שעון ישראל)`,
        teamHome: { name: `קרואטיה`, flagCode: 'hr', color: '#FF0000', cards: { yellow: [], red: [] } },
        teamAway: { name: `גאנה`, flagCode: 'gh', color: '#006B3F', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 0', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 59, draw: 24, away: 17 }, matchRisk: 'Safe',
        radarStats: { home: [69, 40, 58, 69, 87, 40], away: [53, 53, 51, 53, 65, 25] },
        advancedStats: { home: { xG: '1.69', corners: 0, altitudeImpact: '' }, away: { xG: '0.79', corners: 0, altitudeImpact: '' } },
        insight: { prediction: `הקרואטים מנוסים, שקולים ואשפי שליטה במרכז המגרש. הם ינסו להרדים את המשחק ולהתיש את השחקנים מגאנה בעזרת הנעת כדור חכמה והמון סבלנות. גאנה אתלטית ומהירה, ותהיה חייבת ללחוץ גבוה כדי למנוע מהקרואטים לנהל את העניינים בנחת.`, actual: `` },
        goals: [],
        squads: { home: { predicted: ['Dominik Livaković', 'Josip Stanišić', 'Marin Pongračić', 'Joško Gvardiol', 'Duje Ćaleta-Car', 'Josip Šutalo', 'Nikola Moro', 'Mateo Kovačić', 'Andrej Kramarić', 'Luka Modrić', 'Ante Budimir'], actual: [] }, away: { predicted: ['Lawrence Ati-Zigi', 'Alidu Seidu', 'Caleb Yirenkyi', 'Jonas Adjetey', 'Thomas Partey', 'Abdul Mumin', 'Abdul Fatawu', 'Kwasi Sibo', 'Jordan Ayew', 'Brandon Thomas-Asante', 'Antoine Semenyo'], actual: [] } }
    },
    'match69': {
        timeStatus: 'future', matchday: 3, stage: 'K', dateText: `28/06/2026 | 02:30 (שעון ישראל)`,
        teamHome: { name: `קולומביה`, flagCode: 'co', color: '#FCD116', cards: { yellow: [], red: [] } },
        teamAway: { name: `פורטוגל`, flagCode: 'pt', color: '#E42518', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 23, draw: 26, away: 51 }, matchRisk: 'Upset Alert',
        radarStats: { home: [69, 47, 55, 69, 63, 17], away: [75, 33, 64, 75, 72, 45] },
        advancedStats: { home: { xG: '0.89', corners: 0, altitudeImpact: '' }, away: { xG: '1.49', corners: 0, altitudeImpact: '' } },
        insight: { prediction: `משחק סופר-מעניין. הפורטוגלים מגיעים כדי ליזום ולשלוט, אבל קולומביה היא קבוצה אגרסיבית, פיזית ולטינית קשוחה. אני מצפה לראות כאן המון כרטיסים ועבירות. אם קולומביה תצליח להרוס את שטף המשחק הפורטוגלי, יש לה כלים לעקוץ ביציאות מהירות.`, actual: `` },
        goals: [],
        squads: { home: { predicted: ['David Ospina', 'Daniel Muñoz', 'Jhon Lucumí', 'Santiago Arias', 'Kevin Castaño', 'Richard Ríos', 'Luis Díaz', 'Jorge Carrascal', 'Jhon Córdoba', 'James Rodríguez', 'Jhon Arias'], actual: [] }, away: { predicted: ['Diogo Costa', 'Nélson Semedo', 'Rúben Dias', 'Tomás Araújo', 'Diogo Dalot', 'Matheus Nunes', 'Cristiano Ronaldo', 'Bruno Fernandes', 'Gonçalo Ramos', 'Bernardo Silva', 'João Félix'], actual: [] } }
    },
    'match70': {
        timeStatus: 'future', matchday: 3, stage: 'K', dateText: `28/06/2026 | 02:30 (שעון ישראל)`,
        teamHome: { name: `קונגו`, flagCode: 'cg', color: '#007A5E', cards: { yellow: [], red: [] } },
        teamAway: { name: `אוזבקיסטן`, flagCode: 'uz', color: '#0099B5', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 38, draw: 27, away: 35 }, matchRisk: 'Safe',
        radarStats: { home: [62, 60, 49, 62, 69, 22], away: [53, 47, 48, 53, 64, 15] },
        advancedStats: { home: { xG: '1.29', corners: 0, altitudeImpact: '' }, away: { xG: '1.24', corners: 0, altitudeImpact: '' } },
        insight: { prediction: `קרב שקול לחלוטין בין שתי קבוצות שרוצות להוכיח את עצמן. קונגו חזקה פיזית ומהירה, בעוד האוזבקים ישחקו כדורגל מסודר ומאורגן. הרבה גישושים צפויים במרכז השדה, וקבוצה שתבצע טעות קריטית תשלם ביוקר. פוטנציאל גבוה מאוד לתיקו שישאיר אותן בתמונה.`, actual: `` },
        goals: [],
        squads: { home: { predicted: ['Lionel Mpasi', 'Aaron Wan-Bissaka', 'Steve Kapuadi', 'Axel Tuanzebe', 'Dylan Batubinsika', "Ngal'ayel Mukau", 'Nathanaël Mbuku', 'Samuel Moutoussamy', 'Brian Cipenga', 'Théo Bongonda', 'Gaël Kakuta'], actual: [] }, away: { predicted: ['Utkir Yusupov', 'Abdukodir Khusanov', 'Khojiakbar Alijonov', 'Farrukh Sayfiev', 'Rustam Ashurmatov', 'Akmal Mozgovoy', 'Otabek Shukurov', 'Jamshid Iskanderov', 'Odiljon Hamrobekov', 'Jaloliddin Masharipov', 'Oston Urunov'], actual: [] } }
    },
    'match71': {
        timeStatus: 'future', matchday: 3, stage: 'J', dateText: `28/06/2026 | 05:00 (שעון ישראל)`,
        teamHome: { name: `אלג'יריה`, flagCode: 'dz', color: '#006233', cards: { yellow: [], red: [] } },
        teamAway: { name: `אוסטריה`, flagCode: 'at', color: '#EF3340', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 28, draw: 28, away: 44 }, matchRisk: 'Upset Alert',
        radarStats: { home: [73, 60, 54, 73, 73, 13], away: [71, 40, 53, 71, 59, 37] },
        advancedStats: { home: { xG: '0.98', corners: 0, altitudeImpact: '' }, away: { xG: '1.31', corners: 0, altitudeImpact: '' } },
        insight: { prediction: `האוסטרים מגיעים כקבוצה מאומנת להפליא שעושה לחץ גבוה מצוין על כל חלקי המגרש. אלג'יריה מסוכנת מאוד עם שחקני כנף מהירים. אם אוסטריה לא תצליח לתרגם את השליטה במרכז השדה לשערים, הלחץ עליה ילך ויגבר, ואלג'יריה יכולה להפוך את הקערה במתפרצת בודדת.`, actual: `` },
        goals: [],
        squads: { home: { predicted: ['Anthony Mandrea', 'Youcef Atal', 'Ramy Bensebaini', 'Aïssa Mandi', 'Rayan Aït-Nouri', 'Nabil Bentaleb', 'Ismaël Bennacer', 'Ramiz Zerrouki', 'Riyad Mahrez', 'Mohamed Amoura', 'Youcef Belaïli'], actual: [] }, away: { predicted: ['Alexander Schlager', 'David Affengruber', 'Kevin Danso', 'Xaver Schlager', 'Stefan Posch', 'Nicolas Seiwald', 'Marko Arnautović', 'David Alaba', 'Marcel Sabitzer', 'Florian Grillitsch', 'Michael Gregoritsch'], actual: [] } }
    },
    'match72': {
        timeStatus: 'future', matchday: 3, stage: 'J', dateText: `28/06/2026 | 05:00 (שעון ישראל)`,
        teamHome: { name: `ירדן`, flagCode: 'jo', color: '#000000', cards: { yellow: [], red: [] } },
        teamAway: { name: `ארגנטינה`, flagCode: 'ar', color: '#43A1D5', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 2', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 7, draw: 14, away: 79 }, matchRisk: 'Upset Alert',
        radarStats: { home: [40, 27, 46, 40, 80, 12], away: [89, 73, 65, 89, 55, 25] },
        advancedStats: { home: { xG: '0.59', corners: 0, altitudeImpact: '' }, away: { xG: '2.57', corners: 0, altitudeImpact: '' } },
        insight: { prediction: `הבדלי איכות אדירים לטובת אלופת העולם. ירדן תעמיד כאן את האוטובוס, תנסה להתגונן בכל מחיר, ולבזבז זמן כדי להרדים את המשחק. ארגנטינה מצידה, רק צריכה שער אחד מהיר שיפתח את הסכר ויביא אחריו חגיגת שערים.`, actual: `` },
        goals: [],
        squads: { home: { predicted: ['Yazeed Abulaila', 'Mohammad Abu Hashish', 'Abdallah Nasib', 'Husam Abu Dahab', 'Yazan Al-Arab', 'Amer Jamous', 'Mohammad Abu Zrayq', 'Noor Al-Rawabdeh', 'Ali Olwan', 'Musa Al-Taamari', 'Odeh Al-Fakhouri'], actual: [] }, away: { predicted: ['Juan Musso', 'Marcos Nicolás Senesi Baron', 'Nicolás Tagliafico', 'Gonzalo Montiel', 'Leandro Paredes', 'Lisandro Martínez', 'Rodrigo De Paul', 'Valentín Barco', 'Julián Alvarez', 'Lionel Messi', 'Giovani Lo Celso'], actual: [] } }
    }
};
Object.assign(window.matchDatabase, matchday3Database);
