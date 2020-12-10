import initial from "./initial";

const update = (state, action) => {
  return {
    ...state,
    ...action.data,
    gameStarted: true,
  }
}

let reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": return update(state, action);
    case "RESET": return initial;
    default: return state;
  }
}

export default reducer; 