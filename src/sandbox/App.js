import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Grid, Breadcrumb as BootstrapBreadcrumb } from 'react-bootstrap'
import { Breadcrumbs, BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

import CrumbItem from './CrumbItem';
import CrumbIconItem from './CrumbIconItem';

import Navbar from './Navbar'
import MainPage from './MainPage'
import ProfilePage from './ProfilePage'
import ToolsPage from './ToolsPage'

import {base_path} from './constants'


class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>

          <BreadcrumbsItem glyph='home' to={base_path}>
          Home Page
          </BreadcrumbsItem>


        {/*<Breadcrumbs*/}
          {/*item={CrumbIconItem}*/}
          {/*container={BootstrapBreadcrumb}*/}
          {/*finalProps={{active: true}}*/}
          {/*duplicateProps={{to: 'href'}}*/}
       {/*/>*/}


          <Breadcrumbs
          item={CrumbItem}
          container={BootstrapBreadcrumb}
          finalProps={{active: true}}
          duplicateProps={{to: 'href'}}
        />

          <div>
              <Route exact path='/' component={MainPage} />
              <Route exact path={`${base_path}`} component={MainPage} />
              <Route exact path={`${base_path}/profile`} component={ProfilePage} />
              <Route path={`${base_path}/tools`} component={ToolsPage} />
          </div>

      </div>
    );
  }
}

export default App;
