import { CHANGE_TYPE } from '@/utils/constants'
import { CartItem, CartState, UpdateCartItemQuantity, UpdateCartItemSize } from '@/utils/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: CartState = {
  cartItems: [],
  totalCartValue: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (p) => p.id === action.payload.id && p.selectedSize === action.payload.selectedSize
      )

      // If the item already exists in the cart, increment the quantity and update the total price
      if (item) {
        item.quantity++
        item.totalPrice = item.metadata.original_price * item.quantity
        state.totalCartValue += item.metadata.original_price
        return
      }

      // If the item doesn't exist in the cart, add it with quantity 1 and update the total price
      state.totalCartValue += action.payload.metadata.original_price
      state.cartItems.push({ ...action.payload, quantity: 1 })
    },
    updateCartItemQuantity: (state, action: { payload: UpdateCartItemQuantity; type: string }) => {
      const itemIndex = state.cartItems.findIndex(
        (p) => p.id === action.payload.id && p.selectedSize === action.payload.selectedSize
      )

      const oldCartItem = state.cartItems[itemIndex]

      let newQuantity = 0,
        totalPrice = oldCartItem.totalPrice
      if (action.payload.type === CHANGE_TYPE.INCREASE) {
        newQuantity = oldCartItem.quantity + 1
        totalPrice += oldCartItem.metadata.original_price
        state.totalCartValue += oldCartItem.metadata.original_price
      } else {
        newQuantity = oldCartItem.quantity - 1
        totalPrice -= oldCartItem.metadata.original_price
        state.totalCartValue -= oldCartItem.metadata.original_price
      }

      const updatedItem: CartItem = {
        ...state.cartItems[itemIndex],
        totalPrice,
        quantity: newQuantity,
      }

      state.cartItems[itemIndex] = updatedItem
    },
    updateCartItemSize: (state, action: { payload: UpdateCartItemSize; type: string }) => {
      const itemIndex = state.cartItems.findIndex(
        (p) => p.id === action.payload.id && p.selectedSize === action.payload.oldSize
      )

      const updatedItem: CartItem = {
        ...state.cartItems[itemIndex],
        selectedSize: action.payload.newSize,
      }

      state.cartItems[itemIndex] = updatedItem
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (p) => p.id === action.payload.id && p.selectedSize === action.payload.selectedSize
      )

      // Subtract the item price from the total cart value and remove the item from the cart
      state.totalCartValue -= state.cartItems[itemIndex].metadata.original_price
      state.cartItems.splice(itemIndex, 1)
    },
  },
})

export const { addToCart, updateCartItemQuantity, updateCartItemSize, removeFromCart } =
  cartSlice.actions
export default cartSlice.reducer
