import React from "react";
import Form from "./Form";
import { ButtonGroup, Button } from "@material-ui/core";
import { withNamespaces } from "react-i18next";
import i18n from "../../translations/i18n";

export function Ex5() {
  return (
    <div>
      <h2>Exercise 5 - Setting global default error messages</h2>
      Select your language:{" "}
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => i18n.changeLanguage("en")} variant={i18n.language === "en" ? "contained" : "outlined"}>
          English
        </Button>
        <Button onClick={() => i18n.changeLanguage("pl")} variant={i18n.language === "pl" ? "contained" : "outlined"}>
          Polski
        </Button>
      </ButtonGroup>
      <Form />
      <h3>GUIDELINES:</h3>
      <ul>
        <li>
          Create a new file and use <em>yup.setLocale</em> to customize the default messages used by yup. File should be
          imported in <code>App.js</code> before all components where it's used
        </li>
        <li>
          In <code>translations/i18n.js</code> you will find sample translations for some errors - use them
        </li>
        <li>
          HINT: to use translation you have to <code>import i18n from "translations/i18n"</code> and then{" "}
          <code>i18n.t(/translation key name, eg. 'required'/)</code>
        </li>
      </ul>
    </div>
  );
}

export default withNamespaces()(Ex5);
