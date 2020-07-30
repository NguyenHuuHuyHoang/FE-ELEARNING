import {
  GET_COURSES_LIST,
  GET_COURSES_DETAIL,
} from "../constants/khoaHocConstants";
import axios from "../utils/axiosClient";

export const getCoursesList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_COURSES_LIST.REQUEST,
    });

    axios
      .get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
      .then((result) => {
        dispatch({
          type: GET_COURSES_LIST.SUCCESS,
          //Thường data lấy từ API về thì đưa vào payload
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_COURSES_LIST.FAIL,
        });
      });
  };
};

export const getCourseDetail = (maKhoaHoc) => {
  return (dispatch) => {
    dispatch({
      type: GET_COURSES_DETAIL.REQUEST,
    });

    axios
      .get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
      .then((result) => {
        dispatch({
          type: GET_COURSES_DETAIL.SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_COURSES_DETAIL.FAIL,
        });
      });
  };
};
