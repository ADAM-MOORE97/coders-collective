
import NavBar from './NavBar';
import Home from './Home';
import {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

function App() {
  const[users, setUsers] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  // const url = `http://localhost:4000/coders`

  useEffect(()=>{
    // const abortCont = new AbortController();


    fetch(`http://localhost:4000/coders`)
    .then(r=>r.json())
    .then(data=>
      setUsers(data),
      setIsLoaded(true)
      )

      // return () => abortCont.abort();
  },[])



  if(isLoaded === false) return <><h1>LOADING..... thank you for your patience</h1> <p>Ensure Server Is Running</p></>
// console.log(users)



  return (
    <>
    <h1 style={{textAlign:'center'}}>Coders Collective</h1>
      <NavBar/>

      <Switch>
        <Route exact path='/'>
              <Home users={users}/>
        </Route>

        <Route exact path='/about'>
              <About/>
        </Route>
        
        <Route exact path='/contact'>
               <Contact/>
        </Route>
      </Switch>
      
     

    
    
    
      
    </>
  );
}

export default App;
