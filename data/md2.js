// data/md2.js - משחקי מחזור 2 המעודכנים

Object.assign(matchDatabase, {
    'match28_ch_ba': {
        timeStatus: 'past', matchday: 2, stage: 'B', dateText: "בית ב' | 19 ביוני",
        teamHome: { name: 'שוויץ', flagCode: 'ch', color: '#FF0000', cards: { yellow: [], red: [] } },
        teamAway: { name: 'בוסניה', flagCode: 'ba', color: '#002F6C', cards: { yellow: [], red: [] } },
        score: { prediction: '2 - 1', actual: '4 - 1', accuracyClass: 'trend' },
        probabilities: { home: 55, draw: 28, away: 17 },
        advancedStats: { home: { xG: 2.85, restDays: 9, altitudeImpact: 'אופטימלי' }, away: { xG: 0.90, restDays: 7, altitudeImpact: 'רגיל' } },
        insight: { prediction: "שוויץ חזקה במרכז השדה.", actual: "התפוצצות שוויצרית! שטפו את המגרש ודרסו את בוסניה." },
        goals: [{ team: 'שוויץ', player: "שאקירי", minute: "14'" }, { team: 'בוסניה', player: "דז'קו", minute: "44'" }, { team: 'שוויץ', player: "ורגאס", minute: "85'" }],
        squads: { home: { predicted: ["זומר", "ג'אקה", "שאקירי"], actual: ["זומר", "ג'אקה", "שאקירי"] }, away: { predicted: ["שחיץ'", "פיאניץ'", "דז'קו"], actual: ["שחיץ'", "פיאניץ'", "דז'קו"] } }
    },
    'match29_sct_ma': {
        timeStatus: 'future', matchday: 2, stage: 'C', dateText: "בית ג' | מחר, 01:00",
        teamHome: { name: 'סקוטלנד', flagCode: 'gb-sct', color: '#005EB8', cards: { yellow: [], red: [] } },
        teamAway: { name: 'מרוקו', flagCode: 'ma', color: '#FF3333', cards: { yellow: [], red: [] } },
        score: { prediction: '1 - 1', actual: '', accuracyClass: 'pending' },
        probabilities: { home: 38, draw: 38, away: 24 },
        advancedStats: { home: { xG: '1.10 (צפי)', restDays: 8, altitudeImpact: 'רגיל' }, away: { xG: '1.20 (צפי)', restDays: 8, altitudeImpact: 'רגיל' } },
        insight: { prediction: "קרב פיזי מאוד, בוסטר תיקו פעיל.", actual: "" },
        goals: [],
        squads: { home: { predicted: ["גאן", "מקטומיניי"], actual: [] }, away: { predicted: ["בונו", "חכימי"], actual: [] } }
    }
});
