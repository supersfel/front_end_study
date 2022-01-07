//counter.ts
import { deprecated, ActionType, createReducer } from "typesafe-actions";
const { createStandardAction } = deprecated;
// /*액션 */
// const INCREASE = "counter/INCREASE"  as const
// const DECREASE = "counter/DECREASE"  as const
// const INCREASE_BY = "counter/INCREASE_BY"  as const
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_BY = "counter/INCREASE_BY";

/* 액션 생성함수 */
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// export const increaseBy = (diff: number) => ({
//   type: INCREASE_BY,yar
//   payload: diff,
// });
export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();

type CounterState = {
  count: number;
};

const initialState = {
  count: 0,
};

// type CounterAction =  //카운터 액션 타입설정
//   | ReturnType<typeof increase> //CounterAction에 마우스를 가져다대면 타입이 잘 들어가있음을 알 수 있다
//   | ReturnType<typeof decrease> //함수의 결과물의 타입을 가져오게 됨
//   | ReturnType<typeof increaseBy>;
const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

// function counter(
//   state: CounterState = initailState,
//   action: CounterAction
// ): CounterState {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };

//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }

const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state) => ({ count: state.count + 1 }),
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});

export default counter;
