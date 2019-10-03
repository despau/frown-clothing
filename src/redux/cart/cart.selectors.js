import { createSelector } from 'reselect';

//1st type: input selector. returns a piece of the state
// takes STATE returns CART
const selectCart = state => state.cart;

//2nd type: output selector. returns a piece of the state
//this function takes 2 args([inputselector], output)
//takes CART returns CARTITEMS
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

//this function takes cartItems, return accumulatedquantity
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
        0
    )
)