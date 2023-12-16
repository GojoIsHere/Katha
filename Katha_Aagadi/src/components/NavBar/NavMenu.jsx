import login from "../../assets/Icons/login.png";
import logout from "../../assets/Icons/logout.png";
import home from "../../assets/Icons/home.png";
import cart from "../../assets/Icons/cart.svg";
import "./Navbar.css";
import Hamburger from "./Hamburger";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../reducers/userReducer";

export default function NavMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.loggedUser);
  let cartItems = useSelector((state) => state.cart);
  const handleLogOut = () => {
    dispatch(removeUser());
    window.sessionStorage.clear();
    window.localStorage.removeItem("userData");
    navigate("/login");
  };
  return (
    <>
      <ul className="nav-menu">
        <li>
          <Link to="/">
            <div className="nav-link">
              Home <img src={home} alt="" />
            </div>
          </Link>
        </li>
        <li>
          {loggedUser.length ? (
            <div className="nav-link logoutbtn" onClick={handleLogOut}>
              {loggedUser[0].username} <img src={logout} alt="" />
            </div>
          ) : (
            <Link to="/login">
              <div className="nav-link">
                Login <img src={login} alt="" />
              </div>
            </Link>
          )}
        </li>
        <li>
          <Link to="/cart">
            <div className="nav-link">
              Cart
              <div className="cart-icon">
                <img src={cart} alt="" />
                <label className="cart-count">{cartItems.length}</label>
              </div>
            </div>
          </Link>
        </li>
      </ul>
      <Hamburger />
    </>
  );
}
