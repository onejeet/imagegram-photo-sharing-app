import React, { Component } from 'react';
import '../App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import {setUsers, setCurrentUser, setPosts, setallComments, setSorting} from '../Actions';
import Profile from './Profile.js';
import Home from './Home.js';
import Photo from './Photo';
import Login from './Login.js';
import Comments from './Comments';

var DefaultAvatar = 'https://i.postimg.cc/FHh1RDbt/128px-Creative-Tail-Animal-kangoroo-svg.png';



class App extends Component {
    //state = {
    //    currentUser: {},
    //    users:[],
    //    posts:[],
    //    allComments:[],
    //    sorting:'timestamp',
    //}

    componentDidMount(){
        this.loadData();
        this.store = this.props.store;
    }

    loadData = () => {
        //const {users,posts, allComments} = this.state;
        const {users, posts, allComments} = this.props.store.getState();
        let user;
        let singlePost;
        let postComments;
        const url = `https://www.mocky.io/v2/5c14f7d73400005c1cb8e985`;

        //fetch data from foursquare
        fetch(url)
        .then((response) => {
            response.json().then((data) => {
                if (response.status === 200) {
                    data.forEach((item, i) => {
                        user = {id:item.id, name:item.name, following:item.following, followers: item.followers, avatar: item.avatar ? item.avatar : DefaultAvatar}
                        user['liked'] = [];
                        user['followersids'] = [];
                        user['followingids'] = [];
                        item.posts.forEach((post, i) => {
                            singlePost = {id:post.id, userid:item.id, likes: post.likes, timestamp: post.timestamp, imageUrl:post.imageUrl}
                            posts.push(singlePost);
                            postComments = {postid:post.id, comments:post.comments ? post.comments : []}
                            allComments.push(postComments);
                        });
                        users.push(user);
                    });
                } else {
                    console.log('Sorry, Unable to retrieve data from API');
                }
            //this.setState({users,posts, allComments});
            this.store.dispatch(setUsers(users));
            this.store.dispatch(setPosts(posts));
            this.store.dispatch(setallComments(allComments));
        }).catch((error) => {
            console.log('Call is Not Successful '+error);
        })
      }).catch((error) => {
            console.log('API Not Responding'+error)
        });

    }

    updateSorting = (sort) => {
        //this.setState({sorting: sort})
        this.store.dispatch(setSorting(sort));
    }

    updateComments = (comments) => {
        //this.setState({allComments : comments})
        this.store.dispatch(setallComments(comments));
    }

    updateCurrentUser = (userid) => {
        //const {users} = this.state;
        const {users} = this.store.getState();
        let newUser;
        users.forEach((user)=>{
            if(user.id === userid){
                newUser = user;
            }
            return true;
        });
        //this.setState({currentUser:newUser})
        this.store.dispatch(setCurrentUser(newUser));
    }

    followHandler = (followingid) => {
        //const {users, currentUser} = this.state;
        const {users, currentUser} = this.store.getState();
        let followersid = currentUser.id;
        users.map((user) => {
            if(user.id === followersid){
                if(user.followingids.indexOf(followingid) < 0){
                    user.following += 1;
                    user.followingids.push(followingid);
                }else{
                    user.following -= 1;
                    user.followingids.splice(followingid,1);
                }
            }

            if(user.id === followingid){
                if(user.followersids.indexOf(followersid) < 0){
                    user.followers += 1;
                    user.followersids.push(followersid);
                }else{
                    user.followers -= 1;
                    user.followersids.splice(followersid,1);
                }
            }
            return true;
        });
        //this.setState({users});
        this.store.dispatch(setUsers(users));
    }

    getUser = (userid) => {
        //const {users} = this.state;
        const {users} = this.store.getState();
        let user;
        users.some((u) => {
            if(u.id === userid){
                user = u;
                return true;
            }
            return false;
        });
        return user;
    }
    getComments = (postid) => {
        //const{allComments} = this.state;
        const{allComments} = this.store.getState();
        let filteredComments;
        allComments.some((commentObj) => {
            if(commentObj.postid === postid){
                    filteredComments = commentObj.comments !== undefined ? commentObj.comments : [];
                    return true;
            }
            return false;
        })
        return filteredComments;
    }

