

import { setEndingIndex, setpropertiesData } from '../Redux/reducer';
import { PiHourglassMediumFill } from 'react-icons/pi';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const SideNavbar = () => {
  return (
    <div className='side_Navbar'>
        
<Accordion  style={{border: '0px', boxShadow: 'none'}}>
<AccordionSummary  style={{border: '0px'}}
  
  aria-controls="panel1a-content"
  id="panel1a-header"
>
  <div style={{fontSize: '14px', display: 'flex' , alignItems: 'center' }}><h4 >Filters</h4>
  <h7  style={{color: 'blue', fontWeight: 'bold',position: 'absolute', right: 10}}>
    Clear All
  </h7>
  </div>
  
</AccordionSummary>
</Accordion>
<Accordion defaultExpanded = {true} style={{border: '0px', boxShadow: 'none'}} >
<AccordionSummary
  expandIcon={<ExpandMoreIcon style={{fontSize: '20px', color : 'black'}} />}
  aria-controls="panel1a-content"
  id="panel1a-header"
>
  <Typography style={{fontSize: '18px', color : 'grey'}}>Colors</Typography>
</AccordionSummary>
<AccordionDetails>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
    {[{name : 'black' , color : '#21130d'},{name : 'navyBlue' ,color :  '#063970'}, {name : 'white', color : 'white'  },{name :'grey' , color : '#808080'}].map((item,idx) => (
        <div className='sideBarOptions' key={idx} style={{height: '30px', width: '30px', backgroundColor: `${item.color}`, border: '1px solid grey', borderRadius: '5px', margin: '2px'}}></div>
    ))}
    </div>
  </AccordionDetails>
</Accordion>
<Accordion style={{border: '0px', boxShadow: 'none'}}>
<AccordionSummary
  expandIcon={<ExpandMoreIcon style={{fontSize: '20px', color : 'black'}} />}
  aria-controls="panel2a-content"
  id="panel2a-header"
>
  <Typography style={{fontSize: '18px', color : 'grey'}}>Sizes</Typography>

</AccordionSummary>
<AccordionDetails>
  {['XS','S','M','L','XL','XXL'].map((item,idx) => (
    <li className='sideBarOptions' key={idx}>{item}</li>
  ))}
</AccordionDetails>
</Accordion>
<Accordion style={{border: '0px', boxShadow: 'none'}}>
<AccordionSummary
  expandIcon={<ExpandMoreIcon style={{fontSize: '20px', color : 'black'}} />}
  aria-controls="panel3a-content"
  id="panel3a-header"
>
  <Typography style={{fontSize: '18px', color : 'grey'}}>
    Discounts
  </Typography>
</AccordionSummary>
<AccordionDetails>
  {['10%','20%','30%','40%','50%','60%'].map((item,idx) => (
    <li className='sideBarOptions' key={idx}>{item}</li>
  ))}
</AccordionDetails>
</Accordion>
<Accordion style={{border: '0px', boxShadow: 'none'}}>
<AccordionSummary
  expandIcon={<ExpandMoreIcon style={{fontSize: '20px', color : 'black'}} />}
  aria-controls="panel3a-content"
  id="panel3a-header"
>
  <Typography style={{fontSize: '18px', color : 'grey'}}>
    Ratings
  </Typography>
</AccordionSummary>
<AccordionDetails>
  {['5','4','3','2','1'].map((item,idx) => (
    <li className='sideBarOptions' key={idx}>{item} star rating</li>
  ))}
</AccordionDetails>
</Accordion>
<Accordion defaultExpanded = {true} style={{border: '0px', boxShadow: 'none'}}>
<AccordionSummary
  expandIcon={<ExpandMoreIcon style={{fontSize: '20px', color : 'black'}} />}
  aria-controls="panel3a-content"
  id="panel3a-header"
>
  <Typography style={{fontSize: '18px', color : 'grey'}}>
    Price
  </Typography>
</AccordionSummary>
<AccordionDetails>
  {[
    {start : 149 , end : 199}, 
    {start : 201 , end : 499}, 
    {start : 501 , end : 699}, 
    {start : 699 , end : 999}].map((item,idx) => (
    <li className='sideBarOptions' key={idx}>From ₹{item.start} To ₹{item.end}</li>
  ))}
</AccordionDetails>
</Accordion>
<Accordion style={{border: '0px', boxShadow: 'none'}}>
<AccordionSummary
  expandIcon={<ExpandMoreIcon style={{fontSize: '20px', color : 'black' }} />}
  aria-controls="panel3a-content"
  id="panel3a-header"
>
  <Typography style={{fontSize: '18px', color : 'grey'}}>
    Sort by
  </Typography>
</AccordionSummary>
<AccordionDetails>
  {['All products','Trending right now','price: Low-High','price: High-Low '].map((item,idx) => (
    <li className='sideBarOptions' key={idx}>{item}</li>
  ))}
</AccordionDetails>
</Accordion>
</div>
  )
}
export default SideNavbar