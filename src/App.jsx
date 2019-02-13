import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Home from './components/home/Home';
import About from './components/About/About';
import News from './components/news/News';
import Contact from './components/Contact/Contact';
import Navbar from './components/header/Header';
import Footer from './components/footer/Footer';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
