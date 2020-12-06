import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">
        <button>Radar</button>
      </Link>

      <Link to="/bar">
        <button>Bar</button>
      </Link>
    </div>
  );
};

export default Nav;
