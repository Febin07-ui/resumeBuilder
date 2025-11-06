import React from 'react'
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
function Preview({resumeDetails}) {
  return (
    <div style={{margin:'90px'}} className='shadow p-5 w-100 rounded text-center'>
      <h3>{resumeDetails?.userName}</h3>
      <h4>{resumeDetails?.jobTitle}</h4>
      <h6><span>{resumeDetails?.location}</span>|<span>{resumeDetails?.email}</span>|<span>{resumeDetails?.mobile}</span></h6>
      <p className='my-3'>
        <a href="" target='_blank' >{resumeDetails?.github}</a>|
        <a href="" target='_blank'>{resumeDetails?.linkedIn}</a>|
        <a href="" target='_blank'>{resumeDetails?.portfolio}</a>
      </p>
      <Divider sx={{fontSize:'25px'}}>  Summary</Divider>
      <p style={{textAlign:'justify'}}>{resumeDetails?.summary}</p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}} >Education</Divider>
      <h5>{resumeDetails?.course}</h5>
      <p><span className='mx-2'>{resumeDetails?.college}</span>|<span className='mx-2'>{resumeDetails?.university}</span>|<span className='mx-2'>{resumeDetails?.passoutYear}</span></p>
      <Divider sx={{fontSize:'25px',marginBottom:'10'}} >Proffestional Experience</Divider>
      <h5>{resumeDetails?.jobType}</h5>
      <p><span className='mx-2'>{resumeDetails?.company}</span>|<span className='mx-2'>{resumeDetails?.cLocation}</span>|<span className='mx-2'>{resumeDetails?.duration}</span></p>
      <Divider sx={{fontSize:'25px',marginBottom:'10'}} >Proffestional Experience</Divider>
      <div className='d-flex flex-wrap justify-content-between'>
        {
          resumeDetails?.userSkills?.map((item,index)=>(
            <Button key={index} varient = "contained" className="m-1">{item}</Button>
      
          ))
        }
      </div>
    </div>
  )
}

export default Preview