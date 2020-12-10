export const saveSettings = (data) => {
    return {
        type: "SAVE_SETTINGS",
        gameId: data.id,
        p1Name: data.player_1.name,
        p2Name: data.player_2.name,
        winningScore: data.winning_score,
        alternateEvery: data.change_serve,
    }
} 