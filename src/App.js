import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './pages/Footer';
import MyWork from './pages/MyWork'

Amplify.configure(awsconfig);

class App extends Component {
  render(){
    return (
      <Router>
        <div className="pad">
          <div className="App">
          <NavBar />
            <div className="container">
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/skills" component={SkillsPage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/resume" component={ResumePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path = "/mywork" component={MyWork} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;