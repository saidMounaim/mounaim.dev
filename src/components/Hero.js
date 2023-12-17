import React from "react";
import styled from "styled-components";
import Shapes from "./Shapes";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  return (
    <HeroStyled className="hero-section">
      <Shapes />
      <div className="container">
        <div className="hero-text">
          <h1>Said Mounaim</h1>
          <h4>Full Stack JavaScript Developer.</h4>
          <p>
            Hey 👋! My name is Said Mounaim, Passionate developer with
            experience in building responsive web applications using JavaScript,
            React.js, Next.js, Node.js, and various other libraries and
            frameworks. You can read more about me on my LinkedIn page.
          </p>
          <p>Check my Github for some cool things.</p>
          <SocialMedia />
        </div>
      </div>
    </HeroStyled>
  );
};

const HeroStyled = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  background: linear-gradient(35deg, #11cdef, #1171ef) !important;
  z-index: 1;
  .hero-text {
    width: 600px;
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    p {
      font-size: 20px;
      color: white;
      font-weight: 200;
      line-height: 30px;
      padding-top: 20px;
    }
    h4 {
      font-size: 26px;
      color: white;
      font-weight: 200;
    }
    h1 {
      font-size: 50px;
      line-height: 66px;
      color: white;
    }
  }
  @media screen and (max-width: 768px) {
    height: initial;
    padding-bottom: 70px;
    padding-top: 160px;
    .hero-text {
      flex-direction: column;
    }
  }
`;

export default Hero;
