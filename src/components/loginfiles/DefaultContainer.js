import { Route, Switch } from "react-router-dom";

// import NavBar from "../navheadfoot/NavBar";

// import LoginPage from "../regularpages/LoginPage";
import LogoutPage from "../regularpages/LogoutPage";

import Home from "../regularpages/Home";
import ProjectDescription from "../regularpages/ProjectDescription";

import Wizards from "../regularpages/Wizards";

import Counter from "../wizard_files/Counter";
import ColorChanger from "../wizard_files/ColorChanger";

import Weather from "../wizard_files/Weather";
import HideAway from "../wizard_files/HideAway";
import FontSize from "../wizard_files/FontSize";
import Swappi from "../wizard_files/Swappi";

function DefaultContainer() {
  return (
    <Switch>
      {/* {<Route path="/" component={NavBar} />} */}
      {/* {<Route path="/loginpage" component={LoginPage} />} */}
      <Route path="/projectdescription" component={ProjectDescription} />
      <Route path="/home" component={Home} />
      <Route path="/logoutpage" component={LogoutPage} />
      <Route path="/wizards" component={Wizards} />

      <Route path="/wizard_files/colorchanger" component={ColorChanger} />
      <Route path="/wizard_files/counter" component={Counter} />
      <Route path="/wizard_files/weather" component={Weather} />
      <Route path="/wizard_files/hideaway" component={HideAway} />
      <Route path="/wizard_files/fontsize" component={FontSize} />
      <Route path="/wizard_files/swappi" component={Swappi} />
    </Switch>
  );
}

export default DefaultContainer;
