import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import AdminNavComponent from "./AdminNavComponent"
import AlertComponent from '../AlertComponent';
import { useState } from 'react';
const AdminUpdateUser = () => {
  const [show , setShow] = useState(false);
    const [message , setMessage] = useState('');
    const [type , setType] = useState('');

  const deleteUser = (admin) => {
    const result = window.confirm('Are you Sure?');
    if(result){
      setShow(true);
            setMessage('Admin Deleted Successfully');
            setType("success")
    }
  }

  return (
    <div style={{display: 'flex'}}>
    <AdminNavComponent/>
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{position : 'sticky', top : 0 , backgroundColor : 'white'}}>
          <TableRow > 
            <TableCell>First Name</TableCell>
            <TableCell align="center"> Last Name</TableCell>
            <TableCell align="center">EmailId</TableCell>
            <TableCell align="center">Mobile Number</TableCell>
            <TableCell align="center">Edit Admin</TableCell>
           
            {/* Add more header cells as needed */}
          </TableRow>
        </TableHead>
        <TableBody style={ { }} >
          {/* Replace this sample data with your actual data */}
          {[
            { userName: 'User A', orderPrice: '$10', orderStatus: 'Delivered', PaymentMethod : 'UPI',orderDate : '05-10-2024'},
            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod : 'COD',orderDate : '05-10-2024'},
            { userName: 'User A', orderPrice: '$10', orderStatus: 'Delivered', PaymentMethod : 'UPI',orderDate : '05-10-2024'},
            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod : 'COD',orderDate : '05-10-2024'},
            { userName: 'User A', orderPrice: '$10', orderStatus: 'Delivered', PaymentMethod : 'UPI',orderDate : '05-10-2024'},
            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod : 'COD',orderDate : '05-10-2024'},
            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod : 'COD',orderDate : '05-10-2024'},
            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod : 'COD',orderDate : '05-10-2024'},
            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod : 'COD',orderDate : '05-10-2024'},
            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod : 'COD',orderDate : '05-10-2024'},
            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod : 'COD',orderDate : '05-10-2024'},
            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod : 'COD',orderDate : '05-10-2024'},
            // Add more rows based on your data
          ].map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                Rahul
              </TableCell>
              <TableCell align="center">Khatri</TableCell>
              <TableCell align="center">rahulkhatri@gmail.com</TableCell>
              <TableCell align="center">9716093074</TableCell>
              <TableCell align="center">
                <Link to={'/admin/EditAdmin'} style={{color: 'green', borderBottom: '1px solid green'}}>Edit</Link>/
                <Link onClick={() => {deleteUser(row)}}  style={{color: 'red', borderBottom: '1px solid green'}}>Delete</Link>
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
export default AdminUpdateUser