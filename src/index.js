import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

const store= createStore(reducer, middleware)

ReactDOM.render(
	<Provider store={store}>
		<Root />	    
	</Provider>, 
	document.getElementById('root')
);

