import { useState } from "react";
import { APP_LOGO } from "../Utils/StringConstant";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
