import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store';
import './styles/index.scss';

ReactDOM.render(
	// <React.StrictMode>
		<React.Suspense>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</React.Suspense>,
	// </React.StrictMode>,
	document.getElementById('root')
);
