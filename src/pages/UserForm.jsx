import React from 'react'
import Preview from '../components/Preview'
import UserInput from '../components/UserInput'

function UserForm() {
    const [resumeDetails,setResumeDetails] = React.useState({
      userName:"",
      jobTitle:"",
      location:"",
      email:"",
      mobile:"",
      github:"",
      linkedIn:"",
      portfolio:"",
      course:"",
      college:"",
      university:"",
      passoutYear :"",
      jobType:"",
      company:"",
      cLocation:"",
      duration :"",
      userSkills:[],
      summary:""
    })
  return (

    <div className='container'>


      <div className="row p-5">
        <div className="col-lg-6">
          <UserInput resumeDetails={resumeDetails} setResumeDetails={setResumeDetails}/>
        </div>
        <div className="col-lg-6">
        {
          resumeDetails.userName&&
          <Preview resumeDetails={resumeDetails}/>
        }
          
        </div>
      </div>
    </div>
    
  )
}

export default UserForm