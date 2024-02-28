import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";
import "./default.layout.css";

function DefaultLayout() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!isLoggedIn && location.pathname !== "/log-in") {
    //로그인 페이지로 보내주기
    navigate("/log-in");
    return null;
  }
  return (
    <div id='layout'>
      <header id='header'>
        <Link to='/'>
          <h1>Cool~ ToDo List</h1>
        </Link>
      </header>

      <Outlet />

      <footer id='footer'>제작자 : 손지형</footer>
    </div>
  );
}

export default DefaultLayout;
