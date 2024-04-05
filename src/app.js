 import React,  {lazy,Suspense, useEffect, useState} from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import Error from "./components/Error";
import Contact from "./components/Contact";
// import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
  
import Cart from "./components/Cart";
import { lazy } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const Grocery=lazy(()=>import("./components/Grocery"))
const About=lazy(()=>import("./components/About"))

const AppLayout=()=>{

  const [userName,setUserName]=useState();

  useEffect(()=>{
   //Make api call for auth 

   const data={
    name:"Arpit Ranjan",
   }
   setUserName(data.name);

  },[])

    return (
        <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
           <Header/>
           <Outlet/>
        </div>
        </UserContext.Provider> 
        </Provider> 
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[ 
         {
                path:'/',
                element:<Body/>,
            
         }, 
         {
            path:'/about',
            element:
            (
                <Suspense fallback={<Shimmer/>}>
                <About/>
                </Suspense>),
          
        },
        {
            path:'/contact',
            element:<Contact/>,
           
        },
        {
            path:'/grocery',
            element:(
                <Suspense fallback={<h1>Loading ...</h1>}>
                <Grocery/>
                </Suspense>),
           
        },
        {
            path:'/cart',
            element:<Cart/>,
           
        },
        {
            path:'/restaurants/:resId',
            element:<RestaurantMenu/>
        }]
    },
 

])

root.render(<RouterProvider  router={appRouter}/>);


