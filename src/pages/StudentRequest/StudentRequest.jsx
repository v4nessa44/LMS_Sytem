import React from "react";
import "./StudentRequest.css";

const StudentRequest = () => {
  return (
    <div className="requestContainer">

      <div className="tableHeader">
         <h1>Student Requests</h1>
        <button className="rejectAll-btn">Withdraw All</button>
      </div>
      <table className="requestTable">
        <thead>
          <tr>
            <th>ID</th>
            <th style={{width:"100%"}} >Course</th>
            <th style={{width:"100%"}} >Category</th>
            <th style={{width:"100%"}} >Date</th>
            <th style={{width:"100%"}} >Status</th>
            <th style={{width:"100%"}} >Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="50">#1001</td>
            <td >HTML</td>
            <td>Assignment Extension </td>
            <td>2024-03-15</td>
           
            <td>
              <span className="badge-high">Unenrolled</span>
            </td>
           
            <td>  
            
              <button className="rejectBtn">Withdraw</button>
            </td>
          </tr>
          <tr>
            <td width="50">#1002</td>
            <td>Java</td>
            <td>Technical Support</td>
            <td>2024-03-14</td>
        
            <td>
              <span className="badge-normal">Enrolled</span>
            </td>
           
           
            <td>
              
              <button className="rejectBtn">Withdraw</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentRequest; 