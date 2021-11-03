import Feed from './Feed/Feed';
import './App.css';
import PostCreate from './PostCreate/PostCreate';
import React from "react";
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
       <Switch>
          <Route path="/post/create">
            <PostCreate />
          </Route>
          <Route path="/">
            <Feed />
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
