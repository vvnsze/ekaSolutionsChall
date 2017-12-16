import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      email: null
    };
  }

  handleFormSubmit = (event) => {
    const formThree = { ...this.state }
    console.log('formThree: ', formThree);
  }

  handleChange = (event) => {
    const obj = {};
    obj[`${event.target.name}`] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label
              htmlFor="userName"
            >userName</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="userName"
              value={this.state.username}
              placeholder="Please enter username"
              required
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="email"
            >Password</label>
            <input
              type="email"
              onChange={this.handleChange}
              name="email"
              value={this.state.password}
              placeholder="Please enter email address"
              required
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="password"
            >Password</label>
            <input
              type="password"
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
              placeholder="Please create password"
              required
            />
          </fieldset>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

FormThree.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    // displayCards: state.cards.allCards,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormThree);
