import React from 'react'
import './RiderInfoReturn.css'
import { Link } from 'react-router-dom'

const dummyData = [
  {
    date: '11/2/2024',
    orderNumber: '12345',
    pickUpTime: '5:00 pm',
    location: 'The porch',
  },
  {
    date: '11/3/2024',
    orderNumber: '67890',
    pickUpTime: '6:30 pm',
    location: 'Front Door',
  },
  {
    date: '11/4/2024',
    orderNumber: '13579',
    pickUpTime: '4:15 pm',
    location: 'Backyard',
  },
  {
    date: '11/5/2024',
    orderNumber: '24680',
    pickUpTime: '7:00 pm',
    location: 'Garage',
  },
]

function RiderInfoReturn() {
  return (
    <div className='rider-info-return-container'>
      <h1>Rider</h1>
      <div className='rider-info-return-info-container'>
        {dummyData.map((item, index) => (
          <div className='rider-info-return-info' key={index}>
            <h3>Date: {item.date}</h3>
            <h3>Order Number: {item.orderNumber}</h3>
            <h3>Pick Up Time: {item.pickUpTime}</h3>
            <h3>Location: {item.location}</h3>
            <div className='rider-info-return-detail'>
              <Link
                to={`/Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail`}
                className='rider-info-return-detail-btn'
              >
                Go to detail...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RiderInfoReturn
