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
        position: "relative",
        top: "50px",
        height: "auto",
        width: 'auto',
        maxWidth: "600px",
        display: "block",
        margin: '0 auto',
        padding: '20px',
        fontSize: "40px",
        boxShadow: '10px 20px 14px -7px #276873',
	      background: 'linear-gradient(to bottom, #c3cce3 5%, #476e9e 100%)',
	      borderRadius: '25px',
        color: "#ffffff",
        fontFamily: "Arial",
        textDecoration: 'none',
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
