import { useState } from "react";
import PortalParent from "./studies/PortalParent";
// import LifCycle from "./studies/LifCycle";
// import Memo from "./studies/Memo";
// import Reducer from "./studies/Reducer";
// import Reducer2 from "./studies/Reducer2";

function App() {
  // const [isCountPage, setIsCountPage] = useState(true);
  return (
    <div className="App">
      {/* {isCountPage ? <LifCycle /> : <div>component unmounted</div>} */}
      {/* <Memo /> */}
      {/* <Reducer2 birthYear="2015" / */}
      {/* <Reducer userName="luna" /> */}
      {/* <button onClick={() => setIsCountPage((prev) => !prev)}>
        change page
      </button> */}
      <PortalParent />
    </div>
  );
}

export default App;
