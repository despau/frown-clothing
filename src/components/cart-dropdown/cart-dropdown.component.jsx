import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector }  from 'reselect'
import { withRouter } from 'react-router-dom';

import CustomButton from './../custom-button/custom-button.component';
import { selectCartItems } from './../../redux/cart/cart.selectors';
import { toggleCartHidden } from './../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    //we can have dispatch in props even when we didnt declare one because it is provided by the connect
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                (cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                :
                (
                    <span className='empty-message'>Your Cart is empty</span>
                )
            }
        </div>
        <CustomButton
            onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden());
            }
                
            }
        >GO TO CHECKOUT</CustomButton>
    </div>
)

//pull cartItems from store so we can use it in this CartDropdown component
// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// })

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})



//lets pass the history props to the map components
//we do this because we want our custom checkout button to send us to checkout page
export default withRouter(connect(mapStateToProps)(CartDropdown));