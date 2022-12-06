import './login.css'
import titulo from '../../img/titulo.png'
import google from '../../img/google.png'
import linea from '../../img/linea.png'
import { useNavigate } from 'react-router-dom'
import { googleAuth } from '../../firebase/google'

export default function Login(props) {
  const navigate = useNavigate();
  const { setUser } = props;
  const googleEvent = () => {

    const googleIn = googleAuth();
    googleIn.then((user) => {
      setUser(user);
      navigate("/Home")
    }).catch((error) => {
      console.log(error)
    })
    // console.log("Se puede entrar");

  }
  return (
    <div className='background'>
      <div className='fondo'>
        <h1 className='descripcion'>Todas tus notas en un solo lugar</h1>
        <img src={titulo} className="titulo" alt='notme!' />
        <img src={google} className="google" alt='google' onClick={() => { googleEvent() }} />

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