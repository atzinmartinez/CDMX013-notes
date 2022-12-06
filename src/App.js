import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import {Routes, Route} from 'react-router-dom'
import db from './firebase/config'
import Login from './components/noauth/Login.js'
import Home from './components/noauth/Home.js'

//rutas van aquí

function App() {
useEffect (()=>{
  const getData = async ()=>{
    const saveData = await getDocs (collection(db, "users"));
    console.log(saveData);
  }
  getData();
},[]);
 const [user, setUser] = useState(null);
function setUserNull() {
  setUser(null)
}

  return (
    <Routes>

      <Route path="/" element={user ? <Home logOut={setUserNull} /> : <Login setUser={setUser} />} />
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
     </Routes>
       
  );
}

export default App;

// const [user, setUser] = useState (null);
//   return (
//     <Routes>
//       <Route path='/' element={<Login/>}/>
//       <Route path='/home' element={<Home/>}/>

      
//      </Routes>