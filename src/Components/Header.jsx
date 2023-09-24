import { APP_LOGO } from "../Utils/StringConstant";

 const Header = () => {
     
    return (
        <div className="header">
            <div className="logo_container">
                <img
                src={APP_LOGO}
                    alt=""
                    className="logo"
                />
            </div>
            <div className="nav_items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;