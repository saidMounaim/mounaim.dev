import React from 'react';
import styled from 'styled-components';
import DisplayLottie from './DisplayLottie';
import Shapes from './Shapes';
import Coding from '../lottie/coding.json';

const Hero = () => {
	return (
		<HeroStyled>
			<Shapes />
			<div className="container">
				<div className="hero-text">
					<div className="left-side">
						<h4>Hello there. I'm</h4>
						<h1>Said Mounaim</h1>
						<p>I'm a Full Stack Web Developer.</p>
					</div>
					<div className="right-side">
						<DisplayLottie animationData={Coding} />
					</div>
				</div>
			</div>
		</HeroStyled>
	);
};

const HeroStyled = styled.section`
	position: relative;
	height: 100vh;
	display: flex;
	align-items: center;
	background: linear-gradient(35deg, #11cdef, #1171ef) !important;
	z-index: 1;
	.hero-text {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	h4,
	p {
		font-size: 30px;
		color: white;
		font-weight: 200;
	}
	h1 {
		font-size: 50px;
		color: white;
		margin-bottom: 10px;
	}
`;

export default Hero;
