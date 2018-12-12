import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';


class PostHeader extends Component {

    triggerPostOptions = (e, postid) => {

        $('#'+postid).toggleClass('show');
    }

    render(){
        const {post, getUser, deletePost, currentUser} = this.props;
        let user = getUser(post.userid);
        return (
            <div className="card-header">
                <div className="wrapper">
                    <div className="userInfo">
                        <img src={user.avatar} alt='' />
                        <div className="info">
                            <Link to={"/profile?id="+user.id}><p>{user.id}</p></Link>
                            <p className="location">Santa Clara</p>
                        </div>
                    </div>
                    <div className="options">
                        <i className="fa fa-ellipsis-v" aria-hidden="true" onClick={(e) => this.triggerPostOptions(e,post.id)}></i>
                    </div>
                </div>

                <div className="post-options-box" id={post.id}>
                    { (post.userid === currentUser.id) ?
                        <ul>
                            <li><i className="fa fa-pencil" aria-hidden="true"></i>Edit</li>
                            <li onClick={() => deletePost(post.id)} title="Delete"> <i className="fa fa-trash-o" aria-hidden="true"></i>Delete</li>
                        </ul>
                    : null
                    }
                    <ul>
                        <li> <i className="fa fa-user-circle-o" aria-hidden="true"></i>Follow</li>
                        <li> <i className="fa fa-share-alt" aria-hidden="true"></i>Share</li>
                    </ul>
                </div>
            </div>
        );

    }
}

export default PostHeader;
