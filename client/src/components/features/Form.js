import React, { Component } from "react";

class Form extends Component {
  //
  render() {
    //
    return (
      <div>
        <>
          {this.props.elementName === "input" ? (
            <div className="form-group">
              <input
                className="form-control"
                id={this.props.id}
                type={this.props.type}
                placeholder={this.props.placeholder}
                data-sb-validations="required"
                value={this.props.value}
                onChange={(e) => this.props.onChange(e)}
              />
              <div
                className="invalid-feedback"
                data-sb-feedback="name:required"
              >
                A name is required.
              </div>
            </div>
          ) : (
            <div className="form-group form-group-textarea mb-md-0">
              <textarea
                className="form-control"
                id={this.props.id}
                placeholder={this.props.placeholder}
                data-sb-validations="required"
                value={this.props.value}
                onChange={(e) => this.props.onChange(e)}
              />
              <div
                className="invalid-feedback"
                data-sb-feedback="message:required"
              >
                A message is required.
              </div>
            </div>
          )}
        </>
      </div>
    );
  }
}

export default Form;
