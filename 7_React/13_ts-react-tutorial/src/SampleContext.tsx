//SampleContext.tsx

import React, { createContext, Dispatch, useContext, useReducer } from "react";

type Color = "red" | "orange" | "yellow";

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =  //Action Type 정의
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.color,
      };
    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error("에러 발생!!");
  }
}

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<Dispatch<Action> | null>(null); //리액트안에 Dispatch가 있기에 불러내서 사용

type SampleProviderProps = {
  children: React.ReactNode;
};

export function SampleProvider({ children }: SampleProviderProps) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "정민규",
    color: "red",
    isGood: true,
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error("cannot find SampleProvider");
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error("cannot find SampleProvider");
  return dispatch;
}
