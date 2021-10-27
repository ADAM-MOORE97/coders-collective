import NavBar from "./NavBar";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

function App() {


  return (
    <>
      <h1 style={{ textAlign: "center" }}>Coders Collective</h1>
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
    </>
  );
}

export default App;


