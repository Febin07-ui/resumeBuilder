import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div>
      <h1 className='text-center my-5'>Downloaded Resume History </h1>
      <Link style={{margin:'-80px'}} to={'/resume'} className='float-end me-5 '>Back</Link>
      <Box component="section" className='container-fluid '>
        <div className="row">
          <div className="col-md-4">
            <Paper elevation={3} sx={{my:3,p:3,textAlign:'center'}}>
              <div className='d-flex justify-content-between align-items-center'>
                <h6>Review At : 8/29/25</h6>
                <button className='btn btn-danger mb-2'><MdDelete /></button>
              </div>
              <div className='border rounded p-3'>
                <img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSi0LT5ct1f8gijHCAOA-DVqQBkbzq5IKgw&s" alt="resume" />
              </div>

            </Paper>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default History