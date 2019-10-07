import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector }  from 'reselect' //allows to work with many selectors at once.  user and cart for example
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from './../../redux/cart/cart.selectors';
import { selectCurrentUser } from './../../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser
// });

//1- destructure user from state
//2- destructure currentUser from user
//do the same for cart

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });

//create structured selector will pass the appropriate state to the appropriate function
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);