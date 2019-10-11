import { takeLatest, call, put } from 'redux-saga/effects';
//call invoke a function //put creates a function
import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';
import {
     fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.action';
import ShopActionTypes from './shop.types';


export function* fetchCollectionsAsync(){
    
   try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        //call(functionName, functionArgs)
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
   } catch (error){
        yield put(fetchCollectionsFailure(error.message));
   }
 
}

export function* fetchCollectionsStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync
    );
}