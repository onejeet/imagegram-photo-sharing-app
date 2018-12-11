import React,{ Component } from 'react';


class ProfileInfo extends Component {

    kFormatter = (num) => {
        let formattedNum;
        switch (true) {
            case (num > 999999999):
                formattedNum = (num/1000000000).toFixed(1) + 'b';
                break;
            case (num > 999999):
                formattedNum = (num/1000000).toFixed(1) + 'm';
                break;
            case (num > 999):
                formattedNum = (num/1000).toFixed(1) + 'k';
                break;
            default:
                formattedNum = num;
        }
        return formattedNum;
    }

    render(){
        const {user, sorting, updateSorting} = this.props;
        return (
            <div className="profile">
                <div className="userInfo">
                    <div className="avatar">
                        <img src={user.avatar} alt='' />
                    </div>
                    <p className="name">{user.name}</p>
                    <p>Followers: {this.kFormatter(user.followers)} • Following: {this.kFormatter(user.following)} </p>
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
