import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Post from './Post';
import PostHeader from './PostHeader';
import PostDetails from './PostDetails';
import '../sass/style.scss';

class Home extends Component {

    render() {
        const {posts, sorting, sortPosts, deletePost, postLiker, getUser, currentUser, followHandler, allComments, updateComments, getComments} = this.props;
        let finalPosts = sortPosts(sorting, posts);

        if(Object.keys(this.props.currentUser).length === 0){
            console.log('not logged in!');
            return <Redirect to='/login' />;
        }

        return (
        <div className="main">
            <Header
            cards = {posts}
            currentUser = {currentUser}
            />
            <div className="full-view" role="grid">
                    <ul className="cards-list container">
                        <div className="overlay-container">
                        {finalPosts.map((post) =>
                            <div className="image-box" key ={post.id}>
                                <PostHeader
                                post = {post}
                                getUser = {getUser}
                                deletePost = {deletePost}
                                currentUser = {currentUser}
                                followHandler = {followHandler}
                                />
                                <Post
                                key = {post.id}
                                post = {post}
                                deletePost = {deletePost}
                                postLiker = {postLiker}
                                />
                                <PostDetails
                                    post = {post}
                                    postLiker = {postLiker}
                                    currentUser = {currentUser}
                                    getUser = {getUser}
                                    allComments = {allComments}
                                    updateComments = {updateComments}
                                    getComments = {getComments}
                                />
                            </div>
                        )}
                        </div>
                    </ul>
            </div>
        </div>
        );
    }
}

export default Home;
