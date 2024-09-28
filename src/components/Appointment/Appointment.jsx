import React, { useState } from 'react'
import SubHead from "./SubHead.png"
import { useNavigate } from 'react-router-dom'

function AppointForm() {

    const [name, setname] = useState('')
    const [number , setnumber] =useState('')
    const [email , setemail] = useState('')
    const [date , setdate] = useState('')
    const[time ,settime] =useState('')
    const [area , setarea] = useState('')
    const[city , setcity] = useState('')
    const [state , setstate] = useState('')
    const [postcode , setpostcode] = useState('')

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name , number , email ,date , time , area , city ,state , postcode)

    if (name && number && email && date && time && area && city && state && postcode) {
        console.log(name, number, email, date, time, area, city, state, postcode);
  
       
        navigate('/', { state: { message: 'You have successfully booked your appointment!' } });
      } else {
        alert('Please fill in all the fields.');
      }
    }
    return (
        <>
        <div className='w-full'>
        
                <div>
                   <img src={SubHead} />

                </div>
<div className='lg:flex lg:flex-row sm:flex-col lg:justify-between sm:text-center sm:justify-center sm:items-ce my-10  p-10  lg:mx-24' >
    <div>
    <div className='text-center max-w-lg  mb-10  '>
<h1 className='text-blue-800 text-4xl font-bold mb-6'>Book an Appointment</h1>
<p className='font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Similique quo delectus sed ullam id, fuga reprehenderit possimus ea nam hic!
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quo delectus sed ullam id, fuga reprehenderit possimus ea nam hic!
</p>
<div>

<form >
<div className="flex items-center justify-center p-12  " >

    <div className="mx-auto w-full max-w-[550px] bg-blue-800 shadow-2xl shadow-slate-600/50 p-10  ">
            <div className="mb-5">
                <label htmlFor="name" className=" text-white mb-3 block text-base font-medium ">
                    Full Name
                </label>
                <input 
                value={name}
                onChange={(e)=>{
                    setname(e.target.value)
                }}
                type="text" name="name" id="name" placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label htmlFor="phone" className=" text-white mb-3 block text-base font-medium ">
                    Phone Number
                </label>
                <input  
                value={number}
                onChange={(e)=>{
                    setnumber(e.target.value)
                }}
                type="text" name="phone" id="phone" placeholder="Enter your phone number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium text-white">
                    Email Address
                </label>
                <input 
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }}
                type="email" name="email" id="email" placeholder="Enter your email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="date" className="mb-3 block text-base font-medium text-white">
                            Date
                        </label>
                        <input
                        value={date}
                        onChange={(e)=>{
                            setdate(e.target.value)
                        }}
                        type="date" name="date" id="date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="time" className="mb-3 block text-base font-medium text-white">
                            Time
                        </label>
                        <input 
                        value={time}
                        onChange={(e)=>{
                            settime(e.target.value)
                        }}
                        type="time" name="time" id="time"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>

            <div className="mb-5 pt-3">
                <label className="mb-5 block text-base font-semibold text-white sm:text-xl">
                    Address Details
                </label>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input  
                            value={area}
                            onChange={(e)=>{
                                setarea(e.target.value)
                            }}
                            type="text" name="area" id="area" placeholder="Enter area"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input 
                            value={city}
                            onChange={(e)=>{
                                setcity(e.target.value)
                            }}
                            type="text" name="city" id="city" placeholder="Enter city"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input
                        value={state}
                            onChange={(e)=>{
                                setstate(e.target.value)
                            }}
                            type="text" name="state" id="state" placeholder="Enter state"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input 
                            value={postcode}
                            onChange={(e)=>{
                                setpostcode(e.target.value)
                            }}
                            type="text" name="post-code" id="post-code" placeholder="Post Code"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button onClick={handleSubmit}
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Book Appointment
                </button>
            </div>
            </div>
            </div>
        </form>
        </div>
    </div>
</div>




    <div>
    <div className='bg-blue-800 lg:mt-10 text-white p-10 text-lg  shadow-2xl shadow-slate-600/50 '>
<h1 className='text-4xl text-blue-400 mb-2 font-bold'>Sechdule hours</h1>

<ul className='space-y-4 mt-4 cursor-pointer'>
<li className=' flex lg:justify-between space-x-6  sm:justify-evenly '>
        <p>Monday </p>
       <p className='text-blue-400 '>–</p> 
        <p>9:00 AM - 7:00 PM</p>
    </li>
    <li className=' flex lg:justify-between space-x-6  sm:justify-evenly '>
        <p>Tuesday </p>
        <p className='text-blue-400 '>–</p> 
        <p>9:00 AM - 7:00 PM</p>
    </li>
    <li className=' flex lg:justify-between space-x-6  sm:justify-evenly '>
        <p>Wednesday </p>
        <p className='text-blue-400 '>–</p> 
        <p>9:00 AM - 7:00 PM</p>
    </li>
    <li className=' flex lg:justify-between space-x-6  sm:justify-evenly '>
        <p>Thursday</p>
        <p className='text-blue-400 '>–</p> 
        <p>9:00 AM - 7:00 PM</p>
    </li>
    <li className=' flex lg:justify-between space-x-6  sm:justify-evenly '>
        <p>Friday</p>
        <p className='text-blue-400 '>–</p> 
        <p>9:00 AM - 7:00 PM</p>
    </li>
    <li className=' flex lg:justify-between space-x-6  sm:justify-evenly '>
        <p>Saturday</p>
        <p className='text-blue-400 '>–</p> 
        <p>9:00 AM - 7:00 PM</p>
    </li>
    <li className=' flex lg:justify-between space-x-6  sm:justify-evenly '>
        <p>Sunday</p>
        <p className='text-blue-400 '>–</p> 
        <p>Closed</p>
    </li>
</ul>
    </div>
</div>
</div>
</div>
</>
    
    
    )
}

export default AppointForm
