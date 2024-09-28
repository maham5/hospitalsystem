import React, { useState, useEffect } from 'react';

const PatientForm = () => {
  const [patients, setPatients] = useState([]);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [dob, setDob] = useState('');
  const [sex, setSex] = useState('');
  const [city, setCity] = useState('');
  const [postal_code, setPostal] = useState('');
  const [phone_home, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [race, setRace] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [religion, setReligion] = useState('');
  const [family_size, setFamily] = useState('');
  const [monthly_income, setIncome] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const fetchPatients = async () => {
    const response = await fetch('http://localhost:5000/api/patients');
    const data = await response.json();
    setPatients(data);
    console.log('Patient added:', data); // Debug line
  };

  const addPatient = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          fname, lname, dob, sex, city, postal_code, phone_home, 
          email, occupation, race, ethnicity, religion, family_size, monthly_income
        }),
      });
      if (response.ok) {
    
        fetchPatients(); // Refresh the list after adding
        // Clear fields
        setFname('');
        setLname('');
        setDob('');
        setSex('');
        setCity('');
        setPostal('');
        setPhone('');
        setEmail('');
        setOccupation('');
        setRace('');
        setEthnicity('');
        setReligion('');
        setFamily('');
        setIncome('');
        // Set success message
        setSuccessMessage('Patient added successfully!');
        setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
      } else {
        console.error('Failed to add patient:', response.statusText);
        setSuccessMessage('Failed to add patient.'); // Set error message
      setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 7 seconds
      }
    } catch (error) {
      console.error('Error:', error);
      
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className='flex justify-center items-center my-20'>
      <form className="w-screen max-w-2xl shadow-xl shadow-slate-600/60 rounded-xl p-10" onSubmit={addPatient}>
        <h1 className='font-bold mb-4 text-3xl'>Add Patient</h1>

        {/* Form Fields go here (as defined in your original code) */}
        <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fname">
        First Name
      </label>
      <input
      value={fname}
      onChange={(e)=>
    
  setFname(e.target.value)}
  required
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="fname" type="text" placeholder="fname"/>
      
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lname">
        Last Name
      </label>
      <input 
      value={lname}
      onChange={(e)=>
    
  setLname(e.target.value)}
  required
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="lname" type="text" placeholder="lname"/>
      
    </div>
  </div>
    
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Date-Of-Birth">
        DOB
      </label>
      <input 
  
      value={dob}
      onChange={(e)=>
    
  setDob(e.target.value)}
  required
      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="DOB" type="date" placeholder="DOB"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-sex">
        Gender
      </label>
      <div className="relative">
        <select 
        value={sex}
        onChange={(e)=>
      
    setSex(e.target.value)}
    required
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-sex">
         <option value="">Select gender</option> {/* Placeholder option */}
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>


 


  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-street">
        Address
      </label>
      <input 
      value={city}
      onChange={(e)=>
    
  setCity(e.target.value)}
  required
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="street" type="text" placeholder="Street"/>
      
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-postal_code">
        Postal Code
      </label>
      <input 
      value={postal_code}
      onChange={(e)=>
    
  setPostal(e.target.value)}
  required
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="postal_code" type="text" placeholder="Postal_code"/>
      
    </div>


    
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone-cell">
        Phone Number
      </label>
      <input 
      value={phone_home}
      onChange={(e)=>
    
  setPhone(e.target.value)}
  required
      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone_cell" type="text" placeholder="1245690..."/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
        Email
      </label>
      <input 
      value={email}
      onChange={(e)=>
        
  setEmail(e.target.value)}
  required
      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="fgty245@gmail.com"/>

      </div>
        </div>


        <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-occupation">
        Occupation
      </label>
      <input 
      value={occupation}
      onChange={(e)=>

  setOccupation(e.target.value)}
  required
      
      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="occupation" type="text" placeholder="Your Occupation"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-race">
        Race
      </label>
      <div className="relative">
        <select 
        value={race}
        onChange={(e)=>
      
    setRace(e.target.value)}
    required
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-race">
        <option value="">Select race</option> {/* Placeholder option */}
      <option value="white">White</option>
      <option value="black">Black or African American</option>
      <option value="asian">Asian</option>
      <option value="native-american">Native American or Alaska Native</option>
      <option value="pacific-islander">Native Hawaiian or Other Pacific Islander</option>
      <option value="other">Other</option>
          
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
    </div>
    </div>
    


    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-region">
        Religion
      </label>
      <input 
      
      value={religion}
      onChange={(e)=>
    
  setReligion(e.target.value)}
  required
      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="religion" type="text" placeholder="Enter Your Religion"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-ethnicity-Ascending-1">
        Ethnicity
      </label>
      <div className="relative">
        <select
        value={ethnicity}
        onChange={(e)=>
      
    setEthnicity(e.target.value)}
    required
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-ethnicity-Ascending-1">
        <option value="">Select ethnicity</option> {/* Placeholder option */}
        <option value="hispanic-latino">Hispanic or Latino</option>
        <option value="non-hispanic-latino">Non-Hispanic or Latino</option>
        
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-family_size">
        Family Size
      </label>
      <input 
      value={family_size}
      onChange={(e)=>
    
  setFamily(e.target.value)}
  required
      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="family_size" type="number" placeholder="Family Size"/>
      
    </div>
    
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-monthly-income">
        Monthly Income
      </label>
      <input
      
      value={monthly_income}
      onChange={(e)=>
    
  setIncome(e.target.value)}
  required
      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="monthly_income" type="text" placeholder="Monthly Income"/>
      
    
    </div>
  </div>
   
        {/* Example of the submit button */}
        <button
            type="submit"
            className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
            Add Patient
        </button>
      </form>
      {/* Display success message if it exists, positioned after the button */}
      {successMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p>{successMessage}</p>
              <button
                className="mt-4 bg-blue-500 text-white p-2 rounded"
                onClick={() => setSuccessMessage('')}
              >
                Close
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default PatientForm;
