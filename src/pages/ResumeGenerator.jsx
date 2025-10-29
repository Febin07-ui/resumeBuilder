import React from 'react'
import  {Link} from 'react-router-dom'
function ResumeGenerator() {
  return (
    <div className='container m-5'>
      <h1 className='text-center'>Create a Job-Winning Resume in Minutes</h1>
      <div  style={{height:'60vh'}} className='mt-5 d-flex justify-content-center align-items-center gap-3' >
        <div style={{height:'40vh'}} className='border rounded shadow p-5 text-center'>
          <h1>Add your Information</h1>
          <h4>Add pre-writtern examples to each section </h4>
          <h2>Step 1</h2>

        </div>
        <div style={{height:'40vh'}} className='border rounded shadow p-5 text-center'>
          <h1>Download your Resume</h1>
          <h4>Add pre-writtern examples to each section </h4>
          <h2>Step 2</h2>
        </div>
      </div>
      <div className='d-flex justify-content-center align-item-center '>
        <Link to={'/form'} className='btn text-white' style={{backgroundColor:'purple'}}>Let's Start</Link>
      </div>
    </div>
  )
}

export default ResumeGenerator