import React,{ Component } from 'react';
import NewComment from './NewComment';
import { Link } from 'react-router-dom';


class PostDetail extends Component {

    postTimeFormatter = (timestamp) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
                              "July", "August", "September", "October", "November", "December"
                            ];

        let date = Date.parse(timestamp);
        date = new Date(date);
        return monthNames[date.getMonth()]+" "+ date.getDate()+ ", "+date.getFullYear();
    }

    render(){
        const {post, postLiker, currentUser, allComments, updateComments, getComments} = this.props;
        let timestamp = new Date(post.timestamp).toUTCString();
        let comments = getComments(post.id);
        return (
            <div className="card-footer">
                <div className="card-details">
                    <div className="heart">
                        <i className={(currentUser.liked.indexOf(post.id)>= 0) ? 'fa fa-heart': 'fa fa-heart-o'} style={(currentUser.liked.indexOf(post.id)>= 0) ? {'color':'red'}: {'color':'inherit'}}  onClick={(e) => postLiker(post.id)}></i>
                        <p>{post.likes.toLocaleString()} likes</p>
                    </div>
                    <div className="timestamp">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <p>{this.postTimeFormatter(timestamp)}</p>
                    </div>
                </div>
                <div className="comment-section">
                    { comments.length > 0 ?
                        <Link to={'/comments/'+post.id}>view all {comments.length} comments</Link>
                        : null
                    }
                    <NewComment
                    currentUser = {currentUser}
                    allComments = {allComments}
                    postid = {post.id}
                    updateComments = {updateComments}
                    />
                </div>
            </div>
        );

    }
}

export default PostDetail;
