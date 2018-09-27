import React from 'react'
import { Login, Logout } from './containers'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export default () => (
    <ConnectedRouter history={history}>
        <div>
            <Switch>
                <Route path="/" component={Login} />
                <Route exact path="/logout" component={Logout} />
            </Switch>
        </div>
    </ConnectedRouter>
)
