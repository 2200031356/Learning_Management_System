const ResetPassword = () => {
  return (
    <div className="container">
      <h2>Reset Password</h2>
      <form className="form">
        <input type="password" placeholder="New Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit" className="btn-primary">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;