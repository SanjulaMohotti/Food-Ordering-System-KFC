import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import KFCHeader from "./Components/header";
import KFCFooter from "./Components/footer";
import Home from "./Pages/Home";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
import AboutUs from './Pages/about';
import OffersPage from './Pages/offer';
import Menu from "./Pages/menu";

function App() {
  return (
    <div className="App">
      <Router>
        <KFCHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/offers" element={<OffersPage/>} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <KFCFooter />
      </Router>
    </div>
  );
}

export default App;
