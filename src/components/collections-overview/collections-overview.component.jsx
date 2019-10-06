import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPrevriew } from './../../redux/shop/shop.selector';

import './collections-overview.styles.scss';

import CollectionPreview from './../collection-preview/collection-preview.component';


const CollectionsOverview = ({ collections }) => {

    return(
        <div className='collections-overview'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

const mapStatesToProps = createStructuredSelector({
    collections: selectCollectionsForPrevriew
})


export default connect(mapStatesToProps)(CollectionsOverview);