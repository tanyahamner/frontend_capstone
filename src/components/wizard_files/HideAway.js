import React from "react";
import { Link } from "react-router-dom";

const HideAway = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="hidewrapper">
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Whats In my Brain"}
      </button>

      <h1>{show && "Lets go count sheep"}</h1>
      <div className="move-button">
        <Link to="/wizards">
          <button className="back-wizards">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default HideAway;
