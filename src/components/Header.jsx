import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { Link } from 'react-router-dom'
function Header() {
  const projectInfo = "Our Resume Builder app is a simple and user-friendly application designed to help users create professional resumes quickly and efficiently. Users can enter their personal details, education, work experience, and skills, choose from multiple templates, preview their resume in real-time, and download it as a PDF."
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:'purple'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <img width={'30px'} src="user-profile.png" alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'>rBuilder</Link> 
          </Typography>
          <Tooltip title={projectInfo}>
            <Button color="inherit">Login</Button>
          </Tooltip>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header