import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const routes = [ ];

export const Routes = () => (
    <Router>
        <Switch>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
            >
                <route.Component />
            </Route>
        ))}
        </Switch>
    </Router>
)