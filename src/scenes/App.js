import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import HomePage from './home';
import getStore from '../utils/getStore';
import './App.scss';

const store = getStore();

const AppLayout = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div className="AppLayout">
                <header>
                    <Nav />
                </header>
                <main>
                    <Route path="/" exact component={HomePage} />
                </main>
            </div>
        </BrowserRouter>
    </Provider>
);

export default AppLayout;
