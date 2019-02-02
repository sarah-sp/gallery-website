import React from 'react';
import {Switch} from 'react-router-dom';
import AppliedRoute from './AppliedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';

import Home from '../pages/Home.js';
import AdminLogin from '../admin/AdminLogin';
import Collection from '../pages/Collection.js';
import Visiting from '../pages/Visiting';
import ContactUs from '../pages/ContactUs';
import AboutUs from '../pages/AboutUs';

export default ({childProps}) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps}/>

        <AppliedRoute path="/bigbozz" exact component={AdminLogin} props={childProps}/>
        <AppliedRoute path="/collection" exact component={Collection} props={childProps}/>
        <AppliedRoute path="/visiting" exact component={Visiting} props={childProps}/>
        <AppliedRoute path="/contacts" exact component={ContactUs} props={childProps}/>
        <AppliedRoute path="/about" exact component={AboutUs} props={childProps}/>
    </Switch>