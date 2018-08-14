// @flow
import React from 'react';
import { render } from 'react-dom';
import AppLayout from './scenes/AppLayout';

const root = document.getElementById('root');

if (root) {
    render((<AppLayout />), root);
}
