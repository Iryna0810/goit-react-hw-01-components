import FriendsListItem from '../FriendsListItem/FriendListItem';
import friends from '../Friends/friends.json';
import PropTypes from "prop-types";
// import css from '../Friends/Friends.module.css'

const FriendList = () => {
    return (
        <ul className='friendList'>
            <FriendsListItem
                avatar={friends.avatar}
                name={friends.name}
                isOnline={friends.isOnline}
                id={friends.id}
            />
        </ul>
    )
};

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
};


export default FriendList;