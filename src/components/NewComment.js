import React,{ Component } from 'react';
import $ from 'jquery';


class Comments extends Component {
    state = {
        newComment:'',
    }
    componentDidMount(){

    }

    handleChange = (e) => {
        this.setState({newComment:e.target.value});
        $(e.target).keydown(function(e){
                if (e.which === 13) {
                    e.preventDefault();
                    $(e.target).siblings('.commentPost').click();
                }
            });
    }

    handleCommentPost = () => {
        const {newComment} = this.state;
        const {currentUser, postid, allComments, updateComments} = this.props;
        allComments.some((commentObj) => {
            if(commentObj.postid === postid){
                commentObj.comments.push({
                    'authorid': currentUser.id,
                    'text': newComment
                });
                return true;
            }
            return false;
        });
        updateComments(allComments);
        this.setState({newComment:''});
    }

    render(){
        const {currentUser} = this.props;
        return (
                    <p className ="new-comment-box">
                        <img src={currentUser.avatar} alt='avatar'></img>
                        <input type="text" name="comment" value={this.state.newComment} placeholder="add a comment" onChange = {(e) => this.handleChange(e)}/>
                        <button className="commentPost" onClick={(e) => this.handleCommentPost()} disabled={(this.state.newComment === '') ? 'disabled' : false}>Post</button>
                    </p>
        );

    }
}

export default Comments;
