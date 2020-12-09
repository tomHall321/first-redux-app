import { connect } from "react-redux";

// import the React component that we want to wrap
// in the same directory, so path is short
import ResetButton from "./ResetButton";


const mapStateToProps = state => {
  return {
    handleReset: state.handleReset,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleReset: () => dispatch({ type: "RESET"}),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);