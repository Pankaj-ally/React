export const getProducts = (payload) =>
{
    return{
        type: "GET_PRODUCTS",
        payload:payload,
    };
};

export const addtoCart = (product) =>
{
    // debugger
    return{
        type: "ADD_TO_CART",
        product:product,
    };
};

export const emptycart = (product) =>
{
    // debugger
    return{
        type: "EMPTY_CART",
    };
};

