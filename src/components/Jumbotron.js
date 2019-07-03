import React from 'react';
import styled from 'styled-components';
import LambdaImg from '../assets/LambdaImg.jpg';

const Jumbotron = styled.section`
  background-image: url(${LambdaImg});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: relative;

  .overlay {
    background: linear-gradient(60deg, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 20%,rgba(255,255,255,0) 60%,rgba(255,255,255,0) 100%);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
  }
  .context {
    width: 900px;
    margin: 0 auto;
    h1 {
      color: ${props => props.theme.primaryColor};
      max-width: 400px
      font-weight: 900;
      font-size: 36px;
      line-height: 46px;
    }
    p {
      font-weight: normal;
      font-size: 21px;
      line-height: 33px;
      color: rgba(0, 0, 0, 0.87);
      max-width: 230px;
      margin: 2rem 0 3rem;

      strong {
        font-weight: 500;
      }
    }
    button {
      border: none;
      border-radius: ${props => props.theme.radius};
      background-color: ${props => props.theme.primaryColor};
      color: ${props => props.theme.paperColor};
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      padding: 1rem 2rem;
      text-transform: uppercase;

      &:hover {
        background-color: #88032c;
      }
    }
  }
`;

const Jumbotron_ = (props) => {
  return (
    <Jumbotron>
      <div className='overlay'>
        <div className='context'>
          <h1>Your source for finding the next stars in the tech industry</h1>
          <p><strong>Lambda NextUp</strong> showcases diverse talent in all 50 states</p>
          <button>see candidates</button>
        </div>
      </div>
    </Jumbotron>
  );
}

export default Jumbotron_;