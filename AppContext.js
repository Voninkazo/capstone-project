import React, { useEffect, useState } from 'react';
const AppContext = React.createContext();

const endpoint = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";


function AppContextProvider(props) {
    const [allPhotos,setAllPhotos] = useState([]);

    const fetchData = async(url) => {
        const res = await fetch(url);
        const data = await res.json();
        setAllPhotos(data)
        console.log(data);
    } 

    useEffect(() => {
        fetchData(endpoint);
    },[])

    return(
        <AppContext.Provider value={{allPhotos:allPhotos}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider,AppContext};