/** @jsx jsx */
import React, { JSX } from 'react';
import { jsx, ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { Navigate } from 'react-router';
import {
    BrowserRouter, Route, Routes,
} from 'react-router-dom';
import getStore from '../utils/getStore';
import { GlobalStyles } from '../styles/GlobalStyles';
import theme from '../styles/theme';
import { HomePage } from './home';
import { PageNotFound } from './page-not-found';

const store = getStore();

export function AppLayout(): JSX.Element {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <div className="AppLayout">
                        <GlobalStyles />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/page-not-found" element={<PageNotFound />} />
                            <Route path="*" element={<Navigate to="/page-not-found" replace />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}
