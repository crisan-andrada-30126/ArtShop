import { IS_LOGED } from '../constants';
const initialState = {
    isLoged: false
};
const logedReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOGED:
            return {
                ...state,
                isLoged: action.payload
            };
        default:
            return state;
    }
}
export default logedReducer;