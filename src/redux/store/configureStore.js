import { createStore, combineReducers } from 'redux';
import logedReducer from '../reducers/logedReducer';
const rootReducer = combineReducers(
    { isLoged: logedReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;