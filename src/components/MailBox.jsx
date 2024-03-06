const MailBox = ({ boxTitle, mailBoxCount = 0 }) => {
  return (
    <div>
      <h2>{boxTitle}</h2>
      <p>количество активных ящиков: {mailBoxCount}</p>
      <p><b>сейчас нет активных ящиков</b></p>
      <ul>
        <li>max@example.com</li>
        <li>merry@example.com</li>
        <li>alex123@example.com</li>
      </ul>
    </div>
  );
};

export default MailBox;
