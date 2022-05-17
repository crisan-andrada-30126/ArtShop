import { IS_LOGED } from '../constants';
import { SAVE_USER } from '../constants';

export const isLoged = (isLoged) => {
    return {
        type: 'IS_LOGED',
        payload: isLoged
    }
}
export const saveUser = (user) => {
    return {
        type: 'SAVE_USER',
        payload: user
    }
}