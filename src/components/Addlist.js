
import React, { useState } from 'react'


function Addlist() {
  let[arr,setarr]=useState({kname:"keerthana",city:"Hyderabad"})

  const select=()=>{
    setarr({...arr,kname:"Surya",city:"Chennai"})
  }
  return (
    <div >
   <div className='row m-4'>
     <div className='col col-sm col-md '>
    <img className=' p-2' src="https://hifazatcare.org/images/bg/ngo2.jpg" width='500px' height='300px'></img>
     </div>
     <div className='col  col-sm col-md'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.</p>
     </div>
   </div>
    </div>
  );
}

export default Addlist;