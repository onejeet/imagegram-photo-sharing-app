import React, { Component } from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Profile from './Profile.js';
import Home from './Home.js';
import $ from 'jquery';



class App extends Component {
    state = {
        cards: [],
        sorting:'timestamp',
    }

    componentDidMount(){
        this.loadData();
    }

    loadData = () => {
        const {cards} = this.state;
        let card;
        const url = `http://www.mocky.io/v2/5c0a8fbe3500006c00a861de`;

        //fetch data from foursquare
        fetch(url)
        .then((response) => {
            response.json().then((data) => {
                if (response.status === 200) {
                  console.log('API Call Successful');
                    data.forEach((item, i) => {
                        card = {id:item.Image.substring(item.Image.lastIndexOf('/')+1), likes: item.likes, timestamp: item.timestamp, image:item.Image, liked:false};
                        cards.push(card);
                    });
                } else {
                    card = {text:"Sorry, Unable to retrieve data from API"}
                }
            // handle Errors
            this.setState({cards});
          })
      }).catch((error) => {
            console.log('API Not Responding'+error)
        });

    }

    updateSorting = (sorting) => {
        console.log('sorted');
        this.setState({sorting: sorting})
    }

    deleteCard = (id) => {
        const {cards} = this.state;
        cards.splice(id,1);
        this.setState({cards});
    }

    cardLiker = (target, item) => {
        const {cards} = this.state;
        cards.forEach((card)=>{
            if(card.id === item.id){
                if(!item.liked){
                    card.likes += 1;
                    card.liked = true;
                    $(target).css('color','red');
                    $(target).parent().parent().siblings('.card').find('img').css('cursor','pointer');
                }else{
                    card.likes -= 1;
                    card.liked = false;
                    $(target).css('color','grey');
                    $(target).parent().parent().siblings('.card').find('img').css('cursor','url("https://cdn.iconscout.com/icon/free/png-32/love-1120-894769.png"), auto');
                }
            }
        });
        this.setState({cards});
    }

    sortCards = (sorting,cards) => {
        let sortedCards;
        if(sorting === 'timestamp'){
            sortedCards = cards.sort(function(obj1, obj2) {
            	return Date.parse(obj2[sorting]) - Date.parse(obj1[sorting]);
            });
        } else{
            sortedCards = cards.sort(function(obj1, obj2) {
            	return obj2[sorting] - obj1[sorting];
            });
        }
        return sortedCards;
    }

    render() {
        const {sorting, cards} = this.state;
        return (
            <Switch>
                <Route exact path='/' render={() => (
                    <Home
                    cards = {cards}
                    sorting = {sorting}
                    sortCards = {this.sortCards}
                    cardLiker = {this.cardLiker}
                    deleteCard = {this.deleteCard}
                    updateSorting = {this.updateSorting}
                    />
                )}/>
                <Route exact path='/profile' render={() => (
                    <Profile
                    cards = {cards}
                    sorting = {sorting}
                    sortCards = {this.sortCards}
                    deleteCard = {this.deleteCard}
                    updateSorting = {this.updateSorting}
                    cardLiker = {this.cardLiker}
                    />
                )}/>
            </Switch>
        );
        }
    }

export default App;
