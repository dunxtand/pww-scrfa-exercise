import { useRef, useEffect } from 'react';


// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
export default function useOuterClick(callback: any) {
    const callbackRef = useRef(null); // initialize mutable ref, which stores callback
    const innerRef = useRef(null); // returned to client, who marks "border" element
  
    // update cb on each render, so second useEffect has access to current value 
    useEffect(() => callbackRef.current = callback);
    
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
        function handleClick(e: any) {
            // @ts-ignore
            if (innerRef.current && callbackRef.current && !innerRef.current.contains(e.target)) {
                // @ts-ignore
                callbackRef.current(e);
            }
        }
    }, []); // no dependencies -> stable click listener
        
    return innerRef; // convenience for client (doesn't need to init ref) 
}
