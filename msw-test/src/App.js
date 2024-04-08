import React from "react";
import { useQuery } from "react-query";
import testData from "./mocks/api/data/testData";

function fetchData() {
  // fetch 대신에 testData를 반환하도록 수정
  return Promise.resolve(testData)
    .then((data) => data)
    .catch((error) => {
      console.error("Error fetching data:", error.message);
      throw error;
    });
}

function App() {
  const { data, isLoading, isError, error, refetch } = useQuery(
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
  console.log(testData);

  const categories = data.expenses.map((item) => item.category);

  return (
    <div>
      <h1>msw로 데이터 받아오기 연습 :</h1>
      <div>
        전체 :<pre>{JSON.stringify(data, null, 2)}</pre>
      </div>

      <div>
        카테고리 :
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
