import React from 'react';
import CustomerHeader from '../Common/CustomerHeader';
import trouser from './photos/trouser.png';
import jacket from './photos/jacket.png';
import shirt from './photos/shirt.png';
import './ChooseItems.css'

export default function ChooseItems(){
    return(
        <div className='cus-chooseitems-div'>
            <CustomerHeader/>
            <h1 className='cus-chooseitems-label'>Choose your items here</h1>

            <div className='cus-itemstable-div'>
                <table className='cus-items-table'>
                    <tr>
                        <td className='cus-items'><img className='cus-trouser' src={trouser} alt='trouser'/></td>
                        <td className='cus-items'><img className='cus-jacket' src={jacket} alt='jacket'/></td>
                        <td className='cus-items'><img className='cus-shirt' src={shirt} alt='shirt'/></td>
                    </tr>
                    <tr className='cus-items-label-div'>
                        <td className='cus-items-label'>pants</td>
                        <td className='cus-items-label'>jacket</td>
                        <td className='cus-items-label'>shirt</td>
                    </tr>
                    <tr className='cus-count-div'>
                        <td className='cus-count'><button>-</button> 0 <button>+</button></td>
                        <td className='cus-count'><button>-</button> 0 <button>+</button></td>
                        <td className='cus-count'><button>-</button> 0 <button>+</button></td>
                    </tr>
                    
                    <tr>
                        <td className='cus-items'></td>
                        <td className='cus-items'></td>
                        <td className='cus-items'></td>
                    </tr>
                    <tr className='cus-items-label-div'>
                        <td className='cus-items-label'>cardigan</td>
                        <td className='cus-items-label'>shorts</td>
                        <td className='cus-items-label'>polos</td>
                    </tr>
                    <tr className='cus-count-div'>
                        <td className='cus-count'><button>-</button> 0 <button>+</button></td>
                        <td className='cus-count'><button>-</button> 0 <button>+</button></td>
                        <td className='cus-count'><button>-</button> 0 <button>+</button></td>
                    </tr>

                    <tr>
                        <td className='cus-items'></td>
                        <td className='cus-items'></td>
                        <td className='cus-items'></td>
                    </tr>
                    <tr className='cus-items-label-div'>
                        <td className='cus-items-label'>trouser</td>
                        <td className='cus-items-label'>trouser</td>
                        <td className='cus-items-label'>trouser</td>
                    </tr>
                    <tr className='cus-count-div'>
                        <td className='cus-count'><button>-</button> 0 <button>+</button></td>
                        <td className='cus-count'><button>-</button> 0 <button>+</button></td>
                        <td className='cus-count'><button>-</button> 0 <button>+</button></td>
                    </tr>

                    <tr>
                        <td className='cus-items'></td>
                        <td className='cus-items'></td>
                        <td className='cus-items'></td>
                    </tr>
                    <tr className='cus-items-label-div'>
                        <td className='cus-items-label'>trouser</td>
                        <td className='cus-items-label'>trouser</td>
                        <td className='cus-items-label'>trouser</td>
                    </tr>
                    <tr className='cus-count-div'>
                        <td className='cus-count'><button>-</button> 0 <button>+</button></td>
                        <td className='cus-count'><button>-</button> 0 <button>+</button></td>
                        <td className='cus-count'><button>-</button> 0 <button>+</button></td>
                    </tr>
                </table>
             </div>
             <div className='cus-btn-proceed-div'>
                    <button className='cus-btn-proceed'>Proceed</button>
             </div>

        </div>
    )
}