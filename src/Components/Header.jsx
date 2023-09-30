import { useState } from "react";
import { APP_LOGO } from "../Utils/StringConstant";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const handleLoginLogout = () => {
    if (loginBtn === "Login") {
      setLoginBtn("Logout");
    } else {
      setLoginBtn("Login");
    }
  };
  return (
    <div className="header">
      <div className="logo_container">
        <img src={APP_LOGO} alt="" className="logo" />
      </div>
      <div className="nav_items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <li className="login-logout-ntn" onClick={handleLoginLogout}>
            {loginBtn}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
