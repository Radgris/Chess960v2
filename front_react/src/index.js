import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from './components/Root'
import reducer from './redux/reducer'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
    <Root />
    </Provider>
    , document.getElementById('root'));
// ReactDOM.render(<Root  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
