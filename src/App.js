// import { useState } from "react";
// import PortalParent from "./studies/PortalParent";
// import LifCycle from "./studies/LifCycle";
// import Memo from "./studies/Memo";
// import Reducer from "./studies/Reducer";
// import Reducer2 from "./studies/Reducer2";

import { useState } from "react";

// import Post from "./studies/hoc/Post";

function App() {
  // const [isCountPage, setIsCountPage] = useState(true);
  const [isDialogOn, setIsDialogOn] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsDialogOn((prev) => !prev)}>button</button>
      <dialog open={isDialogOn} style={{ border: "1px solid red" }}>
        a
      </dialog>
      {/* <Post /> */}
      {/* {isCountPage ? <LifCycle /> : <div>component unmounted</div>} */}
      {/* <Memo /> */}
      {/* <Reducer2 birthYear="2015" / */}
      {/* <Reducer userName="luna" /> */}
      {/* <button onClick={() => setIsCountPage((prev) => !prev)}>
        change page
      </button> */}
      {/* <PortalParent /> */}
    </div>
  );
}

export default App;
