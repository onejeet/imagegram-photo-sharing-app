import React,{ Component } from 'react';
import $ from 'jquery';


class Post extends Component {

    handleCardHover = (e) => {
        $(e.target).siblings('i').css('display','block');
    }
    handleCardHoverOut = (e) => {
        $(e.target).siblings('i').css('display','none');
    }

    render(){
        const {post,deletePost,postLiker} = this.props;

        return (
            <li tabIndex="0" id={post.id} className="card" role="gridcell" onMouseOver = {(e) => this.handleCardHover(e)} onMouseLeave = {(e) => this.handleCardHoverOut(e)}>
                <img src={post.imageUrl} alt=' ' onDoubleClick= {() => postLiker(post.id)}/>

                 <i className="fa fa-trash trash" aria-hidden="true" title="Delete" onClick = {() => deletePost(post.id)}></i>
            </li>
        );

    }
}

export default Post;
