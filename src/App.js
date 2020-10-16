import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";

import Header from '../src/Components/Header/Header'
import Home from '../src/Components/Home/Home'
import Admin from '../src/Components/Admin/Admin'
import Login from '../src/Components/Login/Login'
import Registration from '../src/Components/Registration/Registration'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';




// log in page theke information ante
export const UserContext = createContext();

function App(props) {
  // log in user er jonno state declaration

  const [signedInUser, setSignedInUser] = useState({});
  return (
    // user er information different route a use korer jonno context api set 
    <UserContext.Provider value={[signedInUser, setSignedInUser]}>
      <Router>
     
              <Header></Header>
               
              <Switch>
                    <Route path="/Home">
                      <Home></Home>
                    </Route>

                    <Route path="/Login">
                    <Login></Login>
                    </Route>

                    <PrivateRoute path="/Registration">
                      <Registration></Registration>
                    </PrivateRoute>

                    <PrivateRoute path="/Admin">
                    <Admin></Admin>
                    </PrivateRoute>

                    <Route exact path="/">
                      <Home></Home>
                    </Route>
              </Switch>  
            </Router>   
    </UserContext.Provider>
  );
}

export default App;
