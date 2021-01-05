// @flow
import React from 'react';
import type { Node } from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import getStore from '../utils/getStore';
import HomePage from './home';
import PageNotFound from './page-not-found';
import './AppLayout.scss';

const store = getStore();

const AppLayout = (): Node => (
    <Provider store={store}>
        <BrowserRouter>
            <div className="AppLayout">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/page-not-found" exact component={PageNotFound} />
                    <Redirect from="*" to="/page-not-found" />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
);

export default AppLayout;
