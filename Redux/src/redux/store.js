import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import middleware from './middleware'

const store = createStore(reducer, undefined, applyMiddleware(middleware))

export default store