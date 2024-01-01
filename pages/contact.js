import Layout from "../components/MyLayout";

const Contact = () => (
  <Layout>
    <div id="main">
      <h2>Contact Me</h2>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required />

        <button type="submit">Send</button>
      </form>
      <h3>Details:</h3>
      <p>
        <b>Email:</b> meg.c.wilde@gmail.com<br></br>
        <b>Address:</b> Ninewells, Dolphinton, EH46 7HH
      </p>
      <style jsx>{`
        #main {
          background-color: #bae9d7;
          text-align: center;
          padding: 20px;
          color: #4c4758;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h2 {
          padding: 10px;
        }

        h3 {
          padding-top: 20px;
        }

        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 300px;
        }

        label {
          margin-bottom: 8px;
        }

        input,
        textarea {
          margin-bottom: 16px;
          padding: 8px;
          font-size: 16px;
          border-radius: 5px;
          border-width: 1px;
        }

        button {
          padding: 10px;
          background-color: #d496a7;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #5d576b;
        }
      `}</style>
    </div>
  </Layout>
);

export default Contact;
