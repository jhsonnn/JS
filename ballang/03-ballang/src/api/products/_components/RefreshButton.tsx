"use client";

import { useQueryClient } from "@tanstack/react-query";

function RefreshButton() {
  const queryClient = useQueryClient();

  const handleClickRefresh = () => {
    //기존 쿼리 무효화 => 새롭게 받아옴(새로고침)
    //invalidate
    queryClient.invalidateQueries({ queryKey: ["products"], exact: true });
  };

  return (
    <button onClick={handleClickRefresh} className='button'>
      새로고침
    </button>
  );
}

export default RefreshButton;
