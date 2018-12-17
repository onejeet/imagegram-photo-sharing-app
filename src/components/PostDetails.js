import React,{ Component } from 'react';
import Comments from './Comments';


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
        const {post, postLiker, currentUser, getUser, allComments, updateComments} = this.props;
        let timestamp = new Date(post.timestamp).toUTCString();
        return (
            <div className="card-footer">
                <div className="card-details">
                    <div className="heart">
                        <i className={(currentUser.liked.indexOf(post.id)>= 0) ? 'fa fa-heart': 'fa fa-heart-o'} style={(currentUser.liked.indexOf(post.id)>= 0) ? {'color':'red'}: {'color':'inherit'}}  onClick={(e) => postLiker(post.id)}></i>
                        <p>{post.likes.toLocaleString()}</p>
                    </div>
                    <div className="timestamp">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <p>{this.postTimeFormatter(timestamp)}</p>
                    </div>
                </div>
                <Comments
                post = {post}
                getUser = {getUser}
                currentUser = {currentUser}
                allComments = {allComments}
                updateComments = {updateComments}
                />
            </div>
        );

    }
}

export default PostDetail;
