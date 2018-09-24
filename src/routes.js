import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Events from './components/events/Events';
import News from './components/news/News';
import PrivateEvents from './components/privateEvents/PrivateEvents';
import Weddings from './components/weddings/Weddings';
import WeeklyOffers from './components/weeklyOffers/WeeklyOffers'

export default (
    
    <Switch>
        <Route path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Events' component={Events} />
        <Route path='/News' component={News} />
        <Route path='/PrivateEvents' component={PrivateEvents} />
        <Route path='/Weddings' component={Weddings} />
        <Route path='/WeeklyOffers' component={WeeklyOffers} />
    </Switch>

)