import React from "react";
import { Link } from "react-router-dom";

const LogoLink = () => {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="branding">
        <h3>unsweetener</h3>
        <h3>
          <span role="img" aria-label="Lollipop">
            🍭
          </span>
        </h3>
      </div>
    </Link>
  );
};

export default LogoLink;
