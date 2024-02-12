import calendar from "./cal.jpeg";
import avator from "./profile.png";
import tracker from "./delivery.jpeg";
import './CustomerHome.css';
import React, { useRef } from 'react';
import { Link } from "react-router-dom";

function CustomerHome() {
 
  //scroll with mouse wheel
  const containerRef = useRef(null);
  const handleWheel = (e) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + e.deltaY,
        behavior: 'smooth'
      });
    }
  };
 
  return (
    <div className="App">
       
        <div className="topbar">
          <h1 className="toplabel">Smart and Clean</h1>
        </div>
       
        <div className="userbar">
          <div className="space"></div>
          <h2 className="username">Welcome bryan </h2>
          <img className="avator" src={avator} alt="avator"/>
        </div>
       
    <div className="container"  ref={containerRef}
    onWheel={handleWheel}>
 
      <div className="scroll">
       
        <div className="calendar-container">
          <img className="cal" src={calendar} alt="cal"/>
          <Link to="/customer/chooseTimeSlot"> <h3 className="h3link">Book an order</h3></Link>
            <p>Choose available Time slot to get the service.</p>
        </div>
 
        <div className="calendar-container">
          <img className="cal" src={tracker} alt="tracking"/>
          <Link to="/customer/showProcess"><h3 className="h3link">Track your order</h3></Link>
           <p> You can see when the rider will come to pick up ,
            <br></br>return and when the shop will do your laundry.</p>
        </div>
 
      </div>
 
    </div>
 
     <div className="btn">
      < Link to="/customer/showHistory"><button className="history" >View History</button></Link>
      </div>
    </div>
  );
}

export default CustomerHome;