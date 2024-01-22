
import React, { useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios"

const SignUp = () => {
  const [name, setName] = useState('');
const [pos, setPosition] = useState('');
const [spec, setSpec] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const onGroupButtonClick = useCallback(() => {
  //   navigate("/");
  // }, [navigate]);

  const onSignUpClick = async(e) => {
    e.preventDefault()
    console.log("email",email)
    let data
    try {
      data=await axios.post("http://localhost:4000/signup",{
        name:name,
        position:pos,
        specialization:spec,
        email:email,
        password:password,
  
      })
      if(data.status===201){
        navigate('/front-page')
      }
    
  } catch (error) {
     console.log("Error")

  }}

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
            <div className="assistant-prof-i-frame">
              <div className="name">Name</div>
              <input
                className="user-info-frame"
                placeholder="Your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="assistant-prof-i-frame2">
              <div className="email-address">Position</div>
              <input
                className="assistant-prof-i-frame-item"
                placeholder="Assistant professor"
                type="text"
                value={pos}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div className="assistant-prof-i-frame1">
              <div className="specialization">Specialization</div>
              <input
                className="assistant-prof-i-frame-child"
                placeholder="Internet of Things"
                type="text"
                value={spec}
                onChange={(e) => setSpec(e.target.value)}
              />
            </div>
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
          <button className="rectangle-parent" onClick={onSignUpClick}>
            <div className="frame-child" />
            <div className="signup-now">Signup Now</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
