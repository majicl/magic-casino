import React from 'react'
import { Login, GameDetails, Landing } from './containers'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export default () => (
    <ConnectedRouter history={history}>
        <div>
            <Switch>
                <Route path="/game/g-:id/:title" component={GameDetails} />
                <Route path="/games" exact component={Landing} />
                <Route path="/" exact component={Login} />
            </Switch>
        </div>
    </ConnectedRouter>
)
