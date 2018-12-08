import React,{ Component } from 'react';


class CardDetail extends Component {

    render(){
        const {card, cardLiker} = this.props;
        let timestamp = new Date(card.timestamp).toUTCString();
        return (
            <div className="card-details">
                <div className="heart">
                    <i className="fa fa-heart"  onClick={(e) => cardLiker(e.target, card)}></i>
                    <p>{card.likes}</p>
                </div>
                <div className="timestamp">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <p>{timestamp}</p>
                </div>
            </div>
        );

    }
}

export default CardDetail;
