
import { CURRENT_ROUTE } from '../constants';

export const setRoute = (route) => {
    return {
        type: 'CURRENT_ROUTE',
        payload: route
    }
}
