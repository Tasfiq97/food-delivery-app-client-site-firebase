
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import OrderDetails from './Components/OrderDetails/OrderDetails';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NoPageFound from './Components/NoPageFound/NoPageFound';

function App() {
  return (
    <BrowserRouter>
    
      <Header></Header>  
    <Switch>
    <Route exact path="/">
<Home></Home>
</Route>
<Route path="/home">
<Home></Home>
</Route>
<Route path="/orderdetail/:orderId">
<OrderDetails></OrderDetails>
</Route>
<Route path="*">
<NoPageFound></NoPageFound>
</Route>
    </Switch>
     <Footer></Footer> 
    </BrowserRouter>
    
  );
}

export default App;
