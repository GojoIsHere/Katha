/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import warning from "../../assets/Icons/warning.png";
import "./Login.css";
import { loginService } from "../../services/userAccess/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/userReducer";
import { initializeCart } from "../../reducers/cartReducer";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
    isEmail: false,
  });
  const [isError, setError] = useState({ errorState: false, message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCredentials.username && userCredentials.password) {
      loginService(userCredentials)
        .then((result) => {
          dispatch(setUser(result));
          window.localStorage.setItem("userData", JSON.stringify(result));
          dispatch(initializeCart());
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      setError({ errorState: true, message: "enter credentials" });
    }
    setUserCredentials({
      username: "",
      password: "",
      isEmail: false,
    });
  };
  return (
    <div className="main-container wrapper">
      <div className="container-right">
        <h3>LOGIN</h3>
        <div className="form-title">Please Login To Continue</div>
        <div
          className={isError.errorState ? "error-txt-enable" : "error-txt-none"}
        >
          {isError.message}
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className={
              isError.errorState
                ? "form-input-error username"
                : "form-input username"
            }
          >
            <input
              type="text"
              name="username"
              value={userCredentials.username}
              placeholder="username/email"
              onChange={(e) => {
                {
                  const re = /^\S+@\S+\.\S+$/;
                  setUserCredentials({
                    ...userCredentials,
                    username: e.target.value,
                    isEmail: re.test(e.target.value),
                  });
                }
              }}
            />
            <img
              className={
                isError.errorState ? "error-img-display" : "error-img-none"
              }
              src={warning}
              alt=""
              width="25px"
              height="25px"
            />
          </div>
          <div
            className={
              isError.errorState
                ? "form-input-error password"
                : "form-input password"
            }
          >
            <input
              type="password"
              name="password"
              value={userCredentials.password}
              placeholder="password"
              onChange={(e) =>
                setUserCredentials({
                  ...userCredentials,
                  password: e.target.value,
                })
              }
            />
            <img
              className={
                isError.errorState ? "error-img-display" : "error-img-none"
              }
              src={warning}
              alt=""
              width="25px"
              height="25px"
            />
          </div>
          <button className="login-btn" type="submit">
            LOGIN
          </button>
        </form>
        <div className="create-account">
          Don't Have An Account ? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
