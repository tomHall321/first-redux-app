// import connect from React Redux
// this will talk to the Provider component, which has
// wrapped the entire app, so that it can access the store
import { connect } from "react-redux";

// import the React component that we want to wrap
// in the same directory, so path is short
import Player from "./Player";


const mapStateToProps = state => {
  return {
    player: state.p1Name,
    servingPlayer: state.p1serving,
    playerScore: state.player1,
    winner: state.winner,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    playerIncrement: () => dispatch({ type: "INCREMENTPLAYER1"}),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);