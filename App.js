import React from "react";
import ReactDOM from "react-dom";

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

const Body = (() => {
    return <div className="body">
        <div className="serachBar"> Search You Food here</div>
        <div className="restorent-container">
            <RestroRentCard />
        </div>

    </div>
})

const RestroRentCard = (() => {
    return <div className="res-card">
        <h3> Meghna Food</h3>
    </div>
})
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
