import { Link } from "react-router-dom";

const Public = () => {
  return (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">John Doe Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in London, John D. Repairs provides a trained staff ready to
          meet your tech repair needs.
        </p>
        <address className="public__addr">
          John D. Repairs
          <br />
          555 London Road
          <br />
          London, TW10 1AZ
          <br />
          <a href="tel:+44 000 111 22 33">(000) 111-22-33</a>
        </address>
        <br />
        <p>Owner: John Doe</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
};
export default Public;
