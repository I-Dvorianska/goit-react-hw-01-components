import { UserDescr } from "Profile/profile";
import user from "user.json";
// import StatItem from "Statistics/statisticsItem";
import Statistics from "Statistics/statistics";

export default function App() {
  return (
    <div>
      <UserDescr
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics />
    </div>
  );
}
