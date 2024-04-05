import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ResCards=({resData})=>{
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId,isOpen}=resData.info;
    let s=`${CDN_URL}${cloudinaryImageId}`
   // console.log(s);
   const {loggedInUser}=useContext(UserContext);
    return (
    <div className="res-card m-4 p-4 w-[250px]  rounded-lg bg-gray-100 hover:bg-gray-300  ">
      <img className="h-[160px] rounded-md w-full"
        src={s
        }
      />
    <h4 className="star float-end mt-1">{avgRating}⭐️</h4>
     <h3 className="font-bold text-lg my-2">{name}</h3>
     <h3 className="cuisines italic  border-t border-dashed border-black ">{cuisines.join(",  ")}</h3>
     <h3> {isOpen==true?" ✅ Currently Open":"  ❌ Currently Closed"}</h3>
     <h3>   <i className="fa-solid fa-person-biking"></i> In {sla.slaString} </h3>
     <h4>{costForTwo} </h4>
     <h4 className="w-full  hyphens-auto">{loggedInUser} </h4>
    
    </div>)
}

//HoC

export const withPromotedLabel=(ResCards)=>{
  return (props)=>{
     return (
      <div>
        <label className="absolute text-white bg-black p-2">Promoted</label>
        <ResCards resData={props.resData}/>
      </div>
     )
  }
}

export default ResCards;