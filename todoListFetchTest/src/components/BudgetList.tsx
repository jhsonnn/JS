import { useQuery } from "react-query";
import fetchBudgets from "../utils/api";

const BudgetList = () => {
  const {
    data: budgets,
    isLoading,
    isError,
  } = useQuery("budgets", fetchBudgets);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching todos...</div>;

  if (!budgets) return <div>No budgets found</div>;

  interface budgetType {
    value: number;
    id: number;
  }

  return (
    <div>
      <h1>예산 추가</h1>
      <div>
        <ul>
          {budgets.map((budget: budgetType) => (
            <li key={budget.id}>
              {" "}
              날짜넣기 {Number(budget.value).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BudgetList;
