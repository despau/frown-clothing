import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector }  from 'reselect'
import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';

import { toggleCartHidden } from './../../redux/cart/cart.actions';
import { selectCartItemsCount } from './../../redux/cart/cart.selectors';

import './cart-icon.styles.scss'


//lets create CartIcon component and pass the cart.action function to it as prop
const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon"
            onClick={toggleCartHidden}
        >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count"> {itemCount} </span>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () =>dispatch(toggleCartHidden())
})


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount //we provide state here because this function calls [selectCartItems], which then calls [selectCart] which has the state
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CartIcon);