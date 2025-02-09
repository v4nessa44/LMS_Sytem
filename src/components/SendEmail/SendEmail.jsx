import React, { useState } from "react";
import "./SendEmail.css";

const SendEmail = ({ onClose }) => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({ subject: "", body: "", file: "" });

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
    if (event.target.value.trim().length >= 3) {
      setErrors((prevErrors) => ({ ...prevErrors, subject: "" }));
    }
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
    if (event.target.value.trim().length >= 3) {
      setErrors((prevErrors) => ({ ...prevErrors, body: "" }));
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setErrors((prevErrors) => ({ ...prevErrors, file: "" }));
    } else {
      setFile(null);
      setErrors((prevErrors) => ({ ...prevErrors, file: "File is required!" }));
    }
  };

  const handleSend = () => {
    let validationErrors = {};

    if (subject.trim().length < 3) {
      validationErrors.subject = "Subject must be at least 3 characters!";
    }

    if (body.trim().length < 3) {
      validationErrors.body = "Body must be at least 3 characters!";
    }

    

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Email Sent with File Attached!");
    onClose(); // Close modal after sending
  };

  return (
    <div className="send-email-modal">
      <input
        name="Subject"
        placeholder="Subject (Min 3 characters)"
        value={subject}
        onChange={handleSubjectChange}
        className={errors.subject ? "input-error" : ""}
      />
      {errors.subject && <p className="error-message">{errors.subject}</p>}

      <textarea
        placeholder="Body (Min 3 characters)"
        value={body}
        onChange={handleBodyChange}
        className={errors.body ? "input-error" : ""}
      ></textarea>
      {errors.body && <p className="error-message">{errors.body}</p>}

      <input
        type="file"
        onChange={handleFileChange}
        className={errors.file ? "input-error" : ""}
      />
      {errors.file && <p className="error-message">{errors.file}</p>}

      <div className="send-email-buttons">
        <button className="send-email-button" onClick={handleSend}>Send</button>
        <button className="cancel-email-button" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default SendEmail;
