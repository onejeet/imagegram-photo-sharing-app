import React,{ Component } from 'react';
import ImageGrid from './ImageGrid';
import Header from './Header';
import ProfileInfo from './ProfileInfo';
import '../sass/style.scss';

class Profile extends Component {

    render() {
        const {sorting, updateSorting, sortCards, cards, deleteCard, cardLiker} = this.props;

        return (
        <div className="main">
            <Header
            cards = {cards}
            />
            <ProfileInfo
            sorting = {sorting}
            updateSorting = {updateSorting}
            />
            <ImageGrid
            sorting={sorting}
            cards = {cards}
            deleteCard = {deleteCard}
            sortCards = {sortCards}
            cardLiker = {cardLiker}
            />
        </div>
        );
    }
}

export default Profile;
