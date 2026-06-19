// data/md2.js - מחזור 2 המעודכן

Object.assign(matchDatabase, {
    'match28': {
        timeStatus: 'past', matchday: 2, stage: 'B', dateText: "בית ב' | 19 ביוני",
        teamHome: { name: 'שוויץ', flagCode: 'ch', color: '#FF0000', cards: { yellow: [], red: [] } },
        teamAway: { name: 'בוסניה', flagCode: 'ba', color: '#002F6C', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 1', actual: '4 - 1', accuracyClass: 'trend' },
        probabilities: { home: 55, draw: 28, away: 17 },
        radarStats: { home: [82, 75, 70, 80, 75, 80], away: [70, 60, 75, 75, 80, 65] },
        advancedStats: { home: { xG: 2.85, restDays: 9 }, away: { xG: 0.90, restDays: 7 } },
        insight: { prediction: "המשמעת הטקטית של שוויץ תנצח.", actual: "התפוצצות שוויצרית! פגיעה מצוינת במגמה." }
    },
    'match29': {
        timeStatus: 'future', matchday: 2, stage: 'C', dateText: "בית ג' | מחר, 01:00",
        teamHome: { name: 'סקוטלנד', flagCode: 'gb-sct', color: '#005EB8', cards: { yellow: [], red: [] } },
        teamAway: { name: 'מרוקו', flagCode: 'ma', color: '#FF3333', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 38, draw: 38, away: 24 },
        radarStats: { home: [80, 65, 85, 75, 75, 70], away: [78, 55, 80, 90, 90, 75] },
        advancedStats: { home: { xG: '1.10', restDays: 8 }, away: { xG: '1.20', restDays: 8 } },
        insight: { prediction: "בוסטר תיקו פעיל! שתי נבחרות קשוחות.", actual: "" }
    }
});
