import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Card from './Card';
import CardHeader from './CardHeader';
import CardDetail from './CardDetail';
import '../sass/style.scss';

class Home extends Component {

    render() {
        const {posts, sorting, sortPosts, deletePost, postLiker} = this.props;
        let finalPosts = sortPosts(sorting, posts);

        if(Object.keys(this.props.currentUser).length === 0){
            console.log('not logged in!'+this.props.currentUser);
            return <Redirect to='/' />;
        }
        
        return (
        <div className="main">
            <Header
            cards = {posts}
            />
            <div className="card-view" role="grid">
            <ul className="cards-list container">
                {finalPosts.map((post, i) =>
                    <div className="image-box" key ={post.id}>
                        <CardHeader
                        card = {post}
                        />
                        <Card
                        key = {post.id}
                        card = {post}
                        deleteCard = {deletePost}
                        index = {i}
                        cards = {posts}
                        cardLiker = {postLiker}
                        />
                        <CardDetail
                            card = {post}
                            cardLiker = {postLiker}
                        />
                    </div>
                )}
            </ul>
            </div>
        </div>
        );
    }
}

export default Home;
