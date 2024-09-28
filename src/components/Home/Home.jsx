import React from 'react'
import { Link } from 'react-router-dom';


import background from './background.png'

export default function Home() {
    return (

        <div className='min-h-screen flex flex-col'>
        {/* Main content */}
        <div className='flex-grow'>
          <div className='relative'>
            <img src={background} alt="background" className='w-full h-auto' />
            <div className='absolute inset-10 flex items-end justify-center'>
              <p className='text-black bg-black bg-opacity-0 px-10 py-2 text-3xl font-bold'>
                "Effortless Patient Management, Anytime!"
              </p>
            </div>
          </div>
      
          {/* Section for doctors, staff, and patients */}
          <div className='mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 mb-16'> {/* Added mb-16 to create space above the footer */}
            {/* Doctor Section */}
            <div className='bg-gray-50 border border-gray-300 shadow-lg p-8 rounded-lg transition-transform duration-300 transform hover:scale-105 mb-6'>
  <h2 className='text-3xl font-semibold mb-6 text-center text-blue-600'> Doctors </h2>
  <ul className='list-disc pl-5 space-y-2 text-gray-700'>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> Manage patient appointments
    </li>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> Access patient medical history
    </li>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> Generate and manage prescriptions
    </li>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> Communicate with staff and patients
    </li>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> View appointment schedules
    </li>
  </ul>
</div>

      
            {/* Staff Section */}
<div className='bg-gray-50 border border-gray-300 shadow-lg p-8 rounded-lg transition-transform duration-300 transform hover:scale-105 mb-6'>
  <h2 className='text-3xl font-semibold mb-6 text-center text-blue-600'>Staff</h2>
  <ul className='list-disc pl-5 space-y-2 text-gray-700'>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> Register new patients
    </li>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> Manage patient records
    </li>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> Handle billing and payments
    </li>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> Schedule patient appointments
    </li>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> Coordinate with doctors and patients
    </li>
  </ul>
</div>

{/* Patient Section */}
<div className='bg-gray-50 border border-gray-300 shadow-lg p-8 rounded-lg transition-transform duration-300 transform hover:scale-105 mb-6'>
  <h2 className='text-3xl font-semibold mb-6 text-center text-blue-600'>Patients</h2>
  <ul className='list-disc pl-5 space-y-2 text-gray-700'>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> View upcoming appointments
    </li>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> Access medical history
    </li>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> Download prescriptions
    </li>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> Contact healthcare providers
    </li>
    <li className='flex items-center'>
      <span className='text-blue-600 mr-2'>✔️</span> Manage personal health data
    </li>
  </ul>
</div>

          </div>
        </div>
      </div>
      
       
    );
}
