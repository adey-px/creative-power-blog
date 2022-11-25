import React, { Component } from "react";
import { Link } from "react-router-dom";

import microsoft from '../../images/clients/microsoft.svg'
import google from "../../images/clients/google.svg";
import facebook from "../../images/clients/facebook.svg";
import ibm from "../../images/clients/microsoft.svg";

class Clients extends Component {
  //
  render() {
    //
    return (
      <div>
        <div className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 col-sm-6 my-3">
                <Link to="#!">
                  <img
                    className="img-fluid img-brand d-block mx-auto"
                    src={microsoft}
                    alt="..."
                    aria-label="Microsoft Logo"
                  />
                </Link>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <Link to="#!">
                  <img
                    className="img-fluid img-brand d-block mx-auto"
                    src={google}
                    alt="..."
                    aria-label="Google Logo"
                  />
                </Link>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <Link to="#!">
                  <img
                    className="img-fluid img-brand d-block mx-auto"
                    src={facebook}
                    alt="..."
                    aria-label="Facebook Logo"
                  />
                </Link>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <Link to="#!">
                  <img
                    className="img-fluid img-brand d-block mx-auto"
                    src={ibm}
                    alt="..."
                    aria-label="IBM Logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
