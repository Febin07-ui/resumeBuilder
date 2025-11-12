import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { MdDelete } from "react-icons/md";
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI';


function History() {

  const [allHistory,setAllHistory] = useState([])

  console.log(allHistory)

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory = async ()=>{
    const result = await getHistoryAPI()
    if(result.status === 200){
      setAllHistory(result.data)
    }
  }

  const deleteHistory = async (id)=>{
    try{
      await removeHistoryAPI(id)
      getHistory()
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <h1 className='text-center my-5'>Downloaded Resume History </h1>
      <Link style={{margin:'-80px'}} to={'/resume'} className='float-end me-5 '>Back</Link>
      <Box component="section" className='container-fluid '>
        <div className="row">
          {
            allHistory.length>0?
              allHistory.map(item=>(
                      <div key={item?.id} className="col-md-4">
                        <Paper elevation={3} sx={{my:3,p:3,textAlign:'center'}}>
                        <div className='d-flex justify-content-between align-items-center'>
                        <h6>Review At : {item?.timeStamp}</h6>
                        <button onClick={()=>deleteHistory(item?.id)} className='btn btn-danger mb-2'><MdDelete /></button>
                        </div>
                        <div className='border rounded p-3'>
                        <img width={'200px'} height={'200px'} src={item?.resumeImg} alt="resume" />
                        </div>
                        </Paper>
                      </div>
              ))
            :
            <p>No Resume are Downloaded Yet!!!</p>
          }
        </div>
      </Box>
    </div>
  )
}

export default History