    deletePost = (postid) => {
        //const {posts, allComments, currentUser} = this.state;
        const {posts, allComments, currentUser} = this.store.getState();
        posts.some((post, i) => {
            if(post.id === postid){
                if(post.userid === currentUser.id){
                    posts.splice(i,1);
                    allComments.some((postComments, j) => {
                        if(postComments.postid === postid){
                            allComments.splice(j,1);
                            return true;
                        }
                        return null;
                    });
                    return true;
                }
            }
            return null;
        });
        //this.setState({posts, allComments});
        this.store.dispatch(setallComments(allComments));
        this.store.dispatch(setPosts(posts));
    }

    postLiker = (postid) => {
        //const {posts, currentUser} = this.state;
        const {posts, currentUser} = this.store.getState();

        posts.some((post, i) => {
            if(post.id === postid){
                let Likedindex = currentUser.liked.indexOf(postid)
                if(!(Likedindex >= 0)){
                    post.likes += 1;
                    currentUser.liked.push(postid);
                    return null;
                }else{
                    post.likes -= 1;
                    currentUser.liked.splice(Likedindex, 1);
                    return null;
                }
            }
            return null;
        });
        //this.setState({posts});
        this.store.dispatch(setPosts(posts));
    }

    sortPosts = (sorting, posts) => {
        let sortedPosts;
        if(sorting === 'timestamp'){
            sortedPosts = posts.sort(function(obj1, obj2) {
            	return Date.parse(obj2[sorting]) - Date.parse(obj1[sorting]);
            });
        } else{
            sortedPosts = posts.sort(function(obj1, obj2) {
            	return obj2[sorting] - obj1[sorting];
            });
        }
        return sortedPosts;
    }

    render() {
        //const {sorting, posts, users, currentUser, allComments} = this.state;
        const {sorting, posts, users, currentUser, allComments} = this.props.store.getState();
        let sortedPosts = this.sortPosts(sorting, posts);
        return (
            <Switch>
                <Route exact path='/login' render={() => (
                    <Login
                        users = {users}
                        updateCurrentUser = {this.updateCurrentUser}
                        currentUser = {currentUser}
                    />
                )}/>
                <Route exact path='/' render={() => (
                    <Home
                    currentUser = {currentUser}
                    posts = {sortedPosts}
                    postLiker = {this.postLiker}
                    deletePost = {this.deletePost}
                    sorting = {sorting}
                    sortPosts = {this.sortPosts}
                    getUser = {this.getUser}
                    followHandler = {this.followHandler}
                    allComments = {allComments}
                    updateComments = {this.updateComments}
                    getComments = {this.getComments}
                    />
                )}/>
                <Route exact path='/profile/:userid' render={(props) => (
                    <Profile
                    {...props}
                    currentUser = {currentUser}
                    getUser = {this.getUser}
                    posts = {sortedPosts}
                    sorting = {sorting}
                    sortPosts = {this.sortPosts}
                    deletePost = {this.deletePost}
                    updateSorting = {this.updateSorting}
                    postLiker = {this.postLiker}
                    followHandler = {this.followHandler}
                    />
                )}/>
                <Route exact path='/photo/:postid' render={(props) => (
                    <Photo
                    {...props}
                    posts = {sortedPosts}
                    currentUser = {currentUser}
                    deletePost = {this.deletePost}
                    postLiker = {this.postLiker}
                    getUser = {this.getUser}
                    followHandler = {this.followHandler}
                    allComments = {allComments}
                    updateComments = {this.updateComments}
                    getComments ={this.getComments}
                    />
                )}/>
                <Route exact path='/comments/:postid' render={(props) => (
                    <Comments
                    {...props}
                    posts = {sortedPosts}
                    currentUser = {currentUser}
                    getUser = {this.getUser}
                    allComments = {allComments}
                    updateComments = {this.updateComments}
                    getComments = {this.getComments}
                    />
                )}/>
                <Redirect from='*' to='/' />
            </Switch>
        );
        }
    }

export default App;
