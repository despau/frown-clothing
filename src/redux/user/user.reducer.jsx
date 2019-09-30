//a reducer function gets an initial state, and an action as properties. Every single reducer gets every action fired by the app

import { UserActionTypes } from './user.types';

const INITIAL_STATE ={
    currentUser: null
}

 const userReducer = (state=INITIAL_STATE, action) => {
     switch (action.type) {
         case UserActionTypes.SET_CURRENT_USER: 
            return {
                ...state,
                currentUser: action.payload
            }
         default:
             return state;
     }
 }

 export default userReducer;