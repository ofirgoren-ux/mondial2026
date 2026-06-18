// קובץ נתונים: מחזור 2 (Matchday 2)
// מכיל את משחקי ה-16 עד ה-19 ביוני 2026

const matchday2Database = {
    // --- משחקי עבר שכבר שוחקו במחזור 2 (16-17 ביוני) ---
    'match2_1': {
        timeStatus: 'past', matchday: 2, stage: 'A', dateText: "בית א' | 16 ביוני",
        teamHome: { name: 'מקסיקו', flagCode: 'mx', color: '#006341', cards: { yellow: ["חורחה סאנצ'ז (41')"], red: [] } },
        teamAway: { name: 'קוריאה הדרומית', flagCode: 'kr', color: '#C60C30', cards: { yellow: ["קלין (12')"], red: [] } },
        score: { prediction: '1 - 1', actual: '0 - 0', accuracyClass: 'trend' },
        probabilities: { home: 35, draw: 40, away: 30 }, matchRisk: 'Draw Booster',
        radarStats: { home: [75, 70, 65, 75, 70, 80], away: [70, 65, 60, 85, 80, 75] },
        advancedStats: { home: { xG: 1.12, restDays: 7, altitudeImpact: 'מארחת / רגיל' }, away: { xG: 0.95, restDays: 5, altitudeImpact: 'רגיל' } },
        insight: { prediction: "בוסטר תיקו קלאסי. שתי הנבחרות יפחדו להפסיד ויסגרו את המשחק.", actual: "פגיעה במגמה. בונקר טקטי של שני הצדדים הוביל ל-0:0 משמם." },
        goals: []
    },
    'match2_2': {
        timeStatus: 'past', matchday: 2, stage: 'A', dateText: "בית א' | 16 ביוני",
        teamHome: { name: 'דרום אפריקה', flagCode: 'za', color: '#FFC425', cards: { yellow: [], red: [] } },
        teamAway: { name: 'צ\'כיה', flagCode: 'cz', color: '#11457E', cards: { yellow: ["הולש (22')", "צ'ובאל (67')"], red: [] } },
        score: { prediction: '1 - 2', actual: '1 - 3', accuracyClass: 'trend' },
        probabilities: { home: 20, draw: 30, away: 50 }, matchRisk: 'Safe',
        radarStats: { home: [60, 50, 65, 70, 75, 30], away: [80, 65, 75, 75, 85, 75] },
        advancedStats: { home: { xG: 0.82, restDays: 7, altitudeImpact: 'רגיל' }, away: { xG: 2.45, restDays: 5, altitudeImpact: 'רגיל' } },
        insight: { prediction: "צ'כיה חייבת ניצחון ותנצל את הפיזיות שלה במרכז השדה.", actual: "פגיעה במגמה. הצ'כים שלטו לחלוטין בקצב וסגרו סיפור עם שלישייה קלילה." },
        goals: [{ team: 'צ\'כיה', player: "פטריק שיק", minute: "14'" }, { team: 'צ\'כיה', player: "תומאש סוצ'ק", minute: "38'" }, { team: 'דרום אפריקה', player: "פרסי טאו", minute: "55'" }, { team: 'צ\'כיה', player: "אדם הלוז'ק", minute: "82'" }]
    },
    'match2_3': {
        timeStatus: 'past', matchday: 2, stage: 'B', dateText: "בית ב' | 17 ביוני",
        teamHome: { name: 'קטר', flagCode: 'qa', color: '#8A1538', cards: { yellow: ["אל-היידוס (55')"], red: [] } },
        teamAway: { name: 'קנדה', flagCode: 'ca', color: '#FF0000', cards: { yellow: ["ג'ונסטון (31')"], red: [] } },
        score: { prediction: '0 - 2', actual: '0 - 2', accuracyClass: 'exact' },
        probabilities: { home: 15, draw: 25, away: 60 }, matchRisk: 'Safe',
        radarStats: { home: [55, 45, 50, 75, 65, 10], away: [80, 75, 65, 80, 85, 75] },
        advancedStats: { home: { xG: 0.42, restDays: 7, altitudeImpact: 'רגיל' }, away: { xG: 2.15, restDays: 5, altitudeImpact: 'מארחת משותפת' } },
        insight: { prediction: "קנדה מהירה ועדיפה בהרבה. המארחת לא תעמוד בקצב המעברים שלה.", actual: "פגיעה בול! דייוויס חרך את האגף ובישל פעמיים, בדיוק כפי שחזינו." },
        goals: [{ team: 'קנדה', player: "ג'ונתן דייוויד", minute: "22'" }, { team: 'קנדה', player: "קייל לארין", minute: "61'" }]
    },

    // --- משחקים עתידיים (שוחקו/משוחקים ב-18-19 ביוני - טרום שריקה במודל) ---
    'match2_4': {
        timeStatus: 'future', matchday: 2, stage: 'B', dateText: "בית ב' | 18 ביוני",
        teamHome: { name: 'שוויץ', flagCode: 'ch', color: '#FF0000', cards: { yellow: [], red: [] } },
        teamAway: { name: 'בוסניה והרצגובינה', flagCode: 'ba', color: '#002F6C', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 55, draw: 28, away: 17 }, matchRisk: 'Safe',
        radarStats: { home: [82, 75, 70, 80, 75, 80], away: [70, 60, 75, 75, 80, 65] },
        advancedStats: { home: { xG: '1.85 (צפי)', restDays: 8, altitudeImpact: 'אופטימלי' }, away: { xG: '0.90 (צפי)', restDays: 6, altitudeImpact: 'רגיל' } },
        insight: { prediction: "המשמעת הטקטית של שוויץ תנצח את המשחק הזה במרכז השדה, אך דז'קו תמיד מסוכן בכדורי גובה.", actual: "" },
        goals: []
    },
    'match2_5': {
        timeStatus: 'future', matchday: 2, stage: 'C', dateText: "בית ג' | 19 ביוני",
        teamHome: { name: 'ברזיל', flagCode: 'br', color: '#FFD700', cards: { yellow: [], red: [] } },
        teamAway: { name: 'האיטי', flagCode: 'ht', color: '#00209F', cards: { yellow: [], red: [] } },
        score: { prediction: '4 - 0', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 90, draw: 8, away: 2 }, matchRisk: 'Safe',
        radarStats: { home: [95, 85, 75, 80, 75, 95], away: [35, 30, 50, 40, 80, 5] },
        advancedStats: { home: { xG: '3.60 (צפי)', restDays: 8, altitudeImpact: 'אופטימלי' }, away: { xG: '0.20 (צפי)', restDays: 8, altitudeImpact: 'קשה' } },
        insight: { prediction: "משחק חד צדדי לחלוטין. הסמבה הברזילאית צפויה להתפוצץ אחרי התיקו המאכזב במחזור הראשון.", actual: "" },
        goals: []
    },
    'match2_6': {
        timeStatus: 'future', matchday: 2, stage: 'C', dateText: "בית ג' | 19 ביוני",
        teamHome: { name: 'מרוקו', flagCode: 'ma', color: '#FF3333', cards: { yellow: [], red: [] } },
        teamAway: { name: 'סקוטלנד', flagCode: 'gb-sct', color: '#005EB8', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 38, draw: 38, away: 24 }, matchRisk: 'Draw Booster',
        radarStats: { home: [78, 55, 80, 90, 90, 75], away: [80, 65, 85, 75, 75, 70] },
        advancedStats: { home: { xG: '1.20 (צפי)', restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: '1.10 (צפי)', restDays: 8, altitudeImpact: 'רגיל' } },
        insight: { prediction: "בוסטר תיקו פעיל! שתי נבחרות סופר קשוחות והגנתיות. המשחק יתנהל בעיקר על כדורים ארוכים ומאבקי פיזיות.", actual: "" },
        goals: []
    }
};

// מיזוג אוטומטי לתוך מסד הנתונים הראשי אם הוא קיים
if (typeof matchDatabase !== 'undefined') {
    Object.assign(matchDatabase, matchday2Database);
}