import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import categoriesReducer from './categoriesReducer'
import postsReducer from './postsReducer'
import commentsReducer from './commentsReducer'
import loadingReducer from './loadingReducer'



export default combineReducers({
    categories: categoriesReducer,
    posts: postsReducer,
    comments: commentsReducer,
    router: routerReducer,
    loading: loadingReducer
})