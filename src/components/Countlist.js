import { useState } from 'react';
import {Outlet} from 'react-router-dom'
import './Countlist.css';
import {useForm} from 'react-hook-form'
function Countlist() {

  let{register,handleSubmit,formState:{errors}}=useForm()

  const onformsubmit=(userobj)=>
  {
    console.log(userobj)
  }
   return(
 <div className='fal '>
   <form className='m-5 w-50 ' onSubmit={handleSubmit(onformsubmit)}>
     <div className=' m-3 text-center'>
       <label className='text center' htmlFor='name'>Name</label>
       <input className='form-control ' id='name' type='text' {...register('name')}></input>
     </div>
     <div className=' m-3  text-center'>
       <label htmlFor='email'>Email</label>
       <input className='form-control' id='email' type='email' {...register('email')}></input>
     </div>
    
    <button type='submit' className='btn btn-success text-center m-5 d-block mx-auto' >Login</button>

   </form>
<Outlet></Outlet>
  </div>

  );
}

export default Countlist;