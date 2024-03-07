import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
 



import MailBox from "./components/MailBox";

const meesExpress = [
  {id: "1", usermail: "misha@example.com"},
  {id: "2", usermail: "merry@example.com"},
  {id: "3", usermail: "alex@example.com"}
];

const novaPoshta = [
  {id: "11", usermail: "igor@example.com"},
  {id: "22", usermail: "roma@example.com"},
  {id: "33", usermail: "lena@example.com"}
];

const ukrPoshta = [
  {id: "111", usermail: "marina@example.com"},
  {id: "222", usermail: "ola@example.com"},
  {id: "333", usermail: "sereja@example.com"},
  {id: "444", usermail: "oksana@example.com"}
];


function App() {
  return (
    <div>
      <MailBox boxUsers={meesExpress} boxTitle="Meest Expres" mailBoxCount={5} />
      <MailBox boxUsers={novaPoshta} boxTitle="Nova Poshta" mailBoxCount={3} />
      <MailBox boxUsers={ukrPoshta} boxTitle="UKR poshta" />
    </div>
  );
}

export default App;
