import React from 'react'
// import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
const F3 = () => {
    var data=[
        {name:"Sameo",age:20,place:"Koratty",phoneno:"33562442"},
        {name:"Albin",age:34,place:"Chalakudy",phonrno:"6632345"}
             ]
  return (
    <div>
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
                {data.map((val,i)=>{
                return<TableRow>
                    <TableCell key={i}>{val.name}</TableCell>
                    <TableCell key={i}>{val.age}</TableCell>
                    <TableCell key={i}>{val.place}</TableCell>
                    <TableCell key={i}>{val.phoneno}</TableCell>
                </TableRow>
                })}
            </TableBody>
        </Table>
      </TableContainer>
</div>
      
    
  )
}

export default F3
