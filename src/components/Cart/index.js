import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addtoCart, getProducts, emptycart } from "../../redux/actions"

const Cart = (props) => {


    const showCart = (item) => {
        const { product, qty } = item;
        const { id, name, brand, description, preview, price } = product;
        return (
            <div className="container mt-5 mb-5" key={id}>
                <div className="d-flex justify-content-center row">
                    <div div className="col-md-8">

                        <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                            <div className="mr-1"><img className="rounded" src={preview} width="70" /></div>
                            <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{name}</span>
                                <div className="d-flex flex-row product-desc">
                                    {/* <div className="size mr-1"><span className="text-grey">Size:</span><span className="font-weight-bold">&nbsp;M</span></div> */}
                                    <div className="color"><span className="text-grey">Brand:</span><span className="font-weight-bold">&nbsp;{brand}</span></div>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger"></i>
                                <h5 className="text-grey mt-1 mr-1 ml-1">{qty}</h5><i className="fa fa-plus text-success"></i>
                            </div>
                            <div classNameName="Price_tags">
                                <div className="text-grey m-4">{price}</div>
                                <div className="text-grey m-4" >{price * qty}</div>
                            </div>
                            {/* <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger"></i></div> */}
                        </div>
                    </div>
                </div>
            </div>


        )
    }


    return (<div>
        <div className="p-2">
            <h4> Shopping Cart</h4>
            <div className="container mt-5 mb-5" key='0'>
                <div className="d-flex justify-content-center row">
                    <div div className="col-md-8">

                        <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                            <div className="mr-1"> Image </div>
                            <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Product and Brand</span>
                                <div className="d-flex flex-row product-desc">
                                    {/* <div className="size mr-1"><span className="text-grey">Size:</span><span className="font-weight-bold">&nbsp;M</span></div> */}
                                    {/* <div className="color"><span className="text-grey">Brand:</span></div> */}
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger"></i>
                                <h5 className="text-grey mt-1 mr-1 ml-1">Quantity</h5><i className="fa fa-plus text-success"></i>
                            </div>
                            <div className="Price_tags">
                                <div className="text-grey m-4">Price per Unit</div>
                                <div className="text-grey m-4" >Total Price</div>
                            </div>
                            {/* <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger"></i></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            props.cart && props.cart.length && props.cart.map(showCart)
        }
        <button onClick={() => props.delete_cart()}>Empty Cart</button>
    </div>);
}

const emptycartfunc = (dispatch) => ({

    delete_cart: () => (dispatch(emptycart()))
});

const mapstatetoprops = (store) => ({
    cart: store.cart,
});


export default connect(mapstatetoprops, emptycartfunc)(Cart);