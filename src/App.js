import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Nav } from './components/Navigation/Nav';
import { Contact } from './pages/Contact/Contact';
import { AboutPage } from './pages/About/About';
import { Home } from './pages/Home/Home';
import {Projects} from './pages/Projects/Projects'
const App = () => {
  return (
    <Router>
      <section className="main-wrapper">
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/o-nas" component={AboutPage} />
          <Route path="/portfolio" component={Projects} />
          <Route path="/kontakt" component={Contact} />
  
        </Switch>
{/*  */}
        <Footer />
      </section>
    </Router>
  );
};

export default App;