import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';


class Card extends Component {

    handleCardHover = (e) => {
        $(e.target).siblings('i').css('display','block');
    }
    handleCardHoverOut = (e) => {
        $(e.target).siblings('i').css('display','none');
    }
    handleCardDelete = (index, deleteCard) => {
        deleteCard(index);
    }
    handleClick = (e, cardLiker, card) => {
        let target = $(e.target).parent().siblings('.card-details').find('.heart > i');
        cardLiker(target,card);
    }

    render(){
        const {card, index, deleteCard,cardLiker} = this.props;

        return (
            <li tabIndex="0" id={card.id} className="card" role="gridcell" onMouseOver = {(e) => this.handleCardHover(e)} onMouseLeave = {(e) => this.handleCardHoverOut(e)}>
                <img src={card.imageUrl} alt=' ' onClick= {(e) => this.handleClick(e, cardLiker, card)}/>
                 <i className="fa fa-trash trash" aria-hidden="true" title="Delete" onClick = {(e) => this.handleCardDelete(index,deleteCard)}></i>
            </li>
        );

    }
}

export default Card;
