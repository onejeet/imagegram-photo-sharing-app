import React,{ Component } from 'react';
import NewComment from './NewComment';
import Header from './Header';


class Comments extends Component {

    getPost = (postid, posts) => {
        let post;
        posts.some((p) => {
            if(p.id === postid){
                post = p;
                return true;
            }
            return false;
        });
        return post;
    }


    render(){
        const {posts, currentUser, getUser, allComments, updateComments, getComments} = this.props;
        let postid = this.props.match.params.postid;

        let post = this.getPost(postid, posts);
        let commentArray = getComments(postid);
        return (
            <div className="main">
                <Header
                currentUser = {currentUser}
                />
                <div className="comments">
                    {commentArray.length > 0 ?
                        commentArray.map((comment, i) =>
                        <p key={i}><img src={getUser(comment.authorid).avatar} alt='avatar'></img>
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
            </div>
        );

    }
}

export default Comments;
