import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Form, Route, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home/Home.jsx'
import Staff from './components/Staff/Staff.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Doctor from './components/Doctor/Doctor.jsx'
import Appointment from './components/Appointment/Appointment.jsx'
import Login from './components/Login/login.jsx'
import Register from './components/Register/Register.jsx'
import Patientform from './components/Patient/Patientform/Patientform.jsx'


import AppointmentCalendar from './components/Calendar/AppointmentCalendar.jsx'
import Patients from './components/Patient/Patients/Patients.jsx'
import Patientlogin from './components/Patient/Patientlogin/Patientlogin.jsx'
import Patientdashboard from './components/Patient/PatientDashboard/Patientdashboard.jsx'
import Patientregister from './components/Patient/PatientRegister/Patientregister.jsx'
 









const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<Root/>}>
      <Route path="" element={<Home/>}/>
      <Route path="staff" element={<Staff/>}/>
      <Route path="contact" element={<ContactUs/>}/>
      <Route path="doctor" element={<Doctor/>}/>
      <Route path="appointment" element={<Appointment/>}/>
<Route path="login"  element={<Login/>}/>
<Route path="register" element={<Register/>}/>
<Route path='patientform' element={<Patientform/>}/>

<Route path='calendar' element={<AppointmentCalendar/>}
/>
<Route path='patients' element={<Patients/>}/>

<Route  path ='patientlogin' element={<Patientlogin/>}/>
<Route path='patientregister'  element={<Patientregister/>}/> 
<Route path="dashboard" element={<Patientdashboard/>}/>


</Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  
  </StrictMode>,
)
