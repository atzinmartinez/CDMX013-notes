import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import db from './firebase/config'
import Login from './components/noauth/Login.js'
import Home from './components/noauth/Home.js'
import Firstscreen from './components/noauth/Firstscreen.js'



//rutas van aquí

function App() {

useEffect (()=>{
  const getData = async ()=>{
    const saveData = await getDocs (collection(db, "users"));
    console.log(saveData);
  }
  getData();
},[]);

const [user, setUser] = useState (null);
  return (
    <div >
     <Login/>
     {/* <Home/> */}
     {/* <Firstscreen/> */}
     {/*user?<Route path="/" element={<Home/>} />: <Route path"/" element ={<Login setUser ={setUser}/>}/> */}
     
    </div>
  );
}

export default App;
