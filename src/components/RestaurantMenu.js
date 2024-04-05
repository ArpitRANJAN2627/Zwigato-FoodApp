
import { useParams } from 'react-router-dom'
import { CDN_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestauranatMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';
const RestaurantMenu = () => {
    const{resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    const [showIndex,setShowIndex]=useState(null);


    if(resInfo===null){
        return <Shimmer/>
    }
    
     const {name,cuisines,costForTwoMessage,avgRating}=resInfo?.cards[2]?.card?.card?.info
    const itemCardsearch=resInfo?.cards.find((c)=>c.groupedCard!==undefined)


    const{itemCards}=itemCardsearch?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    const categories=itemCardsearch?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories)
  return (
    
    <div className='text-center  w-[50vw] mx-auto  border-black'>
    <div className='border '><h3 className='float-right ml-60  '> ⭐️ {avgRating}</h3></div>
      <h1 className='font-bold text-center   text-3xl my-7'>{name}</h1>
     
      <p className='font-bold text-lg capitalize'> Our Cuisines :{cuisines.join(", " )}</p>
      {categories.map((category,idx)=>{
        
         return <RestaurantCategory key={category?.card?.card?.title} data={category.card.card} showItems={idx==showIndex&&true} setShowItems={()=>{
             idx===showIndex? setShowIndex(null):setShowIndex(idx)}}
           />
      })}
      
       

    </div>
  )
}

export default RestaurantMenu