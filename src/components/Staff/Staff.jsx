import React, { useState} from 'react'
import { Link } from 'react-router-dom'

 function Staff() {

  const [count , setcount] = useState(
    {
    today: 0,
    monthly : 0,
    yearly:0
  }
  )

  const toggleform=(e)=>{
     if(e){
      setcount((prevcount) =>({
        ...prevcount,
        today: prevcount.today+1,
        monthly : prevcount.monthly + 1,
        yearly : prevcount.yearly + 1
      }))
     }
  }
 
    return (
        <><div className='flex  h-screen '>
            <div className='max-w-[250px]  bg-blue-800 shadow-md shadow-slate-400 flex flex-col space-y-11 h-screen p-10 text-xl cursor-pointer font-semibold text-white'>
<div className='flex gap-2 '>

<svg
  className="w-6 h-6"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M12 3l9 9h-3v9H6v-9H3l9-9zm0-2.25L0 12h3v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9h3L12 .75z"
    clipRule="evenodd"
  />
</svg>

<a href="/">Home</a>
</div>
<div className='flex gap-2'>
<svg
  className="w-6 h-6"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M12 2a10 10 0 0 0-10 10c0 5.522 4.478 10 10 10s10-4.478 10-10S17.522 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-11h2v2h-2v-2zm0 3h2v6h-2v-6z"
    clipRule="evenodd"
  />
</svg>
<a href='patients'>PatientsData</a>
</div>
               <div className='flex gap-2'>
               <svg
  className="w-6 h-6"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M12 0a6 6 0 0 0-6 6v2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3h-2V6a6 6 0 0 0-6-6zm-3 6a3 3 0 1 1 6 0v2h-6V6zM6 12h12v12H6V12zm9 1h-3v3h-2v-3H6v-2h4V8h2v3h3v2z"
    clipRule="evenodd"
  />
</svg>
<a href='doctor'>Doctors</a>
               </div>
                
                <div className='gap-2 flex'>
                <svg
  className="w-6 h-6"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M14 3h-2v5H8v2h4v5h2V5h2V3h-2zm-8 8a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm12-9v2h-6v-2h6z"
    clipRule="evenodd"
  />
</svg>
<a href='calendar'>Appointments</a>
</div>
               <div className='flex gap-2'>
               <svg
  className="w-6 h-6"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M12 0a6 6 0 0 0-6 6v2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3h-2V6a6 6 0 0 0-6-6zm-3 6a3 3 0 1 1 6 0v2h-6V6zM6 12h12v12H6V12zm9 1h-3v3h-2v-3H6v-2h4V8h2v3h3v2z"
    clipRule="evenodd"
  />
</svg>

                <a href='login'>Log IN</a>
                </div>
                <div className='gap-2 flex'>

                <svg
  className="w-6 h-6"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M10 3H8v5H3v2h5v5h2V5h2V3zm-8 8a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm16-8h-6v2h6v-2z"
    clipRule="evenodd"
  />
</svg>

                <a href="/">Log Out</a>
                </div>
                

            </div>




           <div className='lg:p-4  cursor-pointer gap-6 lg:grid lg:grid-cols-3 flex flex-col space-y-4 lg:h-14 lg:mt-24'>

            <div  className='bg-white shadow-md shadow-slate-500 p-6 flex space-x-10 ' >
                <div className='space-y-4'>
                <p>Todays Patients</p>
                <p>{count.today}</p>
                <p>Total patients {count.today} today</p>
                </div>
                <div>
                <svg
  className="w-14 h-14 bg-green-400 rounded-lg p-2"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M12 1.75a10.25 10.25 0 1 0 10.25 10.25A10.263 10.263 0 0 0 12 1.75zm0 18.5a8.25 8.25 0 1 1 8.25-8.25 8.26 8.26 0 0 1-8.25 8.25zm.75-13.25a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 .31.61l3 2.25a.75.75 0 1 0 .9-1.22L12.75 12.2V7z"
    clipRule="evenodd"
  />
</svg>

                </div>
            </div >

            <div className='bg-white shadow-md shadow-slate-500 p-6 flex space-x-10'>
                <div className='space-y-4'>
                <p>Monthly Patients</p>
                <p>{count.monthly}</p>
                <p>Total  Monthly patients {count.monthly} </p>
                </div>
                <div>
                <svg
  className="w-14 h-14 bg-orange-500 rounded-lg p-2"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M19 3h-1V1a1 1 0 1 0-2 0v2H8V1a1 1 0 1 0-2 0v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9h16v9ZM4 7V6a1 1 0 0 1 1-1h1v1a1 1 0 1 0 2 0V5h8v1a1 1 0 1 0 2 0V5h1a1 1 0 0 1 1 1v1H4Z"
    clipRule="evenodd"
  />
</svg>

                </div>

        
        </div>
  
             
         


            <div className='bg-white shadow-md shadow-slate-500 p-6 flex space-x-10'>
                <div className='space-y-4'>
                <p>Yearly Patients</p>
                <p>{count.yearly}</p>
                <p>Total Yearly Patients {count.yearly} </p>
                </div>


                <div>
                <svg
  className="w-14 h-14 bg-pink-400 rounded-lg p-2"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M19 3h-1V1a1 1 0 1 0-2 0v2H8V1a1 1 0 1 0-2 0v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9h16v9ZM4 7V6a1 1 0 0 1 1-1h1v1a1 1 0 1 0 2 0V5h8v1a1 1 0 1 0 2 0V5h1a1 1 0 0 1 1 1v1H4Z"
    clipRule="evenodd"
  />
</svg>

                </div>
            </div>
            
            </div>
            <div className="absolute bottom-2 right-10">
  <a href='patientform'>
        <button onClick={toggleform}
         className=" transform transition-transform duration-500 ease-in-out hover:-translate-y-4 text-4xl font-bold focus:ring-2 focus:ring-green-500 text-white bg-green-400 w-20 h-20 shadow-xl shadow-slate-500 hover:shadow-green-700 rounded-full">
          +
        </button>
        </a>
        
    </div>
           
            </div>

        
       </>




            

                
        
    )
}

export default Staff
