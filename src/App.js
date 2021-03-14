import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Favorites from './components/Favorites';
import FlowerSection from './components/FlowerSection';
import Banner from './components/Banner';
import PaymentContainer from './components/PaymentContainer';
import PaymentCard from './components/PaymentCard';
import Footer from './components/Footer';
import SignIn from './components/SignIn';

const App = () => {
  return (

      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Route exact path="/signin" component={SignIn} /> 
        </div>

        <div >
          <Main />
          <Favorites />
          <FlowerSection />
          <Banner />
          <PaymentContainer />
          <Footer />
          <SignIn />
        </div>
      </BrowserRouter>



      
  );
}    

export default App;
