import React from 'react';
import Main from "./Main";
import SB from "./SB"
import Login from './SignIn'
import SignUp from './SignUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';


function Layout(props) {
    return (
            <div id="body" style={{display: "flex"}}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/SignIn">
                            <Login />
                        </Route>
                        <Route path="/SignUp">
                            <SignUp/>
                        </Route>
                        <Route path="/Dashboard">
                            <Dashboard/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
    );
}

export default Layout;