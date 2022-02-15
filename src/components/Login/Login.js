import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import "./Login.scss";

const Login = () => {
  const { loginUser, wait, loggedInCheck } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!Object.values(formData).every((val) => val.trim() !== "")) {
      setErrMsg("Please Fill in all Required Fields!");
      return;
    }

    const data = await loginUser(formData);
    if (data.success) {
      e.target.reset();
      setRedirect("Redirecting...");
      const user = await loggedInCheck();

      if (user) {
        navigate("/");
      }

      return;
    }
    setErrMsg(data.message);
  };

  return (
    <div className="loginForm">
      <div className="top-content">
        <div className="inner-bg">
          <div className="container">
            <div className="row d-flex justify-content-center flex-nowrap">
              <div className="col-sm-8 col-sm-offset-2 text">
                <h1>Login</h1>
              </div>
            </div>

            <div className="row d-flex justify-content-center flex-nowrap">
              <div className="col-sm-6 col-sm-offset-3 form-box">
                <div className="form-top">
                  <div className="form-top-left">
                    <h3>Login to our site</h3>
                    <p>Enter your email and password to log on:</p>
                  </div>
                  <div className="form-top-right">
                    <i className="fa fa-lock"></i>
                  </div>
                </div>
                <div className="form-bottom">
                  <form onSubmit={submitForm} className="login-form">
                    <div className="form-group">
                      <label className="sr-only py-2">Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="email form-control"
                        value={formData.email}
                        onChange={onChangeInput}
                      />
                    </div>
                    <div className="form-group">
                      <label className="sr-only py-2">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="password form-control"
                        value={formData.password}
                        onChange={onChangeInput}
                        required
                      />
                    </div>
                    {errMsg && <div className="err-msg">{errMsg}</div>}
                    {redirect ? (
                      redirect
                    ) : (
                      <button
                        type="submit"
                        className="btn mt-5"
                        disabled={wait}
                      >
                        Sign in
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center flex-nowrap">
              <div className="col-sm-6 col-sm-offset-3 social-login">
                <h3>
                  Not registered yet? Sign up
                  <Link to="/register"> HERE</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
