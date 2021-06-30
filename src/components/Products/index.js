import axios from "axios";
import React, { Component, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addtoCart, getProducts } from "../../redux/actions"


const Products = (props) => {

    console.log(props)

    useEffect(() => {

        axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
            .then((res) => {
                props.sendProducts(res.data);
                // debugger

            }).catch((err) => alert(err));
    }, []); //componentDidmount

    useEffect(() => { });

    useEffect(() => {
        return () => {
            // cleanup the code
        };
    });

    const handleclick = (product) => {
        // debugger;
        props.sendtoCart(product);
    }

    

    function showProduct(item){
        const {id,name,brand,description,preview}=item;
        return(
        
        <div className="card m-2" style={{ width: 250 }} key={id}>

                        <img src={preview} className="card-img-top" alt="products" />
                        <div className="card-body">
                            <Link to={`/products/${id}`}> <h5 className="card-title">{name}</h5></Link>
                            <h6 className="card-subtitle mb-2 text-muted">{brand}</h6>
                            <p className="card-text card-para">{description}</p>
                            {console.log("Inside Products before add to cart button")}
                            <a  onClick={()=>handleclick(item)} className="btn btn-primary">Add to Cart</a>
                        </div>

                    </div>)
    }



    return (<div>    <h1 className="main-title">Products</h1>
        <div className="d-flex flex-wrap justify-content-center">

            {
                props.products && props.products.length && props.products.map(showProduct)
            }
        </div>
    </div>
    )


};
const mapStatetoProps = (store) => ({
    products: store.products,
    cart : store.cart,
});

const mapDispatchtoProps = (dispatch) => ({
    sendProducts: (payload) => dispatch(getProducts(payload)),
    sendtoCart: (product) => dispatch(addtoCart(product)),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(Products);