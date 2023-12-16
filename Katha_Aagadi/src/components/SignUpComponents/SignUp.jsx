import SignUpForm from "./SignUpForm";
import SignUpImg from "./SignUpImg";
import "./signUp.css";

export default function SignUp() {
  return (
    <div className="main-container">
      <SignUpImg />
      <SignUpForm />
    </div>
  );
}
