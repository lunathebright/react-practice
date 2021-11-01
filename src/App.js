import { useState } from "react";
// import PortalParent from "./studies/PortalParent";
// import LifCycle from "./studies/LifCycle";
// import Memo from "./studies/Memo";
// import Reducer from "./studies/Reducer";
// import Reducer2 from "./studies/Reducer2";
// import Post from "./studies/hoc/Post";

function App() {
  // const [isCountPage, setIsCountPage] = useState(true);
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="App">
      <p>
        Press <kbd>Cmd</kbd> + <kbd>C</kbd> to copy text (Mac OS).
      </p>

      {/* <p>
        <dfn>HTML</dfn> is the standard markup language for creating web pages.
      </p>
      <details open={isOn}>
        <summary>Epcot Center</summary>
        <p>
          Epcot is a theme park at Walt Disney World Resort featuring exciting
          attractions, international pavilions, award-winning fireworks and
          seasonal special events.
        </p>
      </details> */}
      {/* <ul>
        <li>
          User <bdi>hrefs</bdi>: 60 points
        </li>
        <li>
          User <bdi>jdoe</bdi>: 80 points
        </li>
        <li>
          User <bdi>إيان</bdi>: 90 points
        </li>
      </ul> */}
      {/* <button onClick={() => setIsDialogOn((prev) => !prev)}>button</button>
      <dialog open={isDialogOn} style={{ border: "1px solid red" }}>
        a
      </dialog> */}
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
