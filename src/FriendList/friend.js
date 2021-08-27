import PropTypes from "prop-types";
import s from "FriendList/friend.module.css";

const Friend = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={s.item}>
      <span className={`${s.status} ${s[isOnline]}`}>{isOnline}</span>
      <img src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
