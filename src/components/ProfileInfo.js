import React,{ Component } from 'react';


class ProfileInfo extends Component {

    numberFormatter = (num) => {
        let formattedNum;
        switch (true) {
            case (num > 999999999):
                formattedNum = (num/1000000000).toFixed(1) + 'b';
                break;
            case (num > 999999):
                formattedNum = (num/1000000).toFixed(1) + 'm';
                break;
            case (num > 9999):
                formattedNum = (num/1000).toFixed(1) + 'k';
                break;
            default:
                formattedNum = num.toLocaleString();
        }
        return formattedNum;
    }

    render(){
        const {user, sorting, updateSorting, followHandler, currentUser} = this.props;
        return (
            <div className="profile">
                <div className="userInfo">
                    <div className="avatar">
                        <img src={user.avatar} alt='' />
                    </div>
                    <p className="name">{user.name}</p>
                    <p>Followers: {this.numberFormatter(user.followers)} • Following: {this.numberFormatter(user.following)} </p>
                    { (user.id !== currentUser.id) ?
                        <button className="follow" style={user.followersids.indexOf(currentUser.id) >= 0 ? {'backgroundColor': '#ffffff', 'color':'#000000', 'border':'1px solid #198cff' } : null} onClick = {() => followHandler(user.id)}>{user.followersids.indexOf(currentUser.id) < 0 ? 'Follow':'Unfollow'}</button>
                        : null
                    }
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
