import './home.css'
import crear from '../../img/crear.png'
import logout from '../../img/logout.png'
import { logOut } from '../../firebase/google'

export default function Home () {

  const exit = () => {
    logOut();
    console.log("Salida");
  }
  
  return (
    <div  className='background'> 
      <div className='fondo'>
    <h2 className='descripcion'>Crea tu primer nota </h2>

    <button className='exit' > Adios </button>
    <img src={crear} className='new' alt='crear'/>
    <img src={logout} className='logout' alt='crear' onClick={()=>{exit()} }/>

   
</div>

     
     </div>
  )
}

