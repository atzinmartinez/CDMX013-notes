import './login.css'
import titulo from '../../img/titulo.png'
import google from '../../img/google.png'
import linea from '../../img/linea.png'
import { googleAuth } from '../../firebase/google'


export default function Login() {
  const googleEvent = () => {
    googleAuth();
    console.log("Se puede entrar");
  }
  // const img = require.context('../../img', true)

  return (
    <div className='background'>
      <div className='fondo'>
        <h1 className='descripcion'>Todas tus notas en un solo lugar</h1>
        <img src={titulo} className="titulo" alt='notme!' />
        <img src={google} className="google" alt='google' />
        <button className='login' onClick={()=>{googleEvent()} }> Entrar con google </button>
<img src={linea} className="linea" alt='google' />

        {/* <img src={fondo} className='papel' alt="fondo"></img> */}


        {/* <img
                src={img(`./titulo.png`)}
                alt={"notme!"}
                className="titulo"
            /> */}
      </div>
    </div>

  )
}