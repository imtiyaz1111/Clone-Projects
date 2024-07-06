import React from 'react';
import "./Login.css"
import { auth, provider } from '../../Firebase/firebase';
import { useStateValue } from '../../Context/StateProvider';

const Login = () => {
  const [{},dispatch]=useStateValue();
  const signIn=()=>{
    auth.signInWithPopup(provider).then(result=>{
      var credential=result.credential;
      const photoURL=`${result.user.photoURL}?access_token=${credential.accessToken}`;
       dispatch({
        type:"SET_USER",
        user:{
          displayName:result.user.displayName,
          photoURL:photoURL
        }
      })
    }).catch(error=>console.log(error))
  }

  return (
    <div className='login_wrapper'>
     <div className="login">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
        <h2>Sign in with Facebook</h2>
        <button onClick={signIn}>Login with Facebook</button>
     </div>
    </div>
  );
}

export default Login;
