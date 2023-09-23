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
        <img className="res-img" width={"200px"} height={"200px"} src="https://www.vedantu.com/seo/content-images/0867b892-336b-456a-89e7-a6056614cc26.png" alt="" />

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
