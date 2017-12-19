import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      state: '',
      country: '',
      zip: '',
    };
  }

  handleFormSubmit = (event) => {
    const address = `${this.state.street},${this.state.state},${this.state.country},${this.state.zip}`;
    console.log(address);
    const formThree = { address }
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
              htmlFor="street"
            >street</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="street"
              value={this.state.street}
              placeholder="street"
              required
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="state"
            >state</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="state"
              value={this.state.state}
              placeholder="state"
              required
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="country"
            >country</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="country"
              value={this.state.country}
              placeholder="country"
              required
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="zip"
            >country</label>
            <input
              type="number"
              onChange={this.handleChange}
              name="zip"
              value={this.state.zip}
              placeholder="zip"
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
    result: this.state.formThree.results
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormThree);
