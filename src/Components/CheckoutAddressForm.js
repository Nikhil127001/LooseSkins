import './ComponentStyles/checkoutAddressForm.css';
import AddressAddButton from './AddressAddButton';
import CustomTextFieldComponent from './CustomTextFieldComponent';
import AddressSelectComponent from './AddressSelectComponent';

const CheckoutAddressForm = () => {

    const onpress =() => {
        alert('address added')
    }

    const handleOnChange = () => {

    }
  return (
    <div className="checkoutform">
        <div>
            <ul>
                <li style= {{fontSize: '20px', fontWeight: 600, color: 'black', listStyleType: 'disc'}}>SHIPPING DETAILS</li>
            </ul>
        </div>
        <AddressSelectComponent/>
        <AddressAddButton onpress = {onpress}  BtnName = {'+ Add New Address'} />
        <div className='alignRow'>
            <CustomTextFieldComponent
            label={"First Name"} defaultValue={''} OnChange={handleOnChange}
            />
            <CustomTextFieldComponent
            label={"Last Name"} defaultValue={''} OnChange={handleOnChange}
            />
        </div>
        <div className='alignRow'>
            <CustomTextFieldComponent
            label={"Phone Number"} defaultValue={''} OnChange={handleOnChange}
            />
            <CustomTextFieldComponent
            label={"Pin Code"} defaultValue={''} OnChange={handleOnChange}
            />
        </div>
        <div className='alignRow'>
            <CustomTextFieldComponent
            label={"Town/Village"} defaultValue={''} OnChange={handleOnChange}
            />
            <CustomTextFieldComponent
            label={"City/District"} defaultValue={''} OnChange={handleOnChange}
            />
        </div>
        <div className='alignRow'>
            <CustomTextFieldComponent
            label={"State"} defaultValue={''} OnChange={handleOnChange}
            />
            <CustomTextFieldComponent
            label={"Address(House No. Building. Street Area)"} defaultValue={''} OnChange={handleOnChange}
            />
        </div>
    </div>
  )
}
export default CheckoutAddressForm