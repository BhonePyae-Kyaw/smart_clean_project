import React from 'react'
import './JustOrdered.css'
import { Link } from 'react-router-dom'
import ShopHeader from '../Common/ShopHeader'
import OrderItemCard from './OrderItemCard'
export default function JustOrdered() {
    const orderItems = [
        {
            "product_code" : "0001",
            "product_name" : "Jean",
            "quantity" : 3,
            "price" : 30

        },
        {
            "product_code" : "0005",
            "product_name" : "Shirt",
            "quantity" : 5,
            "price" : 20

        },
    ]
  return (
    <>
        <ShopHeader />
        <OrderItemCard orderItems={orderItems}/>
        <button className='jo-btn-assign'>
            <Link to="/shop/riderList/available" className="jo-link">
                Assign to riders
            </Link>
        </button>
      
    </>
  )
}
