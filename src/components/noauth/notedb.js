import './home.css'
import logout from '../../img/logout.png'
import atras from '../../img/atras.png'
import { logOutFireBase } from '../../firebase/google'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { collection, getDocs,} from 'firebase/firestore';
import db from '../../firebase/config';
export default function Notes (props) {
  
const exitApp = props.logOut;
const navigate = useNavigate ();

const [list, setList] = useState ([]);
useEffect(()=>{
  const getList = async ()=>{
    try{
      const querySnapshot = await getDocs (collection(db, "usuarios"))
      const docs = [];
      querySnapshot.forEach((doc)=>{
        docs.push({...doc.data(), id:doc.id })
      });
      setList(docs);
    }
    catch(error){
      console.log(ErrorEvent);
    }
  };
getList();
},[]);



  const exit = async () => {
    await logOutFireBase ()
    exitApp();
    navigate("/")
    console.log("Salida");
  }

  const back = () => {
    navigate("/home")
    console.log("back");
  }

  return (
    <div  className='background'> 
      <div className='fondo'>
    <h2 className='descripcion'>Tus notas</h2>
    <img src={logout} className='logout' alt='exit' onClick={()=>{exit()} }/>
    <img src={atras} className='atras' alt='atras' onClick={() => { back() }} />

    <div className='contenedorPadre'>{list.map((list)=>(
      <div className='cadaNota' key={list.id}>
        <p> {list.escribir} </p>
        <button></button>
      </div>
    ))}

    </div>

</div>
     </div>
  )
}


