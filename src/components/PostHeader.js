import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class PostHeader extends Component {

    render(){
        const {post, getUser} = this.props;
        let user = getUser(post.userid);
        return (
            <div className="card-header">
                <div className="wrapper">
                    <div className="avatar">
                        <img src={user.avatar} alt='' />
                    </div>
                    <div className="info">
                        <Link to={"/profile?id="+user.id}><p>{user.id}</p></Link>
                        <p className="location"><i className="fa fa-globe" aria-hidden="true"></i>Santa Clara</p>
                    </div>
                </div>
            </div>
        );

    }
}

export default PostHeader;
