import React, { useContext, useState } from 'react';
import {AppContext} from '../AppContext';
import useHover from '../hooks/useHover';

// # Challenge
// Calculate the total cost of the items in the cart and display it on the Cart page
// 1. Usually the item in the database will have it's own cost saved, but we're assuming every item we sell costs $5.99, so you can just hard code that cost in
// 2. To very easily display the total cost in US dollars (or whatever currency you want), use the following:
// `<number>.toLocaleString("en-US", {style: "currency", currency: "USD"})`
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

function CartItem({item}) {
    const {removeFromCart} = useContext(AppContext);
    const [hovered,ref] = useHover();

    const IconClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => removeFromCart(item.id)} className={IconClass}></i>
      <img src={item.url} alt="" width="130px" />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem
