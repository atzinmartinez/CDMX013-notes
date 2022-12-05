import {getAuth, signOut, signInWithPopup, GoogleAuthProvider,} from "firebase/auth"

const auth = getAuth  ();

const provider = new GoogleAuthProvider();

export const googleAuth =() =>{

  signInWithPopup(auth, provider)
  .then((result)=>{
    console.log ("Dentro")
  })
  .catch ((error)=>{
    console.log(error);
  });
}

export const logOut =()=>
signOut (auth);