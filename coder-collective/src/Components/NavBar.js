import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavBarStyle>
      <h3>
        <NavLink style={{ textDecoration: "none", color: "black" }} to="/" exact>
          Home
        </NavLink>
      </h3>
      <h3>
        <NavLink style={{ textDecoration: "none", color: "black"  }} to="/about" exact>
          About
        </NavLink>
      </h3>
      <h3>
        <NavLink style={{ textDecoration: "none", color: "black"  }} to="/contact" exact>
          Contact
        </NavLink>
      </h3>
    </NavBarStyle>
  );
};

export default NavBar;

const NavBarStyle = styled.div`
  background-color: #83a4a4;
  height: 50px;
  font-size: 25px;
  padding-top: 12.5px;
  text-align: center;
  h3 {
    display: inline;
    margin-left: 25px;
    &:hover {
      box-shadow: 0px 0px 12px 0px #a9cec2;
    }
  }

`;
