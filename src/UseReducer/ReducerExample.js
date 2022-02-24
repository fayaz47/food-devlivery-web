
import {React,useReducer} from 'react';

const ReducerExample = () => {
    const reducer = (state, action) => {
        switch(action.type) {
            case "INCREMENT":
                return {
                    count: state.count + 1 , showText : state.showText
                }
            case "TOGGER_TEXT": 
                return {
                   count: state.count, showText: !state.showText 
                }
            default:
                return state
        }
    };
    const[state, dispatch] = useReducer(reducer , {count :0 , showText: true})

        return (
            <div>
                <h1>{state.count}</h1>
                <button onClick={ () => 
                    {
                        dispatch( {type: "INCREMENT"});
                        dispatch( {type: "TOGGER_TEXT"});
                    }
                    } > Click Here</button>

                     {state.showText &&  <p>Show me text</p> }
            </div>
      
        );
           
    
};

export default ReducerExample;