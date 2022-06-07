
import { createStore, combineReducers } from 'redux';
import { LogInReducer,reducer } from './Reducer';
const rootReducer = combineReducers({
    login: LogInReducer,
    reducer
})

export const Store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())