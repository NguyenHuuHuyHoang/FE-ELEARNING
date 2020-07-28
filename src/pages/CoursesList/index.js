import React, {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getCoursesList } from "../../actions/khoaHocActions";



export default function CoursesList() {
  const { danhSachKhoaHoc, loading, error } = useSelector(
    (state) => state.khoaHocReducer
  );
  console.log(danhSachKhoaHoc);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesList());
  }, []);
  return <div>CoursesList</div>;
}
