import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";

// export default function Reducer({ userName }) {
//   const initialState = { userName };

//   // state에 의존적인 값을 사용하는 경우에 적합하기 때문에 좋은 예시 아님
//   function reducer(state, action) {
//     switch (action.type) {
//       case "female":
//         return { userName: `Ms. ${userName}` };
//       case "male":
//         return { userName: `Mr. ${userName}` };
//       default:
//         throw new Error();
//     }
//   }

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <span>{`hello, ${state.userName}`}</span>
//       <br />
//       <button
//         onClick={() => {
//           dispatch({ type: "female" });
//         }}
//       >
//         female
//       </button>
//       <button
//         onClick={() => {
//           dispatch({ type: "male" });
//         }}
//       >
//         male
//       </button>
//     </div>
//   );

// }

export default function Reducer() {
  const initialState = { count: 0 };
  // state 값이 하나 뿐이고 단순할 때는 initialState를 별도로 지정하지 않고 useReducer에서 바로 넣어줘도 됨

  function reducer(state, action) {
    switch (action.type) {
      case "reset":
        return initialState;
      case "decrement":
        return { count: state.count - 1 };
      case "increment":
        return { count: state.count + 1 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, 0);
  // const [state, dispatch] = useReducer(reducer, initialState);
  // useReducer를 분리해서 다른 컴포넌트에서 값을 사용해도 구독이 되어있는 구조가 아니기 때문에 실시간 업데이트 안 됨

  return (
    <div>
      <span>count: {state.count}</span>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}
