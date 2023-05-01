import friends from "../Friends/friends.json";
// import PropTypes from "prop-types";
// import css from "..Friends/Friends.module.css";

const FriendsListItem = () => {
    return (
        friends.map((friend) => (
            <li className="item" key={friend.id}>
                <span className="status">{friend.isOnline}</span>
                <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                <p className="name">{friend.name}</p>
            </li>
        ))
    )
};


export default FriendsListItem;