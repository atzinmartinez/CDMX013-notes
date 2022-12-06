import './home.css'
import crear from '../../img/crear.png'
import logout from '../../img/logout.png'
import { logOutFireBase } from '../../firebase/google'
import { useNavigate } from 'react-router-dom'

export default function Home (props) {
  
const exitApp = props.logOut;
const navigate = useNavigate ()


  const exit = async () => {
    await logOutFireBase ( exitApp())
    navigate("/Login")
    console.log("Salida");
  }
  
  return (
    <div  className='background'> 
      <div className='fondo'>
    <h2 className='descripcion'>Crea tu primer nota </h2>

    <img src={crear} className='new' alt='crear'/>
    <img src={logout} className='logout' alt='crear' onClick={()=>{exit()} }/>

   
</div>

     
     </div>
  )
}
const exit = logOutFireBase ();
exit.then ((user)=>{
  setUser(user);
  navigate("/Home")
})

const googleIn = googleAuth();
googleIn.then((user) => {
  setUser(user);
  navigate("/Home")
}).catch((error) => {
  console.log(error)
})

