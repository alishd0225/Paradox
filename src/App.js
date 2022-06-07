import "./App.css";
import React from "react";
import nature from "./images/nature.jpg";
import earth from "./images/earth.png";
import work from "./images/work culture.png";
import people from "./images/peeople.jpg";

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="list">
          <li className="items">Home</li>
          <li className="items">Feature</li>
          <li className="items">Download</li>
          <li className="items">Career</li>
          <li className="items">Pricing</li>
        </ul>
      </nav>
      <div className="youtube-video">
        <iframe
          src="https://www.youtube.com/embed/dpEPNioJ1Ik?autoplay=1&mute=1&version=3&loop=1&playlist=dpEPNioJ1Ik"
          frameBorder="1"
          allow="autoplay;encrypted-media;"
          allowFullScreen
          title="video"
        />
      </div>
      <div className="head-text">
        <div className="head-image">
          <img src={require("./images/original.jpg")} alt="Original" />
        </div>
        <div className="text-center">
          <h3> Building the future</h3>
        </div>
      </div>
      <div className="container">
        <img src={work} alt="Work Culture" />
        <h1>Features Ought To Partake</h1>
      </div>
      <div className="row">
        <div className="column">
          <img src={people} alt="People" />
        </div>
        <div className="column">
          <img src={earth} alt="Earth" />
        </div>
      </div>
      <div className="footer">
        <div className="background-footer">
          <img src={nature} alt="Nature" />{" "}
          <div className="frontal-footer">
            <h1>Every Inspiration from Nature</h1>
            <p>Get started using our services with a 30-day free trial</p>
            <button>Try it Here</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
