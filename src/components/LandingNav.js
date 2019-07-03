import React from 'react';
import styled from 'styled-components';
import Icon from '../assets/Icon';
import { Link } from 'react-router-dom';

const LandingNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.primaryColor};
  z-index: 1;

  svg {
    margin: 1rem 0;
  }
  .container {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .actions {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      color: ${props => props.theme.paperColor};

      p {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        margin-right: 3rem;
      }
      a {
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        border: 1px solid ${props => props.theme.paperColor};
        background-color: rgba(255, 255, 255, 0);
        text-transform: uppercase;
        text-decoration: none;
        color: ${props => props.theme.paperColor};
        border-radius: ${props => props.theme.radius};
        padding: 1rem 2rem;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
`;

const LandingNav_ = (props) => {
  return (
    <LandingNav>
      <div className='container'>
        <Icon name='nextUpFull' fill='#FAFAFA' />
        <section className='actions'>
          <p>why lambda?</p>
          <Link to='/login'>sign in</Link>
        </section>
      </div>
    </LandingNav>
  );
}

export default LandingNav_;