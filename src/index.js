import "./styles.css";
import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer } from "./Redux/rootReducer";
import {
  decrement,
  increment,
  asyncIncrement,
  changeTheme,
} from "./Redux/actions";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

window.store = store;
addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});

subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});
themeBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  store.dispatch(changeTheme(newTheme));
});

asyncBtn.addEventListener("click", () => {
  store.dispatch(asyncIncrement());
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter;
  document.body.className = state.theme.value;
  [asyncBtn, addBtn, subBtn, themeBtn].forEach((btn) => {
    btn.disabled = state.theme.disabled;
  });
});

store.dispatch({ type: "INITIAL_STATE" });
