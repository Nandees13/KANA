import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import axios from "axios"
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,seterror]=useState(false);
  const [errorMsg,seterrorMsg]=useState('');
  const navigate = useNavigate();

  const onLoginClick = async (e) => {
      e.preventDefault()
      let data
      try { 
      data =  await axios.post("http://localhost:4000/login",{
        email:email,
        password:password
      })
      if(data.status===200){
        navigate('/front-page')
      }
      
    } catch (error) {
      
        seterror(true)
        seterrorMsg("error")
        setTimeout(() => {
          seterror(false)
        seterrorMsg("")

        },3000)
      
    }
    }
  
    //   resp = resp.json()
    //   console.log(resp)

    //   if(true) {
    //     // The login was successful, navigate to the front page
    //     navigate('/front-page');
    //   } else {
    //     // Handle unsuccessful login (e.g., display an error message)
    //     console.error('Login failed');
    //     alert('Login failed. Please check your credentials.');
    //   }
    // } catch (error) {
    //   console.error('Error during login', error);
    //   alert('An unexpected error occurred during login.');
    // }
    

  const onSignUpClick = useCallback(() => {
    navigate('/sign-up');
  }, [navigate])
  
  return (
    <div className="sign-up">
      <div className="divsidenav-container1">
        <img
          className="removebg-preview-1-icon1"
          loading="eager"
          alt=""
          src="/28327removebgpreview-1@2x.png"
        />
      </div>
      <div className="sign-up-inner">
        <form className="name-position-spec-frame-parent">
          <div className="name-position-spec-frame">
            <div className="assistant-prof-i-frame2">
              <div className="email-address">Email address</div>
              <input
                className="assistant-prof-i-frame-item"
                placeholder="alex@email.com"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="assistant-prof-i-frame2">
              <div className="email-address">Password</div>
              <input
                className="assistant-prof-i-frame-item"
                placeholder="Enter the password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && (
            <h2>{errorMsg}</h2>
          )}
          <button className="rectangle-parent" onClick={onLoginClick}>
            <div className="frame-child" />
            <div className="signup-now">Login Now</div>
          </button>
          <div className="o-r-label">
            <div className="or">OR</div>
            <div className="logic-o-r">
              <div className="or1">OR</div>
              <div className="or2">OR</div>
            </div>
          </div>
          <button className="rectangle-parent" onClick={onSignUpClick}>
            <div className="frame-child" />
            <div className="signup-now">Signup Now</div>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;
