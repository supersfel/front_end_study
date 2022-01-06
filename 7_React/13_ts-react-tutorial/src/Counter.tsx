import React, { useReducer } from "react";

type Action = { type: "INCREASE" } | { type: "DECRESE" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECRESE":
      return state - 1;
    default:
      throw new Error("에러 발생!!!");
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECRESE" });

  return (
    <>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={onIncrease}>증가</button>
      <button onClick={onDecrease}>감소</button>
    </>
  );
}

export default Counter;
