import React, { Component } from "react";
import Pdf from "../manav_mendiratta_resume.pdf";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/profilepic.jpg"
              alt="Mendiratta Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>
                    {name}
                    <br />
                    {city} <br />
                    {state}, {zip}
                  </span>
                  <br />
                  <span>{email}</span>
                  <br />
                  {/* <span>{email2}</span> */}
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a className="button" href={Pdf} target="_blank" download>
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
