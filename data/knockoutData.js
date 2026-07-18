window.matchDatabase = window.matchDatabase || {};

const knockoutMatches = {
    'match73': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `28/06/2026 | 22:00 (שעון ישראל)`, 
        teamHome: { name: `דרום אפריקה`, flagCode: 'za', color: '#007749', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `קנדה`, flagCode: 'ca', color: '#FF0000', cards: { yellow: [], red: [] } }, 
        score: { prediction: '1 - 2', actual: '0 - 1', accuracyClass: 'trend' }, 
        probabilities: { home: 25, draw: 30, away: 45 }, matchRisk: 'Safe', 
        radarStats: { home: [55, 45, 60, 65, 75, 50], away: [70, 60, 55, 70, 80, 68] }, 
        advancedStats: { home: { xG: '0.85', corners: 2 }, away: { xG: '1.65', corners: 7 } }, 
        insight: { 
            prediction: `החזרה של אלפונסו דייוויס להרכב היא בוסט אדיר עבור קנדה. האתלטיות והמהירות באגפים צפויים להכריע את דרום אפריקה, למרות ההגנה הקשוחה שלה.`, 
            actual: `קרב התשה פיזי ומרתק הוכרע בזכות בגרות טקטית מרשימה של קנדה, שידעה לשלוט בקצב המשחק במחצית השנייה למרות נסיונות עוקץ מסוכנים במתפרצות מצד דרום אפריקה. הבפאנה-בפאנה נתנו את הלב על הדשא אך שילמו על חוסר ריכוז בשליש האחרון, בעוד הקנדים ממשיכים את המסע ההיסטורי שלהם לרבע הגמר ביעילות וקור רוח אופייניים.` 
        }, 
        goals: [] 
    },
    'match74': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `29/06/2026 | 20:00 (שעון ישראל)`, 
        teamHome: { name: `ברזיל`, flagCode: 'br', color: '#FFD700', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `יפן`, flagCode: 'jp', color: '#000555', cards: { yellow: [], red: [] } }, 
        score: { prediction: '3 - 1', actual: '2 - 1', accuracyClass: 'trend' }, 
        probabilities: { home: 70, draw: 18, away: 12 }, matchRisk: 'Safe', 
        radarStats: { home: [95, 85, 80, 88, 85, 95], away: [70, 65, 60, 75, 65, 65] }, 
        advancedStats: { home: { xG: '2.50', corners: 5 }, away: { xG: '0.80', corners: 2 } }, 
        insight: { 
            prediction: `הסלסאו בכושר שיא עם ויניסיוס שלא עוצר. יפן תרוץ ותילחם, אך פערי הכישרון גדולים מדי.`, 
            actual: `איזה קרב! יפן הדהימה עם יתרון מוקדם והקשתה מאוד על הסלסאו, אך הברזילאים הוכיחו אופי, חזרו למשחק, והשיגו את הכרטיס לשמינית הגמר עם שער ניצחון דרמטי עמוק בתוספת הזמן (דקה 96).` 
        }, 
        goals: [] 
    },
    'match75': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `29/06/2026 | 23:30 (שעון ישראל)`, 
        teamHome: { name: `גרמניה`, flagCode: 'de', color: '#FFFFFF', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `פרגוואי`, flagCode: 'py', color: '#D52B1E', cards: { yellow: [], red: [] } }, 
        score: { prediction: '2 - 0', actual: '1 - 1', accuracyClass: 'wrong' }, 
        probabilities: { home: 68, draw: 20, away: 12 }, matchRisk: 'Safe', 
        radarStats: { home: [88, 85, 80, 85, 78, 90], away: [65, 50, 60, 80, 85, 55] }, 
        advancedStats: { home: { xG: '2.40', corners: 7 }, away: { xG: '0.60', corners: 3 } }, 
        insight: { 
            prediction: `גרמניה סיימה את שלב הבתים עם 10 שערים ומכונת ההתקפה שלה נראית משומנת. פרגוואי תנסה להסתגר, אך האיכות הגרמנית תמצא את הפרצה.`, 
            actual: `רעידת אדמה היסטורית! חוליו אנקיסו כבש לפרגוואי, קאי האברץ השווה, ושער של טאה נפסל ב-VAR בהארכה. פרגוואי ניצחה 4-3 בפנדלים והנחילה לגרמניה הפסד ראשון אי פעם בדו-קרב פנדלים במונדיאל. סנסציה ענקית.` 
        }, 
        goals: [] 
    },
    'match76': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `30/06/2026 | 04:00 (שעון ישראל)`, 
        teamHome: { name: `הולנד`, flagCode: 'nl', color: '#F36C21', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `מרוקו`, flagCode: 'ma', color: '#C1272D', cards: { yellow: [], red: [] } }, 
        score: { prediction: '2 - 1', actual: '1 - 1', accuracyClass: 'wrong' }, 
        probabilities: { home: 55, draw: 25, away: 20 }, matchRisk: 'Safe', 
        radarStats: { home: [75, 80, 70, 75, 70, 85], away: [65, 60, 55, 85, 65, 60] }, 
        advancedStats: { home: { xG: '1.80', corners: 5 }, away: { xG: '1.05', corners: 4 } }, 
        insight: { 
            prediction: `הולנד חזקה ומסודרת, אבל מרוקו מגיעה עם המון לב ותמיכה מהיציעים. נבחרת האורנג' פייבוריטית.`, 
            actual: `הדרמה ממשיכה! קודי גאקפו נתן לאורנג' יתרון מאוחר, אך עיסא דיופ השווה שוב עבור אלופת אפריקה. מרוקו ניצחה 3-2 בדו-קרב מהנקודה הלבנה ושלחה את ההולנדים הביתה. המודל לא חזה את הלב המרוקאי.` 
        }, 
        goals: [] 
    },
    'match77': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `30/06/2026 | 20:00 (שעון ישראל)`, 
        teamHome: { name: `חוף השנהב`, flagCode: 'ci', color: '#FF8200', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `נורווגיה`, flagCode: 'no', color: '#C8102E', cards: { yellow: [], red: [] } }, 
        score: { prediction: '1 - 2', actual: '1 - 2', accuracyClass: 'exact' }, 
        probabilities: { home: 35, draw: 30, away: 35 }, matchRisk: 'Draw Booster', 
        radarStats: { home: [70, 65, 60, 65, 85, 65], away: [65, 60, 75, 70, 80, 70] }, 
        advancedStats: { home: { xG: '1.10', corners: 0 }, away: { xG: '1.40', corners: 0 } }, 
        insight: { 
            prediction: `משחק שקול. נורווגיה עם היתרון של ארלינג האלנד בחוד נראית מסוכנת יותר מול הפיזיות של הפילים.`, 
            actual: `בינגו בתחזית! נורווגיה מנצחת 2-1 במשחק צמוד, בדיוק כפי שהמודל חזה.` 
        }, 
        goals: [] 
    },
    'match78': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `01/07/2026 | 00:00 (שעון ישראל)`, 
        teamHome: { name: `צרפת`, flagCode: 'fr', color: '#002654', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `שוודיה`, flagCode: 'se', color: '#FFF200', cards: { yellow: [], red: [] } }, 
        score: { prediction: '2 - 0', actual: '3 - 0', accuracyClass: 'trend' }, 
        probabilities: { home: 75, draw: 15, away: 10 }, matchRisk: 'Safe', 
        radarStats: { home: [92, 88, 85, 90, 88, 94], away: [60, 55, 65, 60, 80, 55] }, 
        advancedStats: { home: { xG: '2.30', corners: 0 }, away: { xG: '0.50', corners: 0 } }, 
        insight: { 
            prediction: `אמבפה וחבריו דורסים עד כה. השוודים ינסו לצופף ולשחק פיזי, אבל צרפת איכותית משמעותית.`, 
            actual: `צרפת מוכיחה את העליונות שלה ולא משאירה לשוודים שום סיכוי עם 3-0 חלק.` 
        }, 
        goals: [] 
    },
    'match79': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `01/07/2026 | 04:00 (שעון ישראל)`, 
        teamHome: { name: `מקסיקו`, flagCode: 'mx', color: '#006341', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `אקוודור`, flagCode: 'ec', color: '#FFD100', cards: { yellow: [], red: [] } }, 
        score: { prediction: '3 - 1', actual: '2 - 0', accuracyClass: 'trend' }, 
        probabilities: { home: 55, draw: 25, away: 20 }, matchRisk: 'Safe', 
        radarStats: { home: [80, 75, 70, 85, 75, 75], away: [65, 60, 55, 70, 75, 60] }, 
        advancedStats: { home: { xG: '2.10', corners: 0 }, away: { xG: '0.80', corners: 0 } }, 
        insight: { 
            prediction: `שתי נבחרות עם המון אמוציות וקהל אדיר. אקוודור הראתה נגד גרמניה שאין לה רגשי נחיתות. צפוי משחק סוער.`, 
            actual: `מקסיקו ממנפת את הדחיפה מהקהל ושומרת על רשת נקייה בדרך ל-2-0 ועלייה לשלב הבא.` 
        }, 
        goals: [] 
    },
    'match80': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `01/07/2026 | 19:00 (שעון ישראל)`, 
        teamHome: { name: `אנגליה`, flagCode: 'gb-eng', color: '#FFFFFF', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `קונגו`, flagCode: 'cd', color: '#007A5E', cards: { yellow: [], red: [] } }, 
        score: { prediction: '2 - 1', actual: '2 - 1', accuracyClass: 'exact' }, 
        probabilities: { home: 65, draw: 22, away: 13 }, matchRisk: 'Upset Alert', 
        radarStats: { home: [80, 75, 70, 78, 82, 88], away: [68, 55, 60, 75, 85, 60] }, 
        advancedStats: { home: { xG: '1.90', corners: 0 }, away: { xG: '0.95', corners: 0 } }, 
        insight: { 
            prediction: `תומאס טוכל הבטיח שאנגליה תיראה טוב יותר אחרי הופעה פושרת בשלב הבתים. קונגו הראתה אופי אדיר עם קאמבק מרשים, והיא תקשה מאוד על האנגלים עם פיזיות במרכז השדה.`, 
            actual: `אנגליה הזיעה אך עשתה את העבודה. קונגו נתנה פייט פיזי אדיר, אבל האיכות האנגלית (והחילופים של טוכל) הספיקו כדי להבטיח את הכרטיס לשמינית הגמר.` 
        }, 
        goals: [] 
    },
    'match81': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `01/07/2026 | 23:00 (שעון ישראל)`, 
        teamHome: { name: `בלגיה`, flagCode: 'be', color: '#E30613', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `סנגל`, flagCode: 'sn', color: '#00853F', cards: { yellow: [], red: [] } }, 
        score: { prediction: '2 - 2', actual: '3 - 2', accuracyClass: 'trend' }, 
        probabilities: { home: 45, draw: 25, away: 30 }, matchRisk: 'Upset Alert', 
        radarStats: { home: [85, 80, 75, 80, 75, 85], away: [75, 70, 70, 75, 90, 75] }, 
        advancedStats: { home: { xG: '1.70', corners: 0 }, away: { xG: '1.50', corners: 0 } }, 
        insight: { 
            prediction: `משחק פתוח לחלוטין. בלגיה התקפית מאוד אך ההגנה שלה פגיעה מול העוצמה והמהירות של סנגל.`, 
            actual: `משחק קצבי שהצדיק את התחזיות. בלגיה ניצלה את היתרון האיכותי שלה בהתקפה כדי לגבור על סנגל העיקשת בקרב רב שערים והעפילה לשלב הבא.` 
        }, 
        goals: [] 
    },
    'match82': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `02/07/2026 | 03:00 (שעון ישראל)`, 
        teamHome: { name: `ארצות הברית`, flagCode: 'us', color: '#002868', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `בוסניה`, flagCode: 'ba', color: '#002F6C', cards: { yellow: [], red: [] } }, 
        score: { prediction: '2 - 1', actual: '2 - 0', accuracyClass: 'trend' }, 
        probabilities: { home: 55, draw: 25, away: 20 }, matchRisk: 'Safe', 
        radarStats: { home: [75, 70, 65, 80, 75, 75], away: [65, 55, 70, 65, 85, 60] }, 
        advancedStats: { home: { xG: '1.60', corners: 0 }, away: { xG: '1.10', corners: 0 } }, 
        insight: { 
            prediction: `ארה"ב מול הקהל הביתי חייבת לעבור. בוסניה קשוחה באוויר ותנסה לעקוץ במצבים נייחים.`, 
            actual: `ארצות הברית שלטה לחלוטין וניצלה את הדחיפה מהקהל הביתי. בוסניה התקשתה לייצר מצבים, והאמריקאים ממשיכים הלאה עם ניצחון חלק.` 
        }, 
        goals: [] 
    },
    'match83': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `02/07/2026 | 22:00 (שעון ישראל)`, 
        teamHome: { name: `ספרד`, flagCode: 'es', color: '#C60B1E', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `אוסטריה`, flagCode: 'at', color: '#EF3340', cards: { yellow: [], red: [] } }, 
        score: { prediction: '2 - 0', actual: '3 - 0', accuracyClass: 'trend' }, 
        probabilities: { home: 65, draw: 25, away: 10 }, matchRisk: 'Safe', 
        radarStats: { home: [90, 92, 75, 85, 75, 88], away: [70, 65, 60, 75, 75, 65] }, 
        advancedStats: { home: { xG: '2.10', corners: 0 }, away: { xG: '0.60', corners: 0 } }, 
        insight: { 
            prediction: `הטיקי-טאקה הספרדי אמור להתיש את הלחץ האוסטרי ולמצוא את הרשת במוקדם או במאוחר.`, 
            actual: `התרסקות מפוארת של הלחץ האוסטרי. ספרד העבירה קליניקה של כדורגל חכם ומהיר וסגרה את הסיפור ב-90 דקות חלקות.` 
        }, 
        goals: [] 
    },
    'match84': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `03/07/2026 | 02:00 (שעון ישראל)`, 
        teamHome: { name: `פורטוגל`, flagCode: 'pt', color: '#E42518', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `קרואטיה`, flagCode: 'hr', color: '#FF0000', cards: { yellow: [], red: [] } }, 
        score: { prediction: '1 - 1', actual: '2 - 1', accuracyClass: 'wrong' }, 
        probabilities: { home: 40, draw: 35, away: 25 }, matchRisk: 'Draw Booster', 
        radarStats: { home: [82, 78, 75, 80, 70, 85], away: [80, 82, 70, 85, 72, 80] }, 
        advancedStats: { home: { xG: '1.20', corners: 0 }, away: { xG: '1.15', corners: 0 } }, 
        insight: { 
            prediction: `משחק טקטי ברמה הגבוהה ביותר. קרואטיה תשלוט במרכז המגרש, בעוד פורטוגל תחפש את הכישרון האישי. פוטנציאל גבוה להארכה ופנדלים.`, 
            actual: `קרואטיה מסרבת למות? מסתבר שהפעם כן. פורטוגל הוכיחה שכוח האש שלה פשוט גדול מדי בשביל הקישור הקרואטי העייף והכריעה בזמן החוקי.` 
        }, 
        goals: [] 
    },
    'match85': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `03/07/2026 | 06:00 (שעון ישראל)`, 
        teamHome: { name: `שווייץ`, flagCode: 'ch', color: '#FF0000', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `אלג'יריה`, flagCode: 'dz', color: '#006233', cards: { yellow: [], red: [] } }, 
        score: { prediction: '1 - 0', actual: '1 - 0', accuracyClass: 'exact' }, 
        probabilities: { home: 50, draw: 30, away: 20 }, matchRisk: 'Safe', 
        radarStats: { home: [75, 70, 65, 75, 70, 75], away: [70, 65, 60, 70, 75, 65] }, 
        advancedStats: { home: { xG: '1.40', corners: 0 }, away: { xG: '0.90', corners: 0 } }, 
        insight: { 
            prediction: `שווייץ בוגרת ומנוסה מאוד במשחקי נוקאאוט. אלג'יריה תנסה להפתיע אך השווייצרים פייבוריטים לעלות.`, 
            actual: `משחק שווייצרי מכני, נטול אמוציות ונטול הארכות. השעון השווייצרי תיקתק ניצחון קטן ויעיל, בול למגמה של המודל.` 
        }, 
        goals: [] 
    },
    'match86': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `03/07/2026 | 21:00 (שעון ישראל)`, 
        teamHome: { name: `אוסטרליה`, flagCode: 'au', color: '#FFCD00', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `מצרים`, flagCode: 'eg', color: '#CE1126', cards: { yellow: [], red: [] } }, 
        score: { prediction: '1 - 1', actual: '1 - 2', accuracyClass: 'wrong' }, 
        probabilities: { home: 35, draw: 35, away: 30 }, matchRisk: 'Draw Booster', 
        radarStats: { home: [65, 60, 65, 75, 80, 60], away: [70, 65, 60, 70, 70, 70] }, 
        advancedStats: { home: { xG: '1.05', corners: 0 }, away: { xG: '1.10', corners: 0 } }, 
        insight: { 
            prediction: `קרב שקול וקשוח. הפיזיות האוסטרלית מול הטכניקה המצרית. משחק שיכול להיות מוכרע בטעות בודדת.`, 
            actual: `הטכניקה המצרית גברה על הפיזיות האוסטרלית בתום קרב התשה מרתק. למרות משחק אגרסיבי מצד ה'סוקרוס' שניסו לשלוט באוויר, מצרים ניצלה את המהירות באגפים והכריעה את ההתמודדות. המודל, שהתריע מראש על מוקש אפשרי ונטה לכיוון תיקו, פספס הפעם את היכולת של המצרים לעקוץ ולסגור עניין בזמן החוקי.` 
        }, 
        goals: [] 
    },
    'match87': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `04/07/2026 | 01:00 (שעון ישראל)`, 
        teamHome: { name: `ארגנטינה`, flagCode: 'ar', color: '#43A1D5', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `כף ורדה`, flagCode: 'cv', color: '#003893', cards: { yellow: [], red: [] } }, 
        score: { prediction: '3 - 0', actual: '3 - 0', accuracyClass: 'exact' }, 
        probabilities: { home: 85, draw: 10, away: 5 }, matchRisk: 'Safe', 
        radarStats: { home: [92, 88, 80, 95, 80, 95], away: [60, 50, 55, 65, 65, 55] }, 
        advancedStats: { home: { xG: '2.80', corners: 0 }, away: { xG: '0.40', corners: 0 } }, 
        insight: { 
            prediction: `הסינדרלה מכף ורדה פוגשת את אלופת העולם. מסע הקסם כנראה יסתיים כאן מול מסי וחבריו.`, 
            actual: `פגיעה מדויקת של המודל (Exact)! מסע הקסם של כף ורדה הגיע לסיומו מול אלופת העולם שהציגה עליונות מוחלטת מהשריקה הראשונה. ארגנטינה תרגמה את פערי האיכות העצומים לשליטה אבסולוטית במרכז השדה, ולא השאירה לסינדרלה מאפריקה שום סיכוי בדרך ל-3-0 חלק.` 
        }, 
        goals: [] 
    },
    'match88': { 
        timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `04/07/2026 | 04:30 (שעון ישראל)`, 
        teamHome: { name: `קולומביה`, flagCode: 'co', color: '#FCD116', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `גאנה`, flagCode: 'gh', color: '#006B3F', cards: { yellow: [], red: [] } }, 
        score: { prediction: '2 - 1', actual: '2 - 1', accuracyClass: 'exact' }, 
        probabilities: { home: 55, draw: 25, away: 20 }, matchRisk: 'Safe', 
        radarStats: { home: [78, 70, 65, 75, 75, 75], away: [70, 65, 60, 70, 80, 65] }, 
        advancedStats: { home: { xG: '1.60', corners: 0 }, away: { xG: '1.00', corners: 0 } }, 
        insight: { 
            prediction: `קולומביה מגיעה כפייבוריטית בזכות הכישרון ההתקפי, אך תצטרך להתמודד עם המהירות העצומה של גאנה.`, 
            actual: `עוד בינגו מושלם למודל! הקצב והכישרון הדרום-אמריקאי גברו על האתלטיות האפריקאית במשחק פתוח ורווי מצבים. קולומביה תרגמה את היצירתיות שלה בשליש האחרון לשערים מכריעים, בעוד גאנה, למרות ניסיונות לעקוץ במתפרצות מהירות, נאלצת להיפרד מהטורניר.` 
        }, 
        goals: [] 
    },
    'match89': { 
        timeStatus: 'past', matchday: 'r16', stage: "r16", dateText: `04/07/2026 | 20:00 (שעון ישראל)`, 
        teamHome: { name: `קנדה`, flagCode: 'ca', color: '#FF0000', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `מרוקו`, flagCode: 'ma', color: '#C1272D', cards: { yellow: [], red: [] } }, 
        score: { prediction: '1 - 1', actual: '0 - 3', accuracyClass: 'wrong' }, 
        probabilities: { home: 30, draw: 35, away: 35 }, matchRisk: 'Draw Booster', 
        radarStats: { home: [70, 65, 60, 75, 80, 65], away: [75, 70, 65, 80, 70, 70] }, 
        advancedStats: { home: { xG: '1.10', corners: 0 }, away: { xG: '1.40', corners: 0 } }, 
        insight: { 
            prediction: `קנדה מגיעה לשמינית הגמר על גלי התלהבות אחרי קאמבק דרמטי. מנגד, מרוקו מציגה ניסיון עשיר במעמדים האלה וסגל שמורגל ללחץ. המודל מזהה יתרון קל לאריות האטלס במרכז השדה, אך מזהיר מהמהירות הקטלנית של הקנדים במתפרצות. צפוי משחק טקטי שיוכרע בפרטים הקטנים.`, 
            actual: `הצהרת כוונות מהדהדת של אריות האטלס! מרוקו פירקה את קנדה עם 3-0 מוחץ. הניסיון והעוצמה המרוקאית במרכז השדה פשוט העלימו את המהירות הקנדית מהרגע הראשון.` 
        }, 
        goals: [] 
    },
    'match90': { 
        timeStatus: 'past', matchday: 'r16', stage: "r16", dateText: `05/07/2026 | 00:00 (שעון ישראל)`, 
        teamHome: { name: `פרגוואי`, flagCode: 'py', color: '#D52B1E', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `צרפת`, flagCode: 'fr', color: '#002654', cards: { yellow: [], red: [] } }, 
        score: { prediction: '0 - 2', actual: '0 - 1', accuracyClass: 'trend' }, 
        probabilities: { home: 15, draw: 20, away: 65 }, matchRisk: 'Safe', 
        radarStats: { home: [65, 55, 60, 80, 85, 60], away: [95, 85, 80, 90, 85, 95] }, 
        advancedStats: { home: { xG: '0.60', corners: 0 }, away: { xG: '2.30', corners: 0 } }, 
        insight: { 
            prediction: `נבחרת הטריקולור פייבוריטית ברורה במשחק הזה, עם עומק סגל שאין שני לו בטורניר. פרגוואי תגיע במטרה להסתגר, לבנות חומת מגן כפולה ולעקוץ במצבים נייחים. עם זאת, מדדי האיכות מצביעים על כך שהלחץ הצרפתי יכריע את ההתמודדות במוקדם או במאוחר.`, 
            actual: `יעילות צרפתית קלאסית. הטריקולור הסתפקו בשער בודד כדי לשבור את חומת המגן של פרגוואי בדרך לרבע הגמר, בדיוק בהתאם למגמה שחזה המודל.` 
        }, 
        goals: [] 
    },
    'match91': { 
        timeStatus: 'past', matchday: 'r16', stage: "r16", dateText: `05/07/2026 | 23:00 (שעון ישראל)`, 
        teamHome: { name: `ברזיל`, flagCode: 'br', color: '#FFD700', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `נורווגיה`, flagCode: 'no', color: '#C8102E', cards: { yellow: [], red: [] } }, 
        score: { prediction: '2 - 1', actual: '1 - 2', accuracyClass: 'wrong' }, 
        probabilities: { home: 55, draw: 25, away: 20 }, matchRisk: 'Upset Alert', 
        radarStats: { home: [95, 85, 80, 85, 80, 95], away: [75, 65, 75, 70, 85, 75] }, 
        advancedStats: { home: { xG: '2.10', corners: 0 }, away: { xG: '1.20', corners: 0 } }, 
        insight: { 
            prediction: `ארלינג האלנד פוגש את הגנת הסלסאו בקרב מסקרן במיוחד. ברזיל שולטת בכדור ומייצרת המון מצבים, אך המודל מתריע מפני החולשה שלה במעברים מהירים – בדיוק היכן שנורבגיה פורחת. למרות הסכנה העוקצנית, הכישרון הברזילאי בחלק הקדמי צפוי להספיק בסופו של דבר.`, 
            actual: `סנסציה אדירה בה שילמה ברזיל ביוקר על החמצת פנדל קריטית של קוניה במחצית הראשונה, מול תצוגת תכלית טקטית ומשמעת מברזל של נורווגיה. המכונה הנורדית, ארלינג האלנד, התעורר עם צמד קטלני עמוק בתוך הדקות המכריעות וריסק את חלומות הגביע של הסלסאו, כשהפנדל המאוחר של ניימאר נותר כנחמת עניים בלבד. זהו ניצחון טהור של אופי ששולח את הברזילאים הביתה מוקדם מהצפוי, ומוכיח שסדר טקטי מנצח כישרון גולמי.` 
        }, 
        goals: [] 
    },
    'match92': { 
        timeStatus: 'past', matchday: 'r16', stage: "r16", dateText: `06/07/2026 | 03:00 (שעון ישראל)`, 
        teamHome: { name: `מקסיקו`, flagCode: 'mx', color: '#006341', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `אנגליה`, flagCode: 'gb-eng', color: '#FFFFFF', cards: { yellow: [], red: [] } }, 
        score: { prediction: '1 - 1', actual: '2 - 3', accuracyClass: 'wrong' }, 
        probabilities: { home: 25, draw: 35, away: 40 }, matchRisk: 'Draw Booster', 
        radarStats: { home: [80, 75, 70, 85, 75, 75], away: [80, 80, 75, 80, 80, 85] }, 
        advancedStats: { home: { xG: '1.20', corners: 0 }, away: { xG: '1.60', corners: 0 } }, 
        insight: { 
            prediction: `אנגליה אולי מתקשה להרשים, אבל תחת טוכל היא יודעת לעשות את העבודה במאני-טיים. המקסיקנים יביאו איתם אמוציות ודחיפה אדירה מהיציעים. התחזית מצביעה על משחק צמוד מאוד, ללא פערים משמעותיים, שיכול בהחלט להיגרר להארכה מרתקת.`, 
            actual: `איזה מותחן פסיכי! מקסיקו נתנה פייט הירואי ודחפה את האנגלים לקצה, אבל נבחרת שלושת האריות הוכיחה שוב ווינריות אמיתית. במשחק קצבי ורב שערים, האיכות של אנגליה בחלק הקדמי הכריעה את הכף עם ניצחון 3-2 דרמטי, והשאירה את התחזית השמרנית של המודל הרחק מאחור.` 
        }, 
        goals: [] 
    },
    'match93': { 
        timeStatus: 'past', matchday: 'r16', stage: "r16", dateText: `06/07/2026 | 22:00 (שעון ישראל)`, 
        teamHome: { name: `פורטוגל`, flagCode: 'pt', color: '#E42518', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `ספרד`, flagCode: 'es', color: '#C60B1E', cards: { yellow: [], red: [] } }, 
        score: { prediction: '1 - 2', actual: '0 - 1', accuracyClass: 'trend' }, 
        probabilities: { home: 30, draw: 30, away: 40 }, matchRisk: 'Upset Alert', 
        radarStats: { home: [85, 80, 75, 85, 75, 85], away: [90, 90, 75, 85, 75, 85] }, 
        advancedStats: { home: { xG: '1.40', corners: 0 }, away: { xG: '1.70', corners: 0 } }, 
        insight: { 
            prediction: `הדרבי האיברי מגיע לשלב הנוקאאוט בקרב סגנונות מובהק. ספרד תכתיב את הקצב באמצעות הטיקי-טאקה המוכר, בעוד פורטוגל תמתין בסבלנות למתפרצות קטלניות דרך האגפים. המודל מזהה יעילות התקפית עדיפה אצל הספרדים, מה שנותן להם יתרון זעיר.`, 
            actual: `ספרד הוכיחה שוב שהטיקי-טאקה עדיין חי ובועט עם ניצחון קטן-גדול בדרבי האיברי. פורטוגל ניסתה לעקוץ במתפרצות בדיוק כפי שחזינו, אך נתקלה בחומה ספרדית בצורה ובשליטה מוחלטת של לה רוחה במרכז השדה. המודל פגע בול במגמה כשהעניק את היתרון לספרדים, שממשיכים לרבע הגמר ביעילות אופיינית.` 
        }, 
        goals: [] 
    },
    'match94': { 
        timeStatus: 'past', matchday: 'r16', stage: "r16", dateText: `07/07/2026 | 03:00 (שעון ישראל)`, 
        teamHome: { name: `ארצות הברית`, flagCode: 'us', color: '#002868', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `בלגיה`, flagCode: 'be', color: '#E30613', cards: { yellow: [], red: [] } }, 
        score: { prediction: '1 - 1', actual: '1 - 4', accuracyClass: 'wrong' }, 
        probabilities: { home: 35, draw: 30, away: 35 }, matchRisk: 'Draw Booster', 
        radarStats: { home: [75, 70, 70, 80, 75, 75], away: [85, 80, 75, 75, 70, 85] }, 
        advancedStats: { home: { xG: '1.50', corners: 0 }, away: { xG: '1.50', corners: 0 } }, 
        insight: { 
            prediction: `ארה"ב מגיעה עם תמיכה ביתית אדירה ורצון לעשות היסטוריה במונדיאל הביתי שלה. מנגד, בלגיה מחזיקה באיכות מסירה וארגון במרכז השדה שיכולים לנטרל את ההתלהבות האמריקאית. זהו משחק בעל סבירות גבוהה לתיקו, בו המומנטום עשוי להתהפך פעמים רבות.`, 
            actual: `התפרקות מוחלטת של החלום האמריקאי מול תצוגת תכלית דורסנית של השדים האדומים! למרות הדחיפה האדירה מהיציעים, ארה"ב קרסה מול איכות המסירה והיעילות הקטלנית של הבלגים שניצלו כל טעות בהגנה המקומית. המודל, שצפה משחק שקול והארכה, נותר המום יחד עם האוהדים המקומיים מול הקונצרט הבלגי בדרך לרבע הגמר.` 
        }, 
        goals: [] 
    },
    'match95': {
        timeStatus: 'past', matchday: 'r16', stage: "r16", dateText: `07/07/2026 | 19:00 (שעון ישראל)`,
        teamHome: { name: `ארגנטינה`, flagCode: 'ar', color: '#43A1D5', cards: { yellow: [], red: [] } },
        teamAway: { name: `מצרים`, flagCode: 'eg', color: '#CE1126', cards: { yellow: [], red: [] } },
        status: "FT",
        score: { prediction: '3 - 1', actual: '3 - 2', accuracyClass: 'trend' },
        probabilities: { home: 80, draw: 15, away: 5 }, matchRisk: 'Safe',
        radarStats: { home: [90, 85, 80, 95, 75, 95], away: [70, 60, 65, 70, 80, 65] },
        advancedStats: { home: { xG: '2.85', corners: 0 }, away: { xG: '1.10', corners: 0 } },
        insight: {
            prediction: `אלופת העולם מגיעה כמכונה משומנת מול נבחרת מצרית שהשתחלה בקושי לנוקאאוט. מדדי השליטה בכדור וה-xG מצביעים על דומיננטיות ארגנטינאית מוחלטת בתוך רחבת העונשין.`,
            actual: `ארגנטינה הוכיחה אופי של אלופה עם קאמבק דרמטי מול יתרון כפול ומפתיע של המצרים. הלחץ האדיר במחצית השנייה תורגם לשלישיית שערים מהירה, כולל שער ניצחון של אנזו פרננדס עמוק בתוספת הזמן. איכות הסגל והעומק המנטלי הכריעו את ההתמודדות.`
        },
        goals: []
    },
    'match96': {
        timeStatus: 'past', matchday: 'r16', stage: "r16", dateText: `07/07/2026 | 23:00 (שעון ישראל)`,
        teamHome: { name: `שווייץ`, flagCode: 'ch', color: '#FF0000', cards: { yellow: [], red: [] } },
        teamAway: { name: `קולומביה`, flagCode: 'co', color: '#FCD116', cards: { yellow: [], red: [] } },
        status: "PEN",
        score: { 
            prediction: '1 - 0', 
            actual: '0 - 0', 
            accuracyClass: 'wrong',
            fulltime: { home: 0, away: 0 },
            extratime: { home: 0, away: 0 },
            penalty: { home: 4, away: 3 }
        },
        probabilities: { home: 35, draw: 30, away: 35 }, matchRisk: 'Upset Alert',
        radarStats: { home: [75, 80, 70, 80, 75, 75], away: [80, 70, 75, 85, 85, 80] },
        advancedStats: { home: { xG: '1.05', corners: 0 }, away: { xG: '1.15', corners: 0 } },
        insight: {
            prediction: `התנגשות סגנונות מרתקת בין ההגנה הקולומביאנית העוצמתית להנעת הכדור השווייצרית המסודרת. השווייצרים צפויים לשלוט בקצב, אך ייאלצו להיזהר מהמתפרצות הקטלניות של היריבה.`,
            actual: `קרב התשה טקטי שהוכרע מהנקודה הלבנה! לאחר 120 דקות נטולות שערים שבהן שתי הנבחרות הציגו הגנות ברזל, השווייצרים הראו עליונות מנטלית וקור רוח אופייני בדו-קרב הפנדלים (4-3) והבטיחו את המקום ברבע הגמר מול ארגנטינה.`
        },
        goals: []
    },
    'match97': { 
        timeStatus: 'past', matchday: 'qf', stage: "qf", dateText: `09/07/2026 | 23:00 (שעון ישראל)`, 
        teamHome: { name: `צרפת`, flagCode: 'fr', color: '#002654', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `מרוקו`, flagCode: 'ma', color: '#C1272D', cards: { yellow: [], red: [] } }, 
        score: { prediction: '2 - 0', actual: '2 - 0', accuracyClass: 'exact' }, 
        probabilities: { home: 65, draw: 25, away: 10 }, matchRisk: 'Safe', 
        radarStats: { home: [92, 85, 80, 90, 85, 95], away: [70, 65, 60, 85, 80, 65] }, 
        advancedStats: { home: { xG: '2.50', corners: 0 }, away: { xG: '0.80', corners: 0 } }, 
        insight: { 
            prediction: `צרפת מגיעה לרבע הגמר כפייבוריטית מוחלטת אחרי שדרסה את הטורניר עם 10 שערי זכות וספיגה בודדת. המרוקאים מביאים המון לב והגנה חזקה, אך מדדי ה-xG והעומק הצרפתי מצביעים על עליונות טקטית ופיזית שתכריע את המשחק מוקדם יחסית ותשלח את הטריקולור לחצי הגמר.`, 
            actual: `צרפת שלטה במגרש ורשמה ניצחון 2:0 אלגנטי בדיוק לפי התחזית. מסי שבר את הקרח בדקה ה-60 בביצוע אדיר, ודמבלה (66') חתם את התוצאה תוך שש דקות ושלח את הצרפתים לחצי הגמר.` 
        }, 
        goals: [] 
    },
    'match98': { 
        timeStatus: 'past', matchday: 'qf', stage: "qf", dateText: `11/07/2026 | 24:00 (שעון ישראל)`, 
        teamHome: { name: `נורווגיה`, flagCode: 'no', color: '#C8102E', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `אנגליה`, flagCode: 'gb-eng', color: '#FFFFFF', cards: { yellow: [], red: [] } }, 
        score: { prediction: '1 - 2', actual: '1 - 2', accuracyClass: 'exact' }, 
        probabilities: { home: 35, draw: 30, away: 35 }, matchRisk: 'Draw Booster', 
        radarStats: { home: [75, 65, 75, 75, 85, 80], away: [82, 80, 75, 85, 82, 88] }, 
        advancedStats: { home: { xG: '1.40', corners: 0 }, away: { xG: '1.70', corners: 0 } }, 
        insight: { 
            prediction: `התנגשות אדירה בין המכונה ההתקפית של נורווגיה והאלנד לבין האופי והווינריות של אנגליה במאני-טיים. הסטטיסטיקה מראה שוויון כמעט מוחלט, אך יעילות הקישור האנגלי והניסיון במעמדים אלו עשויים להעניק לאנגלים ניצחון דרמטי על חודו של גול במשחק שיוכרע בפרטים הקטנים.`, 
            actual: `בינגו בתחזית! אנגליה שוב מוכיחה את האופי והווינריות שלה במשחקי הנוקאאוט תחת תומאס טוכל. במשחק טקטי וקצבי, נבחרת שלושת האריות הצליחה להכיל את האיומים של האלנד ונורווגיה, והכריעה את ההתמודדות ברגעים הקריטיים עם 2-1 ששולח אותה למפגש ענק מול ארגנטינה בחצי הגמר.` 
        }, 
        goals: [] 
    },
    'match99': { 
        timeStatus: 'past', matchday: 'qf', stage: "qf", dateText: `10/07/2026 | 22:00 (שעון ישראל)`, 
        teamHome: { name: `ספרד`, flagCode: 'es', color: '#C60B1E', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `בלגיה`, flagCode: 'be', color: '#E30613', cards: { yellow: [], red: [] } }, 
        score: { prediction: '2 - 1', actual: '2 - 1', accuracyClass: 'exact' }, 
        probabilities: { home: 45, draw: 25, away: 30 }, matchRisk: 'Upset Alert', 
        radarStats: { home: [92, 95, 75, 85, 75, 90], away: [85, 80, 80, 80, 75, 88] }, 
        advancedStats: { home: { xG: '2.10', corners: 0 }, away: { xG: '1.80', corners: 0 } }, 
        insight: { 
            prediction: `קרב טיטאנים אירופאי קלאסי! הטיקי-טאקה והשליטה האבסולוטית של ספרד במרכז השדה פוגשים התקפה בלגית דורסנית שכובשת בצרורות. המודל מתריע מפני משחק פתוח לחלוטין, בו משמעת הברזל הספרדית צפויה לתסכל את השדים האדומים ולהכריע את הכף בזכות תנועה חכמה בשליש האחרון.`, 
            actual: `ספרד עומדת בתחזית ומנצחת 2-1 בקונצרט טקטי מרתק. הטיקי-טאקה הספרדי ידע לשלוט בקצב ולבלום את הניסיונות של השדים האדומים לעקוץ במעברים מהירים. לה רוחה מוכיחה ווינריות אמיתית, מנצלת את היתרונות שלה בשליש האחרון ומבטיחה את הכרטיס היוקרתי לחצי הגמר.` 
        }, 
        goals: [] 
    },
    'match100': { 
        timeStatus: 'past', matchday: 'qf', stage: "qf", dateText: `12/07/2026 | 04:00 (שעון ישראל)`, 
        teamHome: { name: `ארגנטינה`, flagCode: 'ar', color: '#43A1D5', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `שווייץ`, flagCode: 'ch', color: '#FF0000', cards: { yellow: [], red: [] } }, 
        status: "AET",
        score: { 
            prediction: '2 - 0', 
            actual: '3 - 1', 
            accuracyClass: 'trend',
            fulltime: { home: 1, away: 1 },
            extratime: { home: 2, away: 0 }
        }, 
        probabilities: { home: 65, draw: 25, away: 10 }, matchRisk: 'Safe', 
        radarStats: { home: [92, 88, 80, 95, 80, 95], away: [75, 80, 70, 80, 75, 75] }, 
        advancedStats: { home: { xG: '2.40', corners: 0 }, away: { xG: '0.90', corners: 0 } }, 
        insight: { 
            prediction: `ארגנטינה מגיעה כפייבוריטית ברורה עם מומנטום התקפי אדיר ומדד xG גבוה מאוד. שווייץ תציג הגנה צפופה ומשמעת טקטית מברזל, אך העייפות מ-120 הדקות בשמינית הגמר צפויה להכריע במחצית השנייה ולאפשר לאלביסלסטה למצוא את הפרצה לחצי הגמר.`, 
            actual: `שווייץ הצליחה לגרור את אלופת העולם להארכה מותחת אחרי 1-1 ב-90 דקות, אבל שם נגמר לה האוויר. ארגנטינה הציגה עליונות התקפית מוחלטת בתוספת הזמן, פירקה את חומת המגן השווייצרית בדרך ל-3-1 מרשים, וקבעה פגישת ענק מול אנגליה בחצי הגמר.` 
        }, 
        goals: [] 
    },
    'match101': { 
        timeStatus: 'past', matchday: 'sf', stage: "sf", dateText: `14/07/2026 | 22:00 (שעון ישראל)`, 
        teamHome: { name: `צרפת`, flagCode: 'fr', color: '#002654', cards: { yellow: ['y', 'y'], red: [] } }, 
        teamAway: { name: `ספרד`, flagCode: 'es', color: '#C60B1E', cards: { yellow: ['y'], red: [] } }, 
        score: { prediction: '1 - 1', actual: '0 - 2', accuracyClass: 'wrong' }, 
        probabilities: { home: 35, draw: 35, away: 30 }, matchRisk: 'Draw Booster', 
        radarStats: { home: [94, 88, 82, 92, 88, 95], away: [94, 95, 78, 88, 78, 92] }, 
        advancedStats: { home: { xG: '1.65', corners: 0 }, away: { xG: '1.80', corners: 0 } }, 
        insight: { 
            prediction: `גמר מוקדם! התנגשות סגנונות מרתקת בין הטיקי-טאקה והשליטה הספרדית במרכז השדה, לבין העוצמה והמתפרצות הקטלניות של הטריקולור. המודל צופה משחק טקטי וזהיר מאוד שבו שתי הנבחרות יפחדו לטעות, עם סבירות גבוהה מאוד לתיקו 1:1 ב-90 דקות שישלח אותנו להארכה מורטת עצבים.`, 
            actual: `איזו תצוגת תכלית ספרדית! לה רוחה מפרקת את חומת ההגנה הצרפתית ורושמת ניצחון 2-0 חלק ב-90 דקות, בניגוד מוחלט לתחזית המודל שלנו. מיקל אויארסבאל נתן את האות לחגיגה עם שער מוקדם בדקה ה-22, ופדרו פורו (58') סגר את הסיפור במחצית השנייה. הטיקי-טאקה ניצח את המתפרצות, וספרד היא העולה הראשונה לגמר הגדול!` 
        }, 
        goals: [] 
    },
    'match102': { 
        timeStatus: 'past', matchday: 'sf', stage: "sf", dateText: `15/07/2026 | 22:00 (שעון ישראל)`, 
        teamHome: { name: `אנגליה`, flagCode: 'gb-eng', color: '#FFFFFF', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `ארגנטינה`, flagCode: 'ar', color: '#43A1D5', cards: { yellow: [], red: [] } }, 
        score: { prediction: '1 - 2', actual: '1 - 2', accuracyClass: 'exact' }, 
        probabilities: { home: 30, draw: 25, away: 45 }, matchRisk: 'Upset Alert', 
        radarStats: { home: [84, 82, 78, 88, 84, 90], away: [92, 88, 82, 96, 82, 96] }, 
        advancedStats: { home: { xG: '1.40', corners: 0 }, away: { xG: '2.10', corners: 0 } }, 
        insight: { 
            prediction: `שחזור של אינספור קרבות היסטוריים. אנגליה של טוכל מגיעה עם הגנת ברזל ואופי ווינרי, אבל אלופת העולם ארגנטינה נראית בלתי ניתנת לעצירה. הכישרון של מסי והשליטה של האלביסלסטה בקצב המשחק צפויים להכריע את האנגלים עם ניצחון דחוק של 2:1 שישלח את ארגנטינה לגמר נוסף.`, 
            actual: `מחצית ראשונה מאופסת וטקטית התפוצצה לדרמת ענק במחצית השנייה. אנתוני גורדון העלה את האנגלים ליתרון (55'), אבל אלופת העולם הוכיחה שוב אופי מברזל. אנסו פרננדס השווה בדקה ה-86, ולאוטרו מרטינס השלים מהפך דרמטי עמוק בתוספת הזמן (90+2') ששולח את ארגנטינה לגמר מול ספרד. בינגו מושלם של המודל בתחזית!` 
        }, 
        goals: [] 
    },
    'match103': { 
        timeStatus: 'future', matchday: 'thirdPlace', stage: "thirdPlace", dateText: `19/07/2026 | 00:00 (שעון ישראל)`, 
        teamHome: { name: `צרפת`, flagCode: 'fr', color: '#002654', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `אנגליה`, flagCode: 'gb-eng', color: '#FFFFFF', cards: { yellow: [], red: [] } }, 
        score: { prediction: '3 - 2', actual: '', accuracyClass: 'pending' }, 
        probabilities: { home: 45, draw: 20, away: 35 }, matchRisk: 'Safe', 
        radarStats: { home: [94, 88, 82, 92, 88, 95], away: [84, 82, 78, 88, 84, 90] }, 
        advancedStats: { home: { xG: '2.20', corners: 0 }, away: { xG: '1.90', corners: 0 } }, 
        insight: { prediction: `משחק על המקום השלישי הוא תמיד חגיגה התקפית ומשוחררת מלחצים. שתי מעצמות אירופאיות שמגיעות עם כבוד פגוע אחרי ההדחה בחצי הגמר ירצו לסיים את הטורניר בטעם מתוק. צרפת מחזיקה ביתרון של עומק בספסל ואיכות יצירת מצבים (xG גבוה), ואנחנו צופים כאן משחק פתוח ורווי שערים שבו הטריקולור יצאו כשידם על העליונה בסופו של דבר.`, actual: `` }, goals: [] 
    },
    'match104': { 
        timeStatus: 'future', matchday: 'final', stage: "final", dateText: `19/07/2026 | 22:00 (שעון ישראל)`, 
        teamHome: { name: `ספרד`, flagCode: 'es', color: '#C60B1E', cards: { yellow: [], red: [] } }, 
        teamAway: { name: `ארגנטינה`, flagCode: 'ar', color: '#43A1D5', cards: { yellow: [], red: [] } }, 
        score: { prediction: '1 - 2', actual: '', accuracyClass: 'pending' }, 
        probabilities: { home: 35, draw: 30, away: 35 }, matchRisk: 'Safe', 
        radarStats: { home: [94, 95, 78, 88, 78, 92], away: [92, 88, 82, 96, 82, 96] }, 
        advancedStats: { home: { xG: '1.75', corners: 0 }, away: { xG: '1.85', corners: 0 } }, 
        insight: { prediction: `הגמר הגדול מגיע! אלופת אירופה מול אלופת העולם בקרב על כל הקופה. הטיקי-טאקה הספרדי בשיאו מול האופי והווינריות הבלתי נגמרת של ארגנטינה. המודל צופה משחק שקול ומרתק, אך מעניק יתרון זעיר למסי וחבריו בדרך להנפת גביע שני ברציפות, במשחק שיוכרע בפרטים הקטנים של השליש האחרון.`, actual: `` }, goals: [] 
    }
};

