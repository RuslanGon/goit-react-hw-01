
import MailBox from "./components/MailBox";

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
