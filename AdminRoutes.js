import React, { useEffect, useState } from'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import LoadingRedirect from './LoadingRedirect'
import { AdminUser } from '../../../functions/auth-f'

const AdminRoutes = () => {
    const{user}=useSelector((state)=>({...state}))
const[ok,setOk]=useState(false)
//check for user then we will check for role

useEffect(()=>{
    if(user && user.token){
        AdminUser(user.token)
        .then((res)=>{
            console.log("admin user backend ===>",res)
            setOk(true)
        })
        .catch((err)=>{
            console.log("Error in admin user backend",err)
         //   toast.error(err.message)
            setOk(false)
        })
    }

},[user])


    return ok?
        (
            //using outlet ==> /user-dash ==>/user-dash/order (or) /user-dash/profile
            <Outlet/>)    : (<LoadingRedirect/>)
}
export default AdminRoutes