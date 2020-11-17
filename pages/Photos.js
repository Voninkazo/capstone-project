import React, { useContext } from 'react';
import {AppContext} from '../AppContext';
import {getClass} from '../utils';

import Image from '../components/Image';

function Photos() {
	const {allPhotos} = useContext(AppContext);	
	console.log(allPhotos
		)
	return (
		<main className="photos">
			{/* <h1>Images go here</h1> */}
			{
				allPhotos.map((photo,index) => {
					return(
						<Image photo={photo}  key={photo.id} className={getClass(index)}/>
					)	
				})
			}
		</main>
	);
}

export default Photos;
