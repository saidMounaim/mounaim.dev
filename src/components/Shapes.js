import React from 'react';
import styled from 'styled-components';

const Shapes = () => {
	return (
		<ShapesStyled>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</ShapesStyled>
	);
};

const ShapesStyled = styled.div`
	position: absolute;
	top: 0;
	z-index: -1;
	width: 100%;
	height: 100%;
	span {
		position: absolute;
		height: 120px;
		width: 120px;
		border-radius: 50%;
		&:first-child {
			left: -4%;
			bottom: auto;
			background: hsla(0, 0%, 100%, 0.1);
		}
		&:nth-child(2) {
			right: 4%;
			top: 10%;
			background: hsla(0, 0%, 100%, 0.1);
		}
		&:nth-child(3) {
			top: 280px;
			right: 5.66666%;
			background: hsla(0, 0%, 100%, 0.3);
		}
		&:nth-child(4) {
			top: 320px;
			right: 7%;
			background: hsla(0, 0%, 100%, 0.15);
		}
		&:nth-child(5) {
			top: 38%;
			left: 1%;
			right: auto;
			background: hsla(0, 0%, 100%, 0.05);
		}
		:nth-child(6) {
			width: 200px;
			height: 200px;
			top: 44%;
			left: 10%;
			right: auto;
			background: hsla(0, 0%, 100%, 0.15);
		}
		&:nth-child(7) {
			bottom: 50%;
			right: 36%;
			background: hsla(0, 0%, 100%, 0.04);
		}
		&:nth-child(8) {
			bottom: 70px;
			right: 2%;
			background: hsla(0, 0%, 100%, 0.2);
		}
		&:nth-child(9) {
			bottom: 1%;
			right: 2%;
			background: hsla(0, 0%, 100%, 0.1);
		}
	}
`;

export default Shapes;
