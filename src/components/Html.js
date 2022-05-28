import React, { useState } from 'react'
import {Outlet} from 'react-router-dom'

function Html()
{
    return(
    <div>
          <h2 className='text-center text-danger bg-warning'>Yet to complete</h2>
    <Outlet></Outlet></div>)
}
export default Html