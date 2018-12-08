import React,{ Component } from 'react';
import Header from './Header';
import Card from './Card';
import CardHeader from './CardHeader';
import CardDetail from './CardDetail';
import '../sass/style.scss';

class Home extends Component {

    render() {
        const {cards, sorting, sortCards, deleteCard, cardLiker} = this.props;
        let finalCards = sortCards(sorting, cards);

        return (
        <div className="main">
            <Header
            cards = {cards}
            />
            <div className="card-view" role="grid">
            <ul className="cards-list container">
                {finalCards.map((card, i) =>
                    <div className="image-box" key ={card.id}>
                        <CardHeader
                        card = {card}
                        />
                        <Card
                        key = {card.id}
                        card = {card}
                        deleteCard = {deleteCard}
                        index = {i}
                        cards = {cards}
                        cardLiker = {cardLiker}
                        />
                        <CardDetail
                            card = {card}
                            cardLiker = {cardLiker}
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
