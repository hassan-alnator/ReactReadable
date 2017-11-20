import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Router history and middleware to integrate with redux
export const history = createHistory()
export const router = routerMiddleware(history)

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(router),
        applyMiddleware(thunk)
    )
)
