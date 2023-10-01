import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        const name = this.props.name;
        const location = this.props.location;
        const contact = this.props.contact;
        const count = this.state.count

        return (
            <div className="user-card">
                <h1>{count}</h1>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : {contact}</h4>
            </div>
        );
    }
}

export default UserClass;
