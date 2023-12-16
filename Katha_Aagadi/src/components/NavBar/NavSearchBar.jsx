import searchIcon from "../../assets/Icons/search.png";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { filterSearchItem } from "../../reducers/searchReducer";

export default function NavSearchBar() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const searchVal = e.target.value.toLowerCase();
    dispatch(filterSearchItem(searchVal));
  };
  return (
    <div className="nav-searchbar">
      <img src={searchIcon} alt="searchicon" />
      <input type="text" onChange={handleChange} />
    </div>
  );
}
