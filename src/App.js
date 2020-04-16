import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ContactDetails from './components/Contact1';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact' exact>
          <Contact />
        </Route>
        <Route path='/contact/:id' render={(props) => <ContactDetails  {...props} />} />/>

      </Switch>

    </div>
  );
}

export default App;
