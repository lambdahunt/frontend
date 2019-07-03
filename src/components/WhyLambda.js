import React from 'react';
import styled from 'styled-components';
import companies from '../assets/companies.png'

const WhyLambda = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 10rem;

  p {
    max-width: 475px;
    text-align: center;
  }
  img {
    max-width: 700px;
  }
`;

const WhyLambda_ = (props) => {
  return (
    <WhyLambda>
      <p>Top tech companies are hiring Lambda School graduates</p>
      <img src={companies} alt='Companies Hiring Grads' />
    </WhyLambda>
  );
}

export default WhyLambda_;