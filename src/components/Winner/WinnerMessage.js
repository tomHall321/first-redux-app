const WinnerMessage = ({winner}) => {
    return(
        <h2 
            className={winner === 0 ? "d-none" : "alert alert-success"}>Player {winner} wins!
        </h2>
    );
}

export default WinnerMessage;