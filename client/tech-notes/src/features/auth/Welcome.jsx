import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  // Creating date
  const date = new Date();

  //   Formating date
  const today = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const content = (
    <section className="welcome">
      <p>{today}</p>
      <h1>Welcome</h1>
      <p>
        <Link to="/dash/notes">View Notes</Link>
      </p>
      <p>
        <Link to="/dash/users">View Users</Link>
      </p>
    </section>
  );
  return content;
}

export default Welcome;
