import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ borderBottom: "1px solid black" }}>
      <Link to='/'>띨띨</Link>

      <nav>
        <ul>
          <li>
            <Link to='/'>트렌딩</Link>
          </li>
        </ul>
      </nav>

      <div>
        <button>로그인하기</button>
        <button>회원가입하기</button>
      </div>
    </header>
  );
}

export default Header;
