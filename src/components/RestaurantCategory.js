import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data,showItems,setShowItems}) => {
  
  const handleClick=()=>{setShowItems()};
  return (
    <div className='container border bg-gray-100 shadow-lg py-5 my-5 mx-auto ' >
    {/* Header*/ }
        <div className='flex justify-between cursor-pointer ' onClick={handleClick}>
        <span className='font-bold text-xl pl-5'>{data?.title} ({data?.itemCards?.length})</span>
        <span className='pr-5'> {showItems==true?<> &#10005;</>:<>&#8595;</>}</span>
         </div>
          {/*Accordian  Body*/ }
        {showItems&& <ItemList items={data.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory