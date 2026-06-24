window.matchDatabase = window.matchDatabase || {};
const matchday3Database = {
    'match45': {
        timeStatus: 'future', matchday: 3, stage: "א'", dateText: `2026-06-24 | 19:00 UTC-6`,
        teamHome: { name: `צ'כיה`, flagCode: 'cz', color: '#ED1B24', cards: { yellow: [], red: [] } },
        teamAway: { name: `מקסיקו`, flagCode: 'mx', color: '#006341', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 22, draw: 32, away: 46 }, matchRisk: 'Safe',
        radarStats: { home: [57, 40, 48, 57, 78, 27], away: [64, 60, 57, 64, 56, 30] },
        advancedStats: { home: { xG: '0.84', corners: 0, altitudeImpact: '' }, away: { xG: '1.77', corners: 0, altitudeImpact: '' } },
        insight: { prediction: `על הנייר: הסתברות פואסון חזתה 0.84 שערים לצ'כיה מול 1.77 למקסיקו.`, actual: `מקסיקו מגיעה כפייבוריטית ברורה למפגש הזה (עם xG מחושב של 1.77), אך צ'כיה תנסה לצופף את מרכז השדה, להאט את הקצב ולחפש עקיצה במתפרצות.` },
        goals: [],
        squads: { home: { predicted: [`Matěj Kovář`, `David Zima`, `Tomáš Holeš`, `Robin Hranáč`, `Ladislav Krejčí`, `Tomáš Souček`, `Alex Král`, `Antonín Barák`, `Pavel Šulc`, `Patrik Schick`, `Jan Kuchta`], actual: [] }, away: { predicted: [`Raúl Rangel`, `Jorge Sánchez`, `César Montes`, `Edson Álvarez`, `Johan Vásquez`, `Érik Lira`, `Luis Romo`, `Álvaro Fidalgo`, `Raúl Jiménez`, `Alexis Vega`, `Santiago Giménez`], actual: [] } }
    },
    'match46': {
        timeStatus: 'future', matchday: 3, stage: "א'", dateText: `2026-06-24 | 19:00 UTC-6`,
        teamHome: { name: `דרום אפריקה`, flagCode: 'za', color: '#007749', cards: { yellow: [], red: [] } },
        teamAway: { name: `קוריאה הדרומית`, flagCode: 'kr', color: '#C60C30', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 27, draw: 32, away: 41 }, matchRisk: 'Draw Booster',
        radarStats: { home: [46, 27, 49, 46, 66, 27], away: [62, 53, 56, 62, 66, 47] },
        advancedStats: { home: { xG: '0.96', corners: 0, altitudeImpact: '' }, away: { xG: '1.48', corners: 0, altitudeImpact: '' } },
        insight: { prediction: `על הנייר: הסתברות פואסון חזתה 0.96 שערים לדרום אפריקה מול 1.48 לקוריאה הדרומית.`, actual: `קוריאה הדרומית מגיעה כפייבוריטית ברורה למפגש הזה (עם xG מחושב של 1.48), אך דרום אפריקה תנסה לצופף את מרכז השדה, להאט את הקצב ולחפש עקיצה במתפרצות.` },
        goals: [],
        squads: { home: { predicted: [`Ronwen Williams`, `Siyanda Xulu`, `Rushine De Reuck`, `Thabang Monare`, `Aubrey Modiba`, `Teboho Mokoena`, `Percy Tau`, `Zakhele Lepasa`, `Themba Zwane`, `Lyle Foster`, `Mihlali Mayambela`], actual: [] }, away: { predicted: [`Kim Seung-gyu`, `Kim Min-jae`, `Kim Young-gwon`, `Kim Jin-su`, `Hwang In-beom`, `Lee Jae-sung`, `Jeong Woo-yeong`, `Son Heung-min`, `Hwang Hee-chan`, `Cho Gue-sung`, `Lee Kang-in`], actual: [] } }
    }
};
Object.assign(window.matchDatabase, matchday3Database);
