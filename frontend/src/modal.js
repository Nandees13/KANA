import React, { useState } from 'react';
import "./modal.css"

const ModalComponent = ({open,setOpen}) => {
  

  return (
    <div className='mod'>
     dbdj
          <button id=""  onClick={() =>{ setOpen(false)}}>
            Close
          </button>
          <p>A pop-up modal component made with the native HTML dialog element with custom styles.</p>
      
    </div>
  );
};

export default ModalComponent;
