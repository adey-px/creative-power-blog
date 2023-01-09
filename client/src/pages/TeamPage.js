import React, { Component } from "react";
import Header from "../components/commons/Header";
import Team from "../components/features/Team";
import Footer from "../components/commons/Footer";

import img1 from "../assets/img/team/img1.jpg";
import img2 from "../assets/img/team/img2.jpg";
import img3 from "../assets/img/team/img3.jpg";

// Dummy data
const members = [
  { name: "", title: "", image: img1 },
  { name: "", title: "", image: img2 },
  { name: "", title: "", image: img3 },
];

class TeamPage extends Component {
  //
  render() {
    //
    return (
      <div className="page">
        <Header
          image="https://images.ctfassets.net/gg4ddi543f5b/2tMJ2QQXnxLatGtylEYut1/cdddf953c759f1083d41d7dc72c56d00/5-Positive-Conflict-tips-You-Can-Learn-From-High-Performance-Teams-5.jpg"
          title="With a team of dedicated professionals"
          subTitle="Together, Everyone Achieves More"
        />
        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Our Amazing Team
              </h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>

            <div className="row">
              {members.map((item, i) => {
                return <Team key={i} {...item} />;
              })}
            </div>

            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                  totam corporis ea, alias ut unde.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default TeamPage;
