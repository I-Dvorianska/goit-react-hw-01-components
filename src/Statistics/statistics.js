import s from "Statistics/statistics.module.css";
import getRendomColor from "./getRendomColor";
import StatItem from "Statistics/statisticsItem";

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

export default Statistics;
