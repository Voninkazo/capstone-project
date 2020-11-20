import React, { useEffect, useState } from 'react';
const AppContext = React.createContext();
    
// # Challenge
// Synchronize the data on the app, to localStorage.
// The logic will happen in the Context file.
// Don't forget to update the local storage everytime you update the state.

const endpoint = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";


function AppContextProvider(props) {
    const [allPhotos,setAllPhotos] = useState([]);
    const [cartItems,setCartItems] = useState([]);

    async function fetchData(url) {
		// is there something with the string 'allPhotos' inside localStorage
		const lsAllPhotos = JSON.parse(localStorage.getItem('allPhotos'));
		if (lsAllPhotos) {
			// set the local storage value to state
			setAllPhotos(lsAllPhotos);
		} else {
			console.log('nothing in ls, we go and fetch the data we need');
			const response = await fetch(url);
			const data = await response.json();
			setAllPhotos(data);
		}
	}

    function toggleFavorite(id) {
        console.log(id);
        const newPhotosArray = allPhotos.map(photo => {
            if(photo.id === id) {
                // update this element
                console.log(!photo.isFavorite);
                return{
                    ...photo,
                    isFavorite: !photo.isFavorite,
                }
            };
            return {...photo};
        })
        setAllPhotos(newPhotosArray);
    }

    function addCart(img) {
        const newCartItems = [...cartItems,img]
        setCartItems(newCartItems);
        // setCartItems(prevItems => [...prevItems],img)
    }

    function removeFromCart(imgId) {
        const filteredCartItems = cartItems.filter(item => item.id !== imgId)
        setCartItems(filteredCartItems);
    }

    function placeOrder() {
        const order =  new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log('order placed');
                setCartItems([]);
                resolve();
            },3000)
        })
    }

    function initCartItems() {
		const lsCartItems = JSON.parse(localStorage.getItem('cartItems'));
		if (lsCartItems) {
			setCartItems(lsCartItems);
		}
	}

    useEffect(() => {
        fetchData(endpoint);
        initCartItems();
    },[])

    useEffect(() => {
		if (allPhotos.length > 0) {
			localStorage.setItem('allPhotos', JSON.stringify(allPhotos));
		}
	}, [allPhotos]);
	useEffect(() => {
		if (cartItems.length > 0) {
			localStorage.setItem('cartItems', JSON.stringify(cartItems));
		}
    }, [cartItems]);

    return(
        <AppContext.Provider value={{
            allPhotos,toggleFavorite,addCart,cartItems,removeFromCart,placeOrder,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider,AppContext};