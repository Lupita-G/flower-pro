import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  return (

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/"        component = {Home} />
          <Route exact path="/iniciarSesion"    component = { SignIn} />
          <Route exact path="/registro"    component = { SignUp} />
        </Switch>
        <Footer />
      </BrowserRouter>



      
  );
}    

export default App;
