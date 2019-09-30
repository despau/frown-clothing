//actions are objects with a type, and a payload

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})