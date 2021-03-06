import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const PDP = (props) => {
    const [product, setProduct] = useState({});
    const [picsrc, setsrc] = useState("")
    //   const { id } = useParams();
    const { id } = props.match.params;
    const url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/";
    // const res ={"id":"1","name":"Men Navy Blue Solid Sweatshirt","preview":"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg","photos":["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg","https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg","https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg","https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg","https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"],"description":"Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem","size":[1,1,0,1,0],"isAccessory":false,"brand":"United Colors of Benetton","price":2599}
    const { id: productId = "", name = "", preview = "", brand = "", price = "", description = "", photos= []} = product;
    useEffect(() => {
        axios(`${url}${id}`)
            .then((res) => {
                setProduct(res.data);
                setsrc(res.data.preview)
            })
            .catch((err) => alert(err));
        
    }, []);
    // console.log("Window", window.location);
    // console.log("Router Props", props);
    return (
        <>  
            {/* {console.log(picsrc)} */}
            {/* {console.log(photos[picindex])} */}
            
            <h1>Product Details</h1>
            <hr />
            <div id="product">
                <div id="left-column">
                    <img id="productImg" src={picsrc} alt="ProductImage" />
                </div>
                <div id="right-column">

                    <h1 id="name">{name}</h1>
                    <h4 id="brand">{brand}</h4>
                    <h3>Price: Rs <span id="price">{price}</span></h3>
                    <div className="description">
                        <h3>Description</h3>
                        <p className="card-para"id="productdescription">{description}</p>
                    </div>
                    <div className="product-preview">
                        <h3>Product Preview</h3>
                        <div className="previewImg">
                           {
                               photos.map((photo)=>{
                                if (photo===picsrc) {
                                    return <img  className= "active" onClick={()=>{setsrc(photo)}} src={photo} alt="previewimage" key={photo}/> 
                                }
                                else
                                return <img onClick={()=>{setsrc(photo)}} src={photo} alt="previewimage" key={photo}/>
                               })
                           }
                        </div>
                    </div>
                    <button className="btn btn-secondary btn-lg">Add to Cart</button>

                </div >
            </div>
        </>
    );
};

export default PDP;