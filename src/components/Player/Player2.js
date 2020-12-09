import { connect } from "react-redux";

import Player from "./Player";

const mapStateToProps = state => {
  return {
    player: state.p2Name,
    servingPlayer : !state.p1serving,
    playerScore: state.player2,
    winner: state.winner,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    playerIncrement: () => dispatch({ type: "INCREMENTPLAYER2"}),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);