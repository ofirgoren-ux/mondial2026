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
        goals: [],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
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
        goals: [],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
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
        goals: [],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
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
        goals: [],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
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
        goals: [],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
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
        goals: [],
        squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },

    // ---- שאר משחקי מחזור 3 (טרם שוחקו) ----

    'match55': {
        timeStatus: 'past', matchday: 3, stage: 'E', dateText: `25/06/2026 | 23:00 (שעון ישראל)`,
        teamHome: { name: `קוראסאו`, flagCode: 'cw', color: '#002B7F', cards: { yellow: [], red: [] } },
        teamAway: { name: `חוף השנהב`, flagCode: 'ci', color: '#FF8200', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '0 - 2', accuracyClass: 'wrong' },
        probabilities: { home: 31, draw: 27, away: 42 }, matchRisk: 'Safe',
        radarStats: { home: [40, 47, 45, 40, 65, 10], away: [71, 60, 55, 71, 80, 30] },
        advancedStats: { home: { xG: '1.16', corners: 0, altitudeImpact: '' }, away: { xG: '1.39', corners: 0, altitudeImpact: '' } },
        insight: { prediction: `חוף השנהב מגיעה עם יתרון פיזי ואתלטי במרכז המגרש. אני מצפה שקוראסאו תשחק כדורגל ריאקטיבי, תצופף את רחבת ה-16, ותנסה לנצל איבודי כדור כדי לצאת להתקפות מתפרצות מסוכנות דרך האגפים.`, actual: `ניצחון סולידי ומרשים של הפילים. חוף השנהב השתמשה בעליונות הפיזית והטקטית שלה כדי לסגור את קוראסאו ולא נתנה לחלום הקריבי להתרומם.` },
        goals: [],
        squads: { home: { predicted: ['Eloy Room', 'Shurandy Sambo', 'Juriën Gaari', 'Roshon van Eijma', 'Sherel Floranus', 'Godfried Roemeratoe', 'Juninho Bacuna', 'Livano Comenencia', 'Jürgen Locadia', 'Leandro Bacuna', 'Jeremy Antonisse'], actual: [] }, away: { predicted: ['Yahia Fofana', 'Ousmane Diomande', 'Ghislain Konan', 'Jean Michaël Seri', 'Wilfried Singo', 'Seko Fofana', 'Odilon Kossounou', 'Franck Kessié', 'Ange-Yoan Bonny', 'Simon Adingra', 'Yan Diomande'], actual: [] } }
    },
    'match56': {
        timeStatus: 'past', matchday: 3, stage: 'E', dateText: `25/06/2026 | 23:00 (שעון ישראל)`,
        teamHome: { name: `אקוודור`, flagCode: 'ec', color: '#FFD100', cards: { yellow: [], red: [] } },
        teamAway: { name: `גרמניה`, flagCode: 'de', color: '#FFFFFF', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 1', actual: '2 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 21, draw: 26, away: 53 }, matchRisk: 'Upset Alert',
        radarStats: { home: [49, 60, 53, 49, 61, 23], away: [75, 33, 66, 75, 86, 50] },
        advancedStats: { home: { xG: '0.83', corners: 0, altitudeImpact: '' }, away: { xG: '1.52', corners: 0, altitudeImpact: '' } },
        insight: { prediction: `המכונה הגרמנית עולה לכאן כפייבוריטית מובהקת והיא צפויה לשלוט בכדור ביד רמה. אקוודור הפיזית תיאלץ להתמודד מול לחץ כבד ולחפש חמצן דרך כדורים ארוכים למויסס קאייסדו וההתקפה. המפתח של הגרמנים יהיה לפצח את ההגנה הדרום אמריקאית הצפופה בשלב מוקדם של המשחק.`, actual: `איזו סנסציה! אקוודור הגיעה ללא רגשי נחיתות, השתמשה באתלטיות האדירה שלה כדי לשתק את הקישור הגרמני, וגנבה ניצחון מדהים 2-1 שטורף את הקלפים בבית.` },
        goals: [],
        squads: { home: { predicted: ['Hernán Galíndez', 'Félix Torres', 'Piero Hincapié', 'Joel Ordóñez', 'Jordy Alcívar', 'Willian Pacho', 'Pervis Estupiñán', 'Anthony Valencia', 'John Yeboah', 'Kendry Páez', 'Kevin Rodríguez'], actual: [] }, away: { predicted: ['Manuel Neuer', 'Antonio Rüdiger', 'Waldemar Anton', 'Jonathan Tah', 'Aleksandar Pavlović', 'Joshua Kimmich', 'Kai Havertz', 'Leon Goretzka', 'Jamie Leweling', 'Jamal Musiala', 'Nick Woltemade'], actual: [] } }
    },
    'match57': {
        timeStatus: 'past', matchday: 3, stage: 'F', dateText: `26/06/2026 | 02:00 (שעון ישראל)`,
        teamHome: { name: `יפן`, flagCode: 'jp', color: '#000555', cards: { yellow: [], red: [] } },
        teamAway: { name: `שוודיה`, flagCode: 'se', color: '#FFF200', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 0', actual: '1 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 52, draw: 26, away: 21 }, matchRisk: 'Safe',
        radarStats: { home: [80, 67, 55, 80, 68, 50], away: [46, 7, 52, 46, 75, 45] },
        advancedStats: { home: { xG: '1.49', corners: 0, altitudeImpact: '' }, away: { xG: '0.84', corners: 0, altitudeImpact: '' } },
        insight: { prediction: `הטכניקה, המסירות הקצרות והזריזות של יפן נותנים לה את היתרון כאן. השוודים ינסו להשתמש בפיזיות האירופאית המוכרת שלהם כדי לעצור את שטף המשחק היפני. אם יפן תצליח לשמור על קצב גבוה ולהתיש את השוודים, היא תאסוף כאן 3 נקודות יקרות.`, actual: `התנגשות הסגנונות הקלאסית הסתיימה בחלוקת נקודות. הזריזות היפנית מול העוצמה השוודית סיפקו משחק מרתק, כשאף אחת מהנבחרות לא הצליחה להכריע.` },
        goals: [],
        squads: { home: { predicted: ['Zion Suzuki', 'Yukinari Sugawara', 'Shōgo Taniguchi', 'Kō Itakura', 'Yūto Nagatomo', 'Wataru Endo', 'Ao Tanaka', 'Takefusa Kubo', 'Keisuke Gotō', 'Ritsu Dōan', 'Daizen Maeda'], actual: [] }, away: { predicted: ['Jacob Widell Zetterström', 'Gustaf Lagerbielke', 'Victor Lindelöf', 'Isak Hien', 'Gabriel Gudmundsson', 'Herman Johansson', 'Lucas Bergvall', 'Daniel Svensson', 'Alexander Isak', 'Benjamin Nygren', 'Anthony Elanga'], actual: [] } }
    },
    'match58': {
        timeStatus: 'past', matchday: 3, stage: 'F', dateText: `26/06/2026 | 02:00 (שעון ישראל)`,
        teamHome: { name: `תוניסיה`, flagCode: 'tn', color: '#E70013', cards: { yellow: [], red: [] } },
        teamAway: { name: `הולנד`, flagCode: 'nl', color: '#F36C21', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 1', actual: '1 - 3', accuracyClass: 'trend' },
        probabilities: { home: 12, draw: 20, away: 67 }, matchRisk: 'Upset Alert',
        radarStats: { home: [37, 20, 47, 37, 78, 23], away: [71, 33, 59, 71, 70, 47] },
        advancedStats: { home: { xG: '0.70', corners: 0, altitudeImpact: '' }, away: { xG: '1.98', corners: 0, altitudeImpact: '' } },
        insight: { prediction: `פערי האיכות פה גדולים מאוד. הולנד היא פייבוריטית מובהקת והיא הולכת להכתיב את הקצב לאורך כל 90 הדקות ולשבת על השער. תוניסיה תנסה להגן בחירוף נפש ולגנוב שער במצב נייח או כדור קרן, אבל נבחרת האורנג' אמורה לחגוג כאן ולסגור את הסיפור מוקדם.`, actual: `האורנג' עשו את העבודה. תוניסיה ניסתה לבנות חומה ולהקשות, אבל הכישרון ההולנדי בחלק הקדמי הצליח לפרוץ את המנעול פעם אחר פעם בדרך ל-3-1 משכנע.` },
        goals: [],
        squads: { home: { predicted: ['Aymen Dahmen', 'Yassine Meriah', 'Montassar Talbi', 'Ellyes Skhiri', 'Aïssa Laïdouni', 'Hannibal Mejbri', 'Anis Ben Slimane', 'Naïm Sliti', 'Youssef Msakni', 'Wahbi Khazri', 'Seifeddine Jaziri'], actual: [] }, away: { predicted: ['Bart Verbruggen', 'Lutsharel Geertruida', 'Marten de Roon', 'Virgil van Dijk', 'Nathan Aké', 'Jan Paul van Hecke', 'Justin Kluivert', 'Ryan Gravenberch', 'Wout Weghorst', 'Memphis Depay', 'Cody Gakpo'], actual: [] } }
    },
    'match59': {
        timeStatus: 'past', matchday: 3, stage: 'D', dateText: `26/06/2026 | 05:00 (שעון ישראל)`,
        teamHome: { name: `טורקיה`, flagCode: 'tr', color: '#E30A17', cards: { yellow: [], red: [] } },
        teamAway: { name: `ארצות הברית`, flagCode: 'us', color: '#002868', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 1', actual: '3 - 2', accuracyClass: 'wrong' },
        probabilities: { home: 21, draw: 25, away: 54 }, matchRisk: 'Upset Alert',
        radarStats: { home: [69, 33, 54, 69, 91, 20], away: [57, 13, 55, 57, 83, 40] },
        advancedStats: { home: { xG: '0.88', corners: 0, altitudeImpact: '' }, away: { xG: '1.57', corners: 0, altitudeImpact: '' } },
        insight: { prediction: `האמריקאים מציגים נבחרת מהירה, מאומנת טקטית ומסוכנת מאוד ביציאות קדימה עם פוליסיק וריינה. טורקיה תלויה מאוד באנרגיה והטירוף שלה, אבל היא עלולה להתקשות מול העוצמות הפיזיות של ארה"ב. זה משחק מפתח שבו המהירות באגפים כנראה תכריע.`, actual: `טירוף מערכות מוחלט! משחק אמוציונלי וקצבי שבו טורקיה הצליחה לגבור על האמריקאים במשחק של 5 שערים. הלהט הטורקי ניצח הפעם את המשמעת של ארה״ב.` },
        goals: [],
        squads: { home: { predicted: ['Mert Günok', 'Zeki Çelik', 'Merih Demiral', 'Çağlar Söyüncü', 'Ferdi Kadıoğlu', 'Salih Özcan', 'Hakan Çalhanoğlu', 'Orkun Kökçü', 'Arda Güler', 'Kerem Aktürkoğlu', 'Cenk Tosun'], actual: [] }, away: { predicted: ['Matt Turner', 'Sergiño Dest', 'Chris Richards', 'Tyler Adams', 'Antonee Robinson', 'Auston Trusty', 'Giovanni Reyna', 'Weston McKennie', 'Ricardo Pepi', 'Christian Pulisic', 'Brenden Aaronson'], actual: [] } }
    },
    'match60': {
        timeStatus: 'past', matchday: 3, stage: 'D', dateText: `26/06/2026 | 05:00 (שעון ישראל)`,
        teamHome: { name: `פרגוואי`, flagCode: 'py', color: '#D52B1E', cards: { yellow: [], red: [] } },
        teamAway: { name: `אוסטרליה`, flagCode: 'au', color: '#FFCD00', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '0 - 0', accuracyClass: 'trend' },
        probabilities: { home: 28, draw: 27, away: 45 }, matchRisk: 'Upset Alert',
        radarStats: { home: [53, 47, 46, 53, 75, 10], away: [62, 40, 53, 62, 63, 37] },
        advancedStats: { home: { xG: '1.03', corners: 0, altitudeImpact: '' }, away: { xG: '1.37', corners: 0, altitudeImpact: '' } },
        insight: { prediction: `קרב שקול, צמוד וסופר-פיזי בין שתי נבחרות קשוחות שלא מוותרות על אף כדור עבוד. פרגוואי מביאה את האגרסיביות הדרום-אמריקאית המוכרת, בעוד שאוסטרליה תנסה לנצל כדורים חופשיים, הגבהות, ולהכות דרך האוויר. מי שתמצמץ ראשונה או תאבד ריכוז בהגנה, תשלם ביוקר.`, actual: `קרב החפירות המצופה הסתיים ללא שערים. שתי הקבוצות הגיעו במטרה קודם כל לא לספוג, המשחק היה קשוח ואגרסיבי במרכז השדה, והתוצאה משקפת את מה שקרה על הדשא.` },
        goals: [],
        squads: { home: { predicted: ['Gatito Fernández', 'Gustavo Velázquez', 'Omar Alderete', 'Juan José Cáceres', 'Fabián Balbuena', 'Júnior Alonso', 'Ramón Sosa', 'Diego Gómez', 'Antonio Sanabria', 'Miguel Almirón', 'Maurício'], actual: [] }, away: { predicted: ['Mathew Ryan', 'Miloš Degenek', 'Alessandro Circati', 'Jacob Italiano', 'Jordan Bos', 'Jason Geria', 'Mathew Leckie', 'Connor Metcalfe', 'Mohamed Touré', 'Ajdin Hrustic', 'Awer Mabil'], actual: [] } }
    },
    'match61': {
        timeStatus: 'past', matchday: 3, stage: 'I', dateText: `26/06/2026 | 16:00 (שעון ישראל)`,
        teamHome: { name: `נורבגיה`, flagCode: 'no', color: '#C8102E', cards: { yellow: [], red: [] } },
        teamAway: { name: `צרפת`, flagCode: 'fr', color: '#002654', cards: { yellow: ['card'], red: [] } },
        score: { prediction: '1 - 2', actual: '1 - 4', accuracyClass: 'trend' },
        probabilities: { home: 25, draw: 30, away: 45 }, matchRisk: 'Safe',
        radarStats: { home: [68, 55, 75, 60, 85, 70], away: [90, 88, 80, 85, 78, 92] },
        advancedStats: { home: { xG: '1.15', corners: 3, altitudeImpact: '' }, away: { xG: '2.85', corners: 7, altitudeImpact: '' } },
        insight: { prediction: `התנגשות ענקים בין האלנד לאמבפה.`, actual: `הטריקולור פשוט רקדו על המגרש. צרפת הוכיחה שוב את עומק הסגל הבלתי נגמר שלה, ניטרלה לחלוטין את משחק המעברים הנורווגי, ופירקה את הגנת היריבה בדרך ל-4-1 מוחץ שמעביר מסר לכל הטורניר.` },
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
        insight: { prediction: `העוצמה הפיזית של סנגל צפויה להכריע.`, actual: `דריסה אפריקאית מוחלטת שלא השאירה מקום לספק. סנגל השתלטה על מרכז השדה מהשנייה הראשונה, תרגמה את היתרון הפיזי לשליטה אבסולוטית ברחבה, וסגרה את הסיפור עם חמישייה מהדהדת לרשת העיראקית.` },
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
        insight: { prediction: `משחק טקטי עצבני.`, actual: `קרב טקטי סוער שהוכרע בפרטים הקטנים. ספרד הצליחה להכתיב את הקצב דרך הנעת כדור סבלנית, והצליחה לפצח את ההגנה הדרום אמריקאית הקשוחה עם שער בודד ויקר שהעניק לה שלוש נקודות קריטיות.` },
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
        insight: { prediction: `שתי נבחרות מאוזנות שנלחמות על נקודות.`, actual: `היסטוריה מטורפת ואופי אדיר של כף ורדה. למרות משחק אגרסיבי ולחץ מצד הסעודים, הנבחרת מאפריקה עמדה בפרץ, הפגינה משמעת טקטית מרשימה והבטיחה תיקו הירואי שממשיך את מסע הקסם שלה.` },
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
        insight: { prediction: `פערי רמות קיצוניים על הנייר.`, actual: `בלי רחמים ובלי לעצור. השדים האדומים הציגו קונצרט התקפי יעיל, תרגמו את פערי האיכות התהומיים לחגיגת שערים, והוכיחו כי הם לא מתכוונים להוריד את הרגל מהגז בשלב הבתים.` },
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
        insight: { prediction: `קרב ישיר ועצבני על הכרטיס לשלב הבא.`, actual: `משחק מורט עצבים ששמר אותנו במתח עד לשריקת הסיום. היתרון הטכני של מצרים במחצית הראשונה נענה בלחימה איראנית עיקשת בשנייה, כשהחלוקה בנקודות משקפת מאבק שקול שבו שתי הנבחרות סירבו לוותר.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match67': {
        timeStatus: 'past', matchday: 3, stage: 'L', dateText: `28/06/2026 | 00:00 (שעון ישראל)`,
        teamHome: { name: `פנמה`, flagCode: 'pa', color: '#DA291C', cards: { yellow: [], red: [] } },
        teamAway: { name: `אנגליה`, flagCode: 'gb-eng', color: '#FFFFFF', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 2', actual: '0 - 2', accuracyClass: 'exact' },
        probabilities: { home: 6, draw: 13, away: 81 }, matchRisk: 'Upset Alert',
        radarStats: { home: [46, 20, 47, 46, 68, 17], away: [77, 73, 63, 77, 83, 37] },
        advancedStats: { home: { xG: '0.59', corners: 2, altitudeImpact: '' }, away: { xG: '2.61', corners: 6, altitudeImpact: '' } },
        insight: { prediction: `משחק חד צדדי.`, actual: `יעילות אנגלית קלאסית במיטבה. נבחרת שלושת האריות לא נבהלה מהצפיפות של פנמה, שלטה בכדור בסבלנות מרובה, ועקצה פעמיים במצבים קריטיים כדי להבטיח את הניצחון ללא טיפת זיעה מיותרת.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match68': {
        timeStatus: 'past', matchday: 3, stage: 'L', dateText: `28/06/2026 | 00:00 (שעון ישראל)`,
        teamHome: { name: `קרואטיה`, flagCode: 'hr', color: '#FF0000', cards: { yellow: ['card'], red: [] } },
        teamAway: { name: `גאנה`, flagCode: 'gh', color: '#006B3F', cards: { yellow: ['card'], red: [] } },
        score: { prediction: '1 - 0', actual: '2 - 1', accuracyClass: 'trend' },
        probabilities: { home: 59, draw: 24, away: 17 }, matchRisk: 'Safe',
        radarStats: { home: [69, 40, 58, 69, 87, 40], away: [53, 53, 51, 53, 65, 25] },
        advancedStats: { home: { xG: '1.69', corners: 5, altitudeImpact: '' }, away: { xG: '0.79', corners: 3, altitudeImpact: '' } },
        insight: { prediction: `הקרואטים מנוסים, שקולים ואשפי שליטה.`, actual: `קרואטיה הוכיחה שוב שאין תחליף לניסיון. למרות המהירות והאתלטיות של גאנה שניסתה להפתיע במתפרצות, ניהול המשחק החכם של הקרואטים במרכז השדה הכריע את ההתמודדות והבטיח להם את הניצחון.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match69': {
        timeStatus: 'past', matchday: 3, stage: 'K', dateText: `28/06/2026 | 02:30 (שעון ישראל)`,
        teamHome: { name: `קולומביה`, flagCode: 'co', color: '#FCD116', cards: { yellow: ['card', 'card'], red: [] } },
        teamAway: { name: `פורטוגל`, flagCode: 'pt', color: '#E42518', cards: { yellow: ['card'], red: [] } },
        score: { prediction: '0 - 1', actual: '0 - 0', accuracyClass: 'wrong' },
        probabilities: { home: 23, draw: 26, away: 51 }, matchRisk: 'Upset Alert',
        radarStats: { home: [69, 47, 55, 69, 63, 17], away: [75, 33, 64, 75, 72, 45] },
        advancedStats: { home: { xG: '0.89', corners: 4, altitudeImpact: '' }, away: { xG: '1.49', corners: 5, altitudeImpact: '' } },
        insight: { prediction: `משחק סופר-מעניין.`, actual: `קרב מוחות ברמה הגבוהה ביותר שהסתיים ללא הכרעה. שתי הנבחרות גילו כבוד רב זו לזו, התמקדו בסגירת שטחים ונטרול הכלים ההתקפיים, מה שהוביל לתיקו מאופס, אך סופר-איכותי מבחינה טקטית.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match70': {
        timeStatus: 'past', matchday: 3, stage: 'K', dateText: `28/06/2026 | 02:30 (שעון ישראל)`,
        teamHome: { name: `קונגו`, flagCode: 'cg', color: '#007A5E', cards: { yellow: ['card'], red: [] } },
        teamAway: { name: `אוזבקיסטן`, flagCode: 'uz', color: '#0099B5', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '3 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 38, draw: 27, away: 35 }, matchRisk: 'Safe',
        radarStats: { home: [62, 60, 49, 62, 69, 22], away: [53, 47, 48, 53, 64, 15] },
        advancedStats: { home: { xG: '1.29', corners: 5, altitudeImpact: '' }, away: { xG: '1.24', corners: 3, altitudeImpact: '' } },
        insight: { prediction: `קרב שקול לחלוטין.`, actual: `איזו תצוגת אופי של קונגו! לאחר שנקלעה לפיגור, הנבחרת האפריקאית סירבה להישבר, העלתה הילוך במחצית השנייה, וניצלה את העייפות האוזבקית כדי לרשום קאמבק אדיר עם שלישייה מרשימה.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match71': {
        timeStatus: 'past', matchday: 3, stage: 'J', dateText: `28/06/2026 | 05:00 (שעון ישראל)`,
        teamHome: { name: `אלג'יריה`, flagCode: 'dz', color: '#006233', cards: { yellow: ['card'], red: [] } },
        teamAway: { name: `אוסטריה`, flagCode: 'at', color: '#EF3340', cards: { yellow: ['card', 'card'], red: [] } },
        score: { prediction: '0 - 1', actual: '3 - 3', accuracyClass: 'wrong' },
        probabilities: { home: 28, draw: 28, away: 44 }, matchRisk: 'Upset Alert',
        radarStats: { home: [73, 60, 54, 73, 73, 13], away: [71, 40, 53, 71, 59, 37] },
        advancedStats: { home: { xG: '1.98', corners: 6, altitudeImpact: '' }, away: { xG: '1.81', corners: 5, altitudeImpact: '' } },
        insight: { prediction: `האוסטרים מגיעים כקבוצה מאומנת.`, actual: `משחק משוגע, פתוח ולחלוטין נטול הגנות. אלג'יריה ואוסטריה סיפקו לנו את אחד המשחקים המרתקים של הטורניר, שבו המומנטום עבר מצד לצד עד לחלוקת נקודות ב-3-3 סופר דרמטי.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    },
    'match72': {
        timeStatus: 'past', matchday: 3, stage: 'J', dateText: `28/06/2026 | 05:00 (שעון ישראל)`,
        teamHome: { name: `ירדן`, flagCode: 'jo', color: '#000000', cards: { yellow: [], red: [] } },
        teamAway: { name: `ארגנטינה`, flagCode: 'ar', color: '#43A1D5', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 2', actual: '1 - 3', accuracyClass: 'trend' },
        probabilities: { home: 7, draw: 14, away: 79 }, matchRisk: 'Upset Alert',
        radarStats: { home: [40, 27, 46, 40, 80, 12], away: [89, 73, 65, 89, 55, 25] },
        advancedStats: { home: { xG: '0.59', corners: 1, altitudeImpact: '' }, away: { xG: '3.10', corners: 8, altitudeImpact: '' } },
        insight: { prediction: `הבדלי איכות אדירים.`, actual: `האלביסלסטה מטיילים ללא מאמץ מיוחד. ארגנטינה נהנתה מעליונות מוחלטת, שברה את הבונקר הירדני בשלב מוקדם, וסגרה את הסיפור עם כדורגל שוטף ומרשים ששולח מסר ברור להמשך הטורניר.` },
        goals: [], squads: { home: { predicted: [], actual: [] }, away: { predicted: [], actual: [] } }
    }
};
Object.assign(window.matchDatabase, matchday3Database);