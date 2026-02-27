const Contact = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-icon">📩</div>

        <h2>Contact Us</h2>
        <p className="auth-subtitle">
          Have questions? We'd love to hear from you.
        </p>

        <form className="auth-form">
          <input type="text" placeholder="Full Name" required />

          <input type="email" placeholder="Email Address" required />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              resize: "none",
              fontFamily: "inherit",
            }}
          />

          <button type="submit" className="auth-button">
            Send Message
          </button>
        </form>

        <p className="link-text" style={{ marginTop: "20px" }}>
          📧 support@edulms.com <br />
          📞 +91 98765 43210 <br />
          📍 Hyderabad, India
        </p>
      </div>
    </div>
  );
};

export default Contact;