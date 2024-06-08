import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppLayout } from './scenes/AppLayout';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render((<AppLayout />));
}

if (module.hot) {
    module.hot.accept();
}
