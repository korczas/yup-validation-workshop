import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";

export default function Ex1() {
  return (
    <div>
      <h2>Exercise 2 - Field arrays validations</h2>

      <Form />

      <h3>GUIDELINES:</h3>
      <ul>
        <li>
          In <em>validation.js</em> file create and export a yup validation schema. Import it and use in{" "}
          <em>Form.js</em> file.
        </li>
        <li>
          Validation requirements:
          <ul>
            <li>
              <em>userName</em> is required with min length 3
            </li>
            <li>
              <em>friends</em> list is required with min length 3
            </li>
            <li>
              <em>friend name</em> is required with min length 3
            </li>
            <li>
              <em>friend age</em> is NOT required, but has to be positive number
            </li>
          </ul>
        </li>
        <li>Show error message if array length is &lt; 3 - this one is tricky :)</li>
      </ul>

      <hr />
      <Link to="/ex3">Go to Exercise 3</Link>
    </div>
  );
}
