import { createStore, combineReducers } from 'redux';
import logedReducer from '../reducers/logedReducer';
import userReducer from '../reducers/userReducer';
import routeReducer from '../reducers/currentRoute';
const rootReducer = combineReducers(
    {
        isLoged: logedReducer,
        user: userReducer,
        route: routeReducer,
    }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;