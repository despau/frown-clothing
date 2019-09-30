//actions are objects with a type, and a payload
import { UserActionTypes } from './user.types';


export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})