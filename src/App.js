import "./App.css";
import CallBackExample from "./Callback/CallbackExample";
import Childrens from "./UseEffect/Childrens";
import ReducerExample from "./UseReducer/ReducerExample";
import UseStateExample from "./UseState/UseStateExample";

function App() {
  return (
    <div className="App">
      <Childrens />
      <CallBackExample/>
      <UseStateExample/>
      <ReducerExample/>
    </div>
  );
}

export default App;