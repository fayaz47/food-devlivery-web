import {React, useRef, imperativeHandle} from 'react';
import Button from './Button';

const ImperativeHandleExample = () => {
const buttonRef = useRef(null);

return (
    <div>
        <button onClick={ () => {buttonRef.current.changeToggle()}}>Button From Parent</button>
        <Button ref = {buttonRef}/>
    </div>
)
};

export default ImperativeHandleExample;