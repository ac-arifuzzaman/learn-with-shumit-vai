// select dom element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state
const initialState = {
  value: 0,
};

// create reducre function
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
};

// create sotre
// const store = Redux.createStore(counterReducer);

const render = () => {
  // const state = store.getState();
  // counterEl.innerText = state.value.toString();
};

// update UI initially
render();

// store.subscribe(render);

// set click event handler
// incrementEl.addEventListener("click", () => {
  // store.dispatch({
//     type: "increment",
//   });
// });

/* decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
}); */
