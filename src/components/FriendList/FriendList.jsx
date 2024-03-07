const FriendList = ({ friends }) => {
  return (
    <div>
      <ul>
        <li>
          {friends.map((friend) => {
            return (
              <li key={friend.id}>
                <FriendListItem
                  avatar={friend.avatar}
                  name={friend.name}
                  isOnline={friend.isOnline}
                />
              </li>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default FriendList;
