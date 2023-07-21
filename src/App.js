import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Component } from "react";
import resumeData from "./resumeData.json";
import Blog from "./components/Blog";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: resumeData
    };
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio />
        <Contact data={this.state.resumeData.main} />
        <Blog />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
