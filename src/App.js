import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import HikeListItem from "./components/hikes/HikeListItem";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateHike from "./components/hikes/CreateHike";
import HikeDetails from "./components/hikes/HikeDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/hike/:id" component={HikeDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateHike} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
