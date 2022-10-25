import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  email: "",
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token')
  const [token, setToken] = useState(initialToken);
  const [emailId, setEmailId] = useState("")

  const userIsLoggedIn = !!token;

    useEffect(()=>{

      console.log('auth context ran ');
      console.log(authContextValue);
      
      if(token){

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCJIvg1VLtsivV8poT2yZ9xIvDs38hEdmg',
        {
          method: 'POST',
          body: JSON.stringify({
            idToken: token
          }) ,
          headers: {"Content-Type": "application/json"}
        }
        ).then(res=>res.json().then(data=>{
          console.log(data);
          if(data.error && data.error.message === 'INVALID_ID_TOKEN'){
            localStorage.removeItem('token')
          }else{
            setEmailId(()=>data.users[0].email)
          }
          
        }))
      }

    },[token])
   

  

  const logInHandler = (token, email) => {
    localStorage.setItem('token', token)
    setToken(token);
    setEmailId(email)
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const authContextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logoutHandler,
    email: emailId,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
