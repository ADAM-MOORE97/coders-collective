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



const [users, setUsers] = useState([]);
const [searchedData, setSearchedData] = useState(users);

useEffect(() => {
    fetch(`http://localhost:4000/coders`)
        .then((r) => r.json())
        .then((data) => setUsers(data))
        .catch(() => console.log('Run Server!'));
}, []);

function handleSearch(e) {
    const searchData = users.filter(user => {
        return user.username.toLowerCase().includes(
            e.target.value.toLowerCase())
    })
    setSearchedData(searchData)
    console.log(searchData)
}

useEffect(() => {
    setSearchedData(users)
}, [users])

jkbkjb
function(){}
