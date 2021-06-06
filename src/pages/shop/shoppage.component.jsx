import React, { Component } from 'react'
import Collectionpreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from  './shop.data'

export default class Shoppage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          collections: SHOP_DATA
        };
    }
    
    render() {
         const { collections } = this.state;
        return (
            
            <div>
                {
                    collections.map(({ id, ...othercollections }) => (
                        <Collectionpreview key={id} {...othercollections}/>
                    ))
                }
            </div>
        )
    }
}
