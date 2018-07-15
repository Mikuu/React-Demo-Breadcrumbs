import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './App';

import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic';

// const app = (
//   <BrowserRouter>
//     <BreadcrumbsProvider>
//       <App/ >
//     </BreadcrumbsProvider>
//   </BrowserRouter>
// )

const Sandbox = () => (
      <BrowserRouter>
    <BreadcrumbsProvider>
      <App/>
    </BreadcrumbsProvider>
  </BrowserRouter>
);


export default App;
