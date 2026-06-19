// data/md1.js - משחקי מחזור 1 (דוגמה)

Object.assign(matchDatabase, {
    'match1_ger_esp': {
        timeStatus: 'past', matchday: 1, stage: 'E', dateText: "בית ה' | 15 ביוני",
        teamHome: { name: 'גרמניה', flagCode: 'de', color: '#ffffff', cards: { yellow: [], red: [] } },
        teamAway: { name: 'ספרד', flagCode: 'es', color: '#c60b1e', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '2 - 1', accuracyClass: 'trend' },
        probabilities: { home: 40, draw: 30, away: 30 },
        advancedStats: { home: { xG: 1.8, restDays: 5, altitudeImpact: 'רגיל' }, away: { xG: 1.2, restDays: 5, altitudeImpact: 'רגיל' } },
        insight: { prediction: "קרב צמוד, גרמניה מסוכנת במעברים.", actual: "גרמניה ניצלה את המתפרצות בדיוק כפי שחזינו." },
        goals: [{ team: 'גרמניה', player: "מוסיאלה", minute: "34'" }],
        squads: { home: { predicted: ["נוייר"], actual: ["נוייר"] }, away: { predicted: ["סימון"], actual: ["סימון"] } }
    }
});
