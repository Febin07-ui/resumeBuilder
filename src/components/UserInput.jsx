import * as React from 'react';
import { IoMdClose } from "react-icons/io";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { addResumeAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';


const steps = ['Basic Information', 'Contact Details', 'Educational details','WorkExperience', 'Skills & Certification','Review&Submit'];

function UserInput({resumeDetails,setResumeDetails}) {
  console.log(resumeDetails)

  const skillRef = React.useRef()
  const navigate = useNavigate()
  const skillSuggestionArray = ['NODE JS','MONGODB','EXPRESS JS','REACT','ANGULAR','LEADERSHIP','COMMUNICATION','COACHING','POWER BI','MS EXCEL']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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

  const renderSteps = (stepCount) => {
    switch(stepCount){
        case 0 : return(
            <div>
                <h3>Personal Details</h3>
                <div className='row p-3 gap-3'>
                    <TextField value={resumeDetails.userName} onChange={e=>setResumeDetails({...resumeDetails,userName:e.target.value})} id="standard-basic-name" label="Full Name" varient="standard"/>
                    <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic-" label="Job Title" varient="standard"/>
                    <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic" label="Location" varient="standard"/>
                </div>
            </div>
        )
        case 1 : return(
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
        )
        case 2 : return(
            <div>
                <h3>Educational Details</h3>
                <div className='row p-2 gap-3'>
                  <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" varient="standard"/>
                  <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-collage" label="Collage Name" varient="standard"/>
                  <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" varient="standard"/>
                  <TextField value={resumeDetails.passoutYear} onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic-year" label="Year of Passout" varient="standard"/>
                  
                </div>
            </div>
        )
        case 3 : return(
            <div>
                <h3>Proffesional Details</h3>
                <div className='row p-2 gap-3'>
                  <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})} id="standard-basic-job" label="Job of Intenship" varient="standard"/>
                  <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-companny" label="Company Name" varient="standard"/>
                  <TextField value={resumeDetails.cLocation} onChange={e=>setResumeDetails({...resumeDetails,cLocation:e.target.value})} id="standard-basic-location" label="Company Location" varient="standard"/>
                  <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" varient="standard"/>
                  
                </div>
            </div>
        )
        case 4 : return(
            <div>
                <h3>Skills</h3>
                <div className='d-flex align-items-center justify-content-between p-3 w-100'>
                  <input ref={skillRef} type="text" className='form-control' placeholder='Add Skills' />
                  <Button onClick={()=>addSkills(skillRef.current.value)} variant='text'>ADD</Button>
                </div>
                <h5>Suggestions</h5>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  {
                    skillSuggestionArray.map((item,index)=>(
                      <Button onClick={()=>addSkills(item)} key={index} variant='outlined' className='m-2'>{item}</Button>
                    ))
                  }
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
        )
        case 5 : return(
            <div>
                <h3>Summary</h3>
                <div className='p-3 row'>
                
                  <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" varient="standard" multiline rows={6} defaultValue={'Passionate MEAN Stack Developer skilled in building dynamic web applications using MongoDB, Express.js, Angular, and Node.js. Experienced in creating responsive UIs, RESTful APIs, and managing databases to deliver efficient full-stack solutions.'} ></TextField>
                </div>
            </div>
        )
    }
  }

  const handleAddResume = async() => {
    const {userName,jobTitle,location} = resumeDetails
    if(!userName && !jobTitle && !location){
      alert("please fill the form completly ")
    }else{
      //api
      console.log("Api Call");
      try{
        const result = await addResumeAPI(resumeDetails)
        console.log(result)
        if(result.status==201){
          alert("Resume added successfully")
          const {id} = result.data
          navigate(`/resume/${id}/view`)
        }
      }catch(error){
        console.log(error)
      }
    }
     
    //success
  } 

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>


          <Typography sx={{ mt: 2, mb: 1 }}>

                Step {activeStep + 1}
          
          </Typography>

          {/* {render contents according to steps} */}
          <Box>
            {renderSteps(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            {
              activeStep === steps.length - 1 ? 
                <Button onClick={handleAddResume}>Finish</Button>
                : 
                <Button onClick={handleNext}>Next</Button>
                
            }
            
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInput