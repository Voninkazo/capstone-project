import {useEffect, useRef, useState} from 'react';

/**
     * Challenge:
     * 
     * Using useEffect and useRef, make it so when this hook first loads,
     * it sets up the "mouseenter" and "mouseleave" event listeners on the ref.
     * 
     * Remember: the ref.current will represent the DOM node, which is where you can
     * do imperative commands like `.addEventListener` and `removeEventListener`.
     */

    function useHover() {
        const [hovered, setHovered] = useState(false);
        const ref = useRef(null);
         useEffect(() => {
             const instance = ref.current;
            instance.addEventListener("mouseenter", enter);
            instance.addEventListener("mouseleave", leave);
            return () => {
                instance.removeEventListener("mouseenter", enter);
                instance.removeEventListener("mouseleave", leave);
            }
         }, [])
        function enter() {
            setHovered(true);
        }
        function leave() {
            setHovered(false);
        }
        return [hovered, ref]
    }
    export default useHover