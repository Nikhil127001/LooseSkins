import CheckoutAddressForm from "../Components/CheckoutAddressForm"
import CheckoutSummary from "../Components/CheckoutSummary"
import '../checkoutPage.css';
import CheckOutNavigationComponent from "../Components/CheckOutNavigationComponent";
import { useEffect } from "react";

const CheckoutPage = () => {

    useEffect(() => {
        console.log(window.history.state.data); 
    },[])
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} className="pageOuter">
           <CheckOutNavigationComponent shippingPage={'true'} PaymentPage={'false'}/>
            <div className="pageInner">
                <CheckoutAddressForm />
                <CheckoutSummary />
            </div>
        </div>
    )
}
export default CheckoutPage