import { useState } from "react"
import AdminNavComponent from "./AdminNavComponent"
import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import AlertComponent from "../AlertComponent"

const AdminEditUserPage = () => {
    const [user , setUser] = useState({firstName : '' , lastName : ''})
    const navigate = useNavigate();
    const [show , setShow] = useState(false);
    const [message , setMessage] = useState('');
    const [type , setType] = useState('');

    const handleSaveUser = () => {
        if(user.firstName == '' && user.lastName == ''){
            setShow(true);
            setMessage('At least one field should be filled');
            setType("error")
        }else{
            console.log(user);
            setShow(true);
            setMessage('User Updated Successfully');
            setType("success")
            setTimeout(() => {
                navigate('/admin/adminGetAllUsers')
          },2000)
        }
    }
  return (
    <div style={{display: 'flex'}}>
    <AdminNavComponent/>
    <div style={{ display : 'flex',width : '100%' , height : '500px' , backgroundColor: '#F2F6FC', alignItems : 'center' , justifyContent : 'center'}}>
        <div style={{height : '90%' , width : '500px' , backgroundColor : 'white', borderRadius : '4px', boxShadow : '0 2px 4px rgba(0,0,0,0.6)', padding : '15px'}}>
            <h3>Edit User</h3>
            <TextField  onChange={(e) =>{setUser({...user , firstName : e.target.value})}} style={{ width: '98%',marginTop: '12px' }}
                id="outlined-required"
                label="First Name"
                defaultValue=""
              />
              <TextField  onChange={(e) =>{setUser({...user , lastName : e.target.value})}} style={{ width: '98%', marginTop: '12px'}}
                id="outlined-required"
                label="Last Name"
                defaultValue=""
              />
              <TextField  onChange={(e) =>{setUser({...user , lastName : e.target.value})}} style={{ width: '98%', marginTop: '12px'}}
                id="outlined-required"
                label="Email Id"
                defaultValue=""
                disabled
              />
              <TextField  onChange={(e) =>{setUser({...user , lastName : e.target.value})}} style={{ width: '98%', marginTop: '12px'}}
                id="outlined-required"
                label="Mobile Number"
                defaultValue=""
                disabled
              />
              <button onClick={() => {handleSaveUser()}} className="addtocartBtn" type="button" style={{marginTop: '50px' , width : '100%'}} >
                Save Changes
              </button>
        </div>
    </div>
    <AlertComponent 
    show = {show} message = {message}  type = {type} setShow = {setShow}
    />
    </div>
  )
}
export default AdminEditUserPage