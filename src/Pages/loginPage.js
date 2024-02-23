import {  useState } from 'react'
import LoginComponent from '../Components/loginComponent'

import { useNavigate } from 'react-router-dom'
const LoginPage = () => {

    const [component , setComponent] = useState('login')

    const Navigate = useNavigate();

    const handleOnclick = (compo) => {
            setComponent(compo);
            Navigate('/register')
    }
    return (
        <div className='back'>
            <div className='logincompo' style={{width: '600px', padding: '70px'}}>

                <div className='btnContainer'>
                <button style={{backgroundColor: '#026D3A'}} onClick={() => {setComponent('login')}} className='loginBtn2'>Login</button>
                <button onClick = {() => {handleOnclick('register')}}className='loginBtn2'>Register</button>
                </div>
                <LoginComponent/>
            </div>
        </div>
    )
}
export default LoginPage