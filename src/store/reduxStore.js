import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { fetchRepos } from '../reducers/reposReducer';

const rootReducer = combineReducers({
   repos: fetchRepos 
})

export default function reduxStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}