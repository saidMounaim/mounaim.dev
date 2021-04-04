import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ToggleMode = () => {
	const [mode, setMode] = useState(false);

	useEffect(() => {
		if (mode === true) {
			document.body.classList.add('dark__mode');
		} else {
			document.body.classList.remove('dark__mode');
		}
	}, [mode]);

	return (
		<ToggleModeStyled>
			<input type="checkbox" value={mode} onChange={() => setMode(!mode)} id="toggle_checkbox" />

			<label htmlFor="toggle_checkbox">
				<div id="star">
					<div className="star" id="star-1">
						★
					</div>
					<div className="star" id="star-2">
						★
					</div>
				</div>
				<div id="moon"></div>
			</label>
		</ToggleModeStyled>
	);
};

const ToggleModeStyled = styled.div`
	position: relative;
	#toggle_checkbox {
		display: none;
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 66px;
		height: 37px;
		background-color: #2196f3;
		border-radius: 56px;
		transform: translateY(-50%);
		cursor: pointer;
		transition: 0.3s ease background-color;
		overflow: hidden;
	}

	@media screen and (max-width: 1024px) {
		margin-top: 30px;
		label {
			position: initial;
		}
	}

	#star {
		position: absolute;
		top: 13px;
		left: 13px;
		width: 10px;
		height: 10px;
		background-color: #fafd0f;
		transform: scale(1);
		border-radius: 50%;
		transition: 0.3s ease top, 0.3s ease left, 0.3s ease transform, 0.3s ease background-color;
		z-index: 1;
	}

	#star-1 {
		position: relative;
	}

	#star-2 {
		position: absolute;
		transform: rotateZ(36deg);
	}

	.star {
		top: 0;
		left: -7px;
		font-size: 34px;
		line-height: 12px;
		color: #fafd0f;
		transition: 0.3s ease color;
	}

	#moon {
		position: absolute;
		bottom: -52px;
		right: 7px;
		width: 27px;
		height: 27px;
		background-color: #fff;
		border-radius: 50%;
		transition: 0.3s ease bottom;
	}

	#moon:before {
		content: '';
		position: absolute;
		top: -12px;
		left: -17px;
		width: 40px;
		height: 40px;
		background-color: #03a9f4;
		border-radius: 50%;
		transition: 0.3s ease background-color;
	}

	#toggle_checkbox:checked + label {
		background-color: #000;
	}

	#toggle_checkbox:checked + label #star {
		top: 6px;
		left: 41px;
		transform: scale(0.3);
		background-color: yellow;
	}

	#toggle_checkbox:checked + label .star {
		color: yellow;
	}

	#toggle_checkbox:checked + label #moon {
		bottom: 8px;
	}

	#toggle_checkbox:checked + label #moon:before {
		background-color: #000;
	}
`;

export default ToggleMode;
