import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navheadfoot/NavBar";

import Footer from "./components/navheadfoot/Footer";
import LoginContainer from "./components/loginfiles/LoginContainer";
import DefaultContainer from "./components/loginfiles/DefaultContainer";
import { StandardUser } from "./components/loginfiles/usesrRoles";
import UserProvider from "./UserProvider";
import ProjectDescription from "./components/regularpages/ProjectDescription";

// import Home from "./components/regularpages/Home";
// import About from "./components/regularpages/About";

// import Counter from "./components/wizard_files/Counter";
// import ColorChanger from "./components/wizard_files/ColorChanger";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <NavBar />
          {/* <Route path="/projectdescription" component={ProjectDescription} /> */}
          <Route path="/" component={LoginContainer} />

          <StandardUser withRedirect>
            <Route path="/" component={DefaultContainer} />

            {/* <Route path="/aboutpage" component={About} /> */}
          </StandardUser>

          {/* <Switch> */}
          {/* <Route path="/home" component={Home} /> */}
          {/* <Route path="/wizard_files/colorchanger" component={ColorChanger} />
            <Route path="/wizard_files/counter" component={Counter} /> */}

          {/* <Route path="/counter/wizards" component={Wizards} /> */}
          {/* </Switch> */}
          <Footer />
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;

//Use this if nothing is working//
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavBar from "./components/navheadfoot/NavBar";
// import Footer from "./components/navheadfoot/Footer";
// import About from "./components/regularpages/About";
// import Home from "./components/regularpages/Home";
// import Wizards from "./components/regularpages/Wizards";
// import Taskapp from "./components/wizard_files/Taskapp";
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <NavBar />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/wizards" component={Wizards} />

//           <Route path="/taskapp" component={Taskapp} />
//         </Switch>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;
