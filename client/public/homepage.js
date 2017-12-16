import React from 'react';
import { Link } from 'react-router-dom'

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <h1>Make Your Life Whole Again</h1>
        <h3>Get a monthly subscription of Pies</h3>
        <Link to="/formOne">Sign Up</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Homepage;
