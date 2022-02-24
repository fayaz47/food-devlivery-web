import {React, useRef} from 'react';

const userRefExample = () => {
    const inputRef = useRef(null);
    const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    };
    return (
        <div>
        <h1>Fayaz</h1>
        <input type="text" placeholder="Example ... " ref = {inputRef}></input>
        <button onClick={onClick}>Change Name</button>
        </div>
    );

};

export default userRefExample;