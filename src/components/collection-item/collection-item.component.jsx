import React from 'react';
import { connect } from 'react-redux';

import './collection-item.styles.scss';
import CustomButton from './../custom-button/custom-button.component';

import { addItem } from './../../redux/cart/cart.actions'


const CollectionItem = ({ item, addItem }) => {
    const { id, name, price, imageUrl } = item;
    return (
        <div className='collection-item' key={id}>
            <div className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton onClick={()=> addItem(item)} inverted>Add to Cart</CustomButton>
        </div>
    );
}

//take the item and dispatch it to item.actions to be processed further
//we can also access 'addItem' in this component's props
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
