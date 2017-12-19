import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      city: '',
      state: '',
      country: '',
      zip: '',
    };
  }

  handleFormSubmit = (event) => {
    const address = `${this.state.street},${this.state.city},${this.state.state},${this.state.country},${this.state.zip}`;
    const formThree = { address, id: this.props.user.id }
    console.log('formThree: ', formThree);
    this.props.dispatch(actions.postFormThree(formThree));
    event.preventDefault();
  }

  handleChange = (event) => {
    const obj = {};
    obj[`${event.target.name}`] = event.target.value;
    this.setState(obj);
    event.preventDefault();
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
              htmlFor="city"
            >city</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="city"
              value={this.state.city}
              placeholder="city"
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
            >zip</label>
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

function mapStateToProps(state) {
  return {
    user: state.formOne.result,
    result: state.formThree.results
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormThree);
