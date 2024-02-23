import AdminNavComponent from "./AdminNavComponent";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from "react-router-dom";
import image from '../../images/white.jpg';
import { MdLocalShipping } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";



const AdminOrderDetailsPage = () => {
    return (
        <div style={{ display: 'flex' }}>
            <AdminNavComponent />
            <div style={{ width: '100%', display: 'flex', height: '620px', flexDirection: 'column', backgroundColor: '#F2F6FC' }}>

                <div style={{ display: 'flex', width: '100%', height: '480px', backgroundColor: '#F2F6FC' }}>
                    <div className="OrderDetails" style={{ width: '70%', backgroundColor: 'white', margin: '15px', borderRadius: '10px', padding: '10px' }}>

                        <div  style={{
                     color : 'black',
                    marginBottom: '5px', 
                    height: '70px',
                    padding: '5px', borderBottom: '1px solid black'
                }}>
                        <h6>Order Id : #654hu46474b</h6>
                        <text style={{fontSize: '13px' , fontWeight:'bold'}}>2 July, 2023  9:00 AM</text>
                        </div>

                        <div className="OrderItems" style={{ width: '100%', height: '280px', overflow: 'scroll' }}>
                            <TableContainer component={Paper}>
                                <Table style={{fontSize : '12px'}}>
                                    <TableHead style={{ position: 'sticky', top: 0, backgroundColor: 'white' }}>
                                        <TableRow  >
                                            <TableCell style={{fontWeight: 'bolder'}}  align="center" >S. No.</TableCell>
                                            <TableCell style={{fontWeight: 'bolder'}} align="center">Image</TableCell>
                                            <TableCell style={{fontWeight: 'bolder'}} align="center">Name</TableCell>
                                            <TableCell style={{fontWeight: 'bolder'}}  align="center">Rate</TableCell>
                                            <TableCell style={{fontWeight: 'bolder'}} align="center" >Quantity</TableCell>
                                            <TableCell style={{fontWeight: 'bolder'}} align="center" >Amount</TableCell>

                                            {/* Add more header cells as needed */}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {/* Replace this sample data with your actual data */}
                                        {[
                                            { userName: 'User A', orderPrice: '$10', orderStatus: 'Delivered', PaymentMethod: 'UPI', orderDate: '05-10-2024' },
                                            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '05-10-2024' },
                                            { userName: 'User A', orderPrice: '$10', orderStatus: 'Delivered', PaymentMethod: 'UPI', orderDate: '05-10-2024' },
                                            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '05-10-2024' },
                                            { userName: 'User A', orderPrice: '$10', orderStatus: 'Delivered', PaymentMethod: 'UPI', orderDate: '05-10-2024' },
                                            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '05-10-2024' },
                                            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '05-10-2024' },
                                            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '05-10-2024' },
                                            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '05-10-2024' },
                                            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '05-10-2024' },
                                            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '05-10-2024' },
                                            { userName: 'User B', orderPrice: '$20', orderStatus: 'Shipped', PaymentMethod: 'COD', orderDate: '05-10-2024' },
                                            // Add more rows based on your data
                                        ].map((row, index) => (
                                            <TableRow key={index}>
                                                <TableCell align="center" component="th" scope="row">
                                                    {index+1}
                                                </TableCell>
                                                <TableCell align="center"><img src={image} height={'100px'} width={'70px'} ></img></TableCell>
                                                <TableCell align="center">White T-shirt Plain</TableCell>
                                                <TableCell align="center">$10</TableCell>
                                                <TableCell align="center">3</TableCell>
                                                <TableCell align="center">$30</TableCell>
                                                {/* Add more cells for each row based on your data */}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <div style={{
                   
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'flex-end',borderTop: '1px solid black'
                }}>
                    <div style={{width : '385px' ,  height: '100%'}}>
                    <table style={ { fontSize : '14px', fontWeight : 'bolder'}}>
                        <tr style={{borderBottom : '1px solid #E0E0E0'}}>
                            <td style={{width : '340px'}}>
                                Total
                            </td>
                            <td>
                                $100
                            </td>
                        </tr>
                        <tr style={{borderBottom : '1px solid #E0E0E0'}}>
                            <td>
                                Shipping
                            </td>
                            <td>
                                $10
                            </td>
                        </tr>
                        <tr style={{borderBottom : '1px solid #E0E0E0'}}>
                            <td>
                                Order Total
                            </td>
                            <td>
                                $110
                            </td>
                        </tr>
                    </table>
                    </div>


                </div>

                    </div>
                    <div className="OrderDetails" style={{
                        width: '30%', backgroundColor: 'white', color : 'black', marginTop: '15px',
                        marginLeft: '0px',
                        marginBottom: '15px', borderRadius: '10px',
                        marginRight: '15px',
                        padding: '15px', lineHeight: '30px'
                    }}>
                        <h6>Customer Details : </h6>

                       <li> <text style={{fontWeight: 'bold'}}>Name :</text> Nikhil Kumar Prajapati</li>
                       <li><text style={{fontWeight: 'bold'}}>Billing Address :</text> Village Nithari sector- 31 , Noida, UttarPradesh 201301</li>
                       <li><text style={{fontWeight: 'bold'}}>Shipping Address :</text> Village Nithari sector- 31 , Noida, UttarPradesh 201301</li>
                       <li><text style={{fontWeight: 'bold'}}>Mode Of Payment :</text> Credit Card</li>
                       <li><text style={{fontWeight: 'bold'}}>Mobile Number :</text> +91 9315266743</li>
                       <li><text style={{fontWeight: 'bold'}}>Email-Id :</text> Kumarnikhil2111@gmail.com</li>
                      

                    </div>

                </div>
                <div className="OrderDetails" style={{
                    backgroundColor: 'white', marginLeft: '15px',
                    marginRight: '15px',
                    marginBottom: '15px',
                    borderRadius: '10px',
                    height: '120px',
                    display: 'flex'
                    , justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{display : 'flex' , flexDirection : 'column', alignItems: 'center' , justifyContent : 'center'}}>
                    <h6>Payment/COD</h6>
                    <MdPayments style={{fontSize: '60px', color: '#5E17EB'}}/> 
                    <input checked style = {{width : '20px' , height : '20px'}}type="checkbox"></input>
                    </div>

                    <h1>................</h1>
                    <div style={{display : 'flex' , flexDirection : 'column', alignItems: 'center' , justifyContent : 'center'}}>
                    <h6>Packed</h6>
                    <FaBox style={{fontSize: '60px', padding: '10px',color: '#5E17EB'}}/> 
                    <input checked style = {{width : '20px' , height : '20px'}}type="checkbox"></input>
                    </div>
                    <h1>................</h1>
                    <div style={{display : 'flex' , flexDirection : 'column', alignItems: 'center' , justifyContent : 'center'}}>
                    <h6>Shipped</h6>
                    <MdLocalShipping style={{fontSize: '60px',color: '#5E17EB'}}/> 
                    <input checked style = {{width : '20px' , height : '20px'}}type="checkbox"></input>
                    </div>
                    <h1>................</h1>
                    <div style={{display : 'flex' , flexDirection : 'column', alignItems: 'center' , justifyContent : 'center'}}>
                    <h6>Delivered</h6>
                    <MdCheckCircle style={{fontSize: '60px',color: '#5E17EB'}}/> 
                    <input checked style = {{width : '20px' , height : '20px'}}type="checkbox"></input>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AdminOrderDetailsPage