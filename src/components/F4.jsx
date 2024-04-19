import { Button, TableBody, TextField } from '@mui/material'
import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import React, { useState } from 'react'

const F4 = () => {
    var [input,setInputs] = useState([]);
    var [data,setData] = useState([])
    const inputHandler =(e) =>{
        setInputs({...input,[e.target.name]:e.target.value});
        console.log(input);
    }
    const addHandler=()=>{
        console.log("Clicked")
        setData((data)=>[...data,input])
        console.log(data)
    }

  return (
    <div>
      <TextField label='Name'  name='sname'variant='outlined' onChange={inputHandler}></TextField>
      <br /><br />
      <TextField label='Age' name='age' variant='outlined' onChange={inputHandler}></TextField>
      <br/><br />
      <TextField label='Place' name='place'variant='outlined' onChange={inputHandler}></TextField>
      <br /><br />
      <TextField label='Phone No' name='phoneno'variant='outlined' onChange={inputHandler}></TextField>
      <br /><br />
      <Button color='success' variant='outlined' onClick={addHandler}> Add</Button>
      <br /><br />
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Name
                    </TableCell>
                    <TableCell>
                        Age
                    </TableCell>
                    <TableCell>
                        Place
                    </TableCell>
                    <TableCell>
                        Phone No
                    </TableCell>
                </TableRow>
            </TableHead>
           <TableBody>
            {data.map ((val,i)=>{
                return <TableRow key={i}>
                    <TableCell>{val.sname}</TableCell>
                    <TableCell>{val.age}</TableCell>
                    <TableCell>{val.place}</TableCell>
                    <TableCell>{val.phoneno}</TableCell>
                </TableRow>
            })}
           </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default F4
