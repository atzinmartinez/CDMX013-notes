import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import {Routes, Route} from 'react-router-dom'
import db from './firebase/config'
import Login from './components/noauth/Login.js'
import Home from './components/noauth/Home.js'
import Firstscreen from './components/noauth/Firstscreen.js'



//rutas van aquí

function App() {

  const [user, setUser] = useState(true);

  if(!user){
    return <Home setUser={setUser}/>;
  }

// useEffect (()=>{
//   const getData = async ()=>{
//     const saveData = await getDocs (collection(db, "users"));
//     console.log(saveData);
//   }
//   getData();
// },[]);



  return (
    <Routes>
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