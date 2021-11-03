import React from "react";
import Feed from './Feed/Feed';
import './App.css';
import PostCreate from './PostCreate/PostCreate';
import Register from './Register/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Link to='/register'>
              Register Now!
          </Link>
       <Switch>
          <Route path="/feed">
            <Feed />
          </Route>
           <Route path="/post/create">
               <PostCreate />
           </Route>
           <Route path="/register">
               <Register />
           </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
