import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './App';
import Arms from "./Arms";
import Legs from "./Legs";
import Chest from "./Chest";
import Core from "./Core";
import Home from "./Home";


import AuthService from './utils/AuthService';

const auth= new AuthService("5o3X2K3WaK1srsq7Ja2N4HJVN9Xwofnz", "emptyfoster.auth0.com")

import './index.css';


const requireAuth=(nestState, replace) =>{
console.log(requireAuth);
if(!auth.loggedIn()){
  replace({
    pathname:'/'
  })
}
}


ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={App} auth={auth}>
    <IndexRoute component ={Home}/>
    <Route path="/arms" component={Arms} onEnter={requireAuth}/>
    <Route path="/legs" component={Legs} onEnter={requireAuth}/>
    <Route path="/chest" component={Chest} onEnter={requireAuth}/>
    <Route path="/core" component={Core} onEnter={requireAuth}/>
    <Route path="/access_token=:token" component={Home} />
  </Route>
</Router>,
  document.getElementById('root')
);
