
import MailBox from "./components/MailBox";

function App() {
  return (
    <div className="app-container">
      <h1>Vite + React</h1>
      <p>Click on the Vite and React logos to learn more</p>
      <MailBox boxTitle="Meest Expres" mailBoxCount={5} />
      <MailBox boxTitle="Nova Poshta" mailBoxCount={3} />
      <MailBox boxTitle="UKR poshta" />
    </div>
  );
}

export default App;
