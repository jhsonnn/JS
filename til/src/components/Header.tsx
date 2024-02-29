import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { LOG_OUT } from "../store/reducers/auth.reducer";

function Header() {
  //isLoggedIn 상태에 따라서
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  const handleClickLogOut = () => {
    //isLoggedIn 상태를 false로 바꾸기
    //작업지시서
    const action = { type: LOG_OUT };

    dispatch(action);
  };
  return (
    <header className='border-b flex h-14 items-center px-5'>
      <Link to='/' className='text-lg font-bold'>
        띨띨~
      </Link>

      <nav className='text-sm ml-10'>
        <ul>
          <li>
            <Link to='/tils/write'>띨 작성하기</Link>
          </li>
        </ul>
      </nav>

      <div className='ml-auto text-sm flex gap-x-4'>
        {isLoggedIn ? (
          <button onClick={handleClickLogOut}>로그아웃</button>
        ) : (
          <>
            <Link to='/auth/log-in'>로그인하기</Link>
            <Link to='/auth/sign-up'>회원가입하기</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
