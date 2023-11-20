import React,{useEffect} from 'react'
import { Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { auth } from './firebase';
import {useDispatch} from 'react-redux'
import { currentUser } from './functions/auth-f';
import Home from './pages/Home';
import Login from './auth/Login';
import Cart from './pages/Cart';
import Header from './component/nav/Header';
import RegVerified from './auth/RegVerified';
import UserDash from './pages/user/UserDash'
import AdminDash from './pages/admin/AdminDash'
import UserRoutes from './component/nav/routes/UserRoutes';
import AdminRoutes from './component/nav/routes/AdminRoutes';


function App() {
  const dispatch= useDispatch()

useEffect(() =>{
  const logout= auth.onAuthStateChanged(async(user) => {
//handling state changes
//check whether we have user?
if(user){
  const idTokenResult= await user.getIdTokenResult()
  console.log("User ===>",user)
  console.log("Token ===>",idTokenResult)

  currentUser(idTokenResult.token)
  .then( (res) => {
       console.log('Backend Response to current user api ====>' , res)
      dispatch({
        type:'LOGIN',
        payload:{
          _id:res.data._id,
          name:res.data.name,
          email:res.data.email,
          role:res.data.role,
          token:idTokenResult.token
        }
      });
    }
  )
  .catch((err) => console.log('error in backend response ===> ',err))


}
  }); 
  return() => logout();
  

},[dispatch]);



  return (
    <div >
      <Header />
      <ToastContainer />
      <Routes>
      <Route  path='/reg-verified' element={<RegVerified/>} />
        <Route  path='/login' element={<Login/>} />
        <Route path ='/cart' element={<Cart />} />
        <Route exact path='/' element={<Home/>} />

        <Route exact path='/user-dash' element={<UserRoutes/>} >
        <Route exact path='/user-dash' element={<UserDash/>} />
        </Route>

        <Route exact path='/admin-dash' element={<AdminRoutes/>} >
        <Route exact path='/admin-dash' element={<AdminDash/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


//heroicon install
//tailwind css config