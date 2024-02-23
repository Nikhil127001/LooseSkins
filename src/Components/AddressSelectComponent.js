import { Checkbox } from '@mui/material';
import './ComponentStyles/AddressSelectComponent.css';

const AddressSelectComponent = ({checked}) => {
  return (
    <div className='addressSelectOuter'>
      <div className='addressSelectInner'>
        {checked == 'true' ? <p><Checkbox checked  style={{ color: 'green' }} /></p>:<p><Checkbox  style={{ color: 'green' }} /></p>}

        <p style={{ color: 'black' }}> Nikhil Kumar Prajapati</p>
        {' '} {/* Adding a space between the div and text */}
        <p>H NO. 61, Gautam Buddha Nagar, Uttar Pradesh 201301</p>
        <text>Contact Number: <text style={{ color: 'black' }}>9315266743</text></text>
        <p ></p> {/* Adding space between paragraphs */}
      </div>
    </div>

  )
}
export default AddressSelectComponent