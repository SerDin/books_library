import { ACTION_FIRST_NAME } from '../index';
import { newFirstName } from '../store/actions';

const initialState = {
    firstName: 'Alex',
    lastName: 'Pavlov'
};

export const rootReducer = (state = initialState, action) => {
    switch ( action.type ) 
    {
        case ACTION_FIRST_NAME:
        return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName };
    };
    return state;
};
