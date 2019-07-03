import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Icon from "../assets/Icon";
import { Jumbotron, LandingNav, WhyLambda, Team } from '../components';

const LandingPage = styled.div`
  position: relative;
`;

class LandingPage_ extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <LandingPage>
        <LandingNav />
        <Jumbotron />
        <WhyLambda />
        <Team />
      </LandingPage>
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