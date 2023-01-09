import React, { Component } from "react";
import Header from "../components/commons/Header";
import Service from "../components/features/Service";
import Footer from "../components/commons/Footer";

// Dummy data based on template in service.js
const services = [
  {
    title: "E-commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: "fa-shopping-cart",
  },
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: "fa-laptop",
  },
  {
    title: "Web Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: "fa-lock",
  },
];

//
class ServicesPage extends Component {
  //
  render() {
    //
    return (
      <div className="page">
        <Header
          image="https://dynamics.folio3.com/blog/wp-content/uploads/2022/07/Compare-Robotic-Process-Automation-vs.-Digital-Process-Automation-1280x720.png"
          title="Standard Quality Without Compromise"
          subTitle="Unique focus on Business succes"
        />
        <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>

            <div className="row text-center">
              {services.map((item, i) => {
                return <Service key={i} {...item} />;
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default ServicesPage;
