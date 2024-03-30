import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useScrollTrigger } from '@material-ui/core'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {


    const {cartItems,addTocart,removeFromCart} = useContext(StoreContext)

  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {!cartItems[id]
               ?<img className='add' onClick={()=>addTocart(id)} src={assets.add_icon_white}/>
               :<div className='food-item-counter'>

               <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
               <p>{cartItems[id]}</p>
               <img onClick={()=>addTocart(id)} src={assets.add_icon_green} alt="" />
               </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
        </div>
        <p className='food-item-description'>{description}</p>
        <p className='food-item-price'>₹{price}
        </p>
    </div>
  )
}

export default FoodItem