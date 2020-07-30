import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCourseDetail } from "../../actions/khoaHocActions";

export default function CourseDetail(props) {
  const { match, location } = props;

  const dispatch = useDispatch();

  const { chiTietKhoaHoc } = useSelector((state) => state.khoaHocReducer);

  useEffect(() => {
    // Sử dụng match để lấy params
    const maKhoaHoc = match.params.id;
    //Gọi API lấy chi tiết khóa học.
    dispatch(getCourseDetail(maKhoaHoc));
  }, []);


  console.log(chiTietKhoaHoc);

  return <div>
      {chiTietKhoaHoc.moTa}
  </div>;
}
