// import s from "Statistics/statistics.module.css";
import items from "statistical-data.json";
import StatItem from "Statistics/statisticsItem";

const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {items.map((item) => {
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
