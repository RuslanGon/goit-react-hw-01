const MailBox = ({ boxUsers, boxTitle, mailBoxCount = 0 }) => {
  return (
    <div>
      <h2>{boxTitle}</h2>
      {mailBoxCount === 0 ? <p><b>приносим извенения, сейчас нет активных ящиков</b></p> : <p>количество активных ящиков: {mailBoxCount}</p>}
      <ul>
       {boxUsers.map(user => {
        return <li key={user.id}>{user.usermail}</li>
       })}
      </ul>
    </div>
  );
};

export default MailBox;

