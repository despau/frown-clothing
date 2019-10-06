import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from './../../redux/shop/shop.selector';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';



const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='category'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} /> )
                }
            </div>
        </div>
    )
}

//first arg is the state, second arg is the prop of the component thats going to call this
const mapStateToProps = ( state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state) //this selector needs a part of the state depending on the url parameter
})

export default connect(mapStateToProps)(CollectionPage);