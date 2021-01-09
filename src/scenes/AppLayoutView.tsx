/** @jsx jsx */
import React from 'react';
import { jsx, ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import {
    BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import getStore from '../utils/getStore';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';
import HomePage from './home';
import PageNotFound from './page-not-found';

const store = getStore();

const AppLayout = (): JSX.Element => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div className="AppLayout">
                    <GlobalStyles />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/page-not-found" exact component={PageNotFound} />
                        <Redirect from="*" to="/page-not-found" />
                    </Switch>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);

export default AppLayout;
