import React from 'react';
import {Switch} from 'react-router-dom';
import AppliedRoute from './AppliedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import Home from '../Home.js'

export default ({childProps}) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps}/>
    </Switch>