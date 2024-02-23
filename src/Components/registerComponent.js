import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
const RegisterComponent = () => {
    const Navigate = useNavigate()

    return (
       <div className='back'>
       <div className='logincompo' style={{width: '600px', padding: '70px'}}>

           <div className='btnContainer'>
           <button onClick={() => {Navigate('/login')}} className='loginBtn2'>Login</button>
           <button style={{backgroundColor: '#026D3A'}}className='loginBtn2'>Register</button>
           </div>
           <>
        <div className='btnContainer'><text><b>Register with Loose Skins.com</b></text></div>
        
        <div className='fieldsContainer'>
        <div  className='btnContainer'>
        <TextField style={{width: '50%'}}
          required
          id="outlined-required"
          label="First Name"
        />
        <TextField style={{width: '50%'}}
          required
          id="outlined-required"
          label="Last Name"
        />
        </div>
        <div  className='btnContainer'>
        <TextField style={{width: '100%'}}
          required
          id="outlined-required"
          label="Email id"
        />
        </div>
        <div  className='btnContainer'>
        <TextField style={{width: '100%'}}
          required
          id="outlined-required"
          label="Phone Number"
        />
        </div>
        <div  className='btnContainer'>
        <TextField style={{width: '100%'}}
          required
          id="outlined-required"
          label="Enter New Password"
        />
        </div>
        <div  className='btnContainer'>
        <TextField style={{width: '100%'}}
          required
          id="outlined-required"
          label="Confirm Password"
        />
        </div>

        </div>
        <div className='btnContainer'>
        <button style={{ width: '100%', borderRadius: '5px', height: '75%', fontWeight: 550, backgroundColor: '#D32F2F', color: 'white' }}>Continue</button>
    </div></>
       </div>
   </div>
    )
  }
  export default RegisterComponent