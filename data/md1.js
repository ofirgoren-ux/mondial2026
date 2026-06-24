window.matchDatabase = window.matchDatabase || {};
const matchday1Database = {
    'match1': {
        timeStatus: 'past', matchday: 1, stage: "א'", dateText: `2026-06-11 | 13:00 UTC-6`,
        teamHome: { name: `מקסיקו`, flagCode: 'mx', color: '#006341', cards: { yellow: [`אדסון אלברז (33')`], red: [] } },
        teamAway: { name: `דרום אפריקה`, flagCode: 'za', color: '#FFC425', cards: { yellow: [`מוקואנה (22')`, `טאו (78')`], red: [`סיתול (89')`] } },
        score: { prediction: '2 - 0', actual: '2 - 0', accuracyClass: 'exact' },
        probabilities: { home: 65, draw: 22, away: 13 }, matchRisk: 'Safe',
        radarStats: { home: [80, 75, 60, 70, 65, 70], away: [65, 45, 60, 85, 80, 20] },
        advancedStats: { home: { xG: '1.82', corners: 6, altitudeImpact: '' }, away: { xG: '0.82', corners: 3, altitudeImpact: '' } },
        insight: { prediction: `על הנייר: הסתברות פואסון חזתה 1.82 שערים למקסיקו מול 0.82 לדרום אפריקה.`, actual: `ניצחון סולידי, טקטי ומרשים של מקסיקו. היא הכתיבה את הקצב, החזיקה בכדור 62% מהזמן, וניצלה את יתרון האיכות שלה כדי להכריע את המשחק מול דרום אפריקה.` },
        goals: [{ team: `מקסיקו`, player: `Julián Quiñones`, minute: `9'` }, { team: `מקסיקו`, player: `Raúl Jiménez`, minute: `67'` }],
        squads: { home: { predicted: [`Raúl Rangel`, `Jorge Sánchez`, `César Montes`, `Edson Álvarez`, `Johan Vásquez`, `Érik Lira`, `Luis Romo`, `Álvaro Fidalgo`, `Raúl Jiménez`, `Alexis Vega`, `Santiago Giménez`], actual: [`Raúl Rangel`, `Jorge Sánchez`, `César Montes`, `Edson Álvarez`, `Johan Vásquez`, `Érik Lira`, `Luis Romo`, `Álvaro Fidalgo`, `Raúl Jiménez`, `Alexis Vega`, `Santiago Giménez`] }, away: { predicted: [`Ronwen Williams`, `Siyanda Xulu`, `Rushine De Reuck`, `Thabang Monare`, `Aubrey Modiba`, `Teboho Mokoena`, `Percy Tau`, `Zakhele Lepasa`, `Themba Zwane`, `Lyle Foster`, `Mihlali Mayambela`], actual: [`Ronwen Williams`, `Siyanda Xulu`, `Rushine De Reuck`, `Thabang Monare`, `Aubrey Modiba`, `Teboho Mokoena`, `Percy Tau`, `Zakhele Lepasa`, `Themba Zwane`, `Lyle Foster`, `Mihlali Mayambela`] } }
    },
    'match2': {
        timeStatus: 'past', matchday: 1, stage: "א'", dateText: `2026-06-11 | 20:00 UTC-6`,
        teamHome: { name: `קוריאה הדרומית`, flagCode: 'kr', color: '#C60C30', cards: { yellow: [], red: [] } },
        teamAway: { name: `צ'כיה`, flagCode: 'cz', color: '#11457E', cards: { yellow: [`תומאש סוצ'ק (55')`], red: [] } },
        score: { prediction: '1 - 1', actual: '2 - 1', accuracyClass: 'trend' },
        probabilities: { home: 38, draw: 36, away: 26 }, matchRisk: 'Safe',
        radarStats: { home: [62, 53, 56, 62, 66, 47], away: [57, 40, 48, 57, 78, 27] },
        advancedStats: { home: { xG: '1.44', corners: 4, altitudeImpact: '' }, away: { xG: '0.98', corners: 5, altitudeImpact: '' } },
        insight: { prediction: `על הנייר: הסתברות פואסון חזתה 1.44 שערים לקוריאה הדרומית מול 0.98 לצ'כיה.`, actual: `סנסציה ועקיצה מושלמת של צ'כיה! קוריאה הדרומית החזיקה בכדור 45% מהזמן, אך האורחת יצאה למתפרצות קטלניות, עקצה ברגע הנכון וחזרה הביתה עם הניצחון.` },
        goals: [{ team: `קוריאה הדרומית`, player: `Hwang In-Beom`, minute: `67'` }, { team: `קוריאה הדרומית`, player: `Oh Hyeon-Gyu`, minute: `80'` }, { team: `צ'כיה`, player: `Ladislav Krejcí`, minute: `59'` }],
        squads: { home: { predicted: [`Kim Seung-gyu`, `Kim Min-jae`, `Kim Young-gwon`, `Kim Jin-su`, `Hwang In-beom`, `Lee Jae-sung`, `Jeong Woo-yeong`, `Son Heung-min`, `Hwang Hee-chan`, `Cho Gue-sung`, `Lee Kang-in`], actual: [`Kim Seung-gyu`, `Kim Min-jae`, `Kim Young-gwon`, `Kim Jin-su`, `Hwang In-beom`, `Lee Jae-sung`, `Jeong Woo-yeong`, `Son Heung-min`, `Hwang Hee-chan`, `Cho Gue-sung`, `Kwon Chang-hoon (חריגה)`] }, away: { predicted: [`Matěj Kovář`, `David Zima`, `Tomáš Holeš`, `Robin Hranáč`, `Ladislav Krejčí`, `Tomáš Souček`, `Alex Král`, `Antonín Barák`, `Pavel Šulc`, `Patrik Schick`, `Jan Kuchta`], actual: [`Matěj Kovář`, `David Zima`, `Tomáš Holeš`, `Robin Hranáč`, `Ladislav Krejčí`, `Tomáš Souček`, `Alex Král`, `Antonín Barák`, `Pavel Šulc`, `Patrik Schick`, `Jan Kuchta`] } }
    },
    'match3': {
        timeStatus: 'past', matchday: 1, stage: "ב'", dateText: `2026-06-12 | 15:00 UTC-4`,
        teamHome: { name: `קנדה`, flagCode: 'ca', color: '#FF0000', cards: { yellow: [`אליסטר ג'ונסטון (18')`, `קמאל מילר (77')`], red: [] } },
        teamAway: { name: `בוסניה והרצגובינה`, flagCode: 'ba', color: '#FFD100', cards: { yellow: [`מיראלם פיאניץ' (34')`, `אדין דז'קו (55')`, `לוקה מנאלו (88')`], red: [] } },
        score: { prediction: '1 - 0', actual: '1 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 44, draw: 34, away: 22 }, matchRisk: 'Safe',
        radarStats: { home: [62, 73, 54, 62, 88, 35], away: [49, 20, 48, 49, 76, 30] },
        advancedStats: { home: { xG: '1.56', corners: 5, altitudeImpact: '' }, away: { xG: '1.02', corners: 2, altitudeImpact: '' } },
        insight: { prediction: `על הנייר: הסתברות פואסון חזתה 1.56 שערים לקנדה מול 1.02 לבוסניה והרצגובינה.`, actual: `חלוקת נקודות צודקת בקרב אדיר ומרתק שנגמר ב-1-1. שתי הנבחרות שטפו את המגרש, נלחמו עד השריקה האחרונה, ולא ויתרו לרגע.` },
        goals: [{ team: `קנדה`, player: `Cyle Larin`, minute: `78'` }, { team: `בוסניה והרצגובינה`, player: `Jovo Lukić`, minute: `21'` }],
        squads: { home: { predicted: [`Milan Borjan`, `Alistair Johnston`, `Steven Vitória`, `Kamal Miller`, `Alphonso Davies`, `Stephen Eustáquio`, `Atiba Hutchinson`, `Jonathan Osorio`, `Tajon Buchanan`, `Jonathan David`, `Cyle Larin`], actual: [`Milan Borjan`, `Alistair Johnston`, `Steven Vitória`, `Kamal Miller`, `Alphonso Davies`, `Stephen Eustáquio`, `Atiba Hutchinson`, `Jonathan Osorio`, `Tajon Buchanan`, `Jonathan David`, `Cyle Larin`] }, away: { predicted: [`Ibrahim Šehić`, `Anel Ahmedhodžić`, `Sead Kolašinac`, `Amar Dedić`, `Amir Hadžiahmetović`, `Miralem Pjanić`, `Rade Krunić`, `Luka Menalo`, `Ermedin Demirović`, `Edin Džeko`, `Smail Prevljak`], actual: [`Ibrahim Šehić`, `Anel Ahmedhodžić`, `Sead Kolašinac`, `Amar Dedić`, `Amir Hadžiahmetović`, `Miralem Pjanić`, `Rade Krunić`, `Luka Menalo`, `Ermedin Demirović`, `Edin Džeko`, `Smail Prevljak`] } }
    },
    'match4': {
        timeStatus: 'past', matchday: 1, stage: "ב'", dateText: `2026-06-13 | 12:00 UTC-7`,
        teamHome: { name: `קטאר`, flagCode: 'qa', color: '#8A1538', cards: { yellow: [`פדרו מיגל (45')`], red: [] } },
        teamAway: { name: `שווייץ`, flagCode: 'ch', color: '#FFFFFF', cards: { yellow: [], red: [] } },
        score: { prediction: '0 - 1', actual: '1 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 18, draw: 31, away: 51 }, matchRisk: 'Draw Booster',
        radarStats: { home: [17, 13, 48, 17, 76, 20], away: [71, 40, 57, 71, 75, 35] },
        advancedStats: { home: { xG: '0.78', corners: 2, altitudeImpact: '' }, away: { xG: '1.73', corners: 8, altitudeImpact: '' } },
        insight: { prediction: `על הנייר: הסתברות פואסון חזתה 0.78 שערים לקטאר מול 1.73 לשווייץ.`, actual: `חלוקת נקודות צודקת בקרב אדיר ומרתק שנגמר ב-1-1. שתי הנבחרות שטפו את המגרש, נלחמו עד השריקה האחרונה, ולא ויתרו לרגע.` },
        goals: [{ team: `קטאר`, player: `Miro Muheim`, minute: `90+4'` }, { team: `שווייץ`, player: `Breel Embolo`, minute: `17'` }],
        squads: { home: { predicted: [`Meshaal Barsham`, `Pedro Miguel`, `Boualem Khoukhi`, `Tarek Salman`, `Abdelkarim Hassan`, `Ali Assadalla`, `Abdulaziz Hatem`, `Ismaeel Mohammad`, `Akram Afif`, `Almoez Ali`, `Mohammed Muntari`], actual: [`Meshaal Barsham`, `Pedro Miguel`, `Boualem Khoukhi`, `Tarek Salman`, `Abdelkarim Hassan`, `Ali Assadalla`, `Abdulaziz Hatem`, `Ismaeel Mohammad`, `Akram Afif`, `Almoez Ali`, `Mohammed Muntari`] }, away: { predicted: [`Yann Sommer`, `Silvan Widmer`, `Manuel Akanji`, `Fabian Schär`, `Ricardo Rodriguez`, `Remo Freuler`, `Granit Xhaka`, `Xherdan Shaqiri`, `Djibril Sow`, `Breel Embolo`, `Rubén Vargas`], actual: [`Yann Sommer`, `Silvan Widmer`, `Manuel Akanji`, `Fabian Schär`, `Ricardo Rodriguez`, `Remo Freuler`, `Granit Xhaka`, `Xherdan Shaqiri`, `Djibril Sow`, `Breel Embolo`, `Rubén Vargas`] } }
    },
    'match5': {
        timeStatus: 'past', matchday: 1, stage: "ג'", dateText: `2026-06-13 | 18:00 UTC-4`,
        teamHome: { name: `ברזיל`, flagCode: 'br', color: '#FFD700', cards: { yellow: [`אדר מיליטאו (33')`], red: [] } },
        teamAway: { name: `מרוקו`, flagCode: 'ma', color: '#006233', cards: { yellow: [`סופיאן אמרבט (55')`, `אזדין אונאהי (76')`], red: [] } },
        score: { prediction: '1 - 0', actual: '1 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 44, draw: 36, away: 20 }, matchRisk: 'Draw Booster',
        radarStats: { home: [60, 40, 61, 60, 64, 37], away: [71, 53, 56, 71, 68, 25] },
        advancedStats: { home: { xG: '1.45', corners: 6, altitudeImpact: '' }, away: { xG: '0.83', corners: 4, altitudeImpact: '' } },
        insight: { prediction: `על הנייר: הסתברות פואסון חזתה 1.45 שערים לברזיל מול 0.83 למרוקו.`, actual: `חלוקת נקודות צודקת בקרב אדיר ומרתק שנגמר ב-1-1. שתי הנבחרות שטפו את המגרש, נלחמו עד השריקה האחרונה, ולא ויתרו לרגע.` },
        goals: [{ team: `ברזיל`, player: `Vinícius Júnior`, minute: `32'` }, { team: `מרוקו`, player: `Ismael Saibari`, minute: `21'` }],
        squads: { home: { predicted: [`Alisson`, `Danilo`, `Marquinhos`, `Éder Militão`, `Wendell`, `Casemiro`, `Bruno Guimarães`, `Lucas Paquetá`, `Raphinha`, `Vinícius Júnior`, `Rodrygo`], actual: [`Alisson`, `Danilo`, `Marquinhos`, `Éder Militão`, `Wendell`, `Casemiro`, `Bruno Guimarães`, `Lucas Paquetá`, `Raphinha`, `Vinícius Júnior`, `Rodrygo`] }, away: { predicted: [`Yassine Bounou`, `Achraf Hakimi`, `Nayef Aguerd`, `Romain Saïss`, `Noussair Mazraoui`, `Sofyan Amrabat`, `Azzedine Ounahi`, `Selim Amallah`, `Hakim Ziyech`, `Youssef En-Nesyri`, `Sofiane Boufal`], actual: [`Yassine Bounou`, `Achraf Hakimi`, `Nayef Aguerd`, `Romain Saïss`, `Noussair Mazraoui`, `Sofyan Amrabat`, `Azzedine Ounahi`, `Selim Amallah`, `Hakim Ziyech`, `Youssef En-Nesyri`, `Sofiane Boufal`] } }
    },
    'match6': {
        timeStatus: 'past', matchday: 1, stage: "ג'", dateText: `2026-06-13 | 21:00 UTC-4`,
        teamHome: { name: `האיטי`, flagCode: 'ht', color: '#00209F', cards: { yellow: [`קרלנס ארקוס (12')`, `דריק אטיין (67')`, `בריאן אלסאוס (89')`], red: [] } },
        teamAway: { name: `סקוטלנד`, flagCode: 'gb-sct', color: '#005EB8', cards: { yellow: [`ארון היקי (44')`], red: [] } },
        score: { prediction: '0 - 1', actual: '0 - 1', accuracyClass: 'exact' },
        probabilities: { home: 27, draw: 35, away: 38 }, matchRisk: 'Draw Booster',
        radarStats: { home: [35, 33, 44, 35, 77, 5], away: [55, 33, 49, 55, 79, 32] },
        advancedStats: { home: { xG: '1.19', corners: 3, altitudeImpact: '' }, away: { xG: '1.37', corners: 7, altitudeImpact: '' } },
        insight: { prediction: `על הנייר: הסתברות פואסון חזתה 1.19 שערים להאיטי מול 1.37 לסקוטלנד.`, actual: `ניצחון חוץ יוקרתי לסקוטלנד, ששיחקה כדורגל חכם מאוד, ניטרלה את התקפת האיטי (שהחזיקה בכדור רק 40%), והשיגה 3 נקודות מוצדקות ביותר.` },
        goals: [{ team: `סקוטלנד`, player: `John McGinn`, minute: `28'` }],
        squads: { home: { predicted: [`Johny Placide`, `Ricardo Adé`, `Mechack Jérôme`, `Carlens Arcus`, `Hayward Jean`, `Derrick Etienne`, `Bryan Alceus`, `Steeven Saba`, `Frantzdy Pierrot`, `Joseph Doût`, `Duckens Nazon`], actual: [`Johny Placide`, `Ricardo Adé`, `Mechack Jérôme`, `Carlens Arcus`, `Hayward Jean`, `Derrick Etienne`, `Bryan Alceus`, `Steeven Saba`, `Frantzdy Pierrot`, `Joseph Doût`, `Duckens Nazon`] }, away: { predicted: [`Angus Gunn`, `Aaron Hickey`, `Ryan Porteous`, `Scott McTominay`, `Kieran Tierney`, `Callum McGregor`, `John McGinn`, `Billy Gilmour`, `Ryan Christie`, `Ché Adams`, `Lyndon Dykes`], actual: [`Angus Gunn`, `Aaron Hickey`, `Ryan Porteous`, `Scott McTominay`, `Kieran Tierney`, `Callum McGregor`, `John McGinn`, `Billy Gilmour`, `Ryan Christie`, `Ché Adams`, `Lyndon Dykes`] } }
    },
    'match7': {
        timeStatus: 'past', matchday: 1, stage: "ד'", dateText: `2026-06-12 | 18:00 UTC-7`,
        teamHome: { name: `ארצות הברית`, flagCode: 'us', color: '#002868', cards: { yellow: [], red: [] } },
        teamAway: { name: `פרגוואי`, flagCode: 'py', color: '#D52B1E', cards: { yellow: [`גוסטבו גומז (22')`, `ריצ'רד סאנצ'ס (55')`], red: [] } },
        score: { prediction: '1 - 0', actual: '4 - 1', accuracyClass: 'trend' },
        probabilities: { home: 61, draw: 25, away: 14 }, matchRisk: 'Safe',
        radarStats: { home: [57, 13, 55, 57, 83, 40], away: [53, 47, 46, 53, 75, 10] },
        advancedStats: { home: { xG: '1.88', corners: 5, altitudeImpact: '' }, away: { xG: '0.79', corners: 4, altitudeImpact: '' } },
        insight: { prediction: `על הנייר: הסתברות פואסון חזתה 1.88 שערים לארצות הברית מול 0.79 לפרגוואי.`, actual: `איזו הצגה של ארצות הברית! תצוגת תכלית מוחצת. המארחת פשוט התפוצצה על המגרש, פירקה את ההגנה של פרגוואי ללא רחמים, ושלטה בכדור 52% מהזמן.` },
        goals: [{ team: `ארצות הברית`, player: `Damian Bobadilla`, minute: `7'` }, { team: `ארצות הברית`, player: `Folarin Balogun`, minute: `31'` }, { team: `ארצות הברית`, player: `Folarin Balogun`, minute: `45+5'` }, { team: `ארצות הברית`, player: `Giovanni Reyna`, minute: `90+8'` }, { team: `פרגוואי`, player: `Mauricio`, minute: `73'` }],
        squads: { home: { predicted: [`Matt Turner`, `Sergiño Dest`, `Walker Zimmerman`, `Tim Ream`, `Antonee Robinson`, `Tyler Adams`, `Weston McKennie`, `Yunus Musah`, `Timothy Weah`, `Folarin Balogun`, `Christian Pulisic`], actual: [`Matt Turner`, `Sergiño Dest`, `Walker Zimmerman`, `Tim Ream`, `Antonee Robinson`, `Tyler Adams`, `Weston McKennie`, `Yunus Musah`, `Timothy Weah`, `Folarin Balogun`, `Christian Pulisic`] }, away: { predicted: [`Carlos Coronel`, `Robert Rojas`, `Fabián Balbuena`, `Gustavo Gómez`, `Júnior Alonso`, `Mathías Villasanti`, `Richard Sánchez`, `Andrés Cubas`, `Alejandro Romero Gamarra`, `Miguel Almirón`, `Sanabria Nuñez`], actual: [`Carlos Coronel`, `Robert Rojas`, `Fabián Balbuena`, `Gustavo Gómez`, `Júnior Alonso`, `Mathías Villasanti`, `Richard Sánchez`, `Andrés Cubas`, `Alejandro Romero Gamarra`, `Miguel Almirón`, `Sanabria Nuñez`] } }
    },
    'match8': {
        timeStatus: 'past', matchday: 1, stage: "ד'", dateText: `2026-06-13 | 21:00 UTC-7`,
        teamHome: { name: `אוסטרליה`, flagCode: 'au', color: '#FFCD00', cards: { yellow: [`נתניאל אטקינסון (33')`], red: [] } },
        teamAway: { name: `טורקיה`, flagCode: 'tr', color: '#E30A17', cards: { yellow: [`זקי צ'ליק (77')`], red: [] } },
        score: { prediction: '1 - 1', actual: '2 - 0', accuracyClass: 'trend' },
        probabilities: { home: 34, draw: 34, away: 32 }, matchRisk: 'Draw Booster',
        radarStats: { home: [62, 40, 53, 62, 63, 37], away: [69, 33, 54, 69, 91, 20] },
        advancedStats: { home: { xG: '1.15', corners: 4, altitudeImpact: '' }, away: { xG: '1.16', corners: 5, altitudeImpact: '' } },
        insight: { prediction: `על הנייר: הסתברות פואסון חזתה 1.15 שערים לאוסטרליה מול 1.16 לטורקיה.`, actual: `ניצחון סולידי, טקטי ומרשים של אוסטרליה. היא הכתיבה את הקצב, החזיקה בכדור 48% מהזמן, וניצלה את יתרון האיכות שלה כדי להכריע את המשחק מול טורקיה.` },
        goals: [{ team: `אוסטרליה`, player: `Nestory Irankunda`, minute: `27'` }, { team: `אוסטרליה`, player: `Connor Metcalfe`, minute: `75'` }],
        squads: { home: { predicted: [`Mathew Ryan`, `Nathaniel Atkinson`, `Harry Souttar`, `Cameron Burgess`, `Aziz Behich`, `Keanu Baccus`, `Jackson Irvine`, `Aaron Mooy`, `Riley McGree`, `Martin Boyle`, `Mitchell Duke`], actual: [`Mathew Ryan`, `Nathaniel Atkinson`, `Harry Souttar`, `Cameron Burgess`, `Aziz Behich`, `Keanu Baccus`, `Jackson Irvine`, `Aaron Mooy`, `Riley McGree`, `Martin Boyle`, `Mitchell Duke`] }, away: { predicted: [`Mert Günok`, `Zeki Çelik`, `Merih Demiral`, `Çağlar Söyüncü`, `Ferdi Kadıoğlu`, `Salih Özcan`, `Hakan Çalhanoğlu`, `Orkun Kökçü`, `Arda Güler`, `Kerem Aktürkoğlu`, `Cenk Tosun`], actual: [`Mert Günok`, `Zeki Çelik`, `Merih Demiral`, `Çağlar Söyüncü`, `Ferdi Kadıoğlu`, `Salih Özcan`, `Hakan Çalhanoğlu`, `Orkun Kökçü`, `Arda Güler`, `Kerem Aktürkoğlu`, `Cenk Tosun`] } }
    },
    'match9': {
        timeStatus: 'past', matchday: 1, stage: "ה'", dateText: `2026-06-14 | 12:00 UTC-5`,
        teamHome: { name: `גרמניה`, flagCode: 'de', color: '#FFFFFF', cards: { yellow: [], red: [] } },
        teamAway: { name: `קוראסאו`, flagCode: 'cw', color: '#002B7F', cards: { yellow: [`קוקו מרטינה (44')`, `שארל באקונה (88')`], red: [] } },
        score: { prediction: '2 - 0', actual: '7 - 1', accuracyClass: 'trend' },
        probabilities: { home: 80, draw: 14, away: 6 }, matchRisk: 'Safe',
        radarStats: { home: [75, 33, 66, 75, 86, 50], away: [40, 47, 45, 40, 65, 10] },
        advancedStats: { home: { xG: '2.40', corners: 10, altitudeImpact: '' }, away: { xG: '0.63', corners: 1, altitudeImpact: '' } },
        insight: { prediction: `על הנייר: הסתברות פואסון חזתה 2.4 שערים לגרמניה מול 0.63 לקוראסאו.`, actual: `איזו הצגה של גרמניה! תצוגת תכלית מוחצת. המארחת פשוט התפוצצה על המגרש, פירקה את ההגנה של קוראסאו ללא רחמים, ושלטה בכדור 72% מהזמן.` },
        goals: [{ team: `גרמניה`, player: `Felix Nmecha`, minute: `6'` }, { team: `גרמניה`, player: `Nico Schlotterbeck`, minute: `38'` }, { team: `גרמניה`, player: `Kai Havertz`, minute: `45+5'` }, { team: `גרמניה`, player: `Kai Havertz`, minute: `88'` }, { team: `גרמניה`, player: `Jamal Musiala`, minute: `47'` }, { team: `גרמניה`, player: `Nathaniel Brown`, minute: `68'` }, { team: `גרמניה`, player: `Deniz Undav`, minute: `78'` }, { team: `קוראסאו`, player: `Livano Comenencia`, minute: `21'` }],
        squads: { home: { predicted: [`Manuel Neuer`, `Joshua Kimmich`, `Antonio Rüdiger`, `Jonathan Tah`, `David Raum`, `Toni Kroos`, `İlkay Gündoğan`, `Jamal Musiala`, `Florian Wirtz`, `Leroy Sané`, `Kai Havertz`], actual: [`Manuel Neuer`, `Joshua Kimmich`, `Antonio Rüdiger`, `Jonathan Tah`, `David Raum`, `Toni Kroos`, `İlkay Gündoğan`, `Jamal Musiala`, `Florian Wirtz`, `Leroy Sané`, `Kai Havertz`] }, away: { predicted: [`Eloy Room`, `Jurïen Timber`, `Cuco Martina`, `Sherel Floranus`, `Vurnon Anita`, `Leandro Bacuna`, `Roly Bonevacia`, `Kenji Gorré`, `Jearl Margaritha`, `Brandley Kuwas`, `Rangelo Janga`], actual: [`Eloy Room`, `Jurïen Timber`, `Cuco Martina`, `Sherel Floranus`, `Vurnon Anita`, `Leandro Bacuna`, `Roly Bonevacia`, `Kenji Gorré`, `Jearl Margaritha`, `Brandley Kuwas`, `Rangelo Janga`] } }
    },
    'match10': {
        timeStatus: 'past', matchday: 1, stage: "ה'", dateText: `2026-06-14 | 19:00 UTC-4`,
        teamHome: { name: `חוף השנהב`, flagCode: 'ci', color: '#FF8200', cards: { yellow: [`אריק ביילי (12')`, `סרז' אורייה (89')`], red: [] } },
        teamAway: { name: `אקוודור`, flagCode: 'ec', color: '#FFD100', cards: { yellow: [`פיירו הינקאפיה (45')`], red: [] } },
        score: { prediction: '0 - 1', actual: '1 - 0', accuracyClass: 'wrong' },
        probabilities: { home: 23, draw: 28, away: 49 }, matchRisk: 'Safe',
        radarStats: { home: [71, 60, 55, 71, 80, 30], away: [49, 60, 53, 49, 61, 22] },
        advancedStats: { home: { xG: '0.88', corners: 4, altitudeImpact: '' }, away: { xG: '1.53', corners: 4, altitudeImpact: '' } },
        insight: { prediction: `על הנייר: הסתברות פואסון חזתה 0.88 שערים לחוף השנהב מול 1.53 לאקוודור.`, actual: `ניצחון סולידי, טקטי ומרשים של חוף השנהב. היא הכתיבה את הקצב, החזיקה בכדור 50% מהזמן, וניצלה את יתרון האיכות שלה כדי להכריע את המשחק מול אקוודור.` },
        goals: [{ team: `חוף השנהב`, player: `Amad Diallo`, minute: `90'` }],
        squads: { home: { predicted: [`Yahia Fofana`, `Serge Aurier`, `Eric Bailly`, `Evan Ndicka`, `Ghislain Konan`, `Franck Kessié`, `Ibrahim Sangaré`, `Seko Fofana`, `Jean-Michaël Seri`, `Wilfried Zaha`, `Sébastien Haller`], actual: [`Yahia Fofana`, `Serge Aurier`, `Eric Bailly`, `Evan Ndicka`, `Ghislain Konan`, `Franck Kessié`, `Ibrahim Sangaré`, `Seko Fofana`, `Jean-Michaël Seri`, `Wilfried Zaha`, `Sébastien Haller`] }, away: { predicted: [`Alexander Domínguez`, `Félix Torres`, `Piero Hincapié`, `William Pacho`, `Ángelo Preciado`, `Moisés Caicedo`, `Carlos Gruezo`, `José Cifuentes`, `Kendry Páez`, `Gonzalo Plata`, `Enner Valencia`], actual: [`Alexander Domínguez`, `Félix Torres`, `Piero Hincapié`, `William Pacho`, `Ángelo Preciado`, `Moisés Caicedo`, `Carlos Gruezo`, `José Cifuentes`, `Kendry Páez`, `Gonzalo Plata`, `Enner Valencia`] } }
    },
    'match11': {
        timeStatus: 'past', matchday: 1, stage: "ו'", dateText: `2026-06-14 | 15:00 UTC-5`,
        teamHome: { name: `הולנד`, flagCode: 'nl', color: '#F36C21', cards: { yellow: [`וירג'יל ואן דייק (66')`], red: [] } },
        teamAway: { name: `יפן`, flagCode: 'jp', color: '#FFFFFF', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 0', actual: '2 - 2', accuracyClass: 'trend' },
        probabilities: { home: 44, draw: 32, away: 24 }, matchRisk: 'Draw Booster',
        radarStats: { home: [71, 33, 59, 71, 70, 47], away: [80, 67, 55, 80, 68, 50] },
        advancedStats: { home: { xG: '1.25', corners: 7, altitudeImpact: '' }, away: { xG: '0.97', corners: 3, altitudeImpact: '' } },
        insight: { prediction: `על הנייר: הסתברות פואסון חזתה 1.25 שערים להולנד מול 0.97 ליפן.`, actual: `חלוקת נקודות צודקת בקרב אדיר ומרתק שנגמר ב-2-2. שתי הנבחרות שטפו את המגרש, נלחמו עד השריקה האחרונה, ולא ויתרו לרגע.` },
        goals: [{ team: `הולנד`, player: `Virgil van Dijk`, minute: `51'` }, { team: `הולנד`, player: `Crysencio Summerville`, minute: `64'` }, { team: `יפן`, player: `Keito Nakamura`, minute: `57'` }, { team: `יפן`, player: `Daichi Kamada`, minute: `88'` }],
        squads: { home: { predicted: [`Bart Verbruggen`, `Denzel Dumfries`, `Virgil van Dijk`, `Matthijs de Ligt`, `Nathan Aké`, `Frenkie de Jong`, `Tijjani Reijnders`, `Xavi Simons`, `Georginio Wijnaldum`, `Cody Gakpo`, `Memphis Depay`], actual: [`Bart Verbruggen`, `Denzel Dumfries`, `Virgil van Dijk`, `Matthijs de Ligt`, `Nathan Aké`, `Frenkie de Jong`, `Tijjani Reijnders`, `Xavi Simons`, `Georginio Wijnaldum`, `Cody Gakpo`, `Memphis Depay`] }, away: { predicted: [`Zion Suzuki`, `Hiroki Sakai`, `Takehiro Tomiyasu`, `Ko Itakura`, `Yuta Nakayama`, `Wataru Endo`, `Hidemasa Morita`, `Daichi Kamada`, `Takefusa Kubo`, `Kaoru Mitoma`, `Ayase Ueda`], actual: [`Zion Suzuki`, `Hiroki Sakai`, `Takehiro Tomiyasu`, `Ko Itakura`, `Yuta Nakayama`, `Wataru Endo`, `Hidemasa Morita`, `Daichi Kamada`, `Takefusa Kubo`, `Kaoru Mitoma`, `Ayase Ueda`] } }
    },
    'match12': {
        timeStatus: 'past', matchday: 1, stage: "ו'", dateText: `2026-06-14 | 20:00 UTC-6`,
        teamHome: { name: `שוודיה`, flagCode: 'se', color: '#FFF200', cards: { yellow: [], red: [] } },
        teamAway: { name: `תוניסיה`, flagCode: 'tn', color: '#E70013', cards: { yellow: [`מונתסר טאלבי (34')`, `עיסא לאידוני (55')`], red: [] } },
        score: { prediction: '1 - 1', actual: '5 - 1', accuracyClass: 'wrong' },
        probabilities: { home: 44, draw: 33, away: 23 }, matchRisk: 'Draw Booster',
        radarStats: { home: [46, 7, 52, 46, 75, 45], away: [37, 20, 47, 37, 78, 22] },
        advancedStats: { home: { xG: '1.34', corners: 5, altitudeImpact: '' }, away: { xG: '1.08', corners: 3, altitudeImpact: '' } },
        insight: { prediction: `על הנייר: הסתברות פואסון חזתה 1.34 שערים לשוודיה מול 1.08 לתוניסיה.`, actual: `איזו הצגה של שוודיה! תצוגת תכלית מוחצת. המארחת פשוט התפוצצה על המגרש, פירקה את ההגנה של תוניסיה ללא רחמים, ושלטה בכדור 55% מהזמן.` },
        goals: [{ team: `שוודיה`, player: `Yasin Ayari`, minute: `7'` }, { team: `שוודיה`, player: `Alexander Isak`, minute: `30'` }, { team: `שוודיה`, player: `Viktor Gyökeres`, minute: `59'` }, { team: `שוודיה`, player: `Mattias Svanberg`, minute: `84'` }, { team: `שוודיה`, player: `Yasin Ayari`, minute: `90+6'` }, { team: `תוניסיה`, player: `Omar Rekik`, minute: `43'` }],
        squads: { home: { predicted: [`Robin Olsen`, `Emil Krafth`, `Victor Lindelöf`, `Isak Hien`, `Ludwig Augustinsson`, `Jens Cajuste`, `Mattias Svanberg`, `Dejan Kulusevski`, `Emil Forsberg`, `Alexander Isak`, `Viktor Gyökeres`], actual: [`Robin Olsen`, `Emil Krafth`, `Victor Lindelöf`, `Isak Hien`, `Ludwig Augustinsson`, `Jens Cajuste`, `Mattias Svanberg`, `Dejan Kulusevski`, `Emil Forsberg`, `Alexander Isak`, `Viktor Gyökeres`] }, away: { predicted: [`Aymen Dahmen`, `Yassine Meriah`, `Montassar Talbi`, `Ellyes Skhiri`, `Aïssa Laïdouni`, `Hannibal Mejbri`, `Anis Ben Slimane`, `Naïm Sliti`, `Youssef Msakni`, `Wahbi Khazri`, `Seifeddine Jaziri`], actual: [`Aymen Dahmen`, `Yassine Meriah`, `Montassar Talbi`, `Ellyes Skhiri`, `Aïssa Laïdouni`, `Hannibal Mejbri`, `Anis Ben Slimane`, `Naïm Sliti`, `Youssef Msakni`, `Wahbi Khazri`, `Seifeddine Jaziri`] } }
    }
};
Object.assign(window.matchDatabase, matchday1Database);