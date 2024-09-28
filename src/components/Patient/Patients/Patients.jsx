import React, { useState, useEffect } from 'react';

const Patients = () => {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    const response = await fetch('http://localhost:5000/api/patients');
    const data = await response.json();
    console.log(data);  // Log the fetched data
    setPatients(data);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const formatDate = (DOB) => {
    if (!DOB) return '';
    const date = new Date(DOB);
    return date.toLocaleDateString('en-GB'); // 'en-GB' gives DD/MM/YYYY format
  };

  const extractDatePart = (dob) => {
    if (!dob) return '';
    return new Date(dob).toISOString().slice(0, 10); // Get the first 10 characters (YYYY-MM-DD)
  };

  // Define styles in JavaScript objects for the table
  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyles = {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    color: '#333',
    textAlign: 'left',
  };

  const tdStyles = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const trHoverStyles = {
    backgroundColor: '#ddd',
  };

  const trEvenStyles = {
    backgroundColor: '#f9f9f9',
  };

  return (
    <div>
      <h1>Patient Data</h1>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={thStyles}>ID</th>
            <th style={thStyles}>First Name</th>
            <th style={thStyles}>Last Name</th>
            <th style={thStyles}>Date of Birth</th>
            <th style={thStyles}>Sex</th>
            <th style={thStyles}>City</th>
            <th style={thStyles}>Postal Code</th>
            <th style={thStyles}>Home Phone</th>
            <th style={thStyles}>Email</th>
            <th style={thStyles}>Occupation</th>
            <th style={thStyles}>Religion</th>
            <th style={thStyles}>Race</th>
            <th style={thStyles}>Ethnicity</th>
            <th style={thStyles}>Family Size</th>
            <th style={thStyles}>Monthly Income</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={patient.id} style={index % 2 === 0 ? trEvenStyles : {}}>
              <td style={tdStyles}>{patient.id}</td>
              <td style={tdStyles}>{patient.fname}</td>
              <td style={tdStyles}>{patient.lname}</td>
              <td style={tdStyles}>{formatDate(patient.DOB)}</td>
              <td style={tdStyles}>{patient.sex}</td>
              <td style={tdStyles}>{patient.city}</td>
              <td style={tdStyles}>{patient.postal_code}</td>
              <td style={tdStyles}>{patient.phone_home}</td>
              <td style={tdStyles}>{patient.email}</td>
              <td style={tdStyles}>{patient.occupation}</td>
              <td style={tdStyles}>{patient.religion}</td>
              <td style={tdStyles}>{patient.race}</td>
              <td style={tdStyles}>{patient.ethnicity}</td>
              <td style={tdStyles}>{patient.family_size}</td>
              <td style={tdStyles}>{patient.monthly_income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
