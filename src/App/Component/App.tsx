import { createBrowserHistory } from 'history';
import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router';
import LoginPage from "../../Login/Component/LoginPage";
import "../../Login/Design/Login.css";
import NavBar from '../../NavBar/Component/NavBar';
import Dashboard from '../../Login/Component/Dashboard';
import Logout from '../../Login/Component/Logout';

const history = createBrowserHistory();

interface Props{
}

interface State{

}

export default class App extends Component<Props, State>{

    render() {
        return (
            <>
            <Router history={history}>
                <Route path="*" render={() => <NavBar history = {history} /> } />
            </Router>
            <Router history = {history}>
                <Switch>
                    <Route path="/" exact={true} render= {()=><LoginPage history={history}/>} />
                    <Route path="/dashboard" exact={true} render={() => <Dashboard />} />
                    <Route path="/" exact={true} render={() =><Logout history={history}/>} />
                </Switch>
            </Router>
            </>
        )
    }
}
