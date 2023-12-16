import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../reducers/userReducer";

export default function NavMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.loggedUser);

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
            <div className="nav-link">Home</div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="nav-link">Author</div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="nav-link">Store</div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="nav-link">Blog</div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="nav-link">Chat</div>
          </Link>
        </li>
        <li>
          {loggedUser.length ? (
            <div className="nav-link logoutbtn" onClick={handleLogOut}>
              {loggedUser[0].username}
              {/* <img src={logout} alt="" /> */}
            </div>
          ) : (
            <Link to="/login">
              <div className="nav-link" id="login">
                Login
                {/* Login <img src={login} alt="" /> */}
              </div>
            </Link>
          )}
        </li>
      </ul>
    </>
  );
}
