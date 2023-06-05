import LoginForm from "./components/LoginForm";

import { Switch, Route } from "react-router-dom";

import "./App.css";
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />{" "}
  </Switch>
);

export default App;
