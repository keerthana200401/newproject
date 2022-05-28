import React, { useState } from 'react'


function Child1(props) {
  let[childdata1,setchildata1]=useState('child1')
  return (
    <div className='bg-warning' >
     <h2 className=" text-primary display-3 m-2 text-center">Child1 component</h2>
     <h4 className='text-dark  m-2 text-center'>{props.name}</h4>
     <button className='btn btn-success d-block mx-auto' onClick={()=>props.getdatafromchild1(childdata1)}>Send to parent</button>
    </div>
  );
}

export default Child1;