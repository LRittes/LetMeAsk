import { createContext, ReactNode, useEffect, useState } from "react"

import { auth, firebase } from "../services/firebase"

type user = {
    id: string,
    name: string,
    avatar: string
  }
  
  type authContext = {
    user: user | undefined,
    singInWithGoogle: () => Promise<void>; // função que não tem retorno
  }

export const AuthContext = createContext({} as authContext)

type authContextProvide = {
    children: ReactNode
}

export function AuthContextProvide(props: authContextProvide) {
    const [user, setUser] = useState<user>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        const { displayName, photoURL, uid} = user
  
        if(!displayName || !photoURL){
          throw new Error('Missing information from google Account');
        }
        
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })  
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  async function singInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider)

    if(result.user){
      const { displayName, photoURL, uid} = result.user

      if(!displayName || !photoURL){
        throw new Error('Missing information from google Account');
      }
      
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    } // a telinha para logar com uma conta google
  }

    return (
        <AuthContext.Provider value={{ user, singInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    )
}