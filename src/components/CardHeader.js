import React,{ Component } from 'react';
import avatar from '../img/avatar.svg'


class ProfileInfo extends Component {

    render(){
        const {card} = this.props;
        return (
            <div className="card-header">
                <div className="userInfo">
                    <div className="avatar">
                        <img src={avatar} alt='' />
                    </div>
                    <div className="info">
                        <a href="/profile"><p>Alex Martini</p></a>
                        <p className="location"><i className="fa fa-globe" aria-hidden="true"></i>Santa Clara</p>
                    </div>
                </div>
            </div>
        );

    }
}

export default ProfileInfo;
