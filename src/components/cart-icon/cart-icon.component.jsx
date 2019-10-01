import React from 'react';
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';

import { toggleCartHidden } from './../../redux/cart/cart.actions';

import './cart-icon.styles.scss'

//lets create CartIcon component and pass the cart.action function to it as prop
const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className="cart-icon"
            onClick={toggleCartHidden}
        >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count"> 0 </span>
    </div>
    )
}

//lets attached the toggleCartHidden function to this mapDispatchToProps
//because we need to use it in our CartIcon up here
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () =>dispatch(toggleCartHidden())
})


//bind the mapDispatchToProps with CartIcon so it is available to use in our CartIcon component
export default connect(
    null,
    mapDispatchToProps
    )(CartIcon);