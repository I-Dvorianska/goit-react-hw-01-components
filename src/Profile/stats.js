import s from "./stats.module.css";

const ProfileStats = ({ stats }) => {
  return (
    <ul className={s.stats}>
      <li className={s.statsItem}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li className={s.statsItem}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li className={s.statsItem}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};

export default ProfileStats;
