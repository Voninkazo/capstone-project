import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Photos from './pages/Photos';
// # Challenge
// Set up the Context for our app.
// 1. In a new file, create a new context with React
// 2. In that same file, create a custom component that renders the Provider of the context you created
// 3. For now, just pass in an empty string "" as the context provider's value prop
// 4. Export the custom Provider component and the full context object (so we can pass it to the useContext hook eventually)
// 5. Set up your index.js to use the custom context Provider you created. (You can wrap it as a parent of the Router component)

// # Challenge
// Add state to our context and pass it through the Provider
// 1. Add state to hold the array of all photos our app gets from the API
// 2. Pass the array of all photos through the value of the provider so it's available anywhere the app accesses the context

// # Challenge
// Get the JSON data with the photos information from the API and save it to context state
// 1. As soon as the ContextProvider component renders, get the JSON data from this url: 
// https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json
// 2. Save the array of data that comes back to state.
// Review data fetching in React using `fetch`: 
// https://scrimba.com/p/p7P5Hd/c79Jask

// # Challenge
// Using the data in context state, map over it in the Photos page and display the images.

function App() {
	return (
		<div>
			<div>
				<Header />
			</div>
			<Switch>
				<Route  path="/cart">
					<Cart />
				</Route>
				<Route path="/photos">
					<Photos />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
