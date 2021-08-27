import s from "Statistics/statistics.module.css";
import getRendomColor from "./getRendomColor";
import StatItem from "Statistics/statisticsItem";
import PropTypes from "prop-types";

const Statistics = ({ stats, title }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map((item) => {
          return (
            <li
              key={item.id}
              className={s.item}
              style={{ backgroundColor: getRendomColor() }}
            >
              <StatItem
                label={item.label}
                percentage={item.percentage}
                id={item.id}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      optionalProperty: PropTypes.string,
      requiredProperty: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
