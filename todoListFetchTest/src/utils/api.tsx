const fetchBudgets = async () => {
  //백엔드에서 가져올 경우
  // const response = await axios.get("/budgets");
  // return response.data;
  return [
    { id: 1, value: 2000 },
    { id: 2, value: 34000 },
  ];
};

export default fetchBudgets;
