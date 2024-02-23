import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import '../../Home.css'

const AdminNavComponent = () => {

  return (
    <div style={{width: '20%', backgroundColor: '#041E35'}}>
        <h5 style={{color: 'white', padding: '10px'}}>Admin Panel</h5>
        <Accordion  style={{backgroundColor: '#132D44', color : '#BCC4CA'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Products</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <hr/>     
        <li ><Link style={{color: '#BCC4CA'}} to={'/admin/adminGetAllProducts'}>All Products</Link> </li>
        <hr/>
            <li >
            <Link style={{color: '#BCC4CA'}} to={'/admin/createNewProduct'}>Create New Product</Link> </li>     
            <hr/>     
   
           <li > <Link style={{color: '#BCC4CA'}} to={'/admin/adminUpdateProduct'}>Update Product</Link> </li>        
                  
        </AccordionDetails>
      </Accordion>
        <Accordion style={{backgroundColor: '#132D44', color : '#BCC4CA'}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Orders</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <hr/>     

        <li ><Link style={{color: '#BCC4CA'}} to={'/admin/adminGetAllOrders'}>Get All Orders</Link> </li>  
        <hr/>     
      
            <li ><Link  style={{color: '#BCC4CA'}}to={'/admin/adminDeliveredOrders'}>Delivered Orders</Link></li> 
            <hr/>     

            <li ><Link style={{color: '#BCC4CA'}} to={'/admin/adminReturnedOrders'}>Returned orders</Link> </li> 
             
        </AccordionDetails>
      </Accordion>
        <Accordion style={{backgroundColor: '#132D44', color : '#BCC4CA'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Users</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <hr/>     

        <li ><Link style={{color: '#BCC4CA'}} to={'/admin/adminGetAllUsers'}>All Users</Link> </li>   
        <hr/>     
            <li ><Link style={{color: '#BCC4CA'}} to={'/admin/adminUpdateUser'}>Get Admins Data</Link></li> 
            <hr/>     

        </AccordionDetails>
      </Accordion>
        <Accordion style={{backgroundColor: '#132D44', color : '#BCC4CA'}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Insights</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <hr/>     

        <li ><Link style={{color: '#BCC4CA'}} to={'/admin/totalSalesInsights'}>Total Sale Today</Link> </li>  
        <hr/>     
      
            <li ><Link style={{color: '#BCC4CA'}} to={'#'}>Last Week Sales</Link></li> 
            <hr/>     

            <li ><Link style={{color: '#BCC4CA'}} to={'#'}>Last Month Sales</Link> </li> 
        </AccordionDetails>
      </Accordion>
        <Accordion style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#041E35', height: '50px'}} >
        <button style={{backgroundColor: '#BCC4CA'}} className='mailBtn' >Logout</button>
      </Accordion>
   
  </div>
    
  )
}
export default AdminNavComponent