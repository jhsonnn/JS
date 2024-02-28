import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function DefaultLayout() {
  return (
    <div>
      <Header />
      {/* 페이지들이 이 자리에 들어와야함 */}
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
