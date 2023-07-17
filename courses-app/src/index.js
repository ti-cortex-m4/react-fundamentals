import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App.jsx';
import rootReducer from './_store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer);
root.render(
	<React.StrictMode>
		<BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
		</BrowserRouter>
	</React.StrictMode>,
);
