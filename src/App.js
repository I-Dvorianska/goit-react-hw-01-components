import { UserDescr } from "Profile/profile";
import Statistics from "Statistics/statistics";
import FriendsList from "FriendList/friendList";
import TransactionHistory from "Transactions/transactionsList";
import user from "Json/user.json";
import friends from "Json/friends.json";
import items from "Json/statistical-data.json";
import transactions from "Json/transactions.json";
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
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
