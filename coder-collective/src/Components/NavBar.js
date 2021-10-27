import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ background: "grey" }}>
      <NavLink
        to="/"
        exact
        // style={linkStyles}
        activeStyle={{ background: "green" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        // style={linkStyles}
        activeStyle={{ background: "green" }}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        exact
        // style={linkStyles}
        activeStyle={{ background: "green" }}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default NavBar;
