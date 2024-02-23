import { BsCartCheck } from "react-icons/bs";
import './ComponentStyles/CheckOutNavigationComponent.css';
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import CustomHr from "./CustomHr";

const CheckOutNavigationComponent = ({shippingPage , PaymentPage}) => {    
    return (
        <div className="ComponentOuter">
            <div style={{color : `${shippingPage==='true'? 'green' : 'grey'}`, borderColor: `${shippingPage==='true'? 'green' : 'grey'}`}} className="iconsStyles">
                <BsCartCheck size={60} />
            </div>

            <CustomHr styles = {{width: '35%', borderBottom : `3px solid ${shippingPage==='true' ? 'green' : 'grey'}`}}/>

            <div style={{color : `${PaymentPage==='true'? 'green' : 'grey'}`, borderColor: `${PaymentPage==='true'? 'green' : 'grey'}`}} className="iconsStyles">
                <MdOutlineAddLocationAlt
                    size={60} />         
            </div>
            <CustomHr styles = {{width: '35%', borderBottom : `3px solid ${PaymentPage==='true' ? 'green' : 'grey'}`}}/>
            <div className="iconsStyles">
                <MdOutlinePayments size={60} />
            </div>
        </div>

    )
}
export default CheckOutNavigationComponent