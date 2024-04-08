//request가 왔을 때 임의의 응답을 해주는 요청 핸들러
// 첫 번째 인자로 경로, 두 번째 인자로 request, response, context를 파라미터로 넘겨받는 콜백 함수를 넣어준다.
// 원하는 API가 여러 개라면 handlers 배열에 여러 개를 넣어주면 된다.

import { http } from "msw";
import testData from "./api/data/testData";

const handlers = [
  http.get("/resource", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testData));
  }),
];

export default handlers;
