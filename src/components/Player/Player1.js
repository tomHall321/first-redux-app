// import connect from React Redux
// this will talk to the Provider component, which has
// wrapped the entire app, so that it can access the store
import { connect } from "react-redux";
import { patchGame } from "../../data/action/api";

// import the React component that we want to wrap
// in the same directory, so path is short
import Player from "./Player";


const mapStateToProps = state => {
  return {
    player: state.player_1.name,
    servingPlayer: state.player_1.serving,
    playerScore: state.player_1.score,
    winner: state.complete,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    playerIncrement: () => dispatch(patchGame(1)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);