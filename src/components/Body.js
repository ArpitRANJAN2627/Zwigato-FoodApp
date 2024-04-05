import ResCards,{withPromotedLabel} from "./ResCards";
import { Link } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body=()=>{
    const[listofrestraunts,setListOfRestraunts]=useState([]);
    const[searchText,setsearchText]=useState("");
    const[filterdRestraunts,setfilterRestraunts]=useState([]);
     
    const RestaurantsCardPromoted=withPromotedLabel(ResCards);
 
    const{loggedInUser,setUserName}=useContext(UserContext);


    // console.log("body")
    useEffect(()=>{
       fetchData();
    //    console.log("useeffect")
    },[])
    const fetchData= async()=>{
        const res= await fetch('https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING')

        let data= await res.json();
       //   console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
         setListOfRestraunts(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterRestraunts(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setListOfRestraunts(data?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        //  setfilterRestraunts(data?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }
    
    if(useOnlineStatus()===false){
        return (
            <div>
            <h1>Look's Like Your Offline!!</h1>
            <img src="../utils/360_F_145437263_wbFhnm4BlDO9tV9GfJQsVRvgexdJWcuI.jpg" alt="offline image"/>
            </div>
        )
    }
 
    
    return listofrestraunts?.length===0?<Shimmer/>:(
        <div className="body">
        
        <div className="flex  ">
          <div className="search-box m-4 p-4">
            <input className=" outline-none pl-1 border border-solid border-black"  placeholder="Search For Restraunts" value={searchText} onChange={(e)=>{setsearchText(e.target.value)
                // console.log(e.target.value);
            }
            }></input>
            <button onClick={()=>{
                const filet_res=listofrestraunts.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setfilterRestraunts(filet_res);
            }} className="ml-3 border rounded px-3 py-1 bg-green-200" >Search</button>
          </div>
          <div className="flex items-center ml-8">
            <button className="btn border  rounded px-3 py-1 bg-gray-100   " onClick={()=>{
                const filterd_res=listofrestraunts?.filter((restaurant)=>{
                    return restaurant.info.avgRating>4;
                })
                filterd_res.sort((a,b)=>b.info.avgRating-a.info.avgRating)
                setfilterRestraunts(filterd_res);
            }}>Top Rated Restaurants</button>
            </div>
            {/* <div className="flex items-center ml-8">
            <input className="border border-black pl-3" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
            </div> */}
         </div>  
        <div className="res-container flex flex-wrap">
       {
        filterdRestraunts?.map((restaurant)=>{
            return <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}>
            {restaurant?.info?.isOpen==true?<RestaurantsCardPromoted resData={restaurant}/> :<ResCards   resData={restaurant} />}
            </Link> 
        })
       }
        </div>
        </div>
    )
}
export default Body;