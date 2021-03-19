// Site : https://fast-riders-8f74f.web.app/

import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';   
import Destination from './components/Destination/Destination';
import NoMatch from './components/NoMatch/NoMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

export const userContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}> 
      <Router> 
        <Header></Header> 
         <Switch> 
           <Route path="/home">
              <Home></Home>
           </Route>
           <PrivateRoute path="/destination/">
               <Destination></Destination>
           </PrivateRoute>
            <PrivateRoute exact path="/destination/:vehicle">
              <Destination></Destination>
            </PrivateRoute>  
           <Route path="/login">
              <Login></Login>
           </Route>
           <Route exact path="/">
           <Home></Home>
           </Route>
           <Route exact path="*">
           <NoMatch></NoMatch>
           </Route>
         </Switch>
      </Router>
      
    </userContext.Provider>
  );
};

export default App;