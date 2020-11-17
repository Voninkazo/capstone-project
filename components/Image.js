import React, { useState } from 'react';

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

function Image({photo,className}) {
    const [isHovered,setIsHovered] = useState(false);

    function mouseHover() {
        setIsHovered(true);
        console.log("hovered", isHovered);
    } 
    
    function whenMouseLeaves() {
        setIsHovered(false)
        console.log("leave", isHovered)
    }

    return(
        <div className={`${className} image-container`}>
            <img onMouseOver={mouseHover} onMouseLeave={whenMouseLeaves} src={photo.url} alt="photo" className="image-grid" />
            {isHovered &&
                (
                   <div>
                        <i className="ri-heart-line favorite"></i>
                        <i className="ri-add-circle-line cart"></i>
                   </div>
                )

            }
        </div>
    )
}

export default Image;