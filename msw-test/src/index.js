import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { worker } from "./mocks/browser";

//서비스 워커를 구동하는 코드 삽입
//앱 진입 시점(entrypoint)에 삽입
// 애플리케이션에서 MSW를 활성화하려면,
// 먼저 서비스 워커를 등록하고 앞서 정의한 핸들러를 사용하도록 설정해야함
// 이를 위해, 애플리케이션의 진입점(예: src/index.js)에서 아래 내용 추가
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const queryClient = new QueryClient();

const root = createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
