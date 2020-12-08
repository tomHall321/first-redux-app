import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./data/store";

let render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App
        player1={state.player1}
        player2={state.player2}
        onIncrementPlayer1={() => store.dispatch({type:"INCREMENTPLAYER1"})}
        onIncrementPlayer2={() => store.dispatch({type:"INCREMENTPLAYER2"})}
        handleReset={ () => store.dispatch({ type: "RESET" }) }
        p1serving={state.p1serving}
        winner={state.winner}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render();
store.subscribe(render); 
//sets up subscription to store, so when the state updates render will be run again.

//all redux stuff is in ./data