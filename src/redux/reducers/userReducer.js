import { SAVE_USER } from '../constants';

const initialState = {
    user: null,

};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}
export default userReducer;
