import React from "react";
import ResetButton from "../ResetBtn";
import Form from "../Form";
import WinnerMessage from "../Winner";
import Player1 from "../Player/Player1";
import Player2 from "../Player/Player2";
import Loading from '../Loading/';

const Game = ({ gameStarted }) => (
  !gameStarted ?
    <Loading>
      <Form />
    </Loading>
    :
    <>
      <div className="row mb-4">
        <Player1 />
        <Player2 />
      </div>
      <WinnerMessage />
      <hr />
      <ResetButton />
    </>

);

export default Game;