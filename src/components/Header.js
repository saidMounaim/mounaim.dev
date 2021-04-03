import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<HeaderStyle>
			<div className="container">
				<Link to="/">Said Mounaim</Link>
			</div>
		</HeaderStyle>
	);
};

const HeaderStyle = styled.header`
	width: 100%;
	left: 0;
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px 0;
	z-index: 2;

	a {
		display: flex;
		flex-direction: column;
		font-family: 'Marck Script', cursive;
		text-transform: capitalize;
		font-size: 25px;
		color: white;
	}
`;

export default Header;
