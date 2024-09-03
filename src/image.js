//import React from 'react';
import Product from './product';
//import cat from './Cat.jpg'
const Image = () =>{
    return (
        <>
        {/*import from scr file */}
        {/* <img src={cat} alt="Cat" style={{width:200}}/>; */}
        {/*import from public file */}
        <img src="Cat.jpg" alt="Cat" style={{width:200}}/>;

        <div style={{ color: "purple", fontSize: 20 , fontWeight:"lighter"}}>
            The image URL is :<span style={{textDecoration: "underline"}}> {Product.image}</span></div>
            <p>to see the cat clearer <a style={{fontWeight:"bolder"}} href={Product.image}> Click here </a></p>
           
        </>
    )
}
export default Image