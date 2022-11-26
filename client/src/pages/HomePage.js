import React, { Component } from "react";
import Header from "../components/commons/Header";
import homeTop from "../images/homeTop.jpg";
import Clients from "../components/features/Clients";

class HomePage extends Component {
  //
  render() {
    //
    return (
      <div style={{ marginTop: "72px" }}>``
        <Header
          image={homeTop}
          title="Welcmome to Our Company"
          subTitle="It's Nice to Meet You"
          buttonText="Learn More"
          showButton={true}
          link="/services"
        />

        <div className="text-center" style={{ marginTop: "72px" }}>
          <h1 className="section-heading text-uppercase">Our Clients</h1>
        </div>

        <Clients />
      </div>
    );
  }
}

export default HomePage;
