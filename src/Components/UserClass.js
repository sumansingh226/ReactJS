import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render() {
        const { name, location, contact } = this.props;
        const { count } = this.state;

        const handleClick = () => {
            this.setState({
                count: this.state.count + 1,
            });
        };

        return (
            <div className="user-card">
                <h1>{count}</h1>
                <button onClick={handleClick}>increate+1</button>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : {contact}</h4>
            </div>
        );
    }
}

export default UserClass;
