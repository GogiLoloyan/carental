import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
	/* ${normalize} */
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

  :root {
  	--h1: 55px;
  	--h2: 24px;
  	--h3: 20px;
  	--p2: 18px;
  	--p: 15px;

  	--white: #b2a3c0;
  	--red: #ff0505;
  	--blue: #6149e1;
  	--purple: #9642f2;
  	--card-fon: #1f202d;
  	--paragraf: #484156;
  	--bg-fon: #110f1f;
  }

  *,
	*::before,
	*::after {
  	margin: 0;
  	padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
  }

  body {
  	background-color: var(--bg-fon);
  	user-select: none;
  	overflow: hidden;
	}
`;

export default GlobalStyles;
