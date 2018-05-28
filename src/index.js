import React from 'react';
import ReactDOM from 'react-dom';
import { rootReducer } from './store/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainComponent from './components/MyComponents';

export const ACTION_FIRST_NAME = 'ACTION_FIRST_NAME';

ReactDOM.render(
<Provider store={createStore(rootReducer)}> 
    <MainComponent/>
</Provider>,
document.getElementById('root')
);