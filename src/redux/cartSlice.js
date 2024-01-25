import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};
const storeInlocalStorage = (data)=>{
  localStorage.setItem('cart',JSON.stringify(data))
}
const initialState = {
  carts: fetchFromLocalStorage(), // fetchFromLocalStorage içeriği kontrol et
  itemCount: 0,
  totalAmount: 0,
};


export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
      addTocart:(state,action)=>{
        const isItemCart =state.carts.find(item=>item.id === action.payload.id);
        if(isItemCart){
            const tempCart=state.carts.map(item=>{
              if(item.id === action.payload.id){
                  let tempQty=item.quantity + action.payload.quantity
                  let tempTotalPrice=tempQty + item.price
                  return{
                    ...item,
                      quantity:tempQty,
                      totalPrice:tempTotalPrice,
                  }
              }else{
                return item;
              }
            })
            state.carts=tempCart
            storeInlocalStorage(state.carts)
        }else{
          state.carts.push(action.payload)
          storeInlocalStorage(state.carts)
        }
      },
      removeFromCart(state,action){
        const tempCart=state.carts.filter(item=>item.id!== action.payload.id)
        state.carts=tempCart
        storeInlocalStorage(state.carts)
      },
      resetCart:(state)=>{
        state.carts=[]
        storeInlocalStorage(state.carts)
      },
      getCartTotal: (state) => {
        state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
          return cartTotal + cartItem.price * cartItem.quantity;
        }, 0);
        state.itemCount = state.carts.length;
      }
      
  },
});

export const {addTocart,removeFromCart,resetCart,getCartTotal} = cartSlice.actions;

export default cartSlice.reducer;