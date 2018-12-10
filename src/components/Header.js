import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import avatar from '../img/avatar.svg'
import Upload from './Upload';


class Header extends Component {

    render(){
        const {cards} = this.props;
        return (
        <header>
            <div className="head-content">
                <div className="branding">
                    <a href="/home"><img src={logo} alt="logo" /></a>
                </div>
                <div className="nav">
                <Link to='/profile'>
                    <div className="userInfo">
                        <div className="avatar">
                            <img src={avatar} alt='' />
                        </div>
                    </div>
                </Link>
                    <div className="upload">
                    <Upload
                    cards = {cards}
                    />
                    </div>
                </div>
            </div>

        </header>
        );

    }
}

export default Header;
