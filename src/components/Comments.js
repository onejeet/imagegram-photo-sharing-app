import React,{ Component } from 'react';
import NewComment from './NewComment';


class Comments extends Component {

    filterComments = (allComments, postid) => {
        let filteredComments;
        allComments.some((commentObj) => {
            if(commentObj.postid === postid){
                    filteredComments = commentObj.comments !== undefined ? commentObj.comments : [];
                    return true;
            }
        })
        return filteredComments;
    }


    render(){
        const {post, currentUser, getUser, allComments, updateComments} = this.props;
        let timestamp = new Date(post.timestamp).toUTCString();

        let commentArray = this.filterComments(allComments, post.id);
        return (
                <div className="comments">
                    {commentArray.length > 0 ?
                        commentArray.map((comment, i) =>
                        <p key={i}><img src={getUser(comment.authorid).avatar}></img>
                        {comment.text}
                        </p>
                        )
                    : null
                    }
                    <NewComment
                    currentUser = {currentUser}
                    allComments = {allComments}
                    postid = {post.id}
                    updateComments = {updateComments}
                    />
                </div>
        );

    }
}

export default Comments;
