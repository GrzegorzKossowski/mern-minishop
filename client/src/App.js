import React from 'react'
import Copyrights from './components/Copyrights';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './views/HomePage'

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
      <Copyrights />
    </div>
  );
}

export default App;
