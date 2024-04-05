import { useState,useEffect } from "react";

const useRestaurantMenu=(resId)=>{
   
    const[resInfo,setresInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu=async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940499&lng=85.1376051&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");

        const json=await data.json();
        // console.log(json?.data?.cards);
        setresInfo(json?.data)
    }
   return resInfo

}

export default useRestaurantMenu;