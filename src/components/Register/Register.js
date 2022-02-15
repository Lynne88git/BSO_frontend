import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Register.scss";

const Register = () => {
  const { registerUser, wait } = useContext(UserContext);
  const [errMsg, setErrMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  ///

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!Object.values(formData).every((val) => val.trim() !== "")) {
      setSuccessMsg(false);
      setErrMsg("Please Fill in all Required Fields!");
      return;
    }

    const data = await registerUser(formData);

    if (data.success) {
      e.target.reset();
      setSuccessMsg("You have successfully registered.");
      setErrMsg(false);
    } else if (!data.success && data.message) {
      setSuccessMsg(false);
      setErrMsg(data.message);
    }
  };

  return (
    <div className="loginForm">
      <div className="top-content">
        <div className="inner-bg">
          <div className="container">
            <div className="row d-flex justify-content-center flex-nowrap">
              <div className="col-sm-8 col-sm-offset-2 text">
                <h1>Register</h1>
              </div>
            </div>

            <div className="row d-flex justify-content-center flex-nowrap">
              <div className="col-sm-6 col-sm-offset-3 form-box">
                <div className="form-top">
                  <div className="form-top-left">
                    <p>
                      Please register to our site using your email and password
                    </p>
                  </div>
                  <div className="form-top-right">
                    <i className="fa fa-lock"></i>
                  </div>
                </div>
                <div className="form-bottom">
                  <form onSubmit={submitForm} className="registration-form">
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
                        required
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
                    {successMsg && (
                      <div className="success-msg">{successMsg}</div>
                    )}
                    {errMsg && <div className="err-msg">{errMsg}</div>}
                    <button type="submit" className="btn mt-5" disabled={wait}>
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center flex-nowrap">
              <div className="col-sm-6 col-sm-offset-3 social-login">
                <h3>
                  Already registered? Log in
                  <Link to="/login"> HERE</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
