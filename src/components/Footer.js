import React from 'react';
import styled from 'styled-components';
import Icon from '../assets/Icon';

const Footer = styled.footer`
  height: 128px;
  width: 100%;
  background: #55596D;
  display: flex;
  align-items: center;
  border-top: 16px solid #3AB5E5;
  
  .container {
    text-align: right;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    display: 
  }
`;

const Footer_ = (props) => {
  return (
    <Footer>
      <div className='container'>
        <Icon name='logoH' fill='white' height='43' width='153'  />
      </div>
    </Footer>
  );
}

export default Footer_;