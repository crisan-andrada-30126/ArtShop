import { IS_LOGED } from '../constants';

export const isLoged = (isLoged) => {
    return {
        type: 'IS_LOGED',
        payload: isLoged
    }
}