import axios from "axios";
import React, { Component, useState,useEffect } from "react";

import { Link } from "react-router-dom";

const Products = ()=> {
    const[products,setProducts]= useState([]);


useEffect(()=>{

    axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
    .then((res)=>{
        setProducts(res.data);
    }).catch((err)=>alert(err));
},[]); //componentDidmount

useEffect(()=>{});

useEffect(()=>{
    return () => {
        // cleanup the code
    };
});

return( <div>    <h1 className="main-title">Products</h1>
    <div className="d-flex flex-wrap justify-content-center">
        
        {
            products.map(({ id,name, brand, description, preview }) => (
                <div className="card m-2" style={{width : 250}}key={id}>
                
                <img src={preview} className="card-img-top" alt="products"/>
                <div className="card-body">
                <Link to={`/products/${id}`}> <h5 className="card-title">{name}</h5></Link>
                    <h6 className="card-subtitle mb-2 text-muted">{brand}</h6>
                    <p className="card-text card-para">{description}</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
                
                </div>
            ))
        }
</div>
</div>
)


}

export default Products