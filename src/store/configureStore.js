import { createStore, applyMiddleware, compose } from 'redux'
import reduxImmutableStateInvarient from 'redux-immutable-state-invariant'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import reducers from '../reducers'

const history = createBrowserHistory()

export default function config(initialState) {
    return createStore(
        connectRouter(history)(reducers),
        initialState,
        compose(
            applyMiddleware(
                thunk,
                promiseMiddleware(),
                reduxImmutableStateInvarient(),
                routerMiddleware(history)
            )
        )
    );
};
