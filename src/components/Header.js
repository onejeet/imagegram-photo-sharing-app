import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import Upload from './Upload';


class Header extends Component {

    render(){
        const {currentUser} = this.props;
        return (
        <header>
            <div className="head-content">
                <div className="branding">
                    <Link to="/home"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="nav">
                    <div className="userInfo">
                        <Link to={'/profile/'+currentUser.id}>
                        <div className="avatar">
                            <img src={currentUser.avatar} alt='' title={currentUser.name}/>
                        </div>
                        </Link>
                    </div>
                    <Upload
                    />
                </div>
            </div>

        </header>
        );

    }
}

export default Header;
