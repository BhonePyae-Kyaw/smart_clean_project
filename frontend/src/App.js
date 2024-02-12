import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Nav from './Components/Nav';

import CusteomerHome from './Components/Customer/CusteomerHome';
import CustomerHistory from './Components/Customer/CustomerHistory';
import ChooseTimeSlot from './Components/Customer/ChooseTimeSlot';
import ShowProcess from './Components/Customer/ShowProcess';

import ShopHome from './Components/Shop/ShopHome';
import CustomerOrders from './Components/Shop/CustomerOrders';
import OrderHistory from './Components/Shop/OrderHistory';
import CreateTimeSlot from './Components/Shop/CreateTimeSlot';
import RiderRegisteration from './Components/Shop/RiderRegisteration';
import RiderEditDelete from './Components/Shop/RiderEditDelete';
import ShopRiderList from './Components/Shop/ShopRiderList'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/customer/home" element={<CusteomerHome />} />
          <Route path="/customer/showHistory" element={<CustomerHistory/>} />
          <Route path="/customer/chooseTimeSlot" element={<ChooseTimeSlot/>} />
          <Route path="/customer/showProcess" element={<ShowProcess/>} />


          <Route path="/shop/home" element={<ShopHome />} />
          <Route path="/shop/customerOrder" element={<CustomerOrders />} />
          <Route path="shop/past/order" element={<OrderHistory/>} />
          <Route path="shop/create/timeslots" element={<CreateTimeSlot/>} />
          <Route path="shop/create/rider" element={<RiderRegisteration/>} />
          <Route path="shop/riderDetails" element={<RiderEditDelete/>} />
          <Route path="shop/riderList" element={<ShopRiderList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
