import initial from "./initial";

const update = (state, action) => {
  return {
    ...state,
    ...action.data,
    gameStarted: true,
  }
}

export const showResults = (state, action) => {
  return {
      ...state,
      results: action.data,
      loaded: true,
  }
}

let reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": return update(state, action);
    case "RESET": return initial;
    case "GET_RESULTS" : return showResults(state, action);
    default: return state;
  }
}

export default reducer; 