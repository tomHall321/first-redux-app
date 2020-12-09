const ResetButton = ({handleReset}) => {
    return(
        <button 
            onClick={handleReset}
            className="btn btn-danger">
            Reset
        </button>
    );
}

export default ResetButton;