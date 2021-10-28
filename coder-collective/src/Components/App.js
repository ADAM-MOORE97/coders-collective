import NavBar from "./NavBar";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import styled from "styled-components";

function App() {


  return (
    <AppContainer>
      <h1 >Coders Collective</h1>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

      </Switch>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
background-color: #121212 ;
height: 100%;
font-family: ${props => props.theme.font.primary};
margin-top: 0%;

h1{
  font-size: 72px;
  color:#83a4a4;
  text-align: center;
}
`


