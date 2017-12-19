import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Route, Redirect } from 'react-router-dom';

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      telephone: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.result.result === 'success') {
      nextProps.history.push('/formTwo');
    }
  }

  handleFormSubmit = (event) => {
    const formTwo = { ...this.state }
    event.preventDefault();
    console.log('formTwo: ', formTwo);
    this.props.dispatch(actions.postFormTwo(formTwo))
  }

  handleChange = (event) => {
    const obj = {};
    event.preventDefault();
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
              name="firstName"
              value={this.state.username}
              placeholder="Please enter First Name"
              required
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="lastName"
            >Last name</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="lastName"
              value={this.state.lasName}
              placeholder="Please enter Last Name"
              required
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="telephone"
            >Telephone</label>
            <input
              type="telephone"
              onChange={this.handleChange}
              name="telephone"
              value={this.state.telephone}
              placeholder="Please enter telephone #"
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
    result: state.formTwo.result
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormTwo);
