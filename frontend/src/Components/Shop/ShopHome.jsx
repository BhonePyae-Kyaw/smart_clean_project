import React from 'react'
import { Link } from "react-router-dom"

export default function ShopHome() {
  return (
    <div>
        Shop Home
        <div className='sh-ctsbtm'>
            <button><Link to="/shop/customerOrder">Customer Orders</Link></button>
        </div>
        <div>
            <button><Link to="/shop/create/timeslots">Create Time slots</Link></button>
        </div>
        <div>
            <button><Link to="/shop/create/rider">Rider Registeration</Link></button>
        </div>
        <div>
            <button><Link to="/shop/past/order">Order History</Link></button>
        </div>
      
    </div>
  )
}
