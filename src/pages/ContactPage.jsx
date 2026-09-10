import "./ContactPage.css";

function ContactPage() {
  return (
    <main className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p>
            Have a question or need help? Feel free to contact us.
          </p>

          <p><strong>Email:</strong> support@example.com</p>
          <p><strong>Phone:</strong> +251 900 000 000</p>
          <p><strong>Address:</strong> Addis Ababa, Ethiopia</p>
        </div>

        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea
            placeholder="Enter your message"
            rows="5"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </main>
  );
}

export default ContactPage;