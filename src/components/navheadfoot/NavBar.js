import "../styles/navheadfootstyles.scss";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navstyle">
      <div className="left">
        <NavLink exact to="/">
          Home{" "}
        </NavLink>
        <NavLink to="/projectdescription">About Project</NavLink>
        {/* <NavLink to="/about">About </NavLink> */}
        <NavLink to="/wizards">Wizards </NavLink>
      </div>
      <div className="navlogout">
        <NavLink to="/logoutpage">Log Out</NavLink>
      </div>
    </div>
  );
}
