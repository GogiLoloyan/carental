import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from 'Store';

import Routes from 'routes';
import Firebase, { FirebaseContext } from 'Components/Firebase';

const theme = {};
const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<ThemeProvider theme={theme}>
				<FirebaseContext.Provider value={new Firebase()}>
					<BrowserRouter>
						<Routes />
					</BrowserRouter>
				</FirebaseContext.Provider>
			</ThemeProvider>
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
