import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Ex3 from './components/Ex3'
import "./App.css";

function Home() {
  return <Link to="/ex1">Exercise 1</Link>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Yup validation workshop</p>
          <div className="usefull-links">
            Usefull Links
            <ul>
              <li>
                <a
                  href="https://jaredpalmer.com/formik/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Formik docs
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jquense/yup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yup docs
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
      <hr />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ex1" component={Ex1} />
        <Route path="/ex2" component={Ex2} />
        <Route path="/ex3" component={Ex3} />
      </Switch>
    </Router>
  );
}

export default App;
