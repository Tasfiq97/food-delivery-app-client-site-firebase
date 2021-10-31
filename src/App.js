
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import OrderDetails from './Components/OrderDetails/OrderDetails';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NoPageFound from './Components/NoPageFound/NoPageFound';
import Login from './Components/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DetailInfo from './Components/DetailInfo/DetailInfo';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import AllOrders from './Components/AllOrders/AllOrders';
import AddOffers from './Components/AddOffers/AddOffers';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
    
    <Header></Header>  
  <Switch>
  <Route exact path="/">
<Home></Home>
</Route>
<Route path="/home">
<Home></Home>
</Route>
<PrivateRoute path="/orderdetail/:orderId">
<OrderDetails></OrderDetails>
</PrivateRoute>
<Route path="/login">
<Login></Login>
</Route>
<PrivateRoute path="/detailInfo/:id">
<DetailInfo></DetailInfo>
</PrivateRoute>
<PrivateRoute path="/manageOrder">
<ManageOrder></ManageOrder>
</PrivateRoute>
<PrivateRoute path="/allOrders">
<AllOrders></AllOrders>
</PrivateRoute>
<PrivateRoute path="/addOffers">
<AddOffers></AddOffers>
</PrivateRoute>
<Route path="*">
<NoPageFound></NoPageFound>
</Route>
  </Switch>
   <Footer></Footer> 
  </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
