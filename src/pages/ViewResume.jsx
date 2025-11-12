import React, { useEffect, useState } from 'react'

import Preview from '../components/Preview'
import { Link, useParams } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI';
import { GoDownload } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import Edit from '../components/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import {  } from '../services/allAPI';
import { addHistoryAPI } from '../services/allAPI';


function ViewResume() {
  const {id} = useParams()
  console.log(id);
  const [resume,setResume] = useState({})

  useEffect(()=>{
    getResumeDetails()
  },[])

  const getResumeDetails = async ()=>{
    const result = await getResumeAPI(id)
    if(result.status==200){
      setResume(result.data)
    }
  }

  const handleDownloadResume = async()=>{
    //create pdf
    const doc = new jsPDF();
    const preview = document.getElementById("preview")
    //take screenshot of preview
    const canvas = await html2canvas(preview,{scale:2})
    //convert canvas to image 
    const resumeImg = canvas.toDataURL('image/png')
    console.log(resumeImg)
    //add screenshot to pdf
    const imgWidth = doc.internal.pageSize.getWidth()

    const pageWidth = imgWidth-20 
    const imgHeight = (canvas.height * pageWidth) / canvas.width; 
    doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHeight)
    //download pdf
    doc.save(`resume.pdf`)
    //local time data 
    const localTimeData = new Date()
    console.log(localTimeData)
    const timeStamp = `${localTimeData.toLocaleDateString()},${localTimeData.toLocaleDateString()}`

    try{
      await addHistoryAPI({timeStamp,resumeImg})
    }catch(err){
      console.log(err)
    }

  }
  return (
    <div>
        
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-6 ">
                        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                          <button onClick={handleDownloadResume} className='btn fs-4 text-primary'><GoDownload /></button>
                          <Edit resumeDetails={resume} setResumeDetails={setResume} />
                          <Link to={'/history'} className='btn fs-4 text-primary'><GoHistory /></Link>
                          <Link to={'/resume'} className='btn fs-4 text-success'><IoIosArrowBack /></Link>
                        </div>
                        <div id="preview">
                          <Preview resumeDetails={resume}/>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        
    </div>
  )
}

export default ViewResume