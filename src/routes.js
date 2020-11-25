import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import AppleWatchhermes from './components/Home/hermes';
import watchse from './components/Home/watchse';
import AppleWatch from './components/Home/AppleWatch';
import fenix from './components/Home/Fenix6s'
import descentmk from './components/Home/descent'
import venu from './components/Home/venu'
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import NotFound from './components/NotFound/NotFound';

const Routes = () => (
<BrowserRouter >
<Switch>
<Route exact path="/" component={Welcome}/>
<Route path="/welcome" component={Welcome}/>
<Route path="/home" component={Home}/>
<Route path="/hermes" component={AppleWatchhermes}/>
<Route path="/watchse" component={watchse}/>
<Route path="/applewatch" component={AppleWatch}/>
<Route path="/Fenix" component={fenix}/>
<Route path="/descent" component={descentmk}/>
<Route path="/venu" component={venu}/>
<Route path="/cart" component={Cart}/>
<Route path="/order" component={Order}/>
<Route path="/login" component={Login}/>
<Route path="/Signup" component={Signup}/>
<Route path="*" component={NotFound}/>
</Switch>
</BrowserRouter>
);
export default Routes;