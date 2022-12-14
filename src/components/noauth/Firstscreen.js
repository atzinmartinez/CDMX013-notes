import './firstscreen.css'
import atras from '../../img/atras.png'
import note from '../../img/note.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../firebase/config';

export default function AddNota() {
  const navigate = useNavigate();
  const valorInicial = {
    escribir: ''
  }

  const [user, setUser] = useState(valorInicial);
  const capturarInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value }) //copia del valor del input y lo guarda en el objeto (cambia de estado)
  };

  const saveNoteFirebase = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "usuarios"), {
        ...user,
      })
    } catch (error) {
      console.log(error);
    }
    navigate("/notes");
    setUser({ ...valorInicial })
  }

  const back = () => {
    navigate("/notes")
    console.log("back");
  }

  return (
    <div className='background'>
      <div className='fondo'>
        <h2 className='escribe'>Escribe tus apuntes</h2>
        <img src={note} className='note' alt='note' />
        <form onSubmit={saveNoteFirebase}>
          <label htmlFor="nota">Escribe tu nota:</label>
          <input onChange={capturarInputs} className='input' type="text" id="nota" name="escribir" value={user.escribir} />
          <button>Guardar</button>

        </form>




        <img src={atras} className='atras' alt='atras' onClick={() => { back() }} />

      </div>


    </div>
  )
}

