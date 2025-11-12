import React, { useRef, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { updateResumeAPI } from '../services/allAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight:'80vh',
  overflowY:'auto',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Edit({resumeDetails,setResumeDetails}) {
    const skillRef = useRef()
    const [open,setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addSkills = (skill) => {
    if(resumeDetails.userSkills.includes(skill)){
      alert('skill already added');
    }else{
      setResumeDetails({...resumeDetails,userSkills:[...resumeDetails.userSkills,skill]})
      skillRef.current.value = ""
    }
    }

    const removeSkill = (skill)=>{
        setResumeDetails({...resumeDetails,userSkills:resumeDetails.userSkills.filter(item=>item !== skill)})

    }
    const handleResumeUpdate = async ()=>{
    const {id,userName,jobTitle,location} = resumeDetails
    if(!userName && !jobTitle && !location){
        alert("please fill the form completely ")
    } else {
        console.log("Api Call");
        try{
        const result = await updateResumeAPI(id,resumeDetails)
        console.log(result)
        if(result.status==200){
            alert("Resume updated")
            handleClose()
        }
        } catch(err){
        console.log(err);
        }
    }  
    }   



  return (
    <div>
        <button onClick={handleOpen} className='btn fs-4 text-primary'><CiEdit /></button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit Resume Details
            </Typography>
            <Box id="modal-modal-description" sx={{ mt: 2 }}>
                {/* personal data */}
                <div>
                    <h3>Personal Details</h3>
                    <div className='row p-3 gap-3'>
                        <TextField value={resumeDetails.userName} onChange={e=>setResumeDetails({...resumeDetails,userName:e.target.value})} id="standard-basic-name" label="Full Name" varient="standard"/>
                        <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic-" label="Job Title" varient="standard"/>
                        <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic" label="Location" varient="standard"/>
                    </div>
                </div>
                {/* contact data */}
                <div>
                    <h3>Contact Details</h3>
                    <div className='row p-2 gap-3'>
                        <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-email" label="Email" varient="standard"/>
                        <TextField value={resumeDetails.mobile} onChange={e=>setResumeDetails({...resumeDetails,mobile:e.target.value})} id="standard-basic-mobile" label="Phone Number" varient="standard"/>
                        <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic-github" label="Github Profile Link" varient="standard"/>
                        <TextField value={resumeDetails.linkedIn} onChange={e=>setResumeDetails({...resumeDetails,linkedIn:e.target.value})} id="standard-basic-linkedIn" label="Linkedin Profile Link" varient="standard"/>
                        <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Link" varient="standard"/>
                    </div>
                </div>
                {/* education data  */}
                <div>
                    <h3>Educational Details</h3>
                    <div className='row p-2 gap-3'>
                        <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" varient="standard"/>
                        <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-collage" label="Collage Name" varient="standard"/>
                        <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" varient="standard"/>
                        <TextField value={resumeDetails.passoutYear} onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic-year" label="Year of Passout" varient="standard"/>
                        
                    </div>
                </div>
                {/* Work experience*/}
                <div>
                    <h3>Proffesional Details</h3>
                    <div className='row p-2 gap-3'>
                        <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})} id="standard-basic-job" label="Job of Intenship" varient="standard"/>
                        <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-companny" label="Company Name" varient="standard"/>
                        <TextField value={resumeDetails.cLocation} onChange={e=>setResumeDetails({...resumeDetails,cLocation:e.target.value})} id="standard-basic-location" label="Company Location" varient="standard"/>
                        <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" varient="standard"/>
                        
                    </div>
                </div>
                {/* Skills*/}
                <div>
                    <h3>Skills</h3>
                    <div className='d-flex align-items-center justify-content-between p-3 w-100'>
                    <input ref={skillRef} type="text" className='form-control' placeholder='Add Skills' />
                    <Button onClick={()=>addSkills(skillRef.current.value)} variant='text'>ADD</Button>
                    </div>
                    <h5>Added Skills</h5>
                    <div className="d-flex flex-wrap justify-content-between my-3">                
                        {
                            resumeDetails.userSkills?.length>0?
                            resumeDetails.userSkills?.map((skill,index)=>(
                            <Button key={index} varient="contained" className='m-1' >{skill}<IoIosRemoveCircleOutline  onClick={()=>removeSkill(skill) }/></Button>
                            ))
                            :
                            <p className='fw-bolder'>No Skill are added yest</p>
                        }
                    </div>

                </div>
                {/* Summary */}
                <div>
                    <h3>Summary</h3>
                    <div className='p-3 row'>
                    
                        <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" variant="standard" multiline rows={6} defaultValue={'Passionate MEAN Stack Developer skilled in building dynamic web applications using MongoDB, Express.js, Angular, and Node.js. Experienced in creating responsive UIs, RESTful APIs, and managing databases to deliver efficient full-stack solutions.'} ></TextField>
                    </div>
                </div>
                {/* button for update */}
                <div className="">
                    <button onClick={handleResumeUpdate} className='btn btn-warning text-light'>Update</button>
                </div>
            </Box>
            </Box>
      </Modal>
    </div>
  )
}


export default Edit