import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CusteomerHome from './Components/Customer/CusteomerHome';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CusteomerHome />} />
          <Route path="/customer/home" element={<CusteomerHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
