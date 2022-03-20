import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
   state: {
      cart: [],
      cartCount: 0,
   },
   mutations: {
      addToCart(state, product) {
         const productInCartIndex = state.cart.findIndex(productInCart => productInCart.id === product.id)
         if (productInCartIndex !== -1) {
            const productInCart = state.cart[productInCartIndex]
            state.cart.splice(productInCartIndex, 1)
            productInCart.quantity++
            state.cart[productInCartIndex] = productInCart
         } else {
            product.quantity = 1
            state.cart.push(product)            
         }
         state.cartCount++
      },
      removeProduct (state, index) {      
         state.cart.splice(index, 1)
      },
      decreaseQuantity(state, index) {
         if (state.cart[index].quantity>1) { 
            let newCartState = state.cart;
            newCartState[index].quantity--;
            state.cart = null
            state.cart = newCartState
         }
      },
      increaseQuantity(state, index) {       
         let newCartState = state.cart;
         newCartState[index].quantity++;
         state.cart = null
         state.cart = newCartState
      },
   }
})

export default store