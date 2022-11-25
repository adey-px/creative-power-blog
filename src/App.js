import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/commons/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

class App extends Component {
  //
  render() {
    //
    return (
      <Router>
        <NavBar>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/services" element={<ServicesPage />} />
            <Route exact path="/team" element={<TeamPage />} />
            <Route exact path="/portfolio" element={<PortfolioPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
          </Routes>
        </NavBar>
      </Router>
    );
  }
}

export default App;
