import React from 'react'
import { RES_MENU_CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItems } from '../utils/cartSlice';

const ItemList = ({items}) => {
    // console.log(items )
    const dispatch=useDispatch();
    const handleAddItems=(item)=>{
       //Dispatch an action\
      console.log(addItems)
       dispatch(addItems(item))
    }

  return (
    <div>
      {items.map((item)=>{
        return (
            <div key={item.card.info.id} className='flex justify-between border-b-2 border-dashed py-3'>
            <div  className='text-start w-9/12  '> 
            <h2 className='font-semibold pl-3'>{item.card.info.name}</h2>
            <h2 className=' pl-3'> ₹ {item.card.info.price/100||item.card.info.defaultPrice/100}</h2>
            <p className='text-sm pl-3'>{item.card.info.description}</p>
            </div>
            <div className='w-3/12 mx-4 my-2 h-[150px]'>
                <img src={RES_MENU_CDN_URL+item?.card?.info?.imageId} className='w-full h-full rounded-lg  bg-contain box-border' ></img>
                <div className='relative '><button onClick={()=>handleAddItems(item)} className='absolute bottom-1 rounded left-12  bg-black text-white px-3'>Add +</button></div>
            </div>
            </div>   
        )
      })}
    </div> 
  )
}

export default ItemList