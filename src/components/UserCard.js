import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class UserCard extends Component {

    handleClick = (user) => {
        const {updateCurrentUser} = this.props;
        updateCurrentUser(user.id);
    }

    jsUcfirst = (string) => {
        let name = string.split(' ');
        name.map((word, i) => {
            name[i] = word.charAt(0).toUpperCase() + word.slice(1);
            return true;
        });
        return name.join(' ');
    }

    render(){
        const {user} = this.props;

        return (
            <Link to="/">
            <li tabIndex="0" id={user.id} className="user-login-box" role="gridcell" onClick = {() => this.handleClick(user)}>
                 {this.jsUcfirst(user.name)}
                 <span className="username"> {user.id}</span>
            </li>
            </Link>
        );

    }
}

export default UserCard;
