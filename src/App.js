
import './App.css';
import React from 'react';
import Header from './components/pages/header';
import Footer from './components/pages/footer';
import PortfolioContainer from './components/PortfolioContainer';


function App() {
  return (
    <div className='portfolio m-2'>
      <Header />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
