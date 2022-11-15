import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageWrapper from "./components/wrapper/PageWrapper";
import HomePage from "./pages/HomePage";

class App extends Component {
  //
  render() {
    //
    return (
      <Router>
        <PageWrapper>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
