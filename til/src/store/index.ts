import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";

// 스토어 만들기
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
