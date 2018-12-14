import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import '../sass/style.scss';

class ImageGrid extends Component {

    render() {
        const {user, posts, postLiker} = this.props;

        return (
            <div className="grid" role="grid">
                <ul className="cards-list container">
                    {posts.map((post, i) =>
                        (post.userid === user.id) ?
                        <Link to = {'/photo/'+post.id} key = {post.id} >
                            <Post
                            key = {post.id}
                            post = {post}
                            posts = {posts}
                            postLiker = {postLiker}
                            />
                        </Link>
                        :null
                    )}
                </ul>
            </div>
        );
    }
}

export default ImageGrid;
