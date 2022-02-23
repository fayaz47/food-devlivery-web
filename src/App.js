import "./App.css";
import CallBackExample from "./Callback/CallbackExample";
import Childrens from "./Childrens";
import UseStateExample from "./UseState/UseStateExample";

function App() {
  return (
    <div className="App">
      <Childrens />
      <CallBackExample/>
      <UseStateExample/>
    </div>
  );
}

export default App;