import './firstscreen.css'
import atras from '../../img/atras.png'
import note from '../../img/note.png'
import { useNavigate } from 'react-router-dom'

export default function Home () {
  const navigate = useNavigate ();

 const back =() => {
      navigate("/home")
      console.log("back");
    }
  return (
    <div  className='background'> 
      <div className='fondo'>
    <h2 className='escribe'>Escribe tus apuntes</h2>
    <img src={note} className='note' alt='note'/>
    
   
    <img src={atras} className='atras' alt='atras' onClick={()=>{back()} }/>

</div>

     
     </div>
  )
}

