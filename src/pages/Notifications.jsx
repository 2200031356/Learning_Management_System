const notifications = [
  "New assignment uploaded in React course.",
  "Your grade has been updated.",
  "New course available: Cyber Security Essentials.",
];

const Notifications = () => {
  return (
    <div className="container">
      <h2>Notifications</h2>

      <div className="grid">
        {notifications.map((note, index) => (
          <div key={index} className="card">
            <p>{note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;