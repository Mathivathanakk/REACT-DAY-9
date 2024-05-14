

export default function ReducerHook(state, action) {
  switch (action.type) {
    case "ADD": {
      return state + action.payload;
    }
    case "SUB": {
      return state - action.payload;
    }
    case "MULTI": {
      return state * action.payload;
    }
    case "DIV": {
      return state / action.payload;
    }
    case "RESET": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
