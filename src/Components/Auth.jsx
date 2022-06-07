import React, {useState,useEffect} from "react"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyA0LeUN82utX9Ex2JsqxL3PYNsDmWxn-4o",
    authDomain: "auth-development-bf151.firebaseapp.com",
    databaseURL: "https://auth-development-bf151-default-rtdb.firebaseio.com",
    projectId: "auth-development-bf151",
    storageBucket: "auth-development-bf151.appspot.com",
    messagingSenderId: "359153422794",
    appId: "1:359153422794:web:a4c08cb78477afe050bf33"
  };
  const app = initializeApp(firebaseConfig);

  export  const AuthContext = React.createContext();
  export const AuthProvider = ({children}) =>{
      const [currentUser, setCurrentUser] = useState(null);
      const [pending, setPending] = useState(true)
      useEffect(()=>{
          app.auth().onAuthStateChanged((user)=>{
              setCurrentUser(user)
              setPending(false)
          })
      },[])

      if(pending){
          return <>Loading....</>
      }
      return (
          <AuthContext.Provider value={{
            currentUser
        }}>
            {children}
              
          </AuthContext.Provider>
      )
  }