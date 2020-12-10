import { connect } from "react-redux";
import Loading from './Loading';
import { getResults } from "../../data/action/api";

const mapStateToProps = ({ loaded }) => ({ loaded });

const mapDispatchToProps = (dispatch) => {
    return {
        handleMount: (data) => dispatch(getResults(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);