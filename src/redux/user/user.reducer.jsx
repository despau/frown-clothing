//a reducer function gets an initial state, and an action as properties. Every single reducer gets every action fired by the app
const INITIAL_STATE ={
    currentUser: null
}

 const userReducer = (state=INITIAL_STATE, action) => {
     switch (action.type) {
         case 'SET_CURRENT_USER': 
            return {
                ...state,
                currentUser: action.payload
            }
         default:
             return state;
     }
 }

 export default userReducer;