import { getAuth,GoogleAuthProvider,updateProfile,getIdToken, createUserWithEmailAndPassword,signInWithPopup,onAuthStateChanged ,signOut,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Pages/Login/Firebase/firebase.init";

firebaseInitialize();
const useFirebase = () => {
    const [error,setError]=useState('');
    const [user,setUser]=useState({});
    const [token,setToken]=useState('')
    const [isLoading,setIsLoading]=useState(false);
    const [admin ,setAdmin]=useState(false)
    const auth = getAuth();
    const googleProvider=new GoogleAuthProvider();
    const registerUser=(email, password,name,history )=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError( '');
            saver(email,name,'POST')
            const newUser= { email:email, displayName: name };
            updateProfile(auth.currentUser, {
                displayName:name,
              }).then(() => {
              }).catch((error) => {
                setError( error.message);
              })
            setUser(newUser);
            history.replace('/')
          })
          .catch((error) => {
            setError( error.message);
         
          })
          .finally(()=>{
            setIsLoading(false)
          }
        )
    }
    const loginUser=(email, password,history,location)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination=location?.state?.from || '/'
            history.replace(destination);
            setError( '');
          })
          .catch((error) => {
            setError( error.message);
          })
          .finally(()=>{
            setIsLoading(false)
          }
            
          )
    }
   
    const logoutUser=()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
            
          }).catch((error) => {
            
          })
          .finally(()=>{
            setIsLoading(false)
          })

    }
    const  signInWithGoogle=(history,location)=>{
        signInWithPopup(auth,googleProvider)
        .then((result)=>{
          const user=result.user;
          saver(user.email,user.displayName,'PUT')
            const destination = location?.state?.from || '/';
                history.replace(destination);
        })
        .catch((error) => {
            setError(error.message);
        }).finally(() => setIsLoading(false));

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
              getIdToken(user)
              .then(idToken=>{
                setToken(idToken);
              })


            } else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [auth])
    useEffect(()=>{
      fetch(`https://fierce-fortress-81249.herokuapp.com/users/${user?.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data.admin))
    },[user.email])
    const saver=(email,displayName,method)=>{
      const user={email,displayName}
      fetch(`https://fierce-fortress-81249.herokuapp.com/users`,{
        method:method,
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)

      })
     
      .then()
    }


    return {
        loginUser,
        registerUser,
        error,
        logoutUser,
        user,
        admin,
        isLoading,
        token,
        signInWithGoogle

    }
};

export default useFirebase;