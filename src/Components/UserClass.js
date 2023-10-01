import React from "react";
import { GITHUB_USER_API } from "../Utils/StringConstant";

class UserClass extends React.Component {
    constructor(props) {
        //pas props to parent class
        super(props);
        // create states when the new instane of class is created
        this.state = {
            count: 0,
            user: {},
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch(GITHUB_USER_API);
            const githubUserData = await response.json();

            this.setState({
                user: { ...githubUserData },
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        // de-structure from props
        // const { name, location, contact } = this.props;
        //de-strcture from states
        const {
            name,
            location,
            login,
            avatar_url,
            bio,
            following,
            followers,
            public_repos,
        } = this.state.user;

        //update states in class based components
        const handleClick = () => {
            this.setState({
                count: this.state.count + 1,
            });
        };

        return (
            <div className="user-card">
                {/* <button onClick={handleClick}>increate+1</button> */}
                <div className="github-profile-card">
                    <img src={avatar_url} alt={name} />
                    <h3>{name}</h3>
                    <h3>Location : {location}</h3>
                    <h4>Contact : {login}</h4>
                    <p>{bio}</p>
                    <ul>
                        <li>Public repositories: {public_repos}</li>
                        <li>Followers: {followers}</li>
                        <li>Following: {following}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserClass;
