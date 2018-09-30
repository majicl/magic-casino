import { createStore, applyMiddleware, compose } from 'redux'
import reduxImmutableStateInvarient from 'redux-immutable-state-invariant'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import reducers from '../reducers'

const history = createBrowserHistory()

/**
 * Redux store configuration function
 * using thunk, promiseMiddleware as middlewares to deal with data
 * using routerMiddleware to manage route in Redux
 * @export
 * @param {any} initialState 
 * @returns 
 */
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
    )
}
