import React, { useState ,} from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Patientlogin() {

    const [id ,set_id] = useState('')
    const [successMessage ,setSuccessMessage] = useState('')
    const navigate =useNavigate()

   const  submitBtn =(e)=>{
  e.preventDefault()
   }
    return (
        <>
        <div  className=' w-screen h-screen  '>
        
        
        <div className='flex justify-center items-center '>

<form className="w-full max-w-[550px]  h-full  my-20 bg-slate-400 bg-opacity-10 rounded-lg shadow-xl shadow-slate-400">
<button
 className=' bg-blue-700 p-4 text-white  mt-6 mx-10 rounded-full shadow-xl shadow-blue-400/50 hover:translate-y-3 hover:transform hover:duration-500'
onClick={()=>navigate(-1)}>
             <svg 
                className="w-5 h-5 font-bold" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15 19l-7-7 7-7" 
                />
            </svg>
            </button>
    <div className='p-12'>
  <div className="md:flex md:items-center  ">
    <div className=''>
      <h1 className="block text-blue-700 text-2xl  font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        <span className='text-black'>Medcare</span>Hospital
      </h1>
    
    </div>
   
  </div>

  <div className='p-2  my-2 text-center'>
     <h1 className='text-lg font-semibold'>Enter Your MID To Login</h1>
     </div>
  <div className="md:flex md:items-center mb-6">

 
    <div className="md:w-1/3 ">
      <label className="block text-black text-lg font-semibold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-id">
        MID
      </label>
    </div>
    <div className="md:w-2/3">
      <input 

      value={id}
      onChange={(e) => set_id(e.target.value)}
      required
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-MID" type="id" placeholder="MID"/>
    </div>
  </div>
  
    

 
 
<div className="flex flex-wrap justify-evenly items-center mt-6 "> 
<Link to='dashboard'>
    <button 
    onClick={submitBtn}
    className="bg-blue-700 hover:bg-blue-500  ml-20 focus:shadow-outline focus:outline-none shadow-lg shadow-blue-500 text-white font-bold py-2 px-4 rounded" type="button">
        Log In
    </button>
    </Link>
    
    <a href="patientregister" className="text-sm  font-bold text-green-500">Register here!</a>  
</div>
</div>
</form>
</div>
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
        </>
    )
}

export default Patientlogin
