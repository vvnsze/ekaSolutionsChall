import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      telephone: null
    };
  }

  handleFormSubmit = (event) => {
    const formTwo = { ...this.state }
    console.log('formTwo: ', formTwo);
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
              htmlFor="firstName"
            >First Name</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="first Name"
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

FormTwo.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(FormTwo);
