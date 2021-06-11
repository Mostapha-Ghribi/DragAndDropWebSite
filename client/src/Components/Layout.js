import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Auth from './Auth';


function Layout() {
    return (
            <div id="body" style={{display: "flex"}}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Auth/>
                        </Route>
                        <Route path="/home">
                            <Dashboard/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
    );
}

export default Layout;