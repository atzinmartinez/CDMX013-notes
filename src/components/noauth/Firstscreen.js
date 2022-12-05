import './firstscreen.css'
import atras from '../../img/atras.png'
import note from '../../img/note.png'

export default function Home () {
  
  return (
    <div  className='background'> 
      <div className='fondo'>
    <h2 className='notasCreadas'>Notas creadas</h2>


    <img src={note} className='note' alt='note'/>
    <img src={note} className='note2' alt='note'/>
    <img src={note} className='note3' alt='note'/>
    <img src={atras} className='atras' alt='atras'/>

   
</div>

     
     </div>
  )
}

