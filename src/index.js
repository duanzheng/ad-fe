/**
 * Created by Tony on 2017/3/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Order from './components/order';
import Other from './components/other';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const store = createStore(
    reducers
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Order}/>
                <Route path="/seat" component={Other}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);