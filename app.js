const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "zyz" },
    "Hello world!"
);

const parent = React.createElement(
    "div",
    { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "heading", key: 0 }, "heading1.1 child"),
        React.createElement("h1", { id: "heading", key: 1 }, "heading1.2 child"),
    ]),
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "heading", key: 0 }, "heading2.1 child"),
        React.createElement("h1", { id: "heading", key: 1 }, "heading2.1 child"),
    ])]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
