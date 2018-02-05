import React, { Component, Fragment } from 'react';

class Header extends Component {
  render() {
    return (
      <Fragment>
      <div className="header">
          <h3 className="Resume-logo">Your name & Logo</h3>
      </div>
      <div className="nav">
        <ul>
          <li><a href="#contact"> Contact</a></li>
          <li><a href="#work"> Work</a></li>
          <li><a href="#experience"> Experience</a></li>
          <li><a href="#about"> About</a></li>
        </ul>
        </div>
        </Fragment>
    );
  }
}
export default Header;
