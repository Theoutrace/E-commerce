import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../store/auth/auth-context";
import "./Login.css";

const Login = () => {
  const history = useHistory()
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  const authCtx = useContext(AuthContext);
  
  const loginHandler = (event) => {
    event.preventDefault();
    

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJIvg1VLtsivV8poT2yZ9xIvDs38hEdmg",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail.current.value,
          password: enteredPassword.current.value,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    ).then(res => {

      if(res.ok){
        return res.json().then(data =>{
          console.log(data.idToken);
          authCtx.login(data.idToken)
          history.replace('/store')

        })
      }else{
        alert(' Something went wrong')
      }
    })
  };
  return (
    <div className="login-outer-div">
      <form className="login-form" onSubmit={loginHandler}>
        <input
          className="input-form-login"
          type="email"
          placeholder="Email"
          ref={enteredEmail}
        ></input>
        <input
          className="input-form-login"
          type="Password"
          placeholder="Password"
          ref={enteredPassword}
        ></input>
        <button className="login-button-form">login</button>
      </form>
    </div>
  );
};

export default Login;
