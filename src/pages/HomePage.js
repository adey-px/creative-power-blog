import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  //
  render() {
    //
    return (
      <div>
        <header className="masthead">
          <div className="container">
            <div className="masthead-subheading">Welcome To Our Studio!</div>
            <div className="masthead-heading text-uppercase">
              It's Nice To Meet You
            </div>
            <Link
              className="btn btn-primary btn-xl text-uppercase"
              to="/services"
            >
              Tell Me More
            </Link>
          </div>
        </header>
      </div>
    );
  }
}

export default HomePage;
