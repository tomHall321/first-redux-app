import Button from "./Button";

const Player = ({winner, player, servingPlayer, playerScore, playerIncrement}) => {
    return(

        <div className="col-md-6 mt-4">
            <div className={`card text-center ${ servingPlayer ? "bg-dark text-white": "" }`}>
                <h5 className="card-header">Player{player}</h5>
                <div className="card-body">
                    <p className="card-text display-1">{playerScore}</p>
                </div>
                <div className="card-footer">
                    <Button 
                        handleClick={ playerIncrement }
                        won={ winner > 0 }
                    />
                </div>
            </div>
        </div>
    );
}

export default Player;