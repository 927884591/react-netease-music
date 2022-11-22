import { createSlice } from "@reduxjs/toolkit";

//获取session
import { sessionLocalStorage } from "helpers/session";
const session = sessionLocalStorage.getItem();

//初始化状态
const initialState: any = {
  isLogined: !!session.userId,
  user: session,
};

const loginSlice: any = createSlice({
  //定义分片名称,后续会根据这个名称创建不同的模块
  name: "login",

  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    // login提交
    login: (state, action) => {
      sessionLocalStorage.setItem(action.payload);
      state.isLogined = true;

      state.user = action.payload;
    },
    loginOut: (state) => {
      sessionLocalStorage.removeItem();
      state.isLogined = false;
      state.user = {};
    },
  },
});

// 导出login的方法
export const { login, loginOut } = loginSlice.actions;

// 默认导出
export default loginSlice.reducer;
