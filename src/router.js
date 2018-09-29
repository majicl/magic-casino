import React from 'react'
import { Login, Logout, GameDetails, Landing } from './containers'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export default () => (
    <ConnectedRouter history={history}>
        <div>
            <Switch>
                <Route path="/game/g-:id/:title" component={GameDetails} />
                <Route path="/" component={Landing} />
                <Route path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
            </Switch>
        </div>
    </ConnectedRouter>
)
