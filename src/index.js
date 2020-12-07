import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";

const initial = {
  player1: 0,
  player2: 0,
  p1serving: true,
  winner: 0,
};

//this is a reducer function
const incrementPlayer1 = (state) => {
  return {
    ...state,
    player1: state.player1 + 1,
  };
}

const incrementPlayer2 = (state) => {
  return {
    ...state,
    player2: state.player2 + 1,
  };
}

const checkServer = (state) => {
  return {
    ...state,
    p1serving: (state.player1 + state.player2) % 5 === 0 ? !state.p1serving : state.p1serving,
  }
}

const winner = state => {
  if (state.player1 >= 21 && state.player1 >= (state.player2 + 2)) {
    return {
      ...state,
      winner: 1
    }
  } else if (state.player2 >= 21 && state.player2 >= (state.player1 + 2)) {
    return {
      ...state,
      winner: 2
    }
  }
  return { ...state, winner: 0 }
}

// const checkIfP1HasWon = (state) => {
//   return {
//     ...state,
//     winner1: state.player1 >= 21 && state.player1 >= (state.player2 + 2) ? !state.winner1 : state.winner1,
//   }
// }

// const checkIfP2HasWon = (state) => {
//   return {
//     ...state,
//     winner2: state.player2 >= 21 && state.player2 >= (state.player1 + 2) ? !state.winner2 : state.winner2,
//   }
// }

let reducer = (state, action) => {
  switch (action.type){
    case "INCREMENTPLAYER1": return winner(checkServer(incrementPlayer1(state)));
    case "INCREMENTPLAYER2": return winner(checkServer(incrementPlayer2(state)));
    case "RESET": return initial;
    default: return state;
  }
}

const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
);

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