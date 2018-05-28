import { ACTION_FIRST_NAME } from '../index';

export const newFirstName = () => {
    return {
        type: ACTION_FIRST_NAME,
        payload: {firstName: 'Sergey', lastName: 'Din'}
    };
}