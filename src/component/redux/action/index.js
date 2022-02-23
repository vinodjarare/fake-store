// for add item to cart

export const addCart = (product) =>{
    return{
            type : "ADDITEM",
            payload : product
    }
}


//for Delete item from cart


export const deleteCart = (product) =>{
    return{
            type : "DELITEM",
            payload : product
    }
}
