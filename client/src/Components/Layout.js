import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Auth from './Auth';


function Layout(props) {
    return (
            <div id="body" style={{display: "flex"}}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Auth/>
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