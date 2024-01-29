import { createSlice } from "@reduxjs/toolkit";

// localStorage'dan veriyi çekme
const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};

// localStorage'a veri kaydetme
const storeInlocalStorage = (data) => {
  localStorage.setItem('cart', JSON.stringify(data))
}

// İlk durumu tanımlama
const initialState = {
  carts: fetchFromLocalStorage(), // localStorage'dan alışveriş sepetini çek
  itemCount: 0,
  totalAmount: 0,
};

// Redux Toolkit ile bir slice oluşturma
export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      // Sepetteki öğeyi kontrol et
      const isItemCart = state.carts.find(item => item.id === action.payload.id);

      if (isItemCart) {
        // Eğer öğe sepete ekliyse, miktarını ve toplam fiyatını güncelle
        const tempCart = state.carts.map(item => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty * item.price;

            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });

        state.carts = tempCart;
        storeInlocalStorage(state.carts);
      } else {
        // Eğer öğe sepete ekli değilse, yeni öğeyi sepete ekle
        state.carts.push(action.payload);
        storeInlocalStorage(state.carts);
      }
    },
    removeFromCart: (state, action) => {
      // Sepetten öğeyi kaldır
      const tempCart = state.carts.filter(item => item.id !== action.payload.id);
      state.carts = tempCart;
      storeInlocalStorage(state.carts);
    },
    resetCart: (state) => {
      // Sepeti sıfırla
      state.carts = [];
      storeInlocalStorage(state.carts);
    },
    getCartTotal: (state) => {
      // Toplam tutarı hesapla
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return cartTotal + cartItem.price * cartItem.quantity;
      }, 0);
      state.itemCount = state.carts.length;
    }
  },
});

// Oluşturulan eylemleri dışa aktar
export const { addTocart, removeFromCart, resetCart, getCartTotal } = cartSlice.actions;

// Reducer'ı dışa aktar
export default cartSlice.reducer;
