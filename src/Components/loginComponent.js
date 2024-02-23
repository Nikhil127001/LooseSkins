import { TextField } from "@mui/material"
import image from '../images/looseskins.gif'
import '../Home.css';
import { useState } from "react";
const LoginComponent = () => {
  const [count , setCount] = useState(15);
  const [otpGenerated , setOtpGenerated] = useState(false);

  const handleClick = () => {
    setOtpGenerated(true);
    let timeLimit = 15;
    const interval  = setInterval(() => {
      if(timeLimit >= 11){
        timeLimit = timeLimit -1;
      }else{
        timeLimit = "0"+(timeLimit -1);
      }
       setCount(timeLimit);
       if(timeLimit == 0){
        clearInterval(interval);
       }
    },1000)
  }

    return (
      // phone number enter page
        <>
         <div style={{ display: 'flex', width: '100%', height: '70px', alignItems:
      'center', justifyContent: 'center' }}>
                    <img height={'100px'} width={'200px'} src={image}>
                    </img>
                </div>
        <>
        <div className='btnContainer'>
        
          <div style={{display: 'flex', width: '100% ', alignItems: 'center', justifyContent: 'center'}}><b>Log in or sign up with Loose Skins.com</b></div></div>
        <div className='fieldsContainer2'>
        <div  className='btnContainer'>
        <TextField style={{width: '100%'}}
          required
          id="outlined-required"
          label="Enter Phone Number"
        />
        </div>
        </div>
        {otpGenerated && <div className='fieldsContainer'>
     <div  className='btnContainer'>
     <TextField style={{width: '100%'}}
       required
       id="outlined-required"
       label="Enter OTP"
     />
     </div>
     {count == 0 ? <text onClick={handleClick} style={{fontWeight: 550, color : 'blueviolet', cursor: 'pointer'}}>Resend OTP</text>  : <text>Resend OTP in 00:{count}</text>}
     
     <div  className='btnContainer'>
     <TextField style={{width: '100%'}}
       required
       id="outlined-required"
       label="Full Name"
     />
     </div>
     <div  className='btnContainer'>
     <TextField style={{width: '100%'}}
       required
       id="outlined-required"
       label="Email Address"
     />
     </div>
     </div>}
        {
          otpGenerated ? <div className='btnContainer'>
          <button style={{ width: '100%', borderRadius: '5px', height: '50px', fontWeight: 550, backgroundColor: '#D32F2F', color: 'white' }}>Continue</button>
      </div> : <div className='btnContainer'>
        <button onClick={handleClick} style={{ width: '100%', borderRadius: '5px', height: '50px', fontWeight: 550, backgroundColor: '#D32F2F', color: 'white' }}>Generate OTP</button>
    </div>
        }
    </> 
        </>

    )
}
export default LoginComponent