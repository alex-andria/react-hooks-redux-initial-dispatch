// let state = { count: 0 };
let state;

// function changeState(state, action) {
function changeState(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  const app = document.querySelector("#app");
  app.textContent = state.count;
}

//to show 0
//render()
//or
dispatch({ type: "@@INIT" });