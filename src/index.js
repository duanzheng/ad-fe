/**
 * Created by Tony on 2017/3/15.
 */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import CommonHeader from './components/commonHeader';
import MainContainer from './components/mainContainer';
import Other from './components/other';
import { HashRouter, Route } from 'react-router-dom';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <CommonHeader/>
                <Route exact path="/" component={MainContainer}/>
                <Route path="/other" component={Other}/>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);