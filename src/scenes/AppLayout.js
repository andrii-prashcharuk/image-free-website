// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from './home';
import getStore from '../utils/getStore';
import './AppLayout.scss';

const store = getStore();

const AppLayout = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div className="AppLayout">
                <Header />
                <main>
                    <Route path="/" exact component={HomePage} />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
);

export default AppLayout;
