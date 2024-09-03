//import React from 'react';
import Product from './product';
const Price = () => {
    return (
        <div style={{fontWeight:"bold"}}>The price is : 
        <span style={{fontStyle:"italic",fontWeight:"normal"}} > {Product.price}</span> dt</div>
    )
}
export default Price