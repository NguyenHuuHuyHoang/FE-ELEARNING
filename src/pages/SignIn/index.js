import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authActions";
import { Redirect } from "react-router-dom";

export default function Signin() {
  const [values, setValues] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.authReducer);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(login(values));
  };

 if (userInfo.maLoaiNguoiDung === "GV") {
     return <Redirect to="/course-management" />
 }

 if (userInfo.maLoaiNguoiDung === "HV") {
    return <Redirect to="/" />
}


  return (
    <div>
      <div className="form-group">
        <label>Tai khoan</label>
        <input
          type="text"
          className="form-control"
          name="taiKhoan"
          value={values.taiKhoan}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Mat khau</label>
        <input
          type="text"
          className="form-control"
          name="matKhau"
          value={values.matKhau}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}
