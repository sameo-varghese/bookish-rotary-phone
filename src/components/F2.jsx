import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const F2 = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button  color="inherit"><Link to={'/'}>Login</Link></Button>
          <Button  color="inherit"><Link to={'/s'}>Sign Up</Link></Button>
          <Button  color="inherit"><Link to={'/t'}>Array</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    <br /><br />
    </div>
  )
}

export default F2
