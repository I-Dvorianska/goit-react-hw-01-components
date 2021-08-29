import PropTypes from "prop-types";
import s from "Profile/profile.module.css";
import ProfileStats from "./stats";

export const UserDescr = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ProfileStats stats={stats} />
    </div>
  );
};

UserDescr.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
