import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      telephone: ''
    };
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
              placeholder="First Name"
              required
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="lastName"
            >Password</label>
            <input
              type="email"
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
            >Password</label>
            <input
              //I am aware there is a type input tel, but using number for now
              type="number"
              onChange={this.handleChange}
              name="telephone"
              value={this.state.telephone}
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
