import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import TilDetailPage from "../pages/TilDetailPage";

function Router() {
  return (
    <Routes>
      {/* 레이아웃을 적용하고 싶은 Route를 경로가 없는 Route로 감싸주면 레이아웃이 적용됨 */}
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/tils/:tilId' element={<TilDetailPage />} />
        <Route path='/auth/sign-up' element={<SignUpPage />} />
        <Route path='/auth/log-in' element={<LogInPage />} />
      </Route>
    </Routes>
  );
}

export default Router;

// 라우팅이란?
//맵핑 => 두가지 정보(path, element)필요
//'경로'와 '보여줄 것'을 맵핑
