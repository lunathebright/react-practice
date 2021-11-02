import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";

export default function ReducerTest() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div>다른 컴포넌트 {state.count}</div>;
}
