import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/commons/Footer";
import Form from "../components/features/Form";

//
const fields = {
  //
  sections: [
    // inputs
    [
      {
        elementName: "input",
        type: "text",
        id: "name",
        placeholder: "Name *",
      },
      {
        elementName: "input",
        type: "email",
        id: "email",
        placeholder: "Email *",
      },
      {
        elementName: "input",
        type: "tel",
        id: "phone",
        placeholder: "Phone *",
      },
    ],
    // textarea
    [
      {
        elementName: "textarea",
        type: "textarea",
        id: "message",
        placeholder: "Message *",
      },
    ],
  ],
};

class ContactPage extends Component {
  //
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  render() {
    //
    return (
      <div style={{ marginTop: "72px" }}>
        <section className="page-section" id="contact">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>

            {/* Get API token https://startbootstrap.com/solution/contact-forms */}
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <div className="row align-items-stretch mb-5">
                {fields.sections.map((each, index) => {
                  return (
                    <div className="col-md-6" key={index}>
                      {each.map((item, i) => {
                        return (
                          <Form
                            {...item}
                            key={i}
                            value={this.state[item.id]}
                            onChange={(e) =>
                              this.setState({ [item.id]: e.target.value })
                            }
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              {/* Form submit success message */}
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center text-white mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <Link to="https://startbootstrap.com/solution/contact-forms">
                    https://startbootstrap.com/solution/contact-forms
                  </Link>
                </div>
              </div>

              {/* Form submit error message */}
              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>

              {/* Submit Button*/}
              <div className="text-center">
                <button
                  type="submit"
                  id="submitButton"
                  className="btn btn-primary btn-xl text-uppercase"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default ContactPage;
