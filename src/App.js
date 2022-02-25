import "./App.css";
import CallBackExample from "./Callback/CallbackExample";
import ImperativeHandleExample from "./ImperativeHandle/ImperativeHandleExample";
import Childrens from "./UseEffect/Childrens";
import UseLayoutExample from "./UseLayoutEffect/UseLayoutExample";
import ReducerExample from "./UseReducer/ReducerExample";
import userRefExample from "./UseRef/UseRefExample";
import UseStateExample from "./UseState/UseStateExample";

function App() {
  return (
    <div className="App">
      <Childrens />
      <CallBackExample/>
      <UseStateExample/>
      <ReducerExample/>
      <userRefExample />
      <UseLayoutExample />
      <ImperativeHandleExample/>
    </div>
  );
}

export default App;