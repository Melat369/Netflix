import "./header.css";
import logo from "../../assets/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function HeaderTop() {
  return (
    <div className="header_outer_container">
      <div className="header_container mt-3">
        <div className="header_left">
          <ul className=" ">
            <li>
              <img src={logo} alt="" width={100} />
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li className="me-3">
              <SearchIcon />
            </li>
            <li className="me-3">
              <NotificationsActiveIcon />
            </li>
            <li className="me-3">
              <AccountBoxIcon />
            </li>
            <li className="me-3">
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
