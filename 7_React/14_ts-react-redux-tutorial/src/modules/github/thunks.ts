//github/thunks.ts
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { getUserProfile } from "../../api/github";
import createAsyncThunk from "../../lib/createAsyncThunk";
import { getUserProfileAsync } from "./actions";
import { GithubAction } from "./types";

export function getUserProfileThunk(
  username: string
): ThunkAction<void, RootState, null, GithubAction> {
  //리턴타입, Root상태, ExtraArgument타입, action의 타입 순서대로 넣음
  return async (dispatch) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e: any) {
      //??

      dispatch(failure(e));
    }
  };
}

// export const getUserProfileThunk = createAsyncThunk(
//   getUserProfileAsync,
//   getUserProfile
// );
