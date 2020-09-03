import React, {useContext, createContext, useState, useEffect}from "react";
import Cookies from 'js-cookie';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect,Router } from "react-router-dom";
import Aboutus from "views/examples/Aboutus";
import Homepage from "./views/examples/Homepage";
import App4 from "./views/examples/App4";
import Hscountry from './views/examples/Hscountry';
import Country from './views/examples/Country'
import Hscodename from './views/examples/Hscodename'
import Items from './views/examples/Items'
import history from "./components/login/history"
import './index.css';
import App from './App.jsx';
import axios from "axios";

import LandingPage from "views/examples/LandingPage.js";    
import TradeAnalytics from "views/examples/AITradeAnalyticsHome";
import Economics from "views/examples/AIEconomics";
import ReactAbout from "views/examples/reactAbout";
import Page from 'views/examples/Aidemo'
import Navbaar from "views/examples/navbaar";
import NewFooter from "views/examples/NewFooter";
import Navbaar2 from "views/examples/navbaar2";
import Profile from "./views/examples/Profile";


function Start(props) {
  const PrivateRoute = ({ Auth,component, ...options }) => {
    if(Auth)
    {
      console.log(Auth)
      return <Route {...options} component={component} />;
    }
    else
    return <Route path="/" component={App} />;
  };
  
      return(
          <>
          <div>
            <Navbaar2 />    
            <div>
              <BrowserRouter>
                <Router history={history} >
                  <Switch>
                    <Route exact path= "/profile" render={props => <Profile {...props} />}/>
                    <PrivateRoute path="/About" component={ReactAbout} Auth={props.Auth.flag}/> 
                    <PrivateRoute exact path="/" component={LandingPage} Auth={props.Auth.flag} />
                    <Route path="/Login" render={props => <App {...props} />}/>
                    <Route path="/Register" render={props => <App {...props} />}/>
                    <PrivateRoute exact path="/AI-TradeAnalytics" component={TradeAnalytics} Auth={props.Auth.flag}/> 
                    <PrivateRoute exact path="/AI-Economics" component={Economics} Auth={props.Auth.flag}/>
                    <PrivateRoute exact path="/AI-Demographics" component={Page} Auth={props.Auth.flag}/>
                    <Route path="/">
                    <br /><br /><br />  
                    <h3>404 Page Not Found!</h3>
                    </Route>
                    {/* <Route path="/:lev2/:lev3/:lev4/:lev5" ><Example/></Route> */}
                  </Switch>
                </Router>
              </BrowserRouter>
            </div>
          <div>
          <NewFooter/>
          </div>
        </div>
      </>
      )
}

export default Start;