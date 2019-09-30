import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
//getting documents and/or collections from our db

firestore.collection('users').doc('Stktc9EOmH8rUhEwh0Gm').collection('cartItems').doc('Stktc9EOmH8rUhEwh0Gm');
//or
firestore.doc('/users/Stktc9EOmH8rUhEwh0Gm/cartItems/Stktc9EOmH8rUhEwh0Gm')
//if we only wanted the cart items
firestore.collection('/users/Stktc9EOmH8rUhEwh0Gm/cartItems')