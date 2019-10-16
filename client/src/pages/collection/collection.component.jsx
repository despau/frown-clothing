import React from 'react';
import { connect } from 'react-redux';

// import { firestore } from './../../firebase/firebase.utils';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';



const CollectionPage = ({ collection }) => {
  // useEffect(() => {
  //   console.log("I am subscribing");
  //   const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(async snapshot => console.log(snapshot))

  //   //this function is for componentWillUnmount. call it clean up function
  //   return () => {
  //     console.log("I am UNsubscribing");
  //     unsubscribeFromCollections();
  //   }
  // }, [])
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
