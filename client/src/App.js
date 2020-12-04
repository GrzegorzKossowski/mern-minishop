import React, { useLayoutEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Copyrights from './components/Copyrights';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollTop from './components/ScrollTop';
import HomePage from './views/HomePage'
import Productpage from './views/ProductPage'


function App() {
  return (
    <Router>
      <ScrollTop />
      <Header />
      <main className="py-3">
        <Switch>
          <Route path="/product/:id">
            <Productpage />
          </Route>
          <Route path='/' exact>
            <HomePage />
          </Route>
        </Switch>
      </main>
      <Footer />
      <Copyrights />
    </Router>
  );
}

export default App;
