//import React from 'react';
import Product from './product';
const Name = ()=> {
return(
    <div style={{fontWeight:"bold"}}> The name is : 
    <span style={{color:"pink" , fontFamily:"fantasy", fontSize:25, fontWeight:"normal"}}> {Product.name} </span> </div>
)
}
export default Name