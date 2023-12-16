import logo from "../../assets/Icons/logo.png";
import "./Navbar.css";

export default function NavIcons() {
  return (
    <div className="nav-logo">
      <img src={logo} alt="logo" />
      <a href="#" className="logo">
        Hamro <span className="logo2">Madira</span>
      </a>
    </div>
  );
}
