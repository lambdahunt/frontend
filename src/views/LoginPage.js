// Login Page
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { login } from '../store/actions';
import brandingBackground from '../assets/BrandingBackground.mp4';
import Icon from "../assets/Icon";

const LoginPage = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  .container {
    background-color: ${(props) => props.theme.paperColor};
    border-radius: ${(props) => props.theme.radius};
    box-shadow: ${(props) => props.theme.mainShadow};
    display: flex;
    flex-flow: row nowrap;
    height: 450px;
    overflow: hidden;
    width: 800px;

    div {
      flex-shrink: 1;
    }
  }
`;

const BrandingContainer = styled.div`
  height: 100%;
  position: relative;
  width: 50%;

  .videoContainer {
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;

    video {
      filter: blur(1px);
      height: auto;
      left: 50%;
      min-height: 100%;
      min-width: 100%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: auto;
    }
  }
  .overlay {
    bottom: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;

    .spacer {
      height: 4.7rem;
    }
    .nextUp {
      margin: 0 auto;
    }
    .logoH {
      border-top: 1px solid white;
      margin: 0 auto 2rem;
      padding-top: 1rem;
    }
  }
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100%;
  position: relative;
  width: 50%;
  padding: 1rem 4rem;

  form {
    color: #757575;

    h1 {
      font-weight: 300;
      font-size: 36px;
      line-height: 24px;
      padding-bottom: 3rem;
    }
    input {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 18px;
      border: none;
      width: 100%;
      padding: 2rem 0 1rem;
      border-bottom: 1px solid #757575;
      transition: color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

      &:hover {
        color: #2196f3;
      }
      &:focus {
        color: #2196f3;
        border-bottom: 1px solid #2196f3; 
      }
    }
  }
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .forgot-password {
      display: inline-block;
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.6);
      cursor: pointer;

      &:hover {
        color: ${props => props.theme.buttonColor};
      }
    }
  }
`;
const LoginButton = styled.button`
  border: none;
  border-radius: ${props => props.theme.radius};
  color: #757575;
  background-color: #e0e0e0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0.5rem 1.5rem;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: ${props => props.theme.buttonColor};
    color: ${props => props.theme.paperColor};
  }
  p {
    display: inline-block;
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin-right: 1rem;
    font-weight: 500;
    text-transform: uppercase
  }
`;
const LambdaArrow = styled.span`
  svg {
    display: inline-block;
    fill: white;
    transition: transform 0.5s ease;
    
    ${LoginButton}:hover & {
      transform: rotate(-90deg);
      fill: ${props => props.theme.paperColor};
    }
  }
`;

const initialState = {
  credentials: {
    username: '',
    password: '',
  },
  redirectToReferrer: false,
};

class LoginPage_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }
  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value,
      },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login({ ...this.state.credentials });
    this.setState({ ...initialState });
  };
  render() {
    // if (localStorage.getItem('userToken')) {
    //   return <Redirect to='/' />;
    // }
    return (
      <LoginPage>
        <section className='container'>
          <BrandingContainer>
            <div className='videoContainer'>
              <video width={960} height={540} autoPlay muted loop>
                <source src={brandingBackground} type='video/mp4' />
              </video>
            </div>
            <div className='overlay'>
              <div className='spacer' />
              <Icon className='nextUp' name='nextUp' fill='#ffffff' />
              <Icon className='logoH' name='logoH' fill='#ffffff' />
            </div>
          </BrandingContainer>
          <LoginFormContainer>
            <div className='spacer' />
            <form onSubmit={this.handleSubmit}>
              <h1>Sign In</h1>
              <div className='spacer' />
              <input
                type='text'
                name='username'
                placeholder='Email'
                value={this.state.credentials.username}
                onChange={this.handleInput}
              />
              <input
                type='text'
                name='password'
                placeholder='Password'
                value={this.state.credentials.password}
                onChange={this.handleInput}
              />
            </form>
            <section>
              <p className='forgot-password'>Forgot Password?</p>
              {this.props.pending ? (
                <button>
                  <div>
                    <FontAwesomeIcon icon={['fas', 'circle-notch']} spin />
                  </div>
                </button>
              ) : (
                <LoginButton onClick={this.handleSubmit}>
                  <p>Login</p>
                  <LambdaArrow><Icon name='arrow' /></LambdaArrow>
                </LoginButton>
              )}
            </section>
          </LoginFormContainer>
        </section>
      </LoginPage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.loginReducer.error,
    pending: state.loginReducer.pending,
  };
};

export default connect(
  mapStateToProps,
  { login },
)(LoginPage_);
