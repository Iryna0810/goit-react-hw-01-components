import FriendsListItem from '../FriendsListItem/FriendListItem';
import friends from '../Friends/friends.json';
import css from './Friends.module.css';

const FriendList = () => {
    return (
        <ul className={css.friendList}>
            <FriendsListItem friends={friends}/>
        </ul>
    )
};

export default FriendList;