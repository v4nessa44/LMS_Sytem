import React, { useState } from 'react';
import "./ManagedStudents.css";
import SendEmail from '../../components/SendEmail/SendEmail';

const ManagedStudents = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedEmail, setSelectedEmail] = useState("");

  const openModal = (email) => {
    setSelectedEmail(email);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmail("");
  };

  return (
    <div className='manageStudentContainer'>
      <h1>Managed Students</h1>
      <div className="quickActions">
        <button className="edtt-btn">Edit</button>
        <button className="added-btn">Added</button>
        <button className="delete-btn">Delete</button>
      </div>
      <table className="enrollmentTable">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number of Courses</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((index) => (
            <tr key={index}>
              <td width="20">{index}</td>
              <td>Obcasyn Maruszczak</td>
              <td>
                <a href="#">obcasyn@example.com</a>
              </td>
              <td>{Math.floor(Math.random() * 6) + 1}</td>
              <td>
                <button className="sendEmailBtn" onClick={() => openModal('obcasyn@example.com')}>Send Email</button>
                <button className="removeBtn">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>Send Email</h2>
            <SendEmail recipient={selectedEmail} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagedStudents;
