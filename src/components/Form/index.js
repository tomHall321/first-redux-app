import { connect } from "react-redux";
import Form from './Form';
import { postGame } from '../../data/action/api';

const mapStateToProps = ({ p1Name, p2Name, winningScore, alternateEvery }) => ({
    p1Name,
    p2Name,
    winningScore,
    alternateEvery,
});

const mapDispatchToProps = (dispatch) => {
    return{
        handleSubmit : data => {
            dispatch(postGame(data));
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);