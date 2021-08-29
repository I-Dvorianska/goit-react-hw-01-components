import s from "Statistics/statistics.module.css";
import StatItem from "Statistics/statisticsItem";
import PropTypes from "prop-types";

const Statistics = ({ stats, title }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map((item) => {
          return (
            <StatItem
              label={item.label}
              percentage={item.percentage}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
