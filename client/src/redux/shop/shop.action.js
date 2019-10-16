import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils'


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})

//THUNK: an action creator that returns a function that gets a dispatchP
//THUNK: is only interested infunctions that returns FUNCTIONS, and ignore OBEJECTS, like the above functions
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        //1st dispatch (fetching) ---> turn isFetching of the state to true
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(
            snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            //2nd dispatch (doneFetching) ----> set state with the returned payload (collectionsMap)
            dispatch(fetchCollectionsSuccess(collectionsMap));

            //3rd dispatch (done setting collectionsMap in States) ----> dispatching error messages if there are any
            }).catch(
              error => dispatch(fetchCollectionsFailure(error.message))
            );
    }
}
