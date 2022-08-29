import React from "react";
import { Link } from "react-router-dom";

const FontSize = () => {
  const [size, setSize] = React.useState(20);

  return (
    <div className="fontwrapper">
      <button onClick={() => setSize(size + 5)}>Grow</button>
      <button onClick={() => setSize(size - 5)}>Shrink</button>
      <p style={{ fontSize: `${size}px` }}>
        this font size for this sentence is {size}px
      </p>
      <div className="move-button">
        <Link to="/wizards">
          <button className="back-wizards">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default FontSize;
