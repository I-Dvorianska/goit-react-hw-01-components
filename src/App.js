import { UserDescr } from "Profile/profile";
import user from "user.json";
import Statistics from "Statistics/statistics";
import items from "statistical-data.json";
import s from "App.module.css";

export default function App() {
  return (
    <div className={s.wrapper}>
      <UserDescr
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={items} />
    </div>
  );
}
