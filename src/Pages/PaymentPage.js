import CheckoutAddressForm from "../Components/CheckoutAddressForm"
import CheckoutSummary from "../Components/CheckoutSummary"
import '../checkoutPage.css';
import CheckOutNavigationComponent from "../Components/CheckOutNavigationComponent";
import SummaryDetailsComponent from "../Components/SummaryDetailsComponent";
import AddressSelectComponent from "../Components/AddressSelectComponent";

const PaymentPage = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} className="pageOuter">
           <CheckOutNavigationComponent shippingPage={'true'} PaymentPage={'true'}/>
            <div className="pageInner">
                <div style={{height : '500px', width : '600px', backgroundColor: 'yellow'}}></div>
               <div>
               <AddressSelectComponent checked={'true'}/>
                <SummaryDetailsComponent/>
               </div>
            </div>
        </div>
    )
}
export default PaymentPage