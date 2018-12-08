import React,{ Component } from 'react';
import avatar from '../img/avatar.svg'


class ProfileInfo extends Component {

    render(){
        const {sorting, updateSorting} = this.props;
        return (
            <div className="profile">
                <div className="userInfo">
                    <div className="avatar">
                        <img src={avatar} alt='' />
                    </div>
                    <p className="name">Alex Martini</p>
                    <p>Followers: 219 • Following: 3.4k </p>
                    <button className="follow">Follow</button>
                </div>
                <div className="actions">
                    <div className="filter">
                        <p> Sort By :
                        <select
                        value={sorting}
                        onChange={(event) => updateSorting(event.target.value)}
                        >
                        <option value='timestamp'> Timeline </option>
                        <option value='likes'> Likes </option>
                        </select>
                        </p>
                    </div>
                </div>
            </div>
        );

    }
}

export default ProfileInfo;
