import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

function App() {
  const [{user}, dispatch] = useStateValue();
  //Piece of code which runs based on a given condition

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        //The user is logged in..

        dispatch({
          type : "SET_USER",
          user : authUser,
        })
      }else{
        // The user is logged out...
        dispatch({
          type : "SET_USER",
          user : null,
        })
      }
    })
    return () => {
      //Any cleanup operations go in here...
       unsubscribe();
    }

  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
          <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
  
      </div>
    </Router>
  );
}

export default App;
