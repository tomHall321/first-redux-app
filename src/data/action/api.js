import { saveSettings} from './state';
import axios from '../axios';

export const postGame = ({ p1Name, p2Name, winningScore, alternateEvery }) => {
    return (dispatch) => {
        axios.post("/", {
            player_1: p1Name,
            player_2: p2Name,
            winning_score: winningScore,
            change_serve: alternateEvery,
        }).then(({ data }) => {
            dispatch(saveSettings(data.data));
        });
    };
};