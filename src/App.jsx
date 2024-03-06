
import MailBox from "./components/MailBox";

const meesExpress = [
  {id: "1", usermail: "user@example.com"},
  {id: "2", usermail: "merry@example.com"},
  {id: "3", usermail: "alex123@example.com"}
];

const novaPoshta = [
  {id: "11", usermail: "igor@example.com"},
  {id: "22", usermail: "roma@example.com"},
  {id: "33", usermail: "lena@example.com"}
];

const ukrPoshta = [
  {id: "111", usermail: "marina@example.com"},
  {id: "222", usermail: "ola@example.com"},
  {id: "333", usermail: "sereja@example.com"}
];


function App() {
  return (
    <div>
      <MailBox boxTitle="Meest Expres" mailBoxCount={5} />
      <MailBox boxTitle="Nova Poshta" mailBoxCount={3} />
      <MailBox boxTitle="UKR poshta" />
    </div>
  );
}

export default App;
