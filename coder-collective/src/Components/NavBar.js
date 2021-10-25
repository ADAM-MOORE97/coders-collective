import { NavLink } from "react-router-dom";

// const linkStyles = {
//     display: "inline-block",
//     width: "50px",
//     padding: "12px",
//     margin: "0 6px 6px",
//     background: "blue",
//     textDecoration: "none",
//     color: "white",
//   };


const NavBar = () => {
    return(
        <div style={{background:'grey'}}>
            <NavLink
            to='/'
            exact
            // style={linkStyles}
            activeStyle={{background:'green'}}>
                Home
            </NavLink>
            <NavLink
            to='/about'
            exact
            // style={linkStyles}
            activeStyle={{background:'green'}}>
                About
            </NavLink>
            <NavLink
            to='/contact'
            exact
            // style={linkStyles}
            activeStyle={{background:'green'}}>
                Contact
            </NavLink>
           
        


        </div>
    )
}

export default NavBar;