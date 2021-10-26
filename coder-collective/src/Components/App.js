import NavBar from "./NavBar";
import Home from "./Home";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchedData, setSearchedData] = useState(users);

  useEffect(() => {
    fetch(`http://localhost:4000/coders`)
      .then((r) => r.json())
      .then((data) => setUsers(data), setIsLoaded(true));
  }, []);

  function handleSearch(e) {
    const searchedData = users.filter(user => {
      return user.username.includes(e.target.value)
    })
    setSearchedData(searchedData)
}

  useEffect(() => {
    setSearchedData(users)
},[users])

  if (isLoaded === false)
    return (
      <>
        <h1>LOADING..... thank you for your patience</h1>{" "}
        <p>Ensure Server Is Running</p>
      </>
    );
 

  


  return (
    <>
      <h1 style={{ textAlign: "center" }}>Coders Collective</h1>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home handleSearch={handleSearch} users={searchedData} />
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
