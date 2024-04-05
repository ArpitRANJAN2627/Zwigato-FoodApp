import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
    const[btnNameReact,setbtnNameReact]=useState("Login")
    const {loggedInUser}=useContext(UserContext);
   
    const cartItems=useSelector((store)=>store.cart.items)

    return(
        <div className="flex justify-between  bg-red-500 sm:bg-amber-250 shadow-2xl mb-5 w-full  ">
           <div className="logo-section flex ">
           <img className="w-48 " src={LOGO_URL}/>
           <h2 className="my-20 px-5 text-white font-serif text-4xl">Zwigato</h2>
           </div>
            <div className="flex items-center pr-5  ">
                <ul className="flex text-xl   ">
                  
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li  className="px-4"><Link to="/cart"><i className="mx-2 fa-solid fa-cart-shopping text-amber-950"><sup className="text-black ml-2">{cartItems.length}</sup></i></Link></li>
                  <li className="px-4">  <button className="login" onClick={()=>{
                        btnNameReact==="Login"?setbtnNameReact("Logout"):setbtnNameReact("Login");
                    }}>{btnNameReact}</button></li>
                      <li> {useOnlineStatus()?"Online 🟢": "Offline  🔴"} </li>
                      <li className="px-4 font-semibold">{loggedInUser}</li>
                </ul>
            
            </div>
        </div>
    )
}

export default Header;