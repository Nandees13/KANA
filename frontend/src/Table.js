import React, { useState, useEffect,useCallback } from 'react';
import './Table.css'
import { useNavigate } from 'react-router-dom';

const Table = () => {
  const navigate = useNavigate();
  const onEditClick = async(e) => {
    
    navigate('/update')
  }

  const onDeleteClick = useCallback((sno) => {
    console.log('object')
    fetch(`http://localhost:4000/delete-attend-data/${sno}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Update your local state or refetch data
          // For example, if you're using state:
          setAttendData((prevData) => prevData.filter(row => row.SNo !== sno));
        } else {
          console.error('Failed to delete row:', data.message);
        }
      })
      .catch(error => {
        console.error('Error deleting row:', error);
      });
  }, [])
  const [attendData, setAttendData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("object")
        const response = await fetch('http://localhost:4000/get-attend-data');
        const data = await response.json();

        if (data.success) {
          setAttendData(data.data);
        } else {
          console.error('Failed to fetch data from AttendData table');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
 
  return (
    <div className='maintable'>
    <h2 >Event Records</h2>
    <table className="table" style={{ width: '100%', textAlign: 'left' }}>
      <thead >
        <tr>
          <th className="sno">S.No</th>
          <th className="faculty-name">Faculty Name</th>
          <th className="event-type">Event Type</th>
          <th className="faculty-name">From Date</th>
          <th className="faculty-name">To Date</th>
          <th className="faculty-name">Action</th>
        </tr>
      </thead>
      <tbody>
        {attendData.map((record) => (
          <tr key={record.SNo}>
            <td className="sno">{record.SNo}</td>
            <td className="faculty-name">{record.FacultyName}</td>
            <td className="event-type">{record.EventType}</td>
            <td className="faculty-name">{record.FromDate}</td>
            <td className="faculty-name">{record.ToDate}</td>
            <td className="faculty-name">
            <img
            className="eyelashes-3d-icon"
            alt=""
            src="/view.png"
          
          />
          <img
            className="eyelashes-3d-icon"
            alt=""
            src="/delete.png"
            onClick={() => onDeleteClick(record.SNo)}
            
          />
          <img
            className="eyelashes-3d-icon"
            alt=""
            src="/edit.png"
            onClick={onEditClick}  
          />
        
            </td>
            
          </tr>
          
        ))}
      </tbody>
    </table>
  </div>

  );
};

export default Table;
