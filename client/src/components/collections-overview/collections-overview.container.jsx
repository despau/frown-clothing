import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from './../../redux/shop/shop.selectors';
import WithSpinner from './../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

//WITHSPINNER needs the state.collections.isLoading
const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

//pass collectionsoverview to -> withspinner -> then pass them to connect
//const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;