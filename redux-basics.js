const redux = require("redux");
const createStore = redux.createStore;

const inititalState = {
  counter: 0,
};

// Reducer
const rootReducter = (state = inititalState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};

// Store
const store = createStore(rootReducter);
console.log(store.getState());

// Subscriptions
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Dispatching action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
