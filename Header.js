import React from "react";
import {Typography, Button} from "@material-tailwind/react";
import firebase from 'firebase/compat/app';
import { useNavigate ,Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => ({...state}))





  const handleLogout = () => {
    firebase.auth().signOut()

    dispatch({
      type: "LOGOUT",
      payload: null
    });
navigate('/login')
  }

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm items-center md:h-[60px]">
      <div className=" xl:container bg-white mx-auto xl:space-x-6  flex px-2 md:px-3 md:py-3 py-2  ">
      <Link to='/'>
            <p className="flex  text-2xl font-bold items-center xl:mx-2  cursor-pointer my-auto"> Ecom-Shop </p>
          </Link>
        
        <div className="flex flex-1 justify-between text-center">
          
          <Typography> Shop</Typography>
          <Typography> Cart</Typography>
         
         {!user &&(
           <Link to ='/login'style={{color:'inherit',textDecoration:'none'}}>
           <Button color="green" size="sm" > Login/Signup</Button>
          </Link>
         )}

        {user &&(
          
         <> 
         {/*//shamrazintern@gmail.com*/}
          <Typography> {user.email && user.email.split('@')[0]}</Typography>
         <Button onClick={handleLogout} color="red" size="sm" > Logout</Button></>
        )}

        </div>

      </div>
    </div>
  );
}

export default Header;
