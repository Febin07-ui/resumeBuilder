import React, { useEffect, useState } from 'react'

import Preview from '../components/Preview'
import { Link, useParams } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI';
import { GoDownload } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import Edit from '../components/Edit';


function ViewResume() {
  const {id} = useParams()
  console.log(id);
  const [resume,setResume] = useState({})

  useEffect(()=>{
    getResumeDetails()
  })

  const getResumeDetails = async ()=>{
    const result = await getResumeAPI(id)
    if(result.status==200){
      setResume(result.data)
    }
  }
  return (
    <div>
        
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-6 ">
                        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                          <button className='btn fs-4 text-primary'><GoDownload /></button>
                          <Edit resumeDetails={resume} setResumeDetails={setResume} />
                          <Link to={'/history'} className='btn fs-4 text-primary'><GoHistory /></Link>
                          <Link to={'/resume'} className='btn fs-4 text-success'><IoIosArrowBack /></Link>
                        </div>
                        <Preview resumeDetails={resume}/>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        
    </div>
  )
}

export default ViewResume