import axios, {setToken} from "../utils/axiosClient";

import { LOGIN } from "../constants/authConstants";


export const login = (values) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN.REQUEST,
    });

    axios
      .post("/QuanLyNguoiDung/DangNhap", values)
      .then((result) => {
        // Luu thong tin user xuong localstorage
        localStorage.setItem("userInfo", JSON.stringify(result.data));
        // setToken Authorization len header
        setToken(result.data.accessToken);
        dispatch({
          type: LOGIN.SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({ type: LOGIN.FAIL });
      });
  };
};
