import React, { useReducer } from "react";

export default function Reducer({ userName }) {
  const initialState = { userName };

  // state에 의존적인 값을 사용하는 경우에 적합하기 때문에 좋은 예시 아님
  function reducer(state, action) {
    switch (action.type) {
      case "female":
        return { userName: `Ms. ${userName}` };
      case "male":
        return { userName: `Mr. ${userName}` };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <span>{`hello, ${state.userName}`}</span>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "female" });
        }}
      >
        female
      </button>
      <button
        onClick={() => {
          dispatch({ type: "male" });
        }}
      >
        male
      </button>
    </div>
  );

  // const initialState = { count: 0 };

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case "reset":
  //       return initialState;
  //     case "decrement":
  //       return { count: state.count - 1 };
  //     case "increment":
  //       return { count: state.count + 1 };
  //     default:
  //       throw new Error();
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, initialState);

  // return (
  //   <div>
  //     <span>count: {state.count}</span>
  //     <button onClick={() => dispatch({ type: "reset" })}>reset</button>
  //     <button onClick={() => dispatch({ type: "decrement" })}>-</button>
  //     <button onClick={() => dispatch({ type: "increment" })}>+</button>
  //   </div>
  // );
}
