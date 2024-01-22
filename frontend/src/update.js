
import React, { useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./update.css";
import axios from "axios"

const Update = () => {
  const [name, setName] = useState('');
const [fromdate, setfromdate] = useState('');
const [todate, settodate] = useState('');
const [eventtype, seteventtype] = useState('');
  const navigate = useNavigate();

  const onGroupButtonClick = async(e) => {
    e.preventDefault()

    let data
    try {
      data=await axios.post("http://localhost:4000/update",{
        name:name,
        eventype:eventtype,
        fromdate:fromdate,
        todate:todate
  
      })
      if(data.status===201){
        navigate('/attended')
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
              <div className="name">Faculty Name</div>
              <input
                className="user-info-frame"
                placeholder="Your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="assistant-prof-i-frame">
            <div className="name">EVENT TYPE</div>
              <input
                className="user-info-frame"
                placeholder="Your Name"
                type="text"
                value={eventtype}
                onChange={(e) => seteventtype(e.target.value)}
              />
            </div>
            <div className="assistant-prof-i-frame2">
              <div className="email-address">From date</div>
              <input
                className="assistant-prof-i-frame-item"
                placeholder="Assistant professor"
                type="text"
                value={fromdate}
                onChange={(e) => setfromdate(e.target.value)}
              />
            </div>
            <div className="assistant-prof-i-frame1">
              <div className="specialization">To date</div>
              <input
                className="assistant-prof-i-frame-child"
                placeholder="Internet of Things"
                type="text"
                value={todate}
                onChange={(e) => settodate(e.target.value)}
              />
            </div>
          </div>
          <button className="rectangle-parent" onClick={onGroupButtonClick}>
            <div className="frame-child" />
            <div className="signup-now">Submit</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
