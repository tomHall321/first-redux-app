import { connect } from "react-redux";
import Game from "./Game";

const mapStateToProps = ({ gameStarted, winner }) => ({ gameStarted, winner });

export default connect(mapStateToProps)(Game);