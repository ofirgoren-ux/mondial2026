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
            actual: `היסטוריה בקליפורניה! קנדה שלטה אך נתקלה ביום אדיר של השוער וויליאמס. כניסתו של אלפונסו דייויס בדקה ה-75 שינתה את המומנטום, וסטפן אוסטקיו הכריע בדרמה של הדקה ה-90+2. המודל חזה נכון את הניצחון הקנדי.` 
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
    'match77': { timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `30/06/2026 | 20:00 (שעון ישראל)`, teamHome: { name: `חוף השנהב`, flagCode: 'ci', color: '#FF8200', cards: { yellow: [], red: [] } }, teamAway: { name: `נורווגיה`, flagCode: 'no', color: '#C8102E', cards: { yellow: [], red: [] } }, score: { prediction: '1 - 2', actual: '1 - 2', accuracyClass: 'exact' }, probabilities: { home: 35, draw: 30, away: 35 }, matchRisk: 'Draw Booster', radarStats: { home: [70, 65, 60, 65, 85, 65], away: [65, 60, 75, 70, 80, 70] }, advancedStats: { home: { xG: '1.10', corners: 0 }, away: { xG: '1.40', corners: 0 } }, insight: { prediction: `משחק שקול. נורווגיה עם היתרון של ארלינג האלנד בחוד נראית מסוכנת יותר מול הפיזיות של הפילים.`, actual: `בינגו בתחזית! נורווגיה מנצחת 2-1 במשחק צמוד, בדיוק כפי שהמודל חזה.` }, goals: [] },
    'match78': { timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `01/07/2026 | 00:00 (שעון ישראל)`, teamHome: { name: `צרפת`, flagCode: 'fr', color: '#002654', cards: { yellow: [], red: [] } }, teamAway: { name: `שוודיה`, flagCode: 'se', color: '#FFF200', cards: { yellow: [], red: [] } }, score: { prediction: '2 - 0', actual: '3 - 0', accuracyClass: 'trend' }, probabilities: { home: 75, draw: 15, away: 10 }, matchRisk: 'Safe', radarStats: { home: [92, 88, 85, 90, 88, 94], away: [60, 55, 65, 60, 80, 55] }, advancedStats: { home: { xG: '2.30', corners: 0 }, away: { xG: '0.50', corners: 0 } }, insight: { prediction: `אמבפה וחבריו דורסים עד כה. השוודים ינסו לצופף ולשחק פיזי, אבל צרפת איכותית משמעותית.`, actual: `צרפת מוכיחה את העליונות שלה ולא משאירה לשוודים שום סיכוי עם 3-0 חלק.` }, goals: [] },
    'match79': { timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `01/07/2026 | 04:00 (שעון ישראל)`, teamHome: { name: `מקסיקו`, flagCode: 'mx', color: '#006341', cards: { yellow: [], red: [] } }, teamAway: { name: `אקוודור`, flagCode: 'ec', color: '#FFD100', cards: { yellow: [], red: [] } }, score: { prediction: '3 - 1', actual: '2 - 0', accuracyClass: 'trend' }, probabilities: { home: 55, draw: 25, away: 20 }, matchRisk: 'Standard', radarStats: { home: [80, 75, 70, 85, 75, 75], away: [65, 60, 55, 70, 75, 60] }, advancedStats: { home: { xG: '2.10', corners: 0 }, away: { xG: '0.80', corners: 0 } }, insight: { prediction: `שתי נבחרות עם המון אמוציות וקהל אדיר. אקוודור הראתה נגד גרמניה שאין לה רגשי נחיתות. צפוי משחק סוער.`, actual: `מקסיקו ממנפת את הדחיפה מהקהל ושומרת על רשת נקייה בדרך ל-2-0 ועלייה לשלב הבא.` }, goals: [] },
    'match80': { timeStatus: 'future', matchday: 'r32', stage: "נוקאאוט", dateText: `01/07/2026 | 19:00 (שעון ישראל)`, teamHome: { name: `אנגליה`, flagCode: 'gb-eng', color: '#FFFFFF', cards: { yellow: [], red: [] } }, teamAway: { name: `קונגו`, flagCode: 'cd', color: '#007A5E', cards: { yellow: [], red: [] } }, score: { prediction: '2 - 1', actual: '', accuracyClass: 'pending' }, probabilities: { home: 65, draw: 22, away: 13 }, matchRisk: 'Upset Alert', radarStats: { home: [80, 75, 70, 78, 82, 88], away: [68, 55, 60, 75, 85, 60] }, advancedStats: { home: { xG: '1.90', corners: 0 }, away: { xG: '0.95', corners: 0 } }, insight: { prediction: `תומאס טוכל הבטיח שאנגליה תיראה טוב יותר אחרי הופעה פושרת בשלב הבתים. קונגו הראתה אופי אדיר עם קאמבק מרשים, והיא תקשה מאוד על האנגלים עם פיזיות במרכז השדה.`, actual: `` }, goals: [] },
    'match81': { timeStatus: 'future', matchday: 'r32', stage: "נוקאאוט", dateText: `01/07/2026 | 23:00 (שעון ישראל)`, teamHome: { name: `בלגיה`, flagCode: 'be', color: '#E30613', cards: { yellow: [], red: [] } }, teamAway: { name: `סנגל`, flagCode: 'sn', color: '#00853F', cards: { yellow: [], red: [] } }, score: { prediction: '2 - 2', actual: '', accuracyClass: 'pending' }, probabilities: { home: 45, draw: 25, away: 30 }, matchRisk: 'Upset Alert', radarStats: { home: [85, 80, 75, 80, 75, 85], away: [75, 70, 70, 75, 90, 75] }, advancedStats: { home: { xG: '1.70', corners: 0 }, away: { xG: '1.50', corners: 0 } }, insight: { prediction: `משחק פתוח לחלוטין. בלגיה התקפית מאוד אך ההגנה שלה פגיעה מול העוצמה והמהירות של סנגל.`, actual: `` }, goals: [] },
    'match82': { timeStatus: 'future', matchday: 'r32', stage: "נוקאאוט", dateText: `02/07/2026 | 03:00 (שעון ישראל)`, teamHome: { name: `ארצות הברית`, flagCode: 'us', color: '#002868', cards: { yellow: [], red: [] } }, teamAway: { name: `בוסניה`, flagCode: 'ba', color: '#002F6C', cards: { yellow: [], red: [] } }, score: { prediction: '2 - 1', actual: '', accuracyClass: 'pending' }, probabilities: { home: 55, draw: 25, away: 20 }, matchRisk: 'Safe', radarStats: { home: [75, 70, 65, 80, 75, 75], away: [65, 55, 70, 65, 85, 60] }, advancedStats: { home: { xG: '1.60', corners: 0 }, away: { xG: '1.10', corners: 0 } }, insight: { prediction: `ארה"ב מול הקהל הביתי חייבת לעבור. בוסניה קשוחה באוויר ותנסה לעקוץ במצבים נייחים.`, actual: `` }, goals: [] },
    'match83': { timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `02/07/2026 | 22:00 (שעון ישראל)`, teamHome: { name: `ספרד`, flagCode: 'es', color: '#C60B1E', cards: { yellow: [], red: [] } }, teamAway: { name: `אוסטריה`, flagCode: 'at', color: '#EF3340', cards: { yellow: [], red: [] } }, score: { prediction: '2 - 0', actual: '3 - 0', accuracyClass: 'trend' }, probabilities: { home: 65, draw: 25, away: 10 }, matchRisk: 'Safe', radarStats: { home: [90, 92, 75, 85, 75, 88], away: [70, 65, 60, 75, 75, 65] }, advancedStats: { home: { xG: '2.10', corners: 0 }, away: { xG: '0.60', corners: 0 } }, insight: { prediction: `הטיקי-טאקה הספרדי אמור להתיש את הלחץ האוסטרי ולמצוא את הרשת במוקדם או במאוחר.`, actual: `התרסקות מפוארת של הלחץ האוסטרי. ספרד העבירה קליניקה של כדורגל חכם ומהיר וסגרה את הסיפור ב-90 דקות חלקות.` }, goals: [] },
    'match84': { timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `03/07/2026 | 02:00 (שעון ישראל)`, teamHome: { name: `פורטוגל`, flagCode: 'pt', color: '#E42518', cards: { yellow: [], red: [] } }, teamAway: { name: `קרואטיה`, flagCode: 'hr', color: '#FF0000', cards: { yellow: [], red: [] } }, score: { prediction: '1 - 1', actual: '2 - 1', accuracyClass: 'wrong' }, probabilities: { home: 40, draw: 35, away: 25 }, matchRisk: 'Draw Booster', radarStats: { home: [82, 78, 75, 80, 70, 85], away: [80, 82, 70, 85, 72, 80] }, advancedStats: { home: { xG: '1.20', corners: 0 }, away: { xG: '1.15', corners: 0 } }, insight: { prediction: `משחק טקטי ברמה הגבוהה ביותר. קרואטיה תשלוט במרכז המגרש, בעוד פורטוגל תחפש את הכישרון האישי. פוטנציאל גבוה להארכה ופנדלים.`, actual: `קרואטיה מסרבת למות? מסתבר שהפעם כן. פורטוגל הוכיחה שכוח האש שלה פשוט גדול מדי בשביל הקישור הקרואטי העייף והכריעה בזמן החוקי.` }, goals: [] },
    'match85': { timeStatus: 'past', matchday: 'r32', stage: "נוקאאוט", dateText: `03/07/2026 | 06:00 (שעון ישראל)`, teamHome: { name: `שווייץ`, flagCode: 'ch', color: '#FF0000', cards: { yellow: [], red: [] } }, teamAway: { name: `אלג'יריה`, flagCode: 'dz', color: '#006233', cards: { yellow: [], red: [] } }, score: { prediction: '1 - 0', actual: '1 - 0', accuracyClass: 'exact' }, probabilities: { home: 50, draw: 30, away: 20 }, matchRisk: 'Safe', radarStats: { home: [75, 70, 65, 75, 70, 75], away: [70, 65, 60, 70, 75, 65] }, advancedStats: { home: { xG: '1.40', corners: 0 }, away: { xG: '0.90', corners: 0 } }, insight: { prediction: `שווייץ בוגרת ומנוסה מאוד במשחקי נוקאאוט. אלג'יריה תנסה להפתיע אך השווייצרים פייבוריטים לעלות.`, actual: `משחק שווייצרי מכני, נטול אמוציות ונטול הארכות. השעון השווייצרי תיקתק ניצחון קטן ויעיל, בול למגמה של המודל.` }, goals: [] },
    'match86': { timeStatus: 'future', matchday: 'r32', stage: "נוקאאוט", dateText: `03/07/2026 | 21:00 (שעון ישראל)`, teamHome: { name: `אוסטרליה`, flagCode: 'au', color: '#FFCD00', cards: { yellow: [], red: [] } }, teamAway: { name: `מצרים`, flagCode: 'eg', color: '#CE1126', cards: { yellow: [], red: [] } }, score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' }, probabilities: { home: 35, draw: 35, away: 30 }, matchRisk: 'Draw Booster', radarStats: { home: [65, 60, 65, 75, 80, 60], away: [70, 65, 60, 70, 70, 70] }, advancedStats: { home: { xG: '1.05', corners: 0 }, away: { xG: '1.10', corners: 0 } }, insight: { prediction: `קרב שקול וקשוח. הפיזיות האוסטרלית מול הטכניקה המצרית. משחק שיכול להיות מוכרע בטעות בודדת.`, actual: `` }, goals: [] },
    'match87': { timeStatus: 'future', matchday: 'r32', stage: "נוקאאוט", dateText: `04/07/2026 | 01:00 (שעון ישראל)`, teamHome: { name: `ארגנטינה`, flagCode: 'ar', color: '#43A1D5', cards: { yellow: [], red: [] } }, teamAway: { name: `כף ורדה`, flagCode: 'cv', color: '#003893', cards: { yellow: [], red: [] } }, score: { prediction: '3 - 0', actual: '', accuracyClass: 'pending' }, probabilities: { home: 85, draw: 10, away: 5 }, matchRisk: 'Safe', radarStats: { home: [92, 88, 80, 95, 80, 95], away: [60, 50, 55, 65, 65, 55] }, advancedStats: { home: { xG: '2.80', corners: 0 }, away: { xG: '0.40', corners: 0 } }, insight: { prediction: `הסינדרלה מכף ורדה פוגשת את אלופת העולם. מסע הקסם כנראה יסתיים כאן מול מסי וחבריו.`, actual: `` }, goals: [] },
    'match88': { timeStatus: 'future', matchday: 'r32', stage: "נוקאאוט", dateText: `04/07/2026 | 04:30 (שעון ישראל)`, teamHome: { name: `קולומביה`, flagCode: 'co', color: '#FCD116', cards: { yellow: [], red: [] } }, teamAway: { name: `גאנה`, flagCode: 'gh', color: '#006B3F', cards: { yellow: [], red: [] } }, score: { prediction: '2 - 1', actual: '', accuracyClass: 'pending' }, probabilities: { home: 55, draw: 25, away: 20 }, matchRisk: 'Safe', radarStats: { home: [78, 70, 65, 75, 75, 75], away: [70, 65, 60, 70, 80, 65] }, advancedStats: { home: { xG: '1.60', corners: 0 }, away: { xG: '1.00', corners: 0 } }, insight: { prediction: `קולומביה מגיעה כפייבוריטית בזכות הכישרון ההתקפי, אך תצטרך להתמודד עם המהירות העצומה של גאנה.`, actual: `` }, goals: [] },
    
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
        { team1: { name: 'אוסטרליה', flag: 'au', score: '-', outcome: 'pending' }, team2: { name: 'מצרים', flag: 'eg', score: '-', outcome: 'pending' } },
        { team1: { name: 'ארגנטינה', flag: 'ar', score: '-', outcome: 'pending' }, team2: { name: 'כף ורדה', flag: 'cv', score: '-', outcome: 'pending' } },
        { team1: { name: 'קולומביה', flag: 'co', score: '-', outcome: 'pending' }, team2: { name: 'גאנה', flag: 'gh', score: '-', outcome: 'pending' } }
    ],
    roundOf16: [
        { team1: { name: 'פרגוואי', flag: 'py', score: '-', outcome: 'pending' }, team2: { name: 'צרפת', flag: 'fr', score: '-', outcome: 'pending' } },
        { team1: { name: 'קנדה', flag: 'ca', score: '-', outcome: 'pending' }, team2: { name: 'מרוקו', flag: 'ma', score: '-', outcome: 'pending' } },
        { team1: { name: 'ברזיל', flag: 'br', score: '-', outcome: 'pending' }, team2: { name: 'נורווגיה', flag: 'no', score: '-', outcome: 'pending' } },
        { team1: { name: 'מקסיקו', flag: 'mx', score: '-', outcome: 'pending' }, team2: { name: 'אנגליה', flag: 'gb-eng', score: '-', outcome: 'pending' } },
        { team1: { name: 'ארצות הברית', flag: 'us', score: '-', outcome: 'pending' }, team2: { name: 'בלגיה', flag: 'be', score: '-', outcome: 'pending' } },
        { team1: { name: 'ספרד', flag: 'es', score: '-', outcome: 'pending' }, team2: { name: 'פורטוגל', flag: 'pt', score: '-', outcome: 'pending' } },
        { team1: { name: 'מנצחת 86', flag: '', score: '-', outcome: 'pending' }, team2: { name: 'מנצחת 88', flag: '', score: '-', outcome: 'pending' } },
        { team1: { name: 'שווייץ', flag: 'ch', score: '-', outcome: 'pending' }, team2: { name: 'מנצחת 87', flag: '', score: '-', outcome: 'pending' } }
    ]
};