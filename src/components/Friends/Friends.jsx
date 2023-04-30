import FriendsListItem from '../FriendsListItem/FriendListItem';
import friends from '../Friends/friends.json';
import PropTypes from "prop-types";

const FriendList = () => {
    return (
        <ul className="friend-list">
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