import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import * as React from 'react';

import AdminNavComponent from "./AdminNavComponent";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AlertComponent from '../AlertComponent';
import { createTheme, ThemeProvider, TextField } from '@mui/material';
const AdminAllUsersData = () => {
  const [show , setShow] = useState(false);
  const [message , setMessage] = useState('');
  const [type , setType] = useState('');
  const [filters , setFilters] = useState({email : '' , mobileNumber : ''})
  const usersData = [
    { firstName: 'User A', lastName: '$10', email: 'kumarnikhil2111@gmail.com', mobileNumber : '9315266743'},
    { firstName: 'User A', lastName: '$10', email: 'prajapatinikhil1661@gmail.com', mobileNumber : '9325266743'},
    { firstName: 'User A', lastName: '$10', email: 'don@123@gmail.com', mobileNumber : '9315276743'},
    { firstName: 'User A', lastName: '$10', email: 'kumarnikhil2673@gmail.com', mobileNumber : '9315267743'},
    { firstName: 'User A', lastName: '$10', email: 'prajapatinikhil1662@gmail.com', mobileNumber : '9326266743'},
    { firstName: 'User A', lastName: '$10', email: 'jon@123@gmail.com', mobileNumber : '9315269743'},
    { firstName: 'User A', lastName: '$10', email: 'kumarnikhil111@gmail.com', mobileNumber : '9315226743'},
    { firstName: 'User A', lastName: '$10', email: 'prajapatinikhil661@gmail.com', mobileNumber : '9315266743'},
    { firstName: 'User A', lastName: '$10', email: 'don@123456@gmail.com', mobileNumber : '9315266783'},
    { firstName: 'User A', lastName: '$10', email: 'kumarnikhil211@gmail.com', mobileNumber : '9317266743'},
    { firstName: 'User A', lastName: '$10', email: 'prajapatiikhil1661@gmail.com', mobileNumber : '9325366743'},
    { firstName: 'User A', lastName: '$10', email: 'don2@123@gmail.com', mobileNumber : '9315766743'},
    
    // Add more rows based on your data
  ]
  
  const [filteredUser, setFilteredsUser] = React.useState([]);

  const filterUsers = () => {
    if(filters.email != '' && filters.mobileNumber == ''){
      const users = usersData.filter((user) => user.email === filters.email);
      setFilteredsUser(users);
    }else if(filters.mobileNumber != '' && filters.email == ''){
      const users = usersData.filter((user) => user.mobileNumber === filters.mobileNumber);
      setFilteredsUser(users);
    }else{
      setFilteredsUser([]);
    }
  }

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& fieldset': {
              borderColor: 'white', // Change the border color here
            },
          },
        },
      },
    },
  });

  const deleteUser = (user) =>{
    const result = window.confirm('Are You Sure?')
    if(result){
      setShow(true);
            setMessage('User Deleted Successfully');
            setType("success")
    }
  } 

 
  React.useEffect(() => {
    filterUsers()
  },[filters])
   return (
    <div style={{display: 'flex'}}>
    <AdminNavComponent/>
    <TableContainer style={{ overflow: 'scroll', height: '600px' }} component={Paper}>
      <Table>
        <TableHead style={{ position: 'sticky', top: 0, backgroundColor: 'rgba(94, 23, 235, 0.8)' }}>
          <TableRow > 
            <TableCell align='center' style={{ fontSize: '15px', color: 'white' }}>User First Name
            </TableCell>
            <TableCell style={{ fontSize: '15px', color: 'white' }} align="center">User Last Name</TableCell>
            <TableCell align="center">
            <ThemeProvider theme={theme}>
                <TextField onChange={(e) => {
                  setFilters({ ...filters, email: e.target.value })
                }} style={{ width: '98%' }}
                  id="outlined-required"
                  label="Email Id"
                  value={filters.email}
                  type='text'
                  color='error'
                  InputLabelProps={{
                    style: { color: 'white' }, // Change the label color here
                  }}
                />
              </ThemeProvider>
            </TableCell>
            <TableCell align="center">
            <ThemeProvider theme={theme}>
                <TextField onChange={(e) => {
                  setFilters({ ...filters, mobileNumber: e.target.value })
                }} style={{ width: '98%' }}
                  id="outlined-required"
                  label="Mobile Number"
                  value={filters.mobileNumber}
                  type='number'
                  color='error'
                  InputLabelProps={{
                    style: { color: 'white' }, // Change the label color here
                  }}
                />
              </ThemeProvider>
            </TableCell>
            <TableCell style={{ fontSize: '15px', color: 'white' }} align="center">Edit User</TableCell>
           
            {/* Add more header cells as needed */}
          </TableRow>
        </TableHead>
        <TableBody style={ { }} >
          {/* Replace this sample data with your actual data */}
          {(filteredUser.length !== 0 ? filteredUser : usersData).map((row, index) => (
            <TableRow key={index}>
              <TableCell align='center' component="th" scope="row">
                Rahul
              </TableCell>
              <TableCell align="center">Khatri</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.mobileNumber}</TableCell>
              <TableCell align="center"><Link to={'/admin/EditUser'} style={{color: 'green', borderBottom: '1px solid green'}}>Edit</Link>/
              <Link onClick={() => {deleteUser(row)}} style={{color: 'red', borderBottom: '1px solid green'}}>Delete</Link>
              </TableCell>
              {/* Add more cells for each row based on your data */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <AlertComponent 
    show = {show} message = {message}  type = {type} setShow = {setShow}
    />
    
</div>
  )
}
export default AdminAllUsersData