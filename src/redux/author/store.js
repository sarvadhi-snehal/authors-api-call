import authorReducer from './authorReducer';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    authors : authorReducer
})
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store;