import React,{ Component } from 'react';
import Card from './Card';
import '../sass/style.scss';

class ImageGrid extends Component {

    render() {
        const {sorting, cards, deleteCard, sortCards, cardLiker} = this.props;
        let finalList = sortCards(sorting, cards);
        return (
            <div className="grid" role="grid">
                <ul className="cards-list container">
                    {finalList.map((card, i) =>
                        <Card
                        key = {card.id}
                        card = {card}
                        deleteCard = {deleteCard}
                        index = {i}
                        cards = {cards}
                        cardLiker = {cardLiker}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

export default ImageGrid;
