export default function ReducerHook(state, action) {
  switch (action.type) {
    case "ADD": {
      return state + action.payload;
    }
    case "SUB": {
      return state - action.payload;
    }

    default: {
      return state;
    }
  }
}
