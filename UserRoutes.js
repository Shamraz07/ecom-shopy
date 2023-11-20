import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import LoadingRedirect from './LoadingRedirect'

const UserRoutes = () => {
    const {user} = useSelector((state)=>({...state}))

    return user && user.token ?(
        <Outlet /> ):(<LoadingRedirect />)
    
}

export default UserRoutes