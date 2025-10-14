import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../UserContext/UserContext";

export default function Register() {
  let phoneregex =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Min Length Of Name Is 3 Chars")
      .max(20, "Max Length Of Name Is 20 Chars")
      .required("Name Is Required"),
    email: Yup.string().email("Email Is Invalid").required("Email Is Required"),
    phone: Yup.string()
      .matches(phoneregex, "Phone IS Invalid")
      .required("Phone Is Required"),
    password: Yup.string()
      .matches(
        /^[A-Z][a-z0-9]{5,}$/,
        "Password Must Start With Uppercase Letter And Be 6 Chars At Least"
      )
      .required("Password Is Required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Repassword Must Match Password")
      .required("Repassword Is Required"),
  });

  const [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  let { setUserToken } = useContext(UserContext);
  async function submitReg(values) {
    setLoading(true);
    let { data } = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
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
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: submitReg,
  });

  return (
    <>
      <div className="rounded shadow w-50 w-md-50 mx-auto my-4 p-3 bg-light">
        {error ? <div className="alert alert-danger">{error}</div> : ""}
        <h2>Register Now</h2>
        <form onSubmit={formik.handleSubmit}>
          <label className="mt-2" htmlFor="name">
            Name:*
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
            id="name"
            type="text"
            className="form-control focus-input"
          />
          {!(formik.errors.name && formik.touched.name) ? (
            ""
          ) : (
            <p className="text-danger m-0">{formik.errors.name}</p>
          )}

          <label className="mt-3" htmlFor="email">
            Email:*
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

          <label className="mt-3" htmlFor="phone">
            Phone:*
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            name="phone"
            id="phone"
            type="tel"
            className="form-control focus-input"
          />
          {!(formik.errors.phone && formik.touched.phone) ? (
            ""
          ) : (
            <p className="text-danger m-0">{formik.errors.phone}</p>
          )}

          <label className="mt-3" htmlFor="password">
            Password:*
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

          <label className="mt-3" htmlFor="repassword">
            Repassword:*
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rePassword}
            name="rePassword"
            id="repassword"
            type="password"
            className="form-control focus-input"
          />
          {!(formik.errors.rePassword && formik.touched.rePassword) ? (
            ""
          ) : (
            <p className="text-danger m-0">{formik.errors.rePassword}</p>
          )}

          <button
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
              className="btn btn-outline-success me-1 my-3"
            >
              Register
            </button>

          {loading ? (
            <button
              className="btn btn-success my-3"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
}
