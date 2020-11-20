import React, { useContext, useState } from 'react';
import {AppContext} from '../AppContext';
import CartItem from '../components/CartItem';

// # Challenge
// Make it so clicking the trash icon on the Cart page removes that item from the cart

// # Challenge
// Let our user place their order!
// Clicking the "Place Order" button should:
// 1. Change the text to "Ordering..."
// 2. Timeout for 3 seconds (to simulate an order being placed)
// 3. Log "Order placed!" to the console
// 4. Empty out the cart

// # Challenge
// 1. Only render the "Place Order" button if there are items in the cart
// 2. Change the trash icon to a filled-in trash icon when hovering over it
// Filled trash icon to use when hovering:
// <i className="ri-delete-bin-fill"></i>
// Empty trash icon to use when NOT hovering:
// <i className="ri-delete-bin-line"></i>

function Cart() {
	const {cartItems} = useContext(AppContext);
	const {placeOrder} = useContext(AppContext);
	const [orderBtnText,setOrderBtnText] = useState('Place Order');

	const cartItemElements = cartItems.map(item => (
		<CartItem  key={item.id} item={item}/>
	))
	const totalCost = Number(5.99 * cartItems.length);
	console.log(totalCost);

	async function handleOrder() {
		// change the text 
		setOrderBtnText('Ordering...');
		await placeOrder();
		setOrderBtnText('Place Order');
		//place the order with the context promise
		// when the order resolve, change the text
	}

	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{cartItemElements}
			<p> Total: {totalCost.toLocaleString("en-Us", {style: "currency", currency: "USD"})}</p>
			<div className="order-button">
				{cartItems.length > 0 ?
				<button onClick={handleOrder}>
				{orderBtnText}
				</button>
				:
				<p>You have no items in the cart!</p>
				}
			</div>
		</main>
	);
}

export default Cart;
