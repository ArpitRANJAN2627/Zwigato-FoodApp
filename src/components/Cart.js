import React from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
   
  const cartItems=useSelector((store)=>store.cart.items)
  const dispatch=useDispatch()
  const handleClearCart=()=>{
    dispatch(clearCart());
  }
  return (
    <div className=' text-center my-10 mx-auto  p-4'>
    <h1 className='font-bold text-3xl'> My Cart</h1>
    {cartItems.length===0&&<h1 className='capitalize font-semibold text-xl m-3 p-3'>your Cart is empty.</h1>}
    <div className='w-6/12 mx-auto'>
     <ItemList  items={cartItems}/>
    </div>
    <div>
      <button  onClick={handleClearCart} className='bg-black text-white rounded-lg m-2 p-2' >Clear Cart</button>
    </div>
     </div>
  )
}

export default Cart