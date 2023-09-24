 const Header = () => {
    return (
        <div className="header">
            <div className="logo_container">
                <img
                    src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?w=2000"
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