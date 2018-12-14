import React,{ Component } from 'react';


class Post extends Component {

    render(){
        const {post, postLiker} = this.props;

        return (
                <li tabIndex="0" id={post.id} className="card" role="gridcell">
                    <img src={post.imageUrl} alt=' ' onDoubleClick= {() => postLiker(post.id)}/>
                </li>
        );

    }
}

export default Post;
