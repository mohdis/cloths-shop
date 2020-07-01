import React from 'react'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import SHOP_DATA from './shop-data'

import './shop.style.scss'

class ShopPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = { collections: SHOP_DATA }
    }
    render() {
        return (
            <div className='shop'>
                {this.state.collections.map(({ id, ...otherPropertis }) => {
                    return <CollectionPreview key={id} {...otherPropertis} />
                })}
            </div>
        )

    }
}
export default ShopPage