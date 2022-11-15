import React, { Component } from "react";
import { Link } from "react-router-dom";

class ClientComp extends Component {
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
                    src="assets/img/logos/microsoft.svg"
                    alt="..."
                    aria-label="Microsoft Logo"
                  />
                </Link>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <Link to="#!">
                  <img
                    className="img-fluid img-brand d-block mx-auto"
                    src="assets/img/logos/google.svg"
                    alt="..."
                    aria-label="Google Logo"
                  />
                </Link>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <Link to="#!">
                  <img
                    className="img-fluid img-brand d-block mx-auto"
                    src="assets/img/logos/facebook.svg"
                    alt="..."
                    aria-label="Facebook Logo"
                  />
                </Link>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <Link to="#!">
                  <img
                    className="img-fluid img-brand d-block mx-auto"
                    src="assets/img/logos/ibm.svg"
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

export default ClientComp;
