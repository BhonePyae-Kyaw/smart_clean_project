import React from 'react';
import CustomerHeader from '../Common/CustomerHeader';
import trouser from './photos/trouser.png';
import jacket from './photos/jacket.png';
import shirt from './photos/shirt.png';
import shorts from "./photos/shorts.png";
import sweater from "./photos/sweater.png";
import sweatshirt from "./photos/sweatshirt.png";
import tops from "./photos/tops.png";
import hoodie from "./photos/hoodie.png";
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
                        <td className='cus-items'><img className='cus-sweater' src={sweater} alt='sweater'/></td>
                        <td className='cus-items'><img className='cus-shorts' src={shorts} alt='shorts'/></td>
                        <td className='cus-items'><img className='cus-sweatshirt'src={sweatshirt} alt='sweatshirt'/></td>
                    </tr>
                    <tr className='cus-items-label-div'>
                        <td className='cus-items-label'>sweater</td>
                        <td className='cus-items-label'>shorts</td>
                        <td className='cus-items-label'>sweat<br></br>shirt</td>
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
                        <td className='cus-items-label'>polos</td>
                        <td className='cus-items-label'>hoodie</td>
                        <td className='cus-items-label'>tops</td>
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