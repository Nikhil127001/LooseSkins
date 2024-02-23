import SummaryDetailsComponent from './SummaryDetailsComponent'

import './ComponentStyles/checkoutSummary.css'
import OffersComponent from './OffersComponent'

const CheckoutSummary = () => {
  return (
    <div  className='summaryComponent'>
        <OffersComponent/>
        <SummaryDetailsComponent/>
    </div>
  ) 
}
export default CheckoutSummary