import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from "../assets/Icon";
import { Jumbotron } from '../components';

class LandingPage_ extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <Jumbotron />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // error: state.loginReducer.error,
    // pending: state.loginReducer.pending,
  };
};

export default connect(
  mapStateToProps,
  {},
)(LandingPage_);