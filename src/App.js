import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from 'routes';
import GlobalStyles from 'globalStyles';

const theme = {};

const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Routes />
	</ThemeProvider>
);

export default App;
