import React from 'react';
import styled from 'styled-components';
import facebook from '../icons/facebook.svg';
import twitter from '../icons/twitter.svg';
import github from '../icons/github.svg';

const SocialMedia = () => {
	return (
		<SocialMediaStyled>
			<span>Find Me on</span>
			<ul>
				<li>
					<a href="https://twitter.com/said_mounaim" rel="noreferrer" target="_blank">
						<img src={twitter} alt="Twitter" />
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/apiyaue06" rel="noreferrer" target="_blank">
						<img src={facebook} alt="Facebook" />
					</a>
				</li>
				<li>
					<a href="https://github.com/saidMounaim" rel="noreferrer" target="_blank">
						<img src={github} alt="Github" />
					</a>
				</li>
			</ul>
		</SocialMediaStyled>
	);
};

const SocialMediaStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	span {
		display: block;
		font-size: 30px;
		color: white;
		font-weight: 200;
		margin-bottom: 17px;
	}
	ul {
		display: flex;
		align-items: center;
		li {
			margin-right: 10px;
			transition: all 0.5s;
			border-radius: 50%;

			a {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 2.375rem;
				height: 2.375rem;
				padding: 0;
				box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
				border-radius: 50%;
			}
			&:first-child {
				a {
					color: #fff;
					background-color: #1da1f2;
					border-color: #1da1f2;
				}
			}
			&:nth-of-type(2) {
				a {
					background-color: #3b5999;
					border-color: #3b5999;
				}
			}
			&:nth-of-type(3) {
				a {
					background-color: #222;
					border-color: #222;
				}
			}
			&:hover {
				box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
				transform: translateY(-1px);
			}
		}
	}
`;

export default SocialMedia;
