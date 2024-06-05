import axios from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

const AddBudget = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (newBudget) => axios.post("/budgets", { value: newBudget }),
    {
      onSuccess: (data) => {
        console.log("Budget added:", data); // 예산이 성공적으로 추가되면 콘솔에 출력
        queryClient.invalidateQueries("budgets"); // 변경: "todos" 대신 "budgets"를 invalidate
      },
    }
  );

  const [newBudget, setNewBudget] = useState("");

  const handleAddBudget = async () => {
    mutation.mutate(parseInt(newBudget));
    setNewBudget("");
  };

  return (
    <div>
      <input
        type='number'
        value={newBudget}
        onChange={(e) => setNewBudget(e.target.value)}
      />
      <button onClick={handleAddBudget}>Add budget</button>{" "}
      {/* 클릭 핸들러 추가 */}
    </div>
  );
};

export default AddBudget;
