import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';
import logo from '../img/logo.png';
import '../sass/style.scss';

class Login extends Component {

    render() {
        const {users,currentUser, updateCurrentUser} = this.props;
        return (
        <div className="main">
            <div className="login-logo">
                <img  src={logo} alt='logo'/>
            </div>
            <div className="user-list" role="grid">
            { !(Object.keys(this.props.currentUser).length === 0)
                ? <h2> Logged in as: {currentUser.name} <Link to="/"><p> Go to Home</p></Link> </h2>
                : <h2>Login As:</h2>
             }
                <ul>
                    {users.map((user, i) =>
                        <UserCard
                        key = {user.id}
                        user = {user}
                        updateCurrentUser = {updateCurrentUser}
                        />
                    )
                    }
                </ul>
            </div>
        </div>
        );
    }
}

export default Login;
