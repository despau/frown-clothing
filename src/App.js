import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import "./App.css";
import { createStructuredSelector }  from 'reselect' //allows to work with many selectors at once.

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';



const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log("Props current user: ", this.props.currentUser)
    const { setCurrentUser } = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const  userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        })
      } else {
        setCurrentUser(userAuth)
      }
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    )
  }
}

//provide the store data to your component
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

//provide the action creators as props to your component
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
