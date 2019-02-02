import React from 'react';
import {Switch} from 'react-router-dom';
import AppliedRoute from './AppliedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import Home from '../Home.js'
import AdminLogin from '../admin/AdminLogin'

export default ({childProps}) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps}/>
        <AppliedRoute path="/bigbozz" exact component={AdminLogin} props={childProps}/>
    </Switch>