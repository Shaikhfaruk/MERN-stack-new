import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>
      </Router>
    </>
  );
};

export default App;
