import axios from '../axios';

export const postGame = ({ p1Name, p2Name, winningScore, alternateEvery }) => {
    return (dispatch) => {
        axios.post("/", {
            player_1: p1Name,
            player_2: p2Name,
            winning_score: winningScore,
            change_serve: alternateEvery,
        }).then(({ data }) => {
            dispatch({ type: "UPDATE", data: data.data });
        });
    };
};

export const patchGame = player => {
    return (dispatch, getState) => {
        let id = getState().id;
        axios.patch(`${id}/score`, {
            player: player
        }).then(({ data }) => {
            dispatch({ type: "UPDATE", data: data.data });
        });
    }
}