import { connect } from "react-redux";
import { patchGame } from "../../data/action/api";

import Player from "./Player";

const mapStateToProps = state => {
  return {
    player: state.player_2.name,
    servingPlayer: state.player_2.serving,
    playerScore: state.player_2.score,
    winner: state.complete,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    playerIncrement: () => dispatch(patchGame(2)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);