import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AdminNavComponent from "./AdminNavComponent";
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider, TextField } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const AdminGetOrders = () => {
  const ordersData = [
    { userName: 'User A', orderPrice: '10', orderStatus: 'Delivered', PaymentMethod: 'UPI', orderDate: '05-10-2024' },
    { userName: 'User B', orderPrice: '20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '05-10-2024' },
    { userName: 'User A', orderPrice: '10', orderStatus: 'Delivered', PaymentMethod: 'UPI', orderDate: '05-10-2024' },
    { userName: 'User B', orderPrice: '20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '05-10-2024' },
    { userName: 'User A', orderPrice: '10', orderStatus: 'Delivered', PaymentMethod: 'UPI', orderDate: '05-10-2024' },
    { userName: 'User B', orderPrice: '20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '05-10-2025' },
    { userName: 'User B', orderPrice: '20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '05-11-2024' },
    { userName: 'User B', orderPrice: '20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '06-10-2024' },
    { userName: 'User B', orderPrice: '20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '07-10-2024' },
    { userName: 'User B', orderPrice: '20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '08-10-2024' },
    { userName: 'User B', orderPrice: '20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '09-10-2024' },
    { userName: 'User B', orderPrice: '20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '10-10-2024' },
    // Add more rows based on your data
  ]
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

  const [filters, setFilters] = React.useState({ userName: '', orderPrice: '', orderStatus: '', PaymentMethod: '', orderDate: '' });

  const [filteredOrders, setFilteredOrders] = React.useState([]);


  const handleChange = (event) => {
    setFilters({ ...filters, orderStatus: event.target.value })
    console.log(filters)
  };

  const handlePaymentFilter = (event) => {
    setFilters({ ...filters, PaymentMethod: event.target.value })
  }

  const matchOrderData = (searchedOrderDate) => {
    const year = searchedOrderDate.split('-')[0];
    console.log(year)
    const month = searchedOrderDate.split('-')[1];
    console.log(month)
    const date = searchedOrderDate.split('-')[2];
    console.log(date)

    const filtered_orders = ordersData.filter((order) => {
      const YEAR = order.orderDate.split('-')[2]
      const MONTH = order.orderDate.split('-')[1]
      const DATE = order.orderDate.split('-')[0]
      if (YEAR == year && MONTH == month && date == DATE) {
        return true;
      } else {
        return false;
      }

    })
    return (filtered_orders);
  }

  const filterOrders = () => {

    //filter by date 
    if (filters.orderDate !== '' && filters.PaymentMethod == '' && filters.orderPrice == '' && filters.orderStatus == '' && filters.userName == '') {
      const FilteredOrders = matchOrderData(filters.orderDate);
      setFilteredOrders(FilteredOrders);
    }
    // filter by User Name
    else if (filters.orderDate == '' && filters.PaymentMethod == '' && filters.orderPrice == '' && filters.orderStatus == '' && filters.userName != '') {
      const FilteredOrders = ordersData.filter((order) => order.userName.toLowerCase().includes(filters.userName.toLowerCase()));
      console.log(FilteredOrders);
      setFilteredOrders(FilteredOrders);
    }
    // filter by Order Amount

    else if (filters.orderDate == '' && filters.PaymentMethod == '' && filters.orderPrice != '' && filters.orderStatus == '' && filters.userName == '') {
      const FilteredOrders = ordersData.filter((order) => order.orderPrice === filters.orderPrice);
      setFilteredOrders(FilteredOrders);
    }
    // filter by order status
    else if (filters.orderDate == '' && filters.PaymentMethod == '' && filters.orderPrice == '' && filters.orderStatus != '' && filters.userName == '') {
      const FilteredOrders = ordersData.filter((order) => order.orderStatus === filters.orderStatus);
      console.log(FilteredOrders)
      setFilteredOrders(FilteredOrders);
    }
    // filter by payment method
    else if (filters.orderDate == '' && filters.PaymentMethod != '' && filters.orderPrice == '' && filters.orderStatus == '' && filters.userName == '') {
      const FilteredOrders = ordersData.filter((order) => order.PaymentMethod === filters.PaymentMethod);
      setFilteredOrders(FilteredOrders);
    }
    // filter by payment method and user name
    else if (filters.orderDate == '' && filters.PaymentMethod != '' && filters.orderPrice == '' && filters.orderStatus == '' && filters.userName != '') {
      const FilteredOrders = ordersData.filter((order) => order.PaymentMethod === filters.PaymentMethod && order.userName.toLowerCase().includes(filters.userName.toLowerCase()));
      setFilteredOrders(FilteredOrders);
    }
    // filter by payment method and Order status
    else if (filters.orderDate == '' && filters.PaymentMethod != '' && filters.orderPrice == '' && filters.orderStatus != '' && filters.userName == '') {
      const FilteredOrders = ordersData.filter((order) => order.PaymentMethod === filters.PaymentMethod && order.orderStatus === filters.orderStatus);
      setFilteredOrders(FilteredOrders);
    }

    // filter by payment method and Date
    else if (filters.orderDate != '' && filters.PaymentMethod != '' && filters.orderPrice == '' && filters.orderStatus == '' && filters.userName == '') {
      const FilteredOrdersByPaymentMethod = ordersData.filter((order) => order.PaymentMethod === filters.PaymentMethod)
      const FilteredOrdersByDate = matchOrderData(filters.orderDate)
      const finalData = FilteredOrdersByPaymentMethod.filter((order) => FilteredOrdersByDate.includes(order))
      setFilteredOrders(finalData);
    }
    // userName and orderStatus
    else if (filters.orderDate == '' && filters.PaymentMethod == '' && filters.orderPrice == '' && filters.orderStatus != '' && filters.userName != '') {
      const FilteredOrders = ordersData.filter((order) => order.userName == filters.userName && order.orderStatus === filters.orderStatus)
      setFilteredOrders(FilteredOrders);
    }
    // userName and Date
    else if (filters.orderDate != '' && filters.PaymentMethod == '' && filters.orderPrice == '' && filters.orderStatus == '' && filters.userName != '') {
      const FilteredOrdersByuserName = ordersData.filter((order) => order.userName === filters.userName)
      const FilteredOrdersByDate = matchOrderData(filters.orderDate)
      const finalData = FilteredOrdersByuserName.filter((order) => FilteredOrdersByDate.includes(order))
      setFilteredOrders(finalData);
    }
    // order Status and Date
    else if (filters.orderDate != '' && filters.PaymentMethod == '' && filters.orderPrice == '' && filters.orderStatus != '' && filters.userName == '') {
      const FilteredOrdersByOrderStatus = ordersData.filter((order) => order.orderStatus === filters.orderStatus)
      const FilteredOrdersByDate = matchOrderData(filters.orderDate)
      const finalData = FilteredOrdersByOrderStatus.filter((order) => FilteredOrdersByDate.includes(order))
      setFilteredOrders(finalData);
    }

    else {
      setFilteredOrders([])
    }
  }

  const handleReset = () => {
    setFilters({ userName: '', orderPrice: '', orderStatus: '', PaymentMethod: '', orderDate: '' })

  }

  React.useEffect(() => {
    filterOrders()
    console.log(filters)
  }, [filters])

  return (
    <div style={{ display: 'flex' }}>
      <AdminNavComponent />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', height: '592px' }}>
        <TableContainer style={{ overflow: 'scroll', height: '600px' }} component={Paper}>
          <Table>
            <TableHead style={{ position: 'sticky', top: 0, backgroundColor: 'rgba(94, 23, 235, 0.8)' }}>
              <TableRow >
                <TableCell align='center'>
                  <ThemeProvider theme={theme}>
                    <TextField className='textFields' sx={{minWidth: 80 }} onChange={(e) => {
                      setFilters({ ...filters, userName: e.target.value })
                    }} style={{ width: '98%' }}
                      id="outlined-required"
                      label="User Name"
                      value={filters.userName}
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
                    <TextField className='textFields' sx={{minWidth: 80 }} onChange={(e) => {
                      setFilters({ ...filters, orderPrice: e.target.value })
                    }} style={{ width: '98%', color: 'white' }}
                      id="outlined-required"
                      label="Order Amount"
                      value={filters.orderPrice}
                      type='number'
                      color='error'
                      InputLabelProps={{
                        style: { color: 'white' }, // Change the label color here
                      }}
                    />
                  </ThemeProvider>
                </TableCell>
                <TableCell align="center">
                  <ThemeProvider theme={theme}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel style={{ color: 'white' }} id="demo-simple-select-label">Order Status</InputLabel>
                        <Select style={{ color: 'white' }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={filters.orderStatus}
                          label="Age"
                          onChange={handleChange}
                          color='error'
                        >
                          <MenuItem value={"Delivered"}>Delivered</MenuItem>
                          <MenuItem value={"Shipped"}>Shipped</MenuItem>
                          <MenuItem value={"Cancelled"}>Cancelled</MenuItem>
                          <MenuItem value={"Returned"}>Returned</MenuItem>
                          <MenuItem value={"Ready to Ship"}>Ready to Ship</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </ThemeProvider>
                </TableCell>
                <TableCell align="center">
                  <ThemeProvider theme={theme}>
                    <Box sx={{ minWidth: 120 }} >
                      <FormControl fullWidth>
                        <InputLabel style={{ color: 'white' }} id="demo-simple-select-label">Payment Method</InputLabel>
                        <Select style={{ color: 'white' }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={filters.PaymentMethod}
                          label="Age"
                          onChange={handlePaymentFilter}
                          color='error'
                        >
                          <MenuItem value={"UPI"}>UPI</MenuItem>
                          <MenuItem value={"Credit Card"}>Credit Card</MenuItem>
                          <MenuItem value={"Other Cards"}>Other Cards</MenuItem>
                          <MenuItem value={"COD"}>C.O.D.</MenuItem>
                          <MenuItem value={"Net Banking"}>Net Banking</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </ThemeProvider>
                </TableCell>
                <TableCell align="center"><input value={filters.orderDate}
                  style={{ backgroundColor: 'rgba(94, 23, 235, 0.2)', padding: '5px', height: '58px', border: '1px solid white', borderRadius: '4px', color: 'white' }} type='date' onChange={(e) => { { setFilters({ ...filters, orderDate: e.target.value }) } }}></input></TableCell>
                <TableCell style={{ color: 'white', fontSize: '15px' }} align="center">Order Details</TableCell>

                {/* Add more header cells as needed */}

              </TableRow>
              <button onClick={() => {
                handleReset()
              }} style={{ position: 'absolute', display: 'flex', right: 10, top: 0, fontSize: '12px', backgroundColor: 'green', color: 'white', fontWeight: 'bold', border: '1px dashed black', borderRadius: '4px', margin: '3px', margincenter: '10px' }}>Reset Filters</button>
            </TableHead>
            <TableBody>
              {/* Replace this sample data with your actual data */}
              {(filteredOrders.length !== 0 ? filteredOrders : ordersData).map((row, index) => (
                <TableRow key={index}>
                  <TableCell align='center' component="th" scope="row">
                    {row.userName}
                  </TableCell>
                  <TableCell align="center">${row.orderPrice}</TableCell>
                  <TableCell align="center">{row.orderStatus}</TableCell>
                  <TableCell align="center">{row.PaymentMethod}</TableCell>
                  <TableCell align="center">{row.orderDate}</TableCell>
                  <TableCell align="center"><Link to={'/admin/OrderDetails'} style={{ color: 'green', borderBottom: '1px solid green' }}>Details</Link></TableCell>
                  {/* Add more cells for each row based on your data */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
export default AdminGetOrders