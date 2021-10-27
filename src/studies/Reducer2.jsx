import React, { useReducer } from "react";

export default function Reducer2({ birthYear }) {
  const initialState = {
    birthYear,
    age: "need calculation",
    isAdult: "need calculation",
  };
  const yearNow = new Date().getFullYear();

  function reducer(state, action) {
    switch (action.type) {
      case "age":
        return { ...initialState, age: yearNow - state.birthYear };
      case "isAdult":
        return { ...initialState, isAdult: yearNow - state.birthYear > 18 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>{`age: ${state.age} / is adult: ${state.isAdult}`}</div>
      <button
        onClick={() => {
          dispatch({ type: "age" });
        }}
      >
        age
      </button>
      <button
        onClick={() => {
          dispatch({ type: "isAdult" });
        }}
      >
        is adult
      </button>
    </>
  );
}
