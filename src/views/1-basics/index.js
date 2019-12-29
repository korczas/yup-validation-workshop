import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";

export default function Exercise1() {
  return (
    <div>
      <h2>Exercise 1 - Getting known with yup</h2>

      <Form />

      <h3>GUIDELINES:</h3>
      <ul>
        <li>
          In <em>validation.js</em> file create and export a yup validation schema. Import it and use in{" "}
          <em>Form.js</em> file.
        </li>
        <li>
          Validation requirements are described in <em>validation.js</em> file.
        </li>
      </ul>

      <hr />
      <Link to="/ex2">Go to Exercise 2</Link>
    </div>
  );
}
