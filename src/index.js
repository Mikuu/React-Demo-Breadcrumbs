import React from 'react';
import ReactDOM from 'react-dom';
import App from './sandbox';
import { BrowserRouter } from 'react-router-dom'
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <BreadcrumbsProvider>
            <App/>
        </BreadcrumbsProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();