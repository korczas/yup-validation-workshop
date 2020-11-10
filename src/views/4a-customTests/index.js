/* eslint-disable no-sequences */
import React from "react";
import FormBonus from "./FormBonus";
import { Link } from "react-router-dom";

import { ReactComponent as CheckMark } from "../../images/checkmark.svg";
import { ReactComponent as Cross } from "../../images/cross.svg";

export default function Ex4a() {
  return (
    <div>
      <h2>Exercise 4a - Writing you own tests, pt. 1 </h2>
      <FormBonus />
      <h3>GUIDELINES:</h3>
      <ul>
        <li>
          In <em>validation.js</em> file create and export a yup validation schema. Import it and use in{" "}
          <em>FormBonus.js</em> file.
        </li>
        <li>
          Password requirements:
          <ul>
            <li>At least one uppercase letter</li>
            <li>At least one lowercase letter</li>
            <li>At least one special char</li>
            <li>Min 8 signs long</li>
          </ul>
        </li>
        <li>
          <em>confirmPassword</em> has to match <em>password</em>
        </li>
        <li>
          BONUS TASK: Show all tests results at once, eg.
          <pre>
            <CheckMark /> At least one uppercase letter
            <br />
            <Cross /> At least one lowercase letter
            <br />
            <CheckMark /> At least one special char
            <br />
            <Cross /> Min 8 signs long
          </pre>
        </li>
      </ul>
      <hr />
      <Link to="/ex4b">Go to Exercise 4b</Link>
    </div>
  );
}
