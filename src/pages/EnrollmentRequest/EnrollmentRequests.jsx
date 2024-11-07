import React from "react";
import "./EnrollmentRequest.css"

const EnrollmentRequests = () => {
    return (
      
      <div className="enrollmentContainer">
            <h1>Enrollment Requests</h1>
            <div className="quickActions">
                <button className="approveAll-btn">Approval All</button>
                <button className="rejectAll-btn">Reject All</button>
            </div>
      <table className="enrollmentTable">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="20">1</td>
            <td>Obcasyn Maruszczak</td>
            <td>
              <a href="#">obcasyn@example.com</a>
            </td>
            <td>Java</td>
            <td>
              <button className="approveBtn">Approve</button> <button className="rejectBtn">Reject</button>
            </td>
                  </tr>
                  <tr>
            <td width="20">1</td>
            <td>Obcasyn Maruszczak</td>
            <td>
              <a href="#">obcasyn@example.com</a>
            </td>
            <td>Java</td>
            <td>
              <button className="approveBtn">Approve</button> <button className="rejectBtn">Reject</button>
            </td>
                  </tr>
                  <tr>
            <td width="20">1</td>
            <td>Obcasyn Maruszczak</td>
            <td>
              <a href="#">obcasyn@example.com</a>
            </td>
            <td>Java</td>
            <td>
              <button className="approveBtn">Approve</button> <button className="rejectBtn">Reject</button>
            </td>
                  </tr>
                  <tr>
            <td width="20">1</td>
            <td>Obcasyn Maruszczak</td>
            <td>
              <a href="#">obcasyn@example.com</a>
            </td>
            <td>Java</td>
            <td>
              <button className="approveBtn">Approve</button> <button className="rejectBtn">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EnrollmentRequests;
