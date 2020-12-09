import { connect } from "react-redux";
import Form from './Form';

const mapStateToProps = ({ p1Name, p2Name, winningScore, alternateEvery }) => ({
    p1Name,
    p2Name,
    winningScore,
    alternateEvery,
});

const mapDispatchToProps = (dispatch) => {
    return{
        handleSubmit : (settings) => {
            dispatch({type:"SAVE_SETTINGS", settings})
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);