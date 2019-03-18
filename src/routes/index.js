import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Pages/Home';
import ErrorPage from '../component/ErrorPage';


export default class Routes extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/:type/:token" exact component={Home} />
            <Route path="/404" exact component={ErrorPage} />
            <Redirect from="*" to="/404" />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
