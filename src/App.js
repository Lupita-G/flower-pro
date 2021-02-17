import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Favorites from './components/Favorites';
import FlowerSection from './components/FlowerSection';
import Banner from './components/Banner';
import PaymentContainer from './components/PaymentContainer';
import PaymentCard from './components/PaymentCard';
import Footer from './components/Footer';

function App() {
  return (

        
      <div >
        <Navbar />
        <Main />
        <Favorites />
        <FlowerSection />
        <Banner />
        <PaymentContainer />
        <Footer />
      </div>


      
  );
}    

export default App;
