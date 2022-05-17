import { createStore, combineReducers } from 'redux';
import logedReducer from '../reducers/logedReducer';
import userReducer from '../reducers/userReducer';
const rootReducer = combineReducers(
    {
        isLoged: logedReducer,
        user: userReducer
    }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;