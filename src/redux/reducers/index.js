
const initialState={
    userDetails : [],
    products : [],
    cart : []
};

const Reducers = (state= initialState,action)=>{
    switch(action.type)
    {
        case "GET_PRODUCTS":
            return{...state,products:action.payload};

        case "ADD_TO_CART":
            console.log("adding ",action.product,"to cart ")
            const {cart}=state
            const prod= action.product
            var prod_to_added={product:prod,qty:1}
            var flag=0
            for(var i =0;i<cart.length;i++)
            {
                if(cart[i].product.id===prod.id){
                    cart[i].qty++;
                    flag=1
                }
            }
            if(flag==0)
            {
                const updatedcart = [...cart,prod_to_added]
                return{ ...state,cart:updatedcart};
            }   
            else
                return state;
         
        case "EMPTY_CART":
            // cart=[]
            return{...state, cart:[]}
            
        default:
            return state

        
        
    }
};

export default Reducers;