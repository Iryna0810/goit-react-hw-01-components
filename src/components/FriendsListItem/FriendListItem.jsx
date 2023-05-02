import friends from "../Friends/friends.json";
import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";
import clsx from 'clsx';

const FriendsListItem = () => {
    return (
        friends.map(({id, isOnline, avatar, name}) => (
            <li className={css.item} key={id}>
                <span className={clsx(css.status, isOnline === true ? css["online"] :
                    css["offline"])}>
                </span>
                <img className={css.avatar} src={avatar} alt={name} width="60px" height="60px" />
                <p className={css.name}>{name}</p>
            </li>
        ))
    )
};

FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}

export default FriendsListItem;