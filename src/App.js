import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateHike from "./components/hikes/CreateHike";
import HikeDetails from "./components/hikes/HikeDetails";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/hike/:id" component={HikeDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateHike} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
