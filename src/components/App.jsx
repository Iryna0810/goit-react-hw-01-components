import FriendList from "./Friends/Friends.jsx";
import Profile from "./Profile/User.jsx";
import user from "./Profile/user.json";
import Statistics from "./Statistics/Statistics.jsx";
import data from "./Statistics/data.json";
import friends from "./Friends/friends.json";
import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";

export function App () {
  return (
    <div
      style={{
        height: "100vh",
        display: "inline-block",
        margin: '60px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      
      <FriendList
      friends={friends}
      />

      <TransactionHistory
      items={transactions}
      />

    </div>
  );
};
