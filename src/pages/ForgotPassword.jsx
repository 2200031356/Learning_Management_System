const ForgotPassword = () => {
  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <form className="form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit" className="btn-primary">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;