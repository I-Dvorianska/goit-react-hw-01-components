import PropTypes from "prop-types";
import s from "Statistics/statisticItem.module.css";
import getRendomColor from "./getRendomColor";

const StatItem = ({ label, percentage, id }) => {
  return (
    <li
      key={id}
      className={s.item}
      style={{ backgroundColor: getRendomColor() }}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
export default StatItem;
