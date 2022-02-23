import { React, useState } from "react"

const UseStateExample = () => {
 const[count,setCount] = useState(0);

 const  increment =() => {

    setCount(count+1);
 }
 return (
 <><div> {count} <button onClick={increment}>Increment </button> </div></>

 );
};
    export default UseStateExample
