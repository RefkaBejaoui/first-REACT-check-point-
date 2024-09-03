import React from 'react';
import Product from './product';
const Description = () => {
    return (
        <div style={{fontWeight:"bold"}}> The description :
        <span style={{fontStyle:"italic",fontWeight:"normal"}} > {Product.description} </span></div>
    )
}
export default Description