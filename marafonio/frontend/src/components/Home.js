import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import Marafons from "./Marafons";
import Marafon from './Marafon';
import Header from "./Header";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Footer from "./Footer";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';

const Home = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <section className="home">
      <Header/>
      <Router className="home_content">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Marafons" component={Marafons} />
        <Route path="/SignUp" component = {SignUp}/>
        <Route path="/SignIn" component = {SignIn}/>
        <Route path="/Marafons/Marafon" component= {Marafon}></Route>
      </Router>
      <footer>
        <Footer/>
      </footer>
    </section>
  </ThemeProvider>
  );
export default Home;