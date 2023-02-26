const redux = require("redux");
const createStore = redux.createStore;

const inititalState = {
  counter: 0,
};

// Reducer
const rootReducter = (state = inititalState, action) => {
  return state;
};

// Store
const store = createStore(rootReducter);
console.log(store.getState());
