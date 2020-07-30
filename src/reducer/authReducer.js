// Reduce xu ly dang nhap, dang ky, dang xuat
//Sau khi dang nhap minh se luu thong tin user trong reducer nay

import { LOGIN } from "../constants/authConstants";

const userInfo = localStorage.getItem("userInfo");
// JSON.parse(null) => bao loi

const initialState = {
  userInfo: userInfo ? JSON.parse(userInfo) : {},
  loading: false,
  error: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.SUCCESS: {
      return {
        ...state,
        userInfo: action.payload.data,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
