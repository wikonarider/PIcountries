import React from 'react';
import { Route, Switch } from 'react-router';
import CreateActivity from '../components/Form/CreateActivity';
import Nav from '../Nav/Nav';
import Home from '../views/Home';
import Landing from '../views/Landing';

const index = () => {
    return (
        <div>
                <Route path='/main' component={Nav} />
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/main' component={Home} />
                <Route exact path='/main/create_activity' component={CreateActivity} />
            </Switch>
        </div>
    )
};

export default index;