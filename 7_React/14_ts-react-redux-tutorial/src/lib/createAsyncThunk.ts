//lib/createAsyncThunk.ts

import { Dispatch } from "redux";
import { AsyncActionCreatorBuilder } from "typesafe-actions"; //actions.ts에서 createAsyncAction을 실행한 결과

type AnyAsyncActionCreatorBuilder = AsyncActionCreatorBuilder<any, any, any>;
type AnyPromiseCreator = (...params: any[]) => Promise<any>;

export default function createAsyncThunk<
  A extends AnyAsyncActionCreatorBuilder,
  F extends AnyPromiseCreator
>(asyncActionCreator: A, promiseCreator: F) {
  type Params = Parameters<F>;
  return function thunk(...params: Params) {
    return async (dispatch: Dispatch) => {
      const { request, success, failure } = asyncActionCreator;
      dispatch(request(undefined)); // 파라미터를 비우면 타입 에러가 나기 때문에 undefined 전달
      try {
        const result = await promiseCreator(...params);
        dispatch(success(result));
      } catch (e) {
        dispatch(failure(e));
      }
    };
  };
}
