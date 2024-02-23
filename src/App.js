import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ProductDetailsPage from './Pages/productDetailsPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoginPage from './Pages/loginPage';
import RegisterComponent from './Components/registerComponent';
import AdminPage from './Pages/Admin/adminPage';
import AdminAllUsersData from './Components/Admin/AdminAllUsersData';
import AdminCreateNewProduct from './Components/Admin/AdminCreateNewProduct';
import AdminDeliveredOrders from './Components/Admin/AdminDeliveredOrders';
import AdminGetOrders from './Components/Admin/AdminGetOrders';
import AdminReturnedOrders from './Components/Admin/AdminReturnedOrders';
import AdminUpdateUser from './Components/Admin/AdminUpdateUser';
import TotalSalesInsights from './Components/Admin/TotalSalesInsights';
import AdminGetAllProducts from './Components/Admin/AdminGetAllProducts';
import AdminViewAndEditproduct from './Components/Admin/AdminViewAndEditproduct';
import AdminOrderDetailsPage from './Components/Admin/AdminOrderDetailsPage';
import AdminEditUserPage from './Components/Admin/AdminEditUserPage';
import AdminEditAdminPage from './Components/Admin/AdminEditAdminPage';
import CheckoutPage from './Pages/CheckoutPage';
import PaymentPage from './Pages/PaymentPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element = {<HomePage/>}/>
        <Route path='/checkout' exact element = {<CheckoutPage/>}/>
        <Route path='/checkout/payment' exact element = {<PaymentPage/>}/>
        <Route path='/productDetails'  element = {<ProductDetailsPage/>}/>
        <Route path='/login'  element = {<LoginPage/>}/>
        <Route path='/register'  element = {<RegisterComponent/>}/>

        // Admin Page routes
        <Route path='/admin'  element = {<AdminPage/>}/>
        <Route path='/admin/adminGetAllUsers'  element = {<AdminAllUsersData/>}/>
        <Route path='/admin/adminGetAllProducts'  element = {<AdminGetAllProducts/>}/>
        <Route path='/admin/createNewProduct'  element = {<AdminCreateNewProduct/>}/>
        <Route path='/admin/adminDeliveredOrders'  element = {<AdminDeliveredOrders/>}/>
        <Route path='/admin/adminGetAllOrders'  element = {<AdminGetOrders/>}/>
        <Route path='/admin/adminReturnedOrders'  element = {<AdminReturnedOrders/>}/>
        <Route path='/admin/totalSalesInsights'  element = {<TotalSalesInsights/>}/>
        <Route path='/admin/adminUpdateUser'  element = {<AdminUpdateUser/>}/>
        <Route path='/admin/adminViewProduct'  element = {<AdminViewAndEditproduct/>}/>
        <Route path='/admin/OrderDetails'  element = {<AdminOrderDetailsPage/>}/>
        <Route path='/admin/EditUser'  element = {<AdminEditUserPage/>}/>
        <Route path='/admin/EditAdmin'  element = {<AdminEditAdminPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
