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
    if (state.player1 >= 20 && state.player2 >= 20){
      return {
        ...state,
        p1serving: (state.player1 + state.player2) % 2 === 0 ? !state.p1serving : state.p1serving,
      } 
    }
    else {
      return {
        ...state,
        p1serving: (state.player1 + state.player2) % (state.alternateEvery) === 0 ? !state.p1serving : state.p1serving,
      }
    }
  }
  
  const winner = state => {
    if (state.player1 >= (state.winningScore) && state.player1 >= (state.player2 + 2)) {
      return {
        ...state,
        winner: 1
      }
    } else if (state.player2 >= (state.winningScore) && state.player2 >= (state.player1 + 2)) {
      return {
        ...state,
        winner: 2
      }
    }
    return { ...state, winner: 0 }
  }

  const saveSettings = (state, {settings}) => {
    return{
      ...state,
      gameStarted: true,
      ...settings
   }
    
  }
  
  let reducer = (state, action) => {
    switch (action.type){
      case "INCREMENTPLAYER1": return winner(checkServer(incrementPlayer1(state)));
      case "INCREMENTPLAYER2": return winner(checkServer(incrementPlayer2(state)));
      case "SAVE_SETTINGS": return saveSettings(state, action);
      case "RESET": return initial;
      default: return state;
    }
  }

export default reducer;