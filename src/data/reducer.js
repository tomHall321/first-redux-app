import initial from "./initial";
 
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
  
  let reducer = (state, action) => {
    switch (action.type){
      case "INCREMENTPLAYER1": return winner(checkServer(incrementPlayer1(state)));
      case "INCREMENTPLAYER2": return winner(checkServer(incrementPlayer2(state)));
      case "RESET": return initial;
      default: return state;
    }
  }

export default reducer;