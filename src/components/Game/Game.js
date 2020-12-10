import React from "react";
import ResetButton from "../ResetBtn";
import Form from "../Form";
import WinnerMessage from "../Winner";
import Player1 from "../Player/Player1";
import Player2 from "../Player/Player2";

const Game = ({ onIncrementPlayer1, onIncrementPlayer2, gameStarted }) => (
    !gameStarted ? 
    <Form/> : 
    <>
    <div className="row mb-4">
      <Player1 
          playerIncrement={ onIncrementPlayer1 }
        />
      <Player2 
          playerIncrement={ onIncrementPlayer2 }
        />
    </div>
    <WinnerMessage/>
      <hr />
    <ResetButton/>
    </>
    
);

export default Game;