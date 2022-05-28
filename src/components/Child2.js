import React, { useState } from 'react'


function Child2(props) {
    let[childdata2,setchildata2]=useState('child2')

  return (
    <div className='bg-warning' >
    <h2 className=" text-primary display-3 m-2 text-center">Child2 component</h2>
    <h4 className='text-dark  m-2 text-center'>{props.name}</h4>
    <button className='btn btn-success d-block mx-auto' onClick={()=>props.getdatafromchild2(childdata2)}>Send to parent</button>
   </div>
  );
}

export default Child2;