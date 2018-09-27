import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Router from './router'
import './api/mock/mock-api' // initiate mock api
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
const store = configureStore()

render(
    <Provider
    store={store}
    >
        <Router />
    </Provider>
    , document.getElementById('root'))
registerServiceWorker()
