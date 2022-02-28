import "./App.css";
import CallBackExample from "./Callback/CallbackExample";
import ContextExample from "./ContextHook/ContextExample";
import ImperativeHandleExample from "./ImperativeHandle/ImperativeHandleExample";
import Childrens from "./UseEffect/Childrens";
import UseLayoutExample from "./UseLayoutEffect/UseLayoutExample";
import ReducerExample from "./UseReducer/ReducerExample";
import UseRefExample from "./UseRef/UseRefExample";
import UseStateExample from "./UseState/UseStateExample";
import MemoExample from "./Memo/MemoExample"

function App() {
  return (
    <div className="App">
      <Childrens />
      <CallBackExample/>
      <UseStateExample/>
      <ReducerExample/>
      <UseRefExample />
      <UseLayoutExample />
      <ImperativeHandleExample/>
      <ContextExample />
      <MemoExample />
    </div>
  );
}

export default App;