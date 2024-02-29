//공장(reducer) 제작하려고 만든 파일
//공장->뭔가 일을 하는 곳. 작업을 하는 곳

import { UnknownAction } from "@reduxjs/toolkit";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

const initialState = {
  isLoggedIn: false,
};

function authReducer(prevState = initialState, action: UnknownAction) {
  const nextState = { ...prevState };

  //작업명세서(action)을 받아줌
  //상태(state)(이전 상태, 이후 상태)
  if (action.type === LOG_IN) {
    nextState.isLoggedIn = true;
  }
  if (action.type === LOG_OUT) {
    nextState.isLoggedIn = false;
  }

  return nextState;
}

export default authReducer;
