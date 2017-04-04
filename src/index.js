/**
 * Created by Tony on 2017/3/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import CommonHeader from './components/commonHeader';
import MainContainer from './components/mainContainer';
import Other from './components/other';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import './index.css';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    combineReducers({
        reducer,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <CommonHeader/>
                <Route exact path="/" component={MainContainer}/>
                <Route path="/other" component={Other}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);