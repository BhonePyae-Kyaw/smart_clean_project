import React from 'react';
import CustomerHeader from '../Common/CustomerHeader';
import "./CustomerWaiting.css"
import { Link } from 'react-router-dom';

export default function CustomerWaiting(){
    return(
        <div className='cus-waiting-div'>
            <CustomerHeader/>
            <div className='cus-default-container'>
            <p className='cus-wait-label'>
                Our rider will come pick up on appointed time.
            </p>
            <p className='cus-wait-label'>
                Thank you for your order.
            </p>
            </div>

        <div className='cus-btn-okupdate'>
            <Link to="/customer/finalreceipt"><button className='cus-btn-ok'>OK</button></Link> 
            <Link to="/customer/chooseItems"><button className='cus-btn-update'>Update</button></Link>
        </div>

        </div>
    )
}