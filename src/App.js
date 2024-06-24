import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import ReservationForm from './components/ReservationForm';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <nav aria-label="Main navigation">
            <Nav />
          </nav>
          <Main/>
        </header>
        <main>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ReservationForm" element={<ReservationForm />} />
          </Routes>
        </main>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
