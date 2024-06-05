import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import AddBudget from "./components/AddBudget";
import BudgetList from "./components/BudgetList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BudgetList />
        <AddBudget />
      </div>
    </QueryClientProvider>
  );
}

export default App;
