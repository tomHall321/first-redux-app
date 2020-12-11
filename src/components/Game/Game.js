import React from "react";
import ResetButton from "../ResetBtn";
import Form from "../Form";
import WinnerMessage from "../Winner";
import Player1 from "../Player/Player1";
import Player2 from "../Player/Player2";
import Loading from '../Loading/';
import Results from '../Results/';

const Game = ({ gameStarted }) => (
  !gameStarted ?
    <Form />
    :
    <>
      <div className="row mb-4">
        <Player1 />
        <Player2 />
      </div>
      <WinnerMessage />
      <hr />
      <ResetButton />

      <Loading>
        <Results />
      </Loading>
    </>

);

export default Game;