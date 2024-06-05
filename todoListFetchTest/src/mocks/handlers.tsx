import { HttpResponse, http } from "msw";

const budgetResolver = () => {
  return HttpResponse.json({ budgets });
};

const addBudgetHandler = (req, res, ctx) => {
  const { value } = req.body;
  const newBudget = { id: budgets.length + 1, value: parseInt(value) }; // 새 예산 생성 및 파싱
  budgets.push(newBudget); // 예산 배열에 추가
  console.log("New budget added:", newBudget); // 새 예산을 콘솔에 출력
  return res(ctx.json(budgets)); // 변경: 새로운 예산이 추가된 후 예산 목록을 반환
};

export const handlers = [
  http.get("/budgets", budgetResolver),
  http.post("/budgets", addBudgetHandler), // 변경: 예산 추가 요청을 처리하는 핸들러 추가
];
