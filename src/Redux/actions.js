import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
} from "./types";

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}
export function asyncIncrement() {
  return function (dispatch) {
    dispatch(disableButtons());
    setTimeout(() => {
      dispatch(increment());
      dispatch(enableButtons());
    }, 2000);
  };
}
export function changeTheme(payLoad) {
  return {
    type: CHANGE_THEME,
    payLoad: payLoad,
  };
}

export function disableButtons() {
  return {
    type: DISABLE_BUTTONS,
  };
}

export function enableButtons() {
  return {
    type: ENABLE_BUTTONS,
  };
}