Object.assign(window.matchDatabase, knockoutMatches);

window.knockoutBracket = {
    roundOf32: [
        { team1: { name: 'ברזיל', flag: 'br', score: '2', outcome: 'winner' }, team2: { name: 'יפן', flag: 'jp', score: '1', outcome: 'loser' } },
        { team1: { name: 'גרמניה', flag: 'de', score: '1 (3)', outcome: 'loser' }, team2: { name: 'פרגוואי', flag: 'py', score: '1 (4)', outcome: 'winner' } },
        { team1: { name: 'מרוקו', flag: 'ma', score: '1 (3)', outcome: 'winner' }, team2: { name: 'הולנד', flag: 'nl', score: '1 (2)', outcome: 'loser' } },
        { team1: { name: 'דרום אפריקה', flag: 'za', score: '0', outcome: 'loser' }, team2: { name: 'קנדה', flag: 'ca', score: '1', outcome: 'winner' } },
        { team1: { name: 'חוף השנהב', flag: 'ci', score: '1', outcome: 'loser' }, team2: { name: 'נורווגיה', flag: 'no', score: '2', outcome: 'winner' } },
        { team1: { name: 'צרפת', flag: 'fr', score: '3', outcome: 'winner' }, team2: { name: 'שוודיה', flag: 'se', score: '0', outcome: 'loser' } },
        { team1: { name: 'מקסיקו', flag: 'mx', score: '2', outcome: 'winner' }, team2: { name: 'אקוודור', flag: 'ec', score: '0', outcome: 'loser' } },
        { team1: { name: 'אנגליה', flag: 'gb-eng', score: '2', outcome: 'winner' }, team2: { name: 'קונגו', flag: 'cd', score: '1', outcome: 'loser' } },
        { team1: { name: 'ארצות הברית', flag: 'us', score: '2', outcome: 'winner' }, team2: { name: 'בוסניה', flag: 'ba', score: '0', outcome: 'loser' } },
        { team1: { name: 'בלגיה', flag: 'be', score: '3', outcome: 'winner' }, team2: { name: 'סנגל', flag: 'sn', score: '2', outcome: 'loser' } },
        { team1: { name: 'פורטוגל', flag: 'pt', score: '2', outcome: 'winner' }, team2: { name: 'קרואטיה', flag: 'hr', score: '1', outcome: 'loser' } },
        { team1: { name: 'ספרד', flag: 'es', score: '3', outcome: 'winner' }, team2: { name: 'אוסטריה', flag: 'at', score: '0', outcome: 'loser' } },
        { team1: { name: 'שווייץ', flag: 'ch', score: '1', outcome: 'winner' }, team2: { name: 'אלג\'יריה', flag: 'dz', score: '0', outcome: 'loser' } },
        { team1: { name: 'אוסטרליה', flag: 'au', score: '1', outcome: 'loser' }, team2: { name: 'מצרים', flag: 'eg', score: '2', outcome: 'winner' } },
        { team1: { name: 'ארגנטינה', flag: 'ar', score: '3', outcome: 'winner' }, team2: { name: 'כף ורדה', flag: 'cv', score: '0', outcome: 'loser' } },
        { team1: { name: 'קולומביה', flag: 'co', score: '2', outcome: 'winner' }, team2: { name: 'גאנה', flag: 'gh', score: '1', outcome: 'loser' } }
    ],
    roundOf16: [
        { team1: { name: 'פרגוואי', py: 'py', score: '0', outcome: 'loser' }, team2: { name: 'צרפת', flag: 'fr', score: '1', outcome: 'winner' } },
        { team1: { name: 'קנדה', flag: 'ca', score: '0', outcome: 'loser' }, team2: { name: 'מרוקו', flag: 'ma', score: '3', outcome: 'winner' } },
        { team1: { name: 'ברזיל', flag: 'br', score: '1', outcome: 'loser' }, team2: { name: 'נורווגיה', flag: 'no', score: '2', outcome: 'winner' } },
        { team1: { name: 'מקסיקו', flag: 'mx', score: '2', outcome: 'loser' }, team2: { name: 'אנגליה', flag: 'gb-eng', score: '3', outcome: 'winner' } },
        { team1: { name: 'ארצות הברית', flag: 'us', score: '1', outcome: 'loser' }, team2: { name: 'בלגיה', flag: 'be', score: '4', outcome: 'winner' } },
        { team1: { name: 'פורטוגל', flag: 'pt', score: '0', outcome: 'loser' }, team2: { name: 'ספרד', flag: 'es', score: '1', outcome: 'winner' } },
        { team1: { name: 'ארגנטינה', flag: 'ar', score: '3', outcome: 'winner' }, team2: { name: 'מצרים', flag: 'eg', score: '2', outcome: 'loser' } },
        { team1: { name: 'שווייץ', flag: 'ch', score: '0 (4)', outcome: 'winner' }, team2: { name: 'קולומביה', flag: 'co', score: '0 (3)', outcome: 'loser' } }
    ],
    quarterFinals: [
        { team1: { name: 'צרפת', flag: 'fr', score: '2', outcome: 'winner' }, team2: { name: 'מרוקו', flag: 'ma', score: '0', outcome: 'loser' } },
        { team1: { name: 'נורווגיה', flag: 'no', score: '1', outcome: 'loser' }, team2: { name: 'אנגליה', flag: 'gb-eng', score: '2', outcome: 'winner' } },
        { team1: { name: 'ספרד', flag: 'es', score: '2', outcome: 'winner' }, team2: { name: 'בלגיה', flag: 'be', score: '1', outcome: 'loser' } },
        { team1: { name: 'ארגנטינה', flag: 'ar', score: '3', outcome: 'winner' }, team2: { name: 'שווייץ', flag: 'ch', score: '1', outcome: 'loser' } }
    ],
    semiFinals: [
        { team1: { name: 'צרפת', flag: 'fr', score: '0', outcome: 'loser' }, team2: { name: 'ספרד', flag: 'es', score: '2', outcome: 'winner' } },
        { team1: { name: 'אנגליה', flag: 'gb-eng', score: '1', outcome: 'loser' }, team2: { name: 'ארגנטינה', flag: 'ar', score: '2', outcome: 'winner' } }
    ],
    thirdPlace: [
        { team1: { name: 'צרפת', flag: 'fr', score: '-', outcome: 'pending' }, team2: { name: 'אנגליה', flag: 'gb-eng', score: '-', outcome: 'pending' } }
    ],
    final: [
        { team1: { name: 'ספרד', flag: 'es', score: '-', outcome: 'pending' }, team2: { name: 'ארגנטינה', flag: 'ar', score: '-', outcome: 'pending' } }
    ],
};
