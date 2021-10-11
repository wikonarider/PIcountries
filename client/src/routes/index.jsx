import React from 'react';
import { Route, Switch } from 'react-router';
import Landing from '../views/Landing';
import Nav from '../Nav/Nav';
import Home from '../views/Home';
import CreateActivity from '../components/Form/CreateActivity';
import CountryDetail from '../components/CountryDetail'

const index = () => {
    return (
        <div>
                <Route path='/main' component={Nav} />
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/main' component={Home} />
                <Route exact path='/main/create_activity' component={CreateActivity} />
                <Route exact path='/main/detail/:id' render={({match}) => < CountryDetail id={match.params.cod} />}></Route>
                {/* <Route exact path='/main/detail/:id' component={CountryDetail} /> */}
            </Switch>
        </div>
    )
};

export default index;