import React,{useState,useEffect} from'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const LoadingRedirect = () => {
    const[count , setCount]=useState(5)
    const navigate= useNavigate()

    useEffect(()=>{
const interval = setInterval(()=>{
    setCount((currCount=>--currCount))
},1000)
   
//redirect user once timer stop
if (count===0){
    navigate('/')
   toast.info("Access Denied")
}return()=>clearInterval(interval)
},[count,navigate] )




    return(
        <div className='w-[200px] justify-center mx-auto bg-red-100 p-2'>
            <p className='font-bold'>Redirecting You in {count}Seconds</p>

        </div>
    )
}
export default LoadingRedirect