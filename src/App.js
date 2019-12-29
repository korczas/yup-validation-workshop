import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./translations/i18n";
import Ex1 from "./views/1-basics";
import Ex2 from "./views/2-arrays";
import Ex3 from "./views/3-context";
import Ex4a from "./views/4a-customTests";
import Ex4b from "./views/4b-customTests";
import Ex5 from "./views/5-globals";
import "./App.css";

function Home() {
  return (
    <>
      <Link to="/ex1">Exercise 1 - Getting known with yup</Link>
      <br />
      <Link to="/ex2">Exercise 2 - Field arrays validations</Link>
      <br />
      <Link to="/ex3">Exercise 3 - Passing context to schema, conditional validation and transforming values</Link>
      <br />
      <Link to="/ex4a">Exercise 4a - Writing you own tests, pt. 1</Link>
      <br />
      <Link to="/ex4b">Exercise 4b - Writing you own tests, pt. 2</Link>
      <br />
      <Link to="/ex5">Exercise 5 - Setting global default error messages</Link>
    </>
  );
}

function App() {
  return (
    <Router>
      <header className="App-header">
        <Link to="/">
          <h1>Yup validation workshop</h1>
        </Link>
        <div className="usefull-links">
          Usefull Links
          <ul>
            <li>
              <a href="https://formik.org/docs/overview" target="_blank" rel="noopener noreferrer">
                Formik docs
              </a>
            </li>
            <li>
              <a href="https://github.com/jquense/yup" target="_blank" rel="noopener noreferrer">
                Yup docs
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ex1" component={Ex1} />
          <Route path="/ex2" component={Ex2} />
          <Route path="/ex3" component={Ex3} />
          <Route path="/ex4a" component={Ex4a} />
          <Route path="/ex4b" component={Ex4b} />
          <Route path="/ex5" component={Ex5} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
