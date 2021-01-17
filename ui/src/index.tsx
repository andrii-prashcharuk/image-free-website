import React from 'react';
import { render } from 'react-dom';
import AppLayout from './scenes/AppLayoutView';

const root = document.getElementById('root');

if (root) {
    render((<AppLayout />), root);
}

if (module.hot) {
    module.hot.accept();
}
