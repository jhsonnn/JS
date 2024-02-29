// toolkit
// ->이거 쓰면 필요한거 한번에 다 만들어줌

import { createSlice } from "@reduxjs/toolkit";
//Til 타입 방법1
type Til = {
  title: string;
  content: string;
};
// @reduxjs/toolkit
//툴 킷으로 만드는 것
// =>slice
const tilSlice = createSlice({
  initialState: {
    tils: [] as Til[], //글 목록
  },
  // redux가 내부적으로 구분하기 위한 이름
  name: "til",
  reducers: {
    //reducer가 action과 비슷함.
    //writeTil은 action creator의 역할
    writeTil(
      state,
      action: { type: string; payload: { title: string; content: string } }
    ) {
      state.tils.push(action.payload);
    },
    removeTil(state) {
      state.tils.pop();
    },
  },
});

const { actions, reducer } = tilSlice;

export const { writeTil, removeTil } = actions;
export const tilReducer = reducer;
