import Friend from "FriendList/friend";

const FriendsList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map((friend) => {
        return (
          <Friend
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendsList;
