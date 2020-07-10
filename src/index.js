import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from 'Store';

import GlobalStyles from 'GlobalStyles';

import Routes from 'routes';


const theme = {};
const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);
