import React,{createContext, useState} from 'react';
export const AuthContext=createContext();


const AuthContextProvider =({children})=>{

const[isLoggedIn,setisl]=useState(false);

  

 const changeAuthState=()=>
  {

setisl(!isLoggedIn);
  };
 

    return(
<AuthContext.Provider  value={{isLoggedIn,changeAuthState}}>
  {  children}
</AuthContext.Provider>



    )
  
}
export default AuthContextProvider;