import React from 'react'
//import {useContext} from 'react'
import './CSS/ShopCategory.css'
//import { ShopContext } from '../Context/ShopContext'


const ShopCategory = (props) => {
 // const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
        
        {/* Displays the men, women, and kids banner */}
        <img src={props.banner} alt="" />
    
        
    </div>
  )
}

export default ShopCategory