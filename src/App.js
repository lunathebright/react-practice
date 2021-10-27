import Memo from "./studies/Memo";
import Reducer from "./studies/Reducer";
import Reducer2 from "./studies/Reducer2";

function App() {
  return (
    <div className="App">
      <Memo />
      {/* <Reducer2 birthYear="2015" / */}
      <Reducer userName="luna" />
    </div>
  );
}

export default App;
