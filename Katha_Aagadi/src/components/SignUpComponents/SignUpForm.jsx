import "./signUp.css";
import warning from "../../assets/Icons/warning.png";
import { useState } from "react";
import { signUpService } from "../../services/userAccess/auth";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
  });
  const [isError, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, username, email, phone, password } = userDetails;
    const isEmptyField = fullname && username && email && phone && password;
    if (!isEmptyField) {
      setError(!isError);
    }
    signUpService(userDetails)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
    setUserDetails({
      fullname: "",
      username: "",
      email: "",
      phone: "",
      password: "",
    });
  };
  return (
    <div className="container-right">
      <h3>SIGN UP</h3>
      <div className="form-title">Please fill in details to create account</div>
      <form onSubmit={handleSubmit}>
        <div
          className={
            isError ? "form-input-error full-name" : "form-input full-name"
          }
        >
          <input
            type="text"
            placeholder="full name"
            value={userDetails.fullname}
            onChange={(e) =>
              setUserDetails({ ...userDetails, fullname: e.target.value })
            }
          />
          <img
            className={isError ? "error-img-display" : "error-img-none"}
            src={warning}
            alt=""
            width="25px"
            height="25px"
          />
        </div>
        <div
          className={
            isError ? "form-input-error username" : "form-input username"
          }
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="username"
            value={userDetails.username}
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
          />
          <img
            className={isError ? "error-img-display" : "error-img-none"}
            src={warning}
            alt=""
            width="25px"
            height="25px"
          />
        </div>
        <div
          className={isError ? "form-input-error email" : "form-input email"}
        >
          <input
            type="email"
            name="email"
            placeholder="myemail@email.com"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
          <img
            className={isError ? "error-img-display" : "error-img-none"}
            src={warning}
            alt=""
            width="25px"
            height="25px"
          />
        </div>
        <div
          className={isError ? "form-input-error phone" : "form-input phone"}
        >
          <input
            type="text"
            placeholder="phone"
            value={userDetails.phone}
            onChange={(e) => {
              setUserDetails({ ...userDetails, phone: e.target.value });
            }}
          />
          <img
            className={isError ? "error-img-display" : "error-img-none"}
            src={warning}
            alt=""
            width="25px"
            height="25px"
          />
        </div>
        <div
          className={
            isError ? "form-input-error password" : "form-input password"
          }
        >
          <input
            type="password"
            name="password"
            placeholder="password"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
          <img
            className={isError ? "error-img-display" : "error-img-none"}
            src={warning}
            alt=""
            width="25px"
            height="25px"
          />
        </div>
        <div className="gender-dropdown">
          <select
            name="gender"
            onChange={(e) =>
              setUserDetails({ ...userDetails, gender: e.target.value })
            }
          >
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="others" selected>
              others...
            </option>
          </select>
        </div>
        <button className="signup-btn" type="submit">
          SIGN UP
        </button>
      </form>
      <div className="already-created">
        Already Have An Account ? <a href="/login">Log in</a>
      </div>
    </div>
  );
}
