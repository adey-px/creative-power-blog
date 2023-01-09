import React, { Component } from "react";
import PortfoItem from "../components/features/PortfoIio";
import Footer from "../components/commons/Footer";

import img1 from '../assets/img/portfolio/img1.jpg'
import img2 from "../assets/img/portfolio/img2.jpg";
import img3 from "../assets/img/portfolio/img3.jpg";
import img4 from "../assets/img/portfolio/img4.jpg";
import img5 from "../assets/img/portfolio/img5.jpg";
import img6 from "../assets/img/portfolio/img6.jpg";

// Dummy data on re-usable comp in portfoItem.js
const portfolios = [
  { title: "", subTitle: "", image: img1 },
  { title: "", subTitle: "", image: img2 },
  { title: "", subTitle: "", image: img3 },
  { title: "", subTitle: "", image: img4 },
  { title: "", subTitle: "", image: img5 },
  { title: "", subTitle: "", image: img6 },
];

class PortfolioPage extends Component {
  //
  render() {
    //
    return (
      <div className="page">
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>

            <div className="row">
              {portfolios.map((item, i) => {
                return (
                  <PortfoItem
                    key={i}
                    title={item.title}
                    subTitle={item.subTitle}
                    image={item.image}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default PortfolioPage;
