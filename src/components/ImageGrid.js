import React,{ Component } from 'react';
import Post from './Post';
import '../sass/style.scss';

class ImageGrid extends Component {

    render() {
        const {user, posts, deletePost, postLiker} = this.props;

        return (
            <div className="grid" role="grid">
                <ul className="cards-list container">
                    {posts.map((post, i) =>
                        (post.userid === user.id) ?
                        <Post
                        key = {post.id}
                        post = {post}
                        deletePost = {deletePost}
                        posts = {posts}
                        postLiker = {postLiker}
                        />
                        :''
                    )}
                </ul>
            </div>
        );
    }
}

export default ImageGrid;
