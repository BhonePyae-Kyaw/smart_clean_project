import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Nav from './Components/Nav';

import CusteomerHome from './Components/Customer/CusteomerHome';
import CustomerHistory from './Components/Customer/CustomerHistory';
import ChooseTimeSlot from './Components/Customer/ChooseTimeSlot';
import ShowProcess from './Components/Customer/ShowProcess';
import ChooseItems from './Components/Customer/ChooseItems';

import ShopHome from './Components/Shop/ShopHome';
import CustomerOrders from './Components/Shop/CustomerOrders';
import OrderHistory from './Components/Shop/OrderHistory';
import CreateTimeSlot from './Components/Shop/CreateTimeSlot';
import RiderRegisteration from './Components/Shop/RiderRegisteration';
import RiderEditDelete from './Components/Shop/RiderEditDelete';
import ShopRiderList from './Components/Shop/ShopRiderList';
import RiderPickupButton from './Components/Rider/RiderHomeScreen';
import RiderInfo from './Components/Rider/RiderInfo';
import PickUpDetail from './Components/Rider/PickUpDetail';
import Profile from './Components/Rider/Profile';
import PickUpCust from './Components/Rider/PickUpCust';
import ReturnDetail from './Components/Rider/ReturnDetail';
import ReturnCust from './Components/Rider/ReturnCust';
import PickUpSuccess from './Components/Rider/PickUpSuccess';
import RiderInfoReturn from './Components/Rider/RiderInfoReturn';
import ReturnSuccess from './Components/Rider/ReturnSuccess';
import ReportForm from './Components/Rider/ReportForm';
import ReportSuccess from './Components/Rider/ReportSuccess';

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
          <Route path="/customer/chooseItems" element={<ChooseItems/>}/>

          {/* <Route path="/customer/home" element={<CusteomerHome />} /> */}

          <Route path="/shop/home" element={<ShopHome />} />
          <Route path="/shop/customerOrder" element={<CustomerOrders />} />
          <Route path="shop/past/order" element={<OrderHistory/>} />
          <Route path="shop/create/timeslots" element={<CreateTimeSlot/>} />
          <Route path="shop/create/rider" element={<RiderRegisteration/>} />
          <Route path="shop/riderDetails" element={<RiderEditDelete/>} />
          <Route path="shop/riderList" element={<ShopRiderList/>} />

          <Route path='Rider/RiderHomeScreen' element={<RiderPickupButton />} />
          <Route
            path='Rider/RiderHomeScreen/RiderProfile'
            element={<Profile />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfo'
            element={<RiderInfo />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfoReturn'
            element={<RiderInfoReturn />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfo/PickUpDetail'
            element={<PickUpDetail />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail'
            element={<ReturnDetail />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfo/PickUpDetail/PickUpCust'
            element={<PickUpCust />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail/ReturnCust'
            element={<ReturnCust />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfo/PickUpDetail/PickUpCust/PickUpSuccess'
            element={<PickUpSuccess />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail/ReturnCust/ReturnSuccess'
            element={<ReturnSuccess />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail/ReturnCust/ReportForm'
            element={<ReportForm />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfo/PickUpDetail/PickUpCust/ReportForm'
            element={<ReportForm />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfo/PickUpDetail/PickUpCust/ReportForm/ReportSuccess'
            element={<ReportSuccess />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
