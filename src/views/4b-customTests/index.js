/* eslint-disable no-sequences */
import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";

export default function Ex4b() {
  return (
    <div>
      <h2>Exercise 4b - Writing you own tests, pt. 2 </h2>
      <Form />
      <h3>GUIDELINES:</h3>
      <ul>
        <li>
          In <em>validation.js</em> file create and export a yup validation schema. Import it and use in{" "}
          <em>Form.js</em> file.
        </li>
        <li>
          Show <code>array length</code> and <code>array field</code> errors in same time
        </li>
      </ul>
      <hr />
      <Link to="/ex5">Go to Exercise 5</Link>
    </div>
  );
}
