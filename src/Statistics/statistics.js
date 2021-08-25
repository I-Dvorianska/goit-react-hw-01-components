// import s from "Statistics/statistics.module.css";

import StatItem from "Statistics/statisticsItem";

const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map((item) => {
          return (
            <li key={item.id} className="item">
              <StatItem
                label={item.label}
                percentage={item.percentage}
                id={item.id}
              />
              ;
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
