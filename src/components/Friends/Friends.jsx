import FriendsListItem from '../FriendsListItem/FriendListItem';
import friends from '../Friends/friends.json';
// import PropTypes from "prop-types";
import css from './Friends.module.css';

const FriendList = () => {
    return (
        <ul className={css.friendList}>
            <FriendsListItem friends={friends}/>
        </ul>
    )
};

export default FriendList;