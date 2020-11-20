// # Challenge
// On the Image component, track the hover state
// 1. Create state boolean for "hovered"
// 2. When the mouse enters the Image's div, set "hovered" to true
// 3. When the mouse leaves the Image's div, set "hovered" to false
// 4. Log "hovered" to the console so you know it's changing successfully.

// # Challenge
// Conditionally render the heart and plus icons when an Image component is being hovered on
// 1. Icon to render for the heart:
// <i className="ri-heart-line favorite"></i>
// 2. Icon to render for the plus:
// <i className="ri-add-circle-line cart"></i>

// # Challenge
// Add ability to toggle an image's `isFavorited` property by clicking the heart icon (filled heart doesn't need to display on the image yet)
// 1. Add a toggleFavorite method to context. It should take an `id` parameter and update the array of allPhotos by flipping the `isFavorited` property of the photo with the matching `id`
//     a. Have this function also console.log something so we know it's running correctly
//     b. Don't try to modify the individual image object only. Make sure to provide a whole new array to context with the one item with the matching `id` being changed.
// 2. Make it so clicking the heart icon on any given image runs this method

// # Challenge
// Make the image display the filled heart icon when it's already favorited
// Logic to follow:
// * If the image is favorited, display the filled heart icon always
// * Otherwise, if the image being hovered on, display the heart outline instead
// * If it isn't favorited OR hovered on, don't display anything
// Remember to make it so clicking the filled heart icon ALSO runs the toggleFavorite function!
// Filled heart icon:
// <i className="ri-heart-fill favorite"></i>

// # Challenge
// Add propTypes to the Image component
// 1. className should be a string
// 2. img should be an object, specifically an object with `id`, `url`, and `isFavorite` properties
//     a. Hint: Specifying the properties of an object is called and object's "shape"
// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

// # Challenge
// Setup context to manage items in an array called `cartItems`. This will be an array of image objects.
// 1. Add the `cartItems` state to context. (Array)
// 2. Add function to add an image to the cart. (Takes the full image object as parameter)
// 3. Make it so clicking the plus icon on the image adds the item to the cart. (Console.log the cart items array to see that it's working)

// # Challenge
// Change the plus icon to a full shopping cart icon when an image is already in the cart. This should display whether the image is being hovered or not (like the favorite icon).
// Icon to use when item already in cart:
// <i className="ri-shopping-cart-fill cart"></i>
// Hints: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://stackoverflow.com/a/8217584

// # Challenge
// Make it so clicking the little shopping cart icon on the image removes the item from the cart

// # Challenge
// Change the cart icon in the header to display the full cart icon if there are any items in the cart
// Full class name to use WHEN ITEMS IN CART:
// "ri-shopping-cart-fill ri-fw ri-2x"
// Full class name to use WHEN CART IS EMPTY:
// "ri-shopping-cart-line ri-fw ri-2x"

import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import { AppContext } from '../AppContext';
import useHover from '../hooks/useHover';

function Image({ className, photo }) {
    const { toggleFavorite } = useContext(AppContext);
    const {addCart} = useContext(AppContext);
    const {cartItems} = useContext(AppContext)
    const [hovered, ref] = useHover();
    const {removeFromCart} = useContext(AppContext);

    function heartFunction() {
        if (photo.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(photo.id)}></i>;
        } else if (hovered) {   
            return <i onClick={() => toggleFavorite(photo.id)} className="ri-heart-line favorite"></i>
        }
    }

    function cartFunction() {
        if(cartItems.some((cartItem => cartItem.id === photo.id))) {
            return <i onClick={() => removeFromCart(photo.id)} className="ri-shopping-cart-fill cart"></i>
        }
        else if(hovered) {
            return  <i onClick={() => addCart(photo)} className="ri-add-circle-line cart"></i>;
        }
    }

	return (
		<div ref={ref} className={`${className} image-container`}
			onMouseEnter={() => {setHovered(true);}}
			onMouseLeave={() => {setHovered(false);	}}>
			{heartFunction()}
			{cartFunction()}
			<img src={photo.url} className="image-grid" />
		</div>
	);
}

Image.propTypes={
    className: propTypes.string,
    img:propTypes.shape({
        id:propTypes.string,
        url: propTypes.string,
        isFavorite: propTypes.bool,
    })
}
export default Image;
