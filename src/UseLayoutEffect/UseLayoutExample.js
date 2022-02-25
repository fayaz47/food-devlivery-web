import {react, useEffect, useRef, useLayoutEffect} from 'react';

const UseLayoutExample = () => {
 const inputRef = useRef(null);
    useLayoutEffect (
        () => {
            inputRef.current.value = "Malli"
        } , []);
  
    // useEffect(
    //     () => {
    //         inputRef.current.value = "Tagore"
    //     }
    // )

        return(
        <div className='App'>
        <input ref={inputRef} value= "Fayaz" style={ {width: 400, height: 300}} />
        </div>
        );

};

export default UseLayoutExample;