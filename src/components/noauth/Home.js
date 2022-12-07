import './home.css'
import crear from '../../img/crear.png'
import logout from '../../img/logout.png'
import { logOutFireBase } from '../../firebase/google'
import { useNavigate } from 'react-router-dom'

export default function Home (props) {
  
const exitApp = props.logOut;
const navigate = useNavigate ();


  const exit = async () => {
    await logOutFireBase ()
    exitApp();
    navigate("/")
    console.log("Salida");
  }

  const newNote =() => {
    navigate("/firstscreen")
    console.log("Nueva nota");
  }

  return (
    <div  className='background'> 
      <div className='fondo'>
    <h2 className='descripcion'>Crea tu primer nota </h2>

    <img src={crear} className='new' alt='crear' onClick={()=>{newNote()} }/>
    <img src={logout} className='logout' alt='exit' onClick={()=>{exit()} }/>

</div>
     </div>
  )
}


