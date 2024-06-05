import React from "react";
import { useQuery } from "react-query";
import axiosInstance from "./mocks/api/axios";
import Budget from "./pages/Budget";

function fetchData() {
  // fetch 대신에 testData를 반환하도록 수정
  // return Promise.resolve(testData)
  //   .then((data) => data)
  //   .catch((error) => {
  //     console.error("Error fetching data:", error.message);
  //     throw error;
  //   });
  const memberId = 12345;
  const baseUrl = axiosInstance.baseUrl;
  return axiosInstance
    .get(`${baseUrl}/api/v1/budgets/${memberId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error.message);
      throw error;
    });
}

function App() {
  const { data, isLoading, isError, error } = useQuery(
    "resourceData",
    fetchData,
    {
      onError: (error) => {
        if (error.response && error.response.status === 500) {
          console.error("Internal Server Error:", error.message);
        } else {
          console.error("Error fetching data:", error.message);
        }
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  //const categories = data.expenses.map((item) => item.category);

  return (
    <div>
      <Budget data={data.budgets} />
    </div>
  );
}

export default App;
