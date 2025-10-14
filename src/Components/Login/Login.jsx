import axios from "axios";
import { Formik ,useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../UserContext/UserContext";

export default function Loign() {
  let validationSchema = Yup.object({
    email: Yup.string().email("Email Is Invalid").required("Email Is Required"),

    password: Yup.string()
      .matches(
        /^[A-Z][a-z0-9]{5,}$/,
        "Password Must Start With Uppercase Letter And Be 6 Chars At Least"
      )
      .required("Password Is Required"),
  });

  const [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  let { setUserToken } = useContext(UserContext);

  async function submitLog(values) {
    setLoading(true);
    let { data } = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.message);
        
      });

    if (data.message === "success") {
      setLoading(false);
      localStorage.setItem("userToken", data.token);
      setUserToken(data.token);
      navigate("/");
    }
  }
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: submitLog,
  });

  return (
    <>
      <div className="rounded shadow w-50   w-md-50 mx-auto my-4 p-3 bg-light">
        {error ?
          <div className="alert alert-danger">{error}</div>
          : ""}
        <h2>Login Now</h2>

        <form onSubmit={formik.handleSubmit}>
          <label className="mt-3" htmlFor="email">
            Email:
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            id="email"
            type="mail"
            className="form-control focus-input"
          />
          {!(formik.errors.email && formik.touched.email) ? (
            ""
          ) : (
            <p className="text-danger m-0">{formik.errors.email}</p>
          )}

          <label className="mt-3" htmlFor="password">
            Password:
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            id="password"
            type="password"
            className="form-control focus-input"
          />
          {!(formik.errors.password && formik.touched.password) ? (
            ""
          ) : (
            <p className="text-danger m-0">{formik.errors.password}</p>
          )}

          <button type="submit" className="btn me-1 btn-outline-success my-3">
              Login
            </button>

          {loading ? (
            <button className="btn btn-success my-3">
              <i className="fas fa-spinner fa-spin"></i>
            </button>
          ) : (
            ""
          )}
          <Link className="ms-1 btn" to="/register">
            Register Now?
          </Link>
        </form>
      </div>
    </>
  );
}