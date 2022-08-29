import { Route, Switch } from "react-router-dom";
// import LoginPage from "../regularpages/LoginPage";
import Home from "../regularpages/Home";
// import Wizards from "../regularpages/Wizards";
// import About from "../regularpages/AboutProject";

function LoginContainer() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/wizards" component={Wizards} /> */}
      {/* <Route path="/login" component={LoginPage} /> */}
      {/* <Route exact="/about" component={About} /> */}
    </Switch>
  );
}

export default LoginContainer;
