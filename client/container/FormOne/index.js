import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
  }

  handleFormSubmit = (event) => {
    const formOne = { ...this.state }
    event.preventDefault();
    console.log('formOne: ', formOne);
    this.props.dispatch(actions.postFormOne(formOne))

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
              htmlFor="username"
            >userName</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="username"
              value={this.state.username}
              placeholder="Please enter username"
              required
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="email"
            >Email</label>
            <input
              type="email"
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
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

function mapStateToProps(state) {
  return {
    formOne: state.formOne,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormOne);
