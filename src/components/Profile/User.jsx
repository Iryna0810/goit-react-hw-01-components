import PropTypes from "prop-types";
import css from './User.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className="profile">
            <div className={css.description}>
                <img
                    src={avatar}
                    alt={username}
                    className="avatar"
                />
                <p className={css.name}>{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>

                <ul className={css.stats}>
                    <li>
                        <span className="label">Followers { stats.followers }</span>
                        <span className="quantity">1000</span>
                    </li>
                    <li>
                        <span className="label">Views { stats.views }</span>
                        <span className="quantity">2000</span>
                    </li>
                    <li>
                        <span className="label">Likes { stats.likes }</span>
                        <span className="quantity">3000</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
}

export default Profile;