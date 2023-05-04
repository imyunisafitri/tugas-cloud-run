const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>please give suggestions and criticisms for the development of a better website</p>
      <form>
        <label className="label">
          <span>your cool name</span>
          <input type="text" name="name" />
        </label>
        <label className="label">
          <span>your email</span>
          <input type="email" name="email" required />
        </label>
        <label className="label">
          <span>messages</span>
          <textarea name="messages"></textarea>
        </label>
        <button className="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
