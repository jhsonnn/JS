//공장(reducer) 제작하려고 만든 파일
//공장->뭔가 일을 하는 곳. 작업을 하는 곳

const LOG_IN = "LOG_IN";

const initialState = {
  isLoggedIn: false,
};

function authReducer(
  prevState = initialState,
  action: { type: string; payload: any }
) {
  const nextState = { ...prevState };

  //작업명세서(action)을 받아줌
  //상태(state)(이전 상태, 이후 상태)
  if (action.type === LOG_IN) {
    prevState.isLoggedIn = true;
  }

  return nextState;
}

export default authReducer;
