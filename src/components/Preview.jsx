import React from 'react'
import Divider from '@mui/material/Divider';
function Preview() {
  return (
    <div style={{margin:'90px'}} className='shadow p-5 w-100 rounded text-center'>
      <h3>Name</h3>
      <h4>Job Title</h4>
      <h6><span>Location</span><span>E Mail</span><span>Mobile</span></h6>
      <p className='my-3'>
        <a href="" target='_blank' >GITHUB</a>|
        <a href="" target='_blank'>LINKEDIN</a>|
        <a href="" target='_blank'>PORTFOLIO</a>
      </p>
      <Divider sx={{fontSize:'25px'}}>  Summary</Divider>
      <p style={{textAlign:'justify'}}>oDB, Express.js, Angular, and Node.js. Experienced in creating responsive UIs, RESTful APIs, and managing databases to deliver efficient full-stack solutions.</p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}} >Education</Divider>
      <h5>Course Name</h5>
      <p><span className='mx-2'>Collage</span>|<span className='mx-2'>University</span>|<span className='mx-2'>passout year</span></p>
      <Divider sx={{fontSize:'25px',marginBottom:'10'}} >Proffestional Experience</Divider>
      <h5>Job/Intenship</h5>
      <p><span className='mx-2'>Company name</span>|<span className='mx-2'>company location</span>|<span className='mx-2'>duration</span></p>
    </div>
  )
}

export default Preview