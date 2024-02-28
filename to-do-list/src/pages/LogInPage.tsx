import { useAuth } from "../contexts/auth.context";

function LogInPage() {
  const { isLoggedIn, logIn } = useAuth();
  return (
    <div>
      <p>당신 누구야?</p>
      <button onClick={logIn}>로그인하기</button>
    </div>
  );
}

export default LogInPage;
