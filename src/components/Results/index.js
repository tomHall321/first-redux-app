import { connect } from "react-redux";
import Results from './Results';

const mapStateToProps = ({ results, p1Name, p2Name, }) => ({ results, p1Name, p2Name });

export default connect(mapStateToProps)(Results);