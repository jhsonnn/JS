//request가 왔을 때 임의의 응답을 해주는 요청 핸들러
// 첫 번째 인자로 경로, 두 번째 인자로 request, response, context를 파라미터로 넘겨받는 콜백 함수를 넣어준다.
// 원하는 API가 여러 개라면 handlers 배열에 여러 개를 넣어주면 된다.

import { http } from "msw";

// function getApi(path) {
//   return `/api/v1/${path}`;
// }

const handlers = [
  http.get("/api/v1/budgets/:member_id", async ({ req, res, ctx }) => {
    const { member_id: memberId } = req.params;
    const budgetValue = await req.json();

    return res(
      ctx.json({
        status_code: 201,
        message: "Success",
        budgets: {
          id: memberId,
          value: budgetValue,
          created_at: new Date().toISOString(),
        },
      })
    );
  }),

  // http.post(
  //   "/api/v1/budgets/:member_id",
  //   async ({ params: routeParams, request }) => {
  //     const { member_id: memberId } = routeParams;
  //     const requestBody = await request.json();

  //     // Return the response
  //     return HttpResponse.json({
  //       status_code: 201,
  //       message: "Success",
  //       budgets: {
  //         id: memberId,
  //         value: requestBody,
  //       },
  //     });
  //   }
  // ),
  http.post("/api/v1/budgets/:member_id", async (req, res, ctx) => {
    const { member_id: memberId } = req.params;
    const requestBody = await req.json();

    return res(
      ctx.json({
        status_code: 201,
        message: "Success",
        budgets: {
          id: memberId,
          value: requestBody,
        },
      })
    );
  }),
];

export default handlers;
