import Friend from "FriendList/friend";
import s from "FriendList/friendList.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => {
        return (
          <Friend
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
};

export default FriendsList;
