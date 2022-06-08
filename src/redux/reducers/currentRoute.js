
import { CURRENT_ROUTE } from '../constants';

const initialState = {
    route: null,

};
const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_ROUTE:
            return {
                ...state,
                route: action.payload
            };
        default:
            return state;
    }
}
export default routeReducer;