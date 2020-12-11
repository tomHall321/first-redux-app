import { connect } from "react-redux";
import Loading from './Loading';
import { getResults } from "../../data/action/api";

const mapStateToProps = ({ loaded }) => ({ loaded });

const mapDispatchToProps = (dispatch) => {
    return {
        handleMount: () => dispatch(getResults())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);