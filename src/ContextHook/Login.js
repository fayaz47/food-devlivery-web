import {React, useContext} from 'react';
import { AppContext } from './ContextExample';

const Login = () => {
  const {setUsername} = useContext(AppContext);
    return (
    <div>
        onChange = {(event) =>
            {
            setUsername(event.target.value);
            }
        }
    </div>
    );
};

export default Login;