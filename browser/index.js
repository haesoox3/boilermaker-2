import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './index.scss';

ReactDOM.render(
	<Provider store={store}>
  		<div>Welcome to Hell!</div>
  	</Provider>,
  document.getElementById('app')
);