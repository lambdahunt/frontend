import React from 'react';
import styled from 'styled-components';
import Icon from '../assets/Icon';
import Eric from '../assets/eric.png';
import Jeff from '../assets/jeffrey.png';
import Ruby from '../assets/ruby.png';
import Shaun from '../assets/shaun.png';
import Tay from '../assets/tay.png';

const Team = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .container {
    height: 90%;
    width: 100%;
    max-width: 900px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      ".    .    .     .     .    .    .   "
      "text text text  .     .    jeff .   "
      "text text text  .     .    .    .   "
      "text text text  .     eric .    ruby"
      ".    .    .     .     .    .    .   "
      ".    .    shaun .     .    tay  .   "
      ".    .    .     .     .    .    .   ";

    .text {
      grid-area: text;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: flex-start;

      p {
        max-width: 320px;
        font-weight: 500;
        font-size: 24px;
        line-height: 40px;
        margin-bottom: 3rem;
      }
    }
    .avatar {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      text-align: center;
      div {
        height: 100px;
        width: 100px;
        border-radius: 50px;
        background-size: cover;
      }
      h2 {
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
      }
      p {
        font-family: ${props => props.theme.secondaryFontStack};
        font-weight: 500;
        font-size: 13px;
        line-height: 18px;
      }
    }
    .eric {
      grid-area: eric;
      div {
        background-image: url(${Eric});
      }
    }
    .jeff {
      grid-area: jeff;
      div {
        background-image: url(${Jeff});
      }
    }
    .ruby {
      grid-area: ruby;
      div {
        background-image: url(${Ruby});
      }
    }
    .shaun {
      grid-area: shaun;
      div {
        background-image: url(${Shaun});
      }
    }
    .tay {
      grid-area: tay;
      div {
        background-image: url(${Tay});
      }
    }
  }
`;

const Team_ = (props) => {
  return (
    <Team>
      <div className='container'>
        <section className='text'>
          <p>Lambda NextUp was designed in 2 days by five Lambda School students during an annual Hackathon</p>
          <Icon name='nextUpFlat' fill="#BB1333" />
        </section>
        <div className='avatar eric'>
          <div></div>
          <h2>Eric SarragaLugo</h2>
          <p>Front-End Engineer</p>
        </div>
        <div className='avatar jeff'>
          <div></div>
          <h2>Jeffrey Kang</h2>
          <p>Back-End Engineer</p>
        </div>
        <div className='avatar ruby'>
          <div></div>
          <h2>Ruben Rosa</h2>
          <p>Front-End Engineer</p>
        </div>
        <div className='avatar shaun'>
          <div></div>
          <h2>Shaun Zinda</h2>
          <p>UX/UI Designer</p>
        </div>
        <div className='avatar tay'>
          <div></div>
          <h2>Dionuta 'Tay' Burton</h2>
          <p>Back-End Engineer</p>
        </div>
      </div>
    </Team>
  );
}

export default Team_;