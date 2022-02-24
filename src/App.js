import "./App.css";
import CallBackExample from "./Callback/CallbackExample";
import Childrens from "./UseEffect/Childrens";
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
    </div>
  );
}

export default App;