import React, { useState, useEffect } from "react";

export default function Form() {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
      name: false,
      email: false
  });
  //   const [form, setForm] = useState({
  //     values: {
  //       name: "",
  //       email: "",
  //     },
  //     errors: {
  //       name: "",
  //       email: "",
  //     },
  //   });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (evt) => {
    const { name, value } = evt.target;
    setErrors({
        ...errors,
        [name]: value ? false : true
    })
  };

  useEffect(() => {
    console.log("values", values);
  }, [values]);

  useEffect(() => {
      console.log("errors", errors)
  }, [errors])

  return (
    <div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          className="form-control"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {errors.name? (
          <div className="alert alert-danger"><span>Name không được để trống</span></div>
      ) : null}
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={values.email}
          className="form-control"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {errors.email? (
          <div className="alert alert-danger"><span>Email không được để trống</span></div>
      ) : null}
    </div>
  );
}
