import { css } from 'styled-components';

export const createKeyboardOnlyFocus = (element, customStyles) => css`
	&:focus ${element} {
		outline: 1px dotted var(--theme);
		outline-offset: 10px;
		${() => {
			switch (customStyles) {
				case 'menu-text':
					return css`
						color: var(--theme);
					`;
				case 'home-button':
					return css`
						background-color: var(--purple);
						background-image: radial-gradient(
							100px at 100% 60%,
							#23113fab,
							transparent 267%
						);
						box-shadow: 0px 0px 3vh 0px #201131d3;
						outline: 1px dotted var(--blue);
						outline-offset: 1px;
					`;
				default:
					return;
			}
		}};
	}

	&:focus,
	& ${element}:focus {
		outline: none;
	}
`;
