import React, { useState } from "react";
import { useMutation } from "react-query";
import axiosInstance from "../mocks/api/axios";

const Budget = ({ data }) => {
  const [budgetValue, setBudgetValue] = useState("");
  const [responseData, setResponseData] = useState(null);

  const mutation = useMutation(
    async ({ memberId, budgetValue }) => {
      const response = await axiosInstance.post(`/budgets/${memberId}`, {
        budgetValue,
      });
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log("예산 생성 요청 성공", data);
        setResponseData(data);
      },
      onError: (error) => {
        console.error("예산 생성 요청 실패", error);
        alert("예산 생성 중 문제가 발생했습니다. 다시 시도해 주세요.");
      },
    }
  );

  const handleChangeInput = (e) => {
    setBudgetValue(e.target.value);
  };

  // 예산 생성 버튼 클릭 시 호출되는 함수
  const handleClickCreateBudget = () => {
    const memberId = 123456;
    mutation.mutate({ memberId, budgetValue });
  };
  //   const handleChangeInput = (e) => {
  //     setBudgetValue(e.target.value);
  //   };

  //   const handleClickCreateBudget = () => {
  //     const id = "123456";

  //     // 클라이언트에서 POST 요청 보내기
  //     mutation.mutate({
  //       memberId: data.budget.id,
  //       budgetValue: data.budget.value,
  //     });

  //     // const newBudget = {
  //     //   memberId: id,
  //     //   budgetValue: budgetValue,
  //     // };

  //     console.log(data);
  //   };
  //   // 클라에서 POST 요청 보내기
  //   const mutation = useMutation(
  //     async (newBudget) => {
  //       try {
  //         const response = await axiosInstance.post(
  //           `/budgets/${newBudget.memberId}`,
  //           newBudget
  //         );
  //         return response.data; // 성공 시 응답 데이터 반환
  //       } catch (error) {
  //         throw error; // 실패 시 에러 처리
  //       }
  //     },
  //     {
  //       onSuccess: (data) => {
  //         console.log("예산 생성 요청 성공", data);
  //         setResponseData(data); // 응답 데이터에 접근하여 설정
  //       },
  //       onError: (error) => {
  //         console.error("예산 생성 요청 실패", error);
  //       },
  //     }
  //   );

  return (
    <div>
      <div>
        <div>예산생성하기</div>
        <div>
          <input value={budgetValue} onChange={handleChangeInput} />
          <button onClick={handleClickCreateBudget}>생성</button>
        </div>
      </div>
      <div>
        <div>생성한 데이터</div>
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      </div>
      <br />
      <div>
        <div>예산조회하기</div>
        <div>
          <input />
          <button>조회</button>
        </div>
      </div>
      <br />
      <div>
        <div>예산수정하기</div>
        <div>
          <input />
          <button>수정</button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Budget;
