import React, { Component } from 'react';
import './Resume.css';
import Header from './components/Header.jsx';
import Intro from './components/Intro';


class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <header className="Resume-header">
          <Header />
        </header>
        <section id="intro">
          <Intro />
        </section>
      </div>
    );
  }
}

export default Resume;
