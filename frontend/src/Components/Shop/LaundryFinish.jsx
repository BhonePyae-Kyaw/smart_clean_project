import React from 'react'
import { Link } from 'react-router-dom'
import ShopHeader from '../Common/ShopHeader'
import AvailableRiderList from './AvailableRiderList'

export default function LaundryFinish() {
  return (
    <div>
      <ShopHeader/>
        <div>
            Laundry has finished.
        </div>
        <button>
            <Link to="/shop/riderList/available">Assign to riders.</Link>
        </button>
      
    </div>
  )
}
