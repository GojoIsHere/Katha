import NavSearchBar from "./NavSearchBar";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <Link to="/">
          <NavLogo />
        </Link>
        <NavSearchBar />
        <NavMenu />
      </div>
    </div>
  );
}
