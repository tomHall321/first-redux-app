import { connect } from "react-redux";
import Form from './Form';
import { postGame } from '../../data/action/api';

const mapStateToProps = (state) => ({
    p1Name: state.player_1.name,
    p2Name: state.player_2.name,
    winningScore: state.winning_score,
    alternateEvery: state.change_serve,
});

const mapDispatchToProps = (dispatch) => {
    return{
        handleSubmit : data => {
            dispatch(postGame(data));
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);