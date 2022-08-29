import "../styles/navheadfootstyles.scss";
import React from "react";

const Footer = () => {
  const [alignment] = React.useState("center");

  return (
    <div className="Footer">
      <p style={{ textAlign: alignment }}>Tanya Hamner Capstone 2022</p>
    </div>
  );
};

export default Footer;
