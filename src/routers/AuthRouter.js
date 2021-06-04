import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../components/Login/Login';
import Register from '../components/Login/Register';

export const AuthRouter = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/auth/login"
                    component={Login}
                />
                <Route
                    exact
                    path="/auth/register"
                    component={Register}
                />
                <Redirect to="/auth/login" />
            </Switch>
        </Router>
    )
}
