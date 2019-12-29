import React, { useState } from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import { Switch } from "@material-ui/core";

export default function Ex3() {
  const [adultOnly, setAdultOnly] = useState(true);

  return (
    <div>
      <h2>Exercise 3 - Passing context to schema, conditional validation and transforming values</h2>
      Adult only mode{" "}
      <Switch checked={adultOnly} color="primary" onClick={() => setAdultOnly((adultOnly) => !adultOnly)} />
      <Form adultOnly={adultOnly} />
      <h3>GUIDELINES:</h3>
      <ul>
        <li>
          In <em>validation.js</em> file create and export a yup validation schema. Import it and use in{" "}
          <em>Form.js</em> file.
        </li>
        <li>
          <em>Form</em> component has a <code>adultOnly</code> prop. Pass this prop to your validation schema to meet
          validation requirements.
        </li>

        <li>
          Validation requirements:
          <ul>
            <li>
              If <code>adultOnly</code> is true, min age is 18.
            </li>
            <li>
              <code>Birthday</code> field - if age has value then <code>birthday</code> is not required
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <Link to="/ex4a">Go to Exercise 4a</Link>
    </div>
  );
}
