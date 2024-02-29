import { useDispatch } from "react-redux";
import Page from "../components/Page";
import { LOG_IN } from "../store/reducers/auth.reducer";

function LogInPage() {
  const dispatch = useDispatch();
  const handelClickLogIn = () => {
    //스토어에 있는 isLoggedIn을 변경하면 된다.
    //변경하려면? action 필요(action에는 type과 payload가 있음)
    const action = { type: LOG_IN };
    dispatch(action);
  };

  return (
    <Page title='로그인'>
      <button onClick={handelClickLogIn}>이거 누르면 로그인</button>
    </Page>
  );
}

export default LogInPage;
