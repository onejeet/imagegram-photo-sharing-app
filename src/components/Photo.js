import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Post from './Post';
import PostHeader from './PostHeader';
import PostDetails from './PostDetails';
import '../sass/style.scss';

class Photo extends Component {

    render() {
        const {posts, getUser, deletePost, postLiker,  currentUser} = this.props;
        let post = posts.filter((post) =>  post.id === this.props.match.params.postid)[0];
        console.log(post);
        if(Object.keys(this.props.currentUser).length === 0){
            console.log('not logged in!');
            return <Redirect to='/' />;
        }
        return (
        <div className="main">
            <Header
            currentUser = {currentUser}
            />
            <div className="full-view" role="grid">
                    <ul className="cards-list container">
                        <div className="overlay-container">
                            <div className="image-box" key ={post.id}>
                                <PostHeader
                                post = {post}
                                getUser = {getUser}
                                deletePost = {deletePost}
                                currentUser = {currentUser}
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
                                />
                            </div>
                        </div>
                    </ul>
            </div>
        </div>
        );
    }
}

export default Photo;